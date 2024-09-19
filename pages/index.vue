<script setup lang="ts">
import { useAuthActions } from '~/composables/useAuthActions'

const { loggedIn, handleSignIn, handleSignOut, data } = useAuthActions()

// console.log(data);
console.log(loggedIn);


//use darkLyout 
definePageMeta({
    layout: 'darklayout'
})
</script>


<template>
    <div>
        <button v-if="!loggedIn" @click="handleSignIn">Log In</button>
        <button @click="handleSignOut">Log Out</button>
    </div>
    <pre>
        {{ data }}
    </pre>
</template>