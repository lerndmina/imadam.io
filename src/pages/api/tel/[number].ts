export async function GET({ params, request, redirect }) {
  // Extract the User-Agent from the request headers
  const userAgent = request.headers.get("User-Agent")?.toLowerCase();

  // Check if the User-Agent suggests it's a bot
  if (userAgent && /bot|crawler|spider|crawling/i.test(userAgent)) {
    // Return HTML content with meta and OG tags for bots
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${params.number}</title>
        <meta name="description" content="Dial the number directly from the link.">
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://imadam.io/api/tel/${params.number}">
        <meta property="og:title" content="${params.number}">
        <meta property="og:description" content="Dial the number directly from the link.">
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content=""https://imadam.io/api/tel/${params.number}">
        <meta property="twitter:title" content="${params.number}">
        <meta property="twitter:description" content="Dial the number directly from the link.">
      </head>
      <body>
        <p>Telephone link: <a href="tel:${params.number}">${params.number}</a></p>
      </body>
      </html>`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  } else {
    // Redirect real users
    return redirect(`tel:${params.number}`, 307);
  }
}
