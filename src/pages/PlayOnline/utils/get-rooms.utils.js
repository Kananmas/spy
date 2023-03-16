import { supabase } from "../../../services/supabase"


export async function getRooms(setter) {
    try {
        const { data } = await supabase.from('rooms').select();

        if (data.length) {
            setter(data)
        }
    } catch (error) {
        console.log(error)
    }
}