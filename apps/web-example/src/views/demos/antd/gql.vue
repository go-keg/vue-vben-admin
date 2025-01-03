<script lang="ts" setup>
import { ref } from 'vue';
import { Page } from '@vben/common-ui';
import { gql, useQuery } from '@urql/vue';
import type { UserWhereInput } from '#/gql/graphql';
import { InputSearch, Table, Select } from 'ant-design-vue';

const where = ref<UserWhereInput>({});
const first = ref(10);

const { data, fetching, executeQuery, error } = useQuery({
  query: gql`
    query users($first: Int!, $where: UserWhereInput!) {
      users(first: $first, where: $where) {
        nodes {
          id
          nickname
          email
        }
      }
    }
  `,
  variables: { where, first },
  pause: true,
});

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: '20%',
  },
  {
    title: 'Name',
    dataIndex: 'nickname',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const handleSubmit = async () => {
  await executeQuery({ requestPolicy: 'network-only' });
};
</script>

<template>
  <div>
    <Page
      description="支持多语言，主题功能集成切换等"
      title="Ant Design Vue组件使用演示"
    />
    <p v-if="error">Error: {{ error.message }}</p>
    <InputSearch
      style="width: 200px"
      v-model:value="where.nicknameContains"
      placeholder="Search..."
      @search="handleSubmit"
    />
    <Table
      :columns="columns"
      :row-key="(record) => record.id"
      :data-source="data?.users?.nodes"
      :loading="fetching"
      @change="handleSubmit"
    >
    </Table>
    <Select
      v-model:value="first"
      :options="[
        { value: 10, label: '10 / page' },
        { value: 20, label: '20 / page' },
        { value: 30, label: '30 / page' },
        { value: 50, label: '50 / page' },
      ]"
      placeholder="Please select"
      style="width: 200px"
    ></Select>
  </div>
</template>
