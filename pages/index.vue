<script setup lang="ts">
import Header from '~/components/Header.vue'
import { onMounted } from 'vue';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";

onMounted(() => {
    Prism.highlightAll();
});
</script>

<template>
    <Header />
    <div class="min-h-screen flex flex-col">

        <div class="prose mx-auto p-4">
            <h1>Guida all'installazione di sidebase nuxt-auth</h1>
            <p class="pb-5">Questa guida ti mostrerà come installare e configurare il modulo
                <code>sidebase/nuxt-auth</code> nel tuo
                progetto Nuxt.js.
            </p>
            <p class="underline pb-5">
                <a href="https://github.com/sidebase/nuxt-auth">Documentazione ufficiale</a>
            </p>

            <h2>Prerequisiti</h2>
            <ul class="pb-5">
                <li>-Un progetto Nuxt.js esistente</li>
                <li>-Node.js e npm installati</li>
            </ul>

            <h2>Passo 1: Installazione dei pacchetti</h2>
            <pre>
            <code class="language-bash">
                npx nuxi@latest module add sidebase-auth
            </code>
        </pre>

            <h2>Passo 2: Configurazione di Nuxt.js</h2>
            <p>Aggiungi il modulo <code>sidebase/nuxt-auth</code> al tuo file <code>nuxt.config.ts</code>:</p>
            <pre>
            <code class="language-typescript">
                export default defineNuxtConfig({
                    modules: ['@sidebase/nuxt-auth'],
                    auth: {
                        origin: 'http://localhost:3000', // Cambia l'URL se necessario
                        //Altri parametri
                    }
                })
            </code>
        </pre>

            <h2>Passo 3: Creazione della rotta server/api/auth/[...].ts</h2>
            <p>Crea un file rotta server/api/auth/[...].ts: Import auth handler e GitHubProvider</p>
            <p>Aggiungi il codice seguente:</p>
            <pre>
            <code class="language-javascript">
                import { NuxtAuthHandler } from '#auth'
                import GitHubProvider from 'next-auth/providers/github'

                export default NuxtAuthHandler({
                    pages: {
                        // pagina login personalizzata
                        signIn: '/login'
                    },
                    providers: [
                    GitHubProvider.default({
                        clientId: process.env.GITHUB_CLIENT_ID,
                        clientSecret: process.env.GITHUB_CLIENT_SECRET
                    }),
                    ],
                })
            </code>
        </pre>

            <h2>Passo 4: Inserisci le variabili d'ambiente nel file .env</h2>
            <code>.env</code>:
            <pre>
            <code class="language-bash">
                GITHUB_CLIENT_ID=
                GITHUB_CLIENT_SECRET=
                NEXTAUTH_SECRET=
                NEXTAUTH_URL=
            </code>
        </pre>
            <h2>Passo 5: Utilizzare la composable useAuth fornita da sidebase/nuxt-auth</h2>
            <p>Ora puoi utilizzare la composable useAuth fornita da sidebase/nuxt-auth per autenticare i tuoi utenti. Ad
                esempio, nel tuo file
                <code>index.vue</code>:
            </p>
            <pre>
            <code class="language-javascript">
                const { signIn, signOut, status, getCsrfToken, getSession } = useAuth()
            </code>
            <code class="language-javascript">
                //sign in 
                <button click="signIn('GitHub')">signIn('GitHub')</button> 
                //sign out
                <button click="signOut()">signOut()</button>
                //status
                <p>Status  status </p>
                //getCsrfToken
                <p>Csrf Token  getCsrfToken() </p>
                //getSession
                <p>Session  getSession() </p>
            </code>
        </pre>

            <p class="pb-5">Questo è tutto! Ora hai configurato con successo <code>sidebase/nuxt-auth</code>
                nel tuo progetto Nuxt.js.</p>
        </div>
    </div>
</template>

<style scoped></style>