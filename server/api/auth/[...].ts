import {NuxtAuthHandler} from '#auth'
import GitHubProvider from 'next-auth/providers/github'

export default NuxtAuthHandler({
    providers: [
        GitHubProvider.default({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ]
})