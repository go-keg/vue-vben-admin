<script lang="ts" setup>
import { computed, ref, watch, onMounted } from 'vue';
import { Page } from '@vben/common-ui';
import { gql, useQuery } from '@urql/vue';
import type { UserWhereInput } from '#/gql/graphql';

const where = ref<UserWhereInput>({});

const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: true, // 显示 pageSize 切换器
  pageSizeOptions: ['5', '10', '20', '50', '100'], // 可选的 pageSize
});

const variables = computed(() => ({
  where: where.value,
  offset: (pagination.value.current - 1) * pagination.value.pageSize,
  limit: pagination.value.pageSize,
}));

const { data, fetching, executeQuery, error } = useQuery({
  query: gql`
    query users($offset: Int!, $limit: Int!, $where: UserWhereInput!) {
      userList(offset: $offset, limit: $limit, where: $where) {
        totalCount
        nodes {
          id
          nickname
          email
          avatar
          isAdmin
          roleCount
          roles {
            id
            name
          }
          status
        }
      }
    }
  `,
  variables,
  pause: true,
});

watch(data, (newValue, oldValue) => {
  if (newValue?.userList?.totalCount !== oldValue?.userList?.totalCount) {
    pagination.value.total = newValue?.userList?.totalCount || 0;
  }
});

const handleSubmit = async () => {
  pagination.value.current = 1;
  await executeQuery({ requestPolicy: 'network-only' });
};

const handleTableChange = (pag: any) => {
  pagination.value.current = pag.current ?? 1;
  pagination.value.pageSize = pag.pageSize ?? 10;
  executeQuery({ requestPolicy: 'network-only' });
};

onMounted(() => {
  executeQuery({ requestPolicy: 'network-only' });
});
</script>

<template>
  <Page
    description="支持多语言，主题功能集成切换等"
    title="Ant Design Vue组件使用演示"
  >
    <div style="margin-bottom: 1rem">
      <a-input-search
        style="width: 200px"
        v-model:value="where.nicknameContains"
        placeholder="Search..."
        @search="handleSubmit"
      />
    </div>
    <div v-if="fetching">loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <a-table
      :row-key="(record: any) => record.id"
      :data-source="data?.userList?.nodes"
      :loading="fetching"
      :pagination="pagination"
      @change="handleTableChange"
    >
      <a-table-column title="ID" dataIndex="id" />
      <a-table-column title="Name" dataIndex="nickname" />
      <a-table-column title="Email" dataIndex="email" />
    </a-table>
  </Page>
</template>
