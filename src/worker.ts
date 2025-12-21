import { serveRangefs } from "@rangefs/worker-runtime";
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
	const resp = await serveRangefs(request, env);
	if (resp) return resp;
        return handle(manifest, app, request as any, env, ctx);
      }
    } satisfies ExportedHandler<Env>,
  }
}
