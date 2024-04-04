import type { APIContext } from "astro";
import pocketbase from "pocketbase";

export async function POST({ request }: APIContext) {
  try {
    const pb = new pocketbase("https://pb.imadam.io");

    const data = await request.formData();
    console.log(data);
    const email = (data.get("email") || data.get("username"))?.toString();
    const password = data.get("password")?.toString();

    if (!email || !password) return new Response("Missing email or password", { status: 400 });

    const authData = await pb.admins.authWithPassword(email, password);

    return new Response(JSON.stringify(authData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    if (error.status === 400) {
      return new Response("Invalid email or password", { status: 400 });
    }
    return new Response(`An error occured ${error.toString()}`, { status: 500 });
  }
}
