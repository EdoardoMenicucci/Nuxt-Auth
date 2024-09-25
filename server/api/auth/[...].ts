import {NuxtAuthHandler} from '#auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();


export default NuxtAuthHandler({
    pages : {
        // behavior login page
        signIn: '/login'
    },
    adapter : PrismaAdapter(prisma),
    session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60, // 30 giorni
      updateAge: 24 * 60 * 60,    // 24 ore
    },
    secret : process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialProvider.default({
            name: 'Credentials',
            async authorize(credentials :any | undefined) {
              // Verifica che le credenziali siano presenti
              if (!credentials?.email || !credentials?.password) {
                throw new Error('Email e password sono obbligatorie')
              }
          
              // Cerca l'utente nel database
              const user = await prisma.user.findUnique({
                where: { email: credentials.email }
              })
          
              if (!user) {
                throw new Error('Email non trovata')
              }
              //Controlla se sia Null 
              if (user.password === null) {
                throw new Error('Password non inserita');
              }
              // Verifica la password
              const isValid = await bcrypt.compare(credentials.password, user.password)
              if (!isValid) {
                throw new Error('Password errata')
              }
          
              // Restituisci l'oggetto utente senza campi sensibili
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image || null
              }
            }      
        })
    ],
    callbacks: {
      async jwt({ token, user }) {
        //Aggiungi le informazioni dell'utente al token
        if (user) {
          token.id = user.id
          token.name = user.name
          token.email = user.email
        }
        return token
      },
      async session({ session, token }) {
        // Aggiungi le informazioni dal token alla sessione
        if (token) {
          session.user.id = token.id
          session.user.name = token.name
          session.user.email = token.email
        }
        return session
      }
    }
})