<script lang="ts" setup>
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { gql, useQuery } from '@urql/vue';

const title = ref('');
// 执行查询并返回响应
const { data, fetching, executeQuery, error } = useQuery({
  query: gql`
    query users($title: String!) {
      users(where: { nicknameContains: $title }) {
        nodes {
          id
          nickname
        }
      }
    }
  `,
  variables: {
    title,
  },
});

const handleSubmit = async () => {
  fetching.value = true;
  await executeQuery({ requestPolicy: 'network-only' });
  fetching.value = false;
};

const handleInputChange = (e: any) => {
  title.value = e.target.value;
};
</script>

<template>
  <div>
    <Page
      description="支持多语言，主题功能集成切换等 - test111"
      title="Ant Design Vue组件使用演示"
    />
    <p v-if="fetching">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <ul v-if="data">
      <li v-for="user in data.users.nodes" :key="user.id">
        {{ user.nickname }}
      </li>
    </ul>
    <input
      :onChange="handleInputChange"
      :value="title"
      placeholder="Search..."
      type="text"
    />
    <button @click="handleSubmit">update</button>
  </div>
</template>
