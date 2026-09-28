import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mvfzsjisauzliqumfybt.supabase.co'
const supabaseKey = 'sb_publishable_AiF9d9rvSMUFyBTnTTYbkw_fFk8yeCL'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
)
