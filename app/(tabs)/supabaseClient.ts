
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rgjhnwynqgwcoajfsaks.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnamhud3lucWd3Y29hamZzYWtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxOTk5ODQsImV4cCI6MjA1NDc3NTk4NH0.DS6KMiHTmCFnjrv1Pm5_6yCdptAWXKeGJ6eqzC856vQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
