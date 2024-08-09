import supabase from "./Superbase";



export const createLink = async (redirectUrl: string, short: string)=>{
    const { data, error } = await supabase
  .from('url')
  .insert([
    { redirectUrl, short },
  ])
  .select()

  if(error) return error

  return data
}


export const getLink = async (short: string)=>{
    let { data, error } = await supabase
  .from('url')
  .select("*")
  .eq('short', short)

  if(error) return error

  return data
}