import { supabase } from "../../../services/supabase";


export async function createChannel(name, setter) {
    try {
        const channel = supabase.channel(name);

        channel.subscribe(async (statusbar) => {
            const presenceTrackStatus = await channel.track({
                user: localStorage.getItem('username'),
                questions: [],
            })

            if (presenceTrackStatus == 'ok') {
                setter(channel);
            }
        })


    } catch (error) {
        console.log(error);
    }
}