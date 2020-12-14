import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = "https://rpvqmfdjbgosimsntlqf.supabase.co";

const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supaBaseUrl, supabaseKey);

export default async (req, res) => {
  const template = req.body.params;
  const { data, error } = await supabase.from("template-test").select(`*`);
  const match = data.find((set) => set.Template_Name === template.template);
  console.log(match.about_us)
  if(template.page === "template"){
    res.status(200).json(match.template);
  }
  else if(template.page === "reviews"){
    console.log(match.reviews)
    res.status(200).json(match.reviews);
  }
  else if(template.page === "how_it_works"){
    console.log(match.reviews)
    res.status(200).json(match.how_it_works);
  }
  else if(template.page === "about_us"){
    console.log(match.reviews)
    res.status(200).json(match.about_us);
  }
  else if(template.page === "about_us"){
    console.log(match.reviews)
    res.status(200).json(match.about_us);
  }
  else if(template.page === "sell_your_house"){
    console.log(match.reviews)
    res.status(200).json(match.sell_your_house);
  }
};
