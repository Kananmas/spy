import { supabase } from "../../../../../services/supabase";


export async function trackUsers(channel) {
    try {
        channel.on('broadcast', { event: 'join' }, ({ key, newPresences }) => {
            console.log(key, newPresences)
        })
    } catch (error) {
        console.log(error);
    }
}