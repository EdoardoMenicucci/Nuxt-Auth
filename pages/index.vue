<script setup lang="ts">
import { useAuthActions } from '~/composables/useAuthActions'

const { loggedIn, handleSignIn, handleSignOut, data } = useAuthActions()

// console.log(data);
console.log(loggedIn);


//use darkLyout 
definePageMeta({
    layout: 'darklayout',
})
</script>


<template>
    <div class="container">
        <div>LOGO</div>
        <div>
            <button v-if="loggedIn" @click="handleSignOut">Log Out</button>
            <a v-else href="/login">Accedi</a>
        </div>
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