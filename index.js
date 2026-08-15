import indexHtml from "./index.html";
import cardHtml from "./card.html";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/card" || url.host.startsWith("digitalcard.")) {
      return new Response(cardHtml, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }
    return new Response(indexHtml, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
};