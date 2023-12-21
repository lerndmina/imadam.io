import { type APIRoute } from "astro";

export const ALL: APIRoute = async ({params, request}) => {
  // console.log(request);
  // console.log(params);
  return new Response(JSON.stringify({
    "message": `This was a ${request.method} request!`,
  }),
  {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};