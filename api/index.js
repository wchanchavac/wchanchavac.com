"use-strict";

export default function handler(request, response) {
  console.log(request);
  const [subdomain] = request.subdomains;
  if (subdomain == "meet") {
    return response.redirect(process.env.MEET_URL);
  }
  return response.redirect(process.env.DEFAULT_URL);
}
