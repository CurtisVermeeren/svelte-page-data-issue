export const load = async ({ locals }) => {
    console.log('Layout server load')
    return {
        user: locals.user
    }
}