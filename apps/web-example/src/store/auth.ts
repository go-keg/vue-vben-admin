import type { Recordable, UserInfo } from '@vben/types';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { DEFAULT_HOME_PATH, LOGIN_PATH } from '@vben/constants';
import { resetAllStores, useAccessStore, useUserStore } from '@vben/stores';

import { notification } from 'ant-design-vue';
import { defineStore } from 'pinia';

import { loginApi, profileApi } from '#/api';
import { $t } from '#/locales';
import type { Role } from '#/gql/graphql';

export const useAuthStore = defineStore('auth', () => {
  const accessStore = useAccessStore();
  const userStore = useUserStore();
  const router = useRouter();

  const loginLoading = ref(false);

  /**
   * 异步处理登录操作
   * Asynchronously handle the login process
   * @param params 登录表单数据
   * @param onSuccess
   */
  async function authLogin(
    params: Recordable<any>,
    onSuccess?: () => Promise<void> | void,
  ) {
    // 异步处理用户登录操作并获取 accessToken
    let userInfo: null | UserInfo = null;
    try {
      loginLoading.value = true;
      const resp = await loginApi(params.username, params.password);
      //如果成功获取到 accessToken
      if (resp.data?.login?.token) {
        accessStore.setAccessToken(resp.data.login.token);
        localStorage.setItem('authToken', resp.data.login.token);
        const u = resp.data?.login?.user;
        userStore.setUserInfo({
          userId: u?.id,
          avatar: u?.avatar,
          email: u?.email,
          realName: u?.nickname,
          roles: u?.roles?.map((r: Role) => r.name),
        });

        if (accessStore.loginExpired) {
          accessStore.setLoginExpired(false);
        } else {
          onSuccess
            ? await onSuccess?.()
            : await router.push(DEFAULT_HOME_PATH);
        }

        notification.success({
          description: `${$t('authentication.loginSuccessDesc')}:${u?.nickname}`,
          duration: 3,
          message: $t('authentication.loginSuccess'),
        });
      }
    } finally {
      loginLoading.value = false;
    }

    return {
      userInfo,
    };
  }

  async function logout(redirect: boolean = true) {
    resetAllStores();
    accessStore.setLoginExpired(false);

    // 回登录页带上当前路由地址
    await router.replace({
      path: LOGIN_PATH,
      query: redirect
        ? {
            redirect: encodeURIComponent(router.currentRoute.value.fullPath),
          }
        : {},
    });
  }

  async function fetchUserInfo() {
    let userInfo: null | UserInfo = null;
    const resp = await profileApi();
    const u = resp.data?.profile;
    userStore.setUserInfo({
      userId: u?.id,
      avatar: u?.avatar,
      email: u?.email,
      realName: u?.nickname,
      roles: u?.roles?.map((r: Role) => r.name),
    });
    return userInfo;
  }

  function $reset() {
    loginLoading.value = false;
  }

  return {
    $reset,
    authLogin,
    fetchUserInfo,
    loginLoading,
    logout,
  };
});
