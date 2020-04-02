var fs = require("fs");
var fnv = require("fnv-plus");

// TODO: why does rsaPemToJwk work with a file but not with a variable?
const key = (
  process.env.AUTH_PRIVATE_KEY || fs.readFileSync("private.pem").toString()
).replace(/\\n/g, "\n");

const publicKey = (
  process.env.AUTH_PUBLIC_KEY || fs.readFileSync("public.pem").toString()
).replace(/\\n/g, "\n");

// Key Identifier – Acts as an ‘alias’ for the key
const kid = process.env.AUTH_KEY_ID || fnv.hash(publicKey, 128).hex();

export { key, publicKey, kid };
