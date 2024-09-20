<script lang="ts" setup>

const { data, signOut } = useAuth()

definePageMeta({
  middleware: 'auth',
  navigateUnauthenitcatedTo: '/login',
  layout: 'darklayout',
})


console.log(data);


</script>

<template>
  <div class="container">
    <div class="box">
      <h1>Il Tuo Account</h1>
      <h3 v-if="data?.user?.name">Nome: {{ data?.user?.name }}</h3>
      <h3 v-if="data?.user?.email">Email: {{ data?.user?.email }}</h3>
      <button class="login-btn" @click="signOut()">Log Out</button>
    </div>
  </div>
</template>

<style>
* {
  color: #000;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b4b4b4;
}

.box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: start;
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #3a3a3a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
</style>