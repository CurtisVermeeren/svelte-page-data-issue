import { findTestUser } from "$lib/server/database.js"
import { fail, redirect } from "@sveltejs/kit"

export const load = async ({ locals }) => {
    // Redirect to root if a user is logged in
    if (locals.user) {
        throw redirect(302, '/')
    }
}

export const actions = {
    login: async ({ cookies }) => {

        // Get form data and validate it 
        const username = 'John Doe'
        if (typeof username !== 'string' || !username) {
            return fail(400, { invalid: true })
        }

        // Attempt to find the user in the database
        const user = findTestUser()

        if (!user) {
            return fail(400, { credentials: true })
        }

        // Check user credentials and check password
        const userPassword = true

        // If password is incorrect 
        if (!userPassword) {
            return fail(400, { credentials: true })
        }

        // Generate user auth token to update DB
        const userAuthToken = crypto.randomUUID()
        // Update DB with user auth token here.

        // Set the session cookie
        cookies.set('session', userAuthToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30
        })

        /*
            Try setting the user in locals in login.
            This doesn't fix the issue with the page data when leaving the site
        */

        // console.log('Setting user in locals')
        // locals.user = user

        // Redirect to main page on login
        redirect(303, '/')
    }
}