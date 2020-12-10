import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = "https://rpvqmfdjbgosimsntlqf.supabase.co";

const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supaBaseUrl, supabaseKey);

export default async (req, res) => {
  const id = req.query.getTemplate[req.query.getTemplate.length - 1];
  const { data, error } = await supabase.from("template-test").select(`*`);
  const match = data.find((set) => set.id === Number(id));
  res.status(200).json(match.template);
};
