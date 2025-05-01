import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fdqzuejeorjoakjgmcbj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcXp1ZWplb3Jqb2FramdtY2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMjUwMTgsImV4cCI6MjAyMTYwMTAxOH0.2f_4HfruKWlp6JQ8AwPHsvMukurTFFgbME9QNeUN6c8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
