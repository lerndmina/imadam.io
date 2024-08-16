import { R } from "../../../../dist/server/chunks/astro_eDWLrh97.mjs";

export async function GET({ params, request, redirect }) {
  const steamlink = params.steamlink;
  console.debug(steamlink);
  if (!steamlink.startsWith("steam://")) return new Response("Invalid steam link", { status: 400 });
  return redirect(steamlink);
}
