"use-strict";

export default function handler(request, response) {
  const [subdomain] = request.subdomains;
  console.log(subdomain);
  if (subdomain == "meet") {
    return response.redirect(process.env.MEET_URL);
  }
  return response.redirect(process.env.DEFAULT_URL);
}
