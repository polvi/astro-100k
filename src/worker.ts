/*
//import { serveRangefs } from "@rangefs/worker-runtime";

export async function handleRequest(req, env, ctx, astro) {
 // const resp = await serveRangefs(req, env);
  //if (resp) return resp;
  return astro.render(req);
}
*/
import type { SSRManifest } from 'astro';
import { App } from 'astro/app';
import { handle } from '@astrojs/cloudflare/handler'

interface Env {
  ASSETS: { fetch: typeof fetch };
  [key: string]: any;
}

export function createExports(manifest: SSRManifest) {
  const app = new App(manifest);
  return {
    default: {
      async fetch(request, env, ctx) {
        return handle(manifest, app, request as any, env, ctx);
      }
    } satisfies ExportedHandler<Env>,
  }
}
