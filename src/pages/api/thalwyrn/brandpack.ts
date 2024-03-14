import type { APIContext } from "astro";

interface Asset {
  browser_download_url: string;
}

interface Release {
  assets: Asset[];
}

export async function GET({ redirect }: APIContext) {
  try {
    const response = await fetch("https://api.github.com/repos/thalwyrn/BrandPack/releases/latest");
    const data: Release = await response.json();

    if (data.assets.length > 0) {
      const downloadUrl = data.assets[0].browser_download_url;
      return redirect(downloadUrl, 302);
    } else {
      return new Response("No assets found", { status: 404 });
    }
  } catch (error) {
    return new Response("Error fetching data", { status: 500 });
  }
}
