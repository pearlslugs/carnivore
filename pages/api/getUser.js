import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = 'https://rpvqmfdjbgosimsntlqf.supabase.co';

const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(
  supaBaseUrl,
  supabaseKey
);

export default async (req, res) => {
  const id = req.params.id
  const { data, error } = await supabase
    .from("test-email")
    .select(`
    *
    `
      
    )
    const match = data.find(set => set.id === id);
    
  res.status(200).json(match.template);
};