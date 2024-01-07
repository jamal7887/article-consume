import { type Session } from "@supabase/supabase-js"
import { type SupabaseClient } from "@supabase/supabase-js"
import { error } from "@sveltejs/kit"
type Data = {
    title: string,
    content: string
    image: any
}


export default async (session: Session | null, supabase: SupabaseClient, userData: Data) => {

    try {
        const { data } = await supabase.from('authors').select().eq(
            'user_id', session?.user.id
        )

        const { title, content, image } = userData
        const form = new FormData()
        form.append('image', image)

        if (!data) throw 'No user found'

        const { data: imageData } = await supabase.storage.from('images').upload(image.name, form)

        if (!imageData) throw "Cannot make image"
        const { error } = await supabase.from('articles').insert({
            title: title,
            content: content,
            author_id: data[0].id,
            image: `https://kjniglvbduujeasyspkv.supabase.co/storage/v1/object/public/images/${imageData.path}`
        })
        console.log(error)
    }
    catch (e) {
        console.error(error)
    }
}