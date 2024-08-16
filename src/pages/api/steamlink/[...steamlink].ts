import { R } from "../../../../dist/server/chunks/astro_eDWLrh97.mjs";

export async function GET({ params, request, redirect }) {
  const steamlink = params.steamlink;
  console.debug(steamlink);
  return redirect(`steam://${steamlink}`);
}
