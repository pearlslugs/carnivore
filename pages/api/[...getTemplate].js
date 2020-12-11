import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = "https://rpvqmfdjbgosimsntlqf.supabase.co";

const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supaBaseUrl, supabaseKey);

export default async (req, res) => {
  const template = req.body.params;
  const { data, error } = await supabase.from("template-test").select(`*`);
  const match = data.find((set) => set.Template_Name === template);
  res.status(200).json(match.template);
};
