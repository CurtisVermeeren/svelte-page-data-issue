import { redirect } from "@sveltejs/kit"

// Redirect to root. This page is only needed for the logout action
export const load = async () => {
    redirect(302, '/')
}

export const actions = {
    logout: async ({ cookies, locals }) => {
        // eat the cookie
        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })

        // Set the user to null
        locals.user = null

        // Redirect to login
        redirect(302, '/auth/login');
    },
}