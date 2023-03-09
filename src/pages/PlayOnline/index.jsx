import { supabase } from "../../services/supabase";

export function PlayOnline() {
  const channel = supabase.channel("test");

  channel
    .on("presence", { event: "join" }, ({ key, newPresences }) => {
      console.log(key, newPresences);
    })
    .subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        const presenceTrackStatus = await channel.track({
          user: localStorage.getItem("username"),
          online_at: new Date().toISOString(),
        });
      }
    });

  return null;
}
