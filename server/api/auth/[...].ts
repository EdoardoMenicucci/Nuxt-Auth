import {NuxtAuthHandler} from '#auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
    pages : {
        // behavior login page
        signIn: '/login'
    },
    providers: [
        GitHubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        CredentialProvider.default({
            name: 'Credentials',
            authorize(credentials : any) {
                const user = { email: 'admin@me.it', password: 'admin123' }
                if(credentials?.email == user.email && credentials?.password == user.password) {           
                    return user 
                } 
            }          
        })
    ]
})