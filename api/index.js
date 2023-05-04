export default function handler(request, response) {
  const [subdomain] = request.subdomains;
  console.log(subdomain);
  if (subdomain == "meet") {
    return res.redirect(process.env.MEET_URL);
  }
  return res.redirect(process.env.DEFAULT_URL);
}
