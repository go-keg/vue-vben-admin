import { requestClient } from '#/api/request';
import { gql } from '@urql/vue';

const USER_INFO_FRAGMENT = gql`
  fragment UserInfoFragment on User {
    id
    email
    nickname
    avatar
    roles {
      id
      name
    }
    permissions {
      key
      name
      attrs
    }
  }
`;

const TOKEN_FRAGMENT = gql`
  fragment TokenFragment on LoginReply {
    token
    exp
    user {
      ...UserInfoFragment
    }
  }
  ${USER_INFO_FRAGMENT}
`;

/**
 * 登录
 */
export async function loginApi(email: string, password: string) {
  return requestClient.query(
    gql`
    query login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        ...TokenFragment
      }
      ${TOKEN_FRAGMENT}
    }
  `,
    { email, password },
  );
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return requestClient.query(
    gql`
  query refreshToken {
    refresh {
      ...TokenFragment
    }
    ${TOKEN_FRAGMENT}
  }`,
    {},
  );
}

/**
 * 获取个人信息
 */
export async function profileApi() {
  return requestClient.query(
    gql`
    query profile {
      profile {
        ...UserInfoFragment
      }
      ${USER_INFO_FRAGMENT}
    }`,
    {},
  );
}
