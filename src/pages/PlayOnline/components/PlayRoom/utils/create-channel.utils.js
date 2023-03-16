import { supabase } from "../../../../../services/supabase";
import { store } from '../../../../../store'
import { addPlayerAction } from "../../../../../store/online/online.actions";

export function createChannel(name) {
    const channel = supabase.channel(name);
    const dispatch = store.dispatch;

    channel.on('presence', { event: 'join' }, ({ key, newPresences }) => {

        dispatch(addPlayerAction(newPresences));

        console.log(store.getState().online)

    }).subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
            await channel.track({
                user: localStorage.getItem('username'),
                questions: [],
                online_at: new Date().toISOString(),
            })
        }

    })

}