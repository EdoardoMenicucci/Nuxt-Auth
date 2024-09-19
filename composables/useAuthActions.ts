import { ref, computed } from 'vue'

export function useAuthActions() {
    const { status, data, signIn, signOut } = useAuth()
    
    const loggedIn = computed(() => status.value === 'authenticated')

    async function handleSignIn() {
        await signIn('github')
    }

    async function handleSignOut() {
        await signOut()
    }

    return {
        loggedIn,
        handleSignIn,
        handleSignOut,
        data
    }
}