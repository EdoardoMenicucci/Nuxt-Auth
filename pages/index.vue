<script setup lang="ts">
import { useAuthActions } from '~/composables/useAuthActions'

const { signIn, signOut, status, getCsrfToken, getSession } = useAuth()

const { loggedIn } = useAuthActions()


//use darkLyout 
definePageMeta({
    layout: 'darklayout',
})

</script>


<template>
    <div class="container">
        <div class=" text-emerald-500">LOGO</div>
        <div>
            <button v-if="loggedIn" @click="handleSignOut" class=" bg-emerald-500">Log Out</button>
            <nuxt-link v-else class=" text-emerald-500" to="/login">Accedi</nuxt-link>
        </div>
    </div>
    <div>

    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 80%;
    margin: 0 auto;
}

a {
    text-decoration: none;
    color: white;
}
</style>