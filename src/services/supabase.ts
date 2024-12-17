import { createClient } from "@supabase/supabase-js";

export const supabaseUrl: string = import.meta.env.SUPABASE_URL;
const supabaseKey: string = import.meta.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
