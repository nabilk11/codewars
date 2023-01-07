// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript - 5 kyu

// examples
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");

  return url.split(".")[0];
}
