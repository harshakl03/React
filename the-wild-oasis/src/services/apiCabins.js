import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be found");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImageUrl = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`;

  //https://fdqzuejeorjoakjgmcbj.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-01-26T12%3A08%3A34.440Z
  const imageUrl = hasImageUrl
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName.replace(
        "/",
        ""
      )}`;

  let query = supabase.from("cabins");

  if (!id) query = query.insert([{ ...newCabin, image: imageUrl }]).select();

  if (id) query = query.update({ ...newCabin, image: imageUrl }).eq("id", id);

  const { data, error } = await query.select();
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  if (hasImageUrl) return data;

  const { error: storgaeError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storgaeError) {
    const { error } = await supabase.from("cabins").delete().eq("id", data.id);
    console.log(error);
    throw new Error("Cabin image could not be uploaded and cabin is deleted");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return;
}
