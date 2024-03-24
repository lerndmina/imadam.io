import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  // if we've not returned by now, we can call next() to continue
  return next();
};
