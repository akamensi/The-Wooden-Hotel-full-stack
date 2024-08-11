import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}

/* export async function postCabin(newCabin) {
  //1.Create the image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  //2. create the image path for supaBase
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //3. Create the cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
  }
  //4.upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //5.Delete the cabin if there was an error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not uploaded and the cabin was not created"
    );
  }
  return data;
} */

export async function postEditCabin(newCabin, id) {
  //to test in the edit if we change the image or not
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  //1.Create the image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  //2. create the image path for supaBase
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //3. Create/Edit the cabin
  let query = supabase.from("cabins");

  //A) create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B) edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
  }
  //4.upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //5.Delete the cabin if there was an error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not uploaded and the cabin was not created"
    );
  }
  return data;
}
