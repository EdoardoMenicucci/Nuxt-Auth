<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <!-- classic login -->
      <form @submit.prevent="signIn('credentials', { email, password })">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" placeholder="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" placeholder="password" required />
        </div>
        <button type="submit" class="login-btn">Accedi</button>
      </form>
      <!-- social login -->
      <div class="social-login">
        <button @click="signIn('github')" class="login-btn github">
          Collegati con GitHub
        </button>
        <button @click="" class="login-btn discord">
          Collegati con Discord
        </button>
        <button v-if="loggedIn" @click="signOut()" class="login-btn log-out">
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { signIn, signOut } = useAuth()
const { loggedIn } = useAuthActions()

definePageMeta({
  layout: 'darklayout',
  auth: {
    // unauthenticatedOnly: true,
    navigateAutenticatedTo: '/'
  }
})

const email = ref('')
const password = ref('')

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b4b4b4;
}

.login-box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

* {
  color: black;
}

h1 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.login-btn:hover {
  background-color: #005bb5;
}

.github {
  background-color: #333;
}

.github:hover {
  background-color: #000;
}

.discord {
  background-color: #7289da;
}

.discord:hover {
  background-color: #5b6eae;
}

.social-login {
  margin-top: 1.5rem;
}

.log-out {
  background-color: #5a5a5a;
}
</style>
