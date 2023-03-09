import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://drzonejazrbmrdaqpezu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyem9uZWphenJibXJkYXFwZXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwMTQwOTIsImV4cCI6MTk5MTU5MDA5Mn0.ZAsTncMO3ReUYTbvveHghgG0ebXqeBAM4iSkHVnMVUU"


export const supabase = createClient(supabaseUrl, supabaseKey, {
    realtime: {
        params: {
            eventsPerSecond: 10,
        },
    },
})