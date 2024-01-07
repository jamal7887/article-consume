import { supabase } from "$lib/supabaseClient"
export const POST = async ({ request, url }: any) => {

    const body = await request.formData()



    return new Response(JSON.stringify({ status: 200 }))

}