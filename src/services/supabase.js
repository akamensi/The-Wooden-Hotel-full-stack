import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gybzimwpeptmvhpwezrd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5YnppbXdwZXB0bXZocHdlenJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2Mzk2OTgsImV4cCI6MjAzODIxNTY5OH0.V8jMTT0nZxyLAsW1HleVbRu1do48A87dkSxQgmaunkk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
