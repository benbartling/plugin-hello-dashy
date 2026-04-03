import type { PluginDescriptor } from "emdash";

export function helloDashyPlugin(): PluginDescriptor {
	return {
		id: "hello-dashy",
		version: "0.0.1",
		format: "standard",
		entrypoint: "@benbartling/plugin-hello-dashy/sandbox",
adminWidgets: [{ id: "hello-dashy-quote", title: "Hello, Dashy", size: "half" }],
	};
}
