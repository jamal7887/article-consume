import { type SupabaseClient } from "@supabase/supabase-js"
import { error } from "@sveltejs/kit"

type Data = {
    name: string
    email: string
    password: string
    profilePicture: any
}

export default async (userData: Data, supabase: SupabaseClient) => {

    try {
        const { name, email, password, profilePicture } = userData
        const form = new FormData()

        form.append('image', profilePicture)

        const user = await supabase.auth.signUp({
            email: email,
            password: password
        })

        const { data, error } = await supabase.storage.from('profile_pictures').upload(profilePicture.name, form)

        const { data: d2, error: e2 } = await supabase.from('authors').insert({
            name: name,
            user_id: user.data.user?.id,
            profile_picture: `https://kjniglvbduujeasyspkv.supabase.co/storage/v1/object/public/profile_pictures/${data?.path}`
        })
    }
    catch (e) {
        console.error(error)
    }

}