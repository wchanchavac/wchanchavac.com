"use-strict";

export default function handler(request, response) {
  for (const i of request) {
    console.log(JSON.stringify(i, null, 2));
  }
  const [subdomain] = request.headers.host.split(".");
  if (subdomain == "meet") {
    return response.redirect(process.env.MEET_URL);
  }
  return response.redirect(process.env.DEFAULT_URL);
}
