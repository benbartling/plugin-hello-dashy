import { definePlugin, type PluginContext } from "emdash";

const QUOTES = [
	"Well, hello, Dashy",
	"It's so nice to have you back where you belong",
	"You're lookin' swell, Dashy",
	"I can tell, Dashy",
	"You're still glowin', you're still crowin'",
	"You're still goin' strong",
	"I feel the room swayin'",
	"While the band's playin'",
	"One of our old favorite songs from way back when",
	"So, take her wrap, fellas",
	"Dashy, never go away again",
	"So, golly, gee, fellas",
	"Have a little faith in me, fellas",
	"Dashy, never go away",
	"Promise, you'll never go away",
	"Dashy'll never go away again",
];

function getRandomQuote(): string {
	return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function buildQuoteBlocks(quote: string) {
	return [
		{
			type: "section" as const,
			text: quote,
		},
		{
			type: "context" as const,
			text: "The simplest plugin that could possibly exist. And yet, here it is. IYKYK",
		},
	];
}

export default definePlugin({
	routes: {
		admin: {
			handler: async (routeCtx: any, _ctx: PluginContext) => {
				const interaction = routeCtx.input as {
					type: string;
					page?: string;
				};

				if (interaction.type === "page_load" && interaction.page === "widget:hello-dashy-quote") {
					return { blocks: buildQuoteBlocks(getRandomQuote()) };
				}

				return { blocks: [] };
			},
		},
	},
});
