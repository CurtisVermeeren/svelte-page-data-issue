import type { Handle } from "@sveltejs/kit"
import { findTestUser } from "$lib/server/database"

export const handle: Handle = async ({ event, resolve }) => {

    // Get the session cookie
    const session = event.cookies.get('session')

    /*
        Setting the cache-control header to no-store prevents the page from being cached.
        This fixes issues with Page.data not persisting when leaving the site. 
    */
    // event.setHeaders({
    //     'Cache-Control': 'no-store',
    // })

    // If there is no current session there is no user
    if (!session) {
        event.locals.user = null
        return await resolve(event)
    }

    // Get the test user and return it through locals
    const user = findTestUser()
    if (user) {
        event.locals.user = user
    }

    return await resolve(event)
}