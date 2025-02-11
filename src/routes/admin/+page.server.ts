import { redirect } from '@sveltejs/kit'

// Redirect to login if user is not logged in
export const load = async ({ locals }) => {
    if (!locals.user) {
        redirect(302, '/auth/login')
    }
}