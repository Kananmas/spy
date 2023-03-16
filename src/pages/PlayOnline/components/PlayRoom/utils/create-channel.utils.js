import { supabase } from "../../../../../services/supabase";


export function createChannel(name) {
    const channel = supabase.channel(name);

    channel.on('broadcast', { event: 'join' }, ({ key, newPresences }) => {
        console.log(key, newPresences)
    }).subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
            const presenceTrackStatus = await channel.track({
                user: 'user-1',
                online_at: new Date().toISOString(),
            })
            console.log(presenceTrackStatus)
        }

    })

}