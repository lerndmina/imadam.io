import type { APIContext } from "astro";

interface Asset {
  browser_download_url: string;
}

interface Release {
  assets: Asset[];
}

let downloadUrl: string = "";

export async function GET({ redirect }: APIContext) {
  try {
    const response = await fetch("https://api.github.com/repos/thalwyrn/BrandPack/releases/latest");
    const data: Release = await response.json();

    if (data.assets.length > 0) {
      downloadUrl = data.assets[0].browser_download_url;
      console.log("Redirecting to " + downloadUrl);
      return redirect(downloadUrl, 302);
    } else {
      console.log("No assets found in the latest release.");
    }
  } catch (error) {
    return new Response(error.message);
  }
}
