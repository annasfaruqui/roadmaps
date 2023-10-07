import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pyqooxzlbtavjqhrwffi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cW9veHpsYnRhdmpxaHJ3ZmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0Nzg2NTYsImV4cCI6MjAxMTA1NDY1Nn0.Svw0syqHDEcdoaqtW9C4NuHZI4HJhZ73CHmKluMc3pI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
