<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

const register = async () => {
  try {
    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: { name: name.value, email: email.value, password: password.value }
    })
    alert('Registrazione completata. Ora puoi effettuare il login.')
    router.push('/login')
  } catch (error) {
    alert(error.data.message)
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-black">Registrati</h1>
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <input v-model="name" type="text" placeholder="Nome" required
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <input v-model="email" type="email" placeholder="Email" required
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <input v-model="password" type="password" placeholder="Password" required
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <button type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300">
          Registrati
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
input {
  color: black
}
</style>