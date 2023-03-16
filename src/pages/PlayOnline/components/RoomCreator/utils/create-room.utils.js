import { supabase } from "../../../../../services/supabase"

export async function createRoom(data, setter) {
    try {
        const { error } = await supabase.from('rooms').insert(data);

        if (!error) {
            setter(true);
        }

    } catch (error) {
        console.log(error);
    }
}