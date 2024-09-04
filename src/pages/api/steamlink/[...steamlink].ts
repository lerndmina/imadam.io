export async function GET({ params, request, redirect }) {
  const steamlink = params.steamlink;
  console.debug(steamlink);
  return redirect(`steam://${steamlink}`);
}
