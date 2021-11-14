const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function generateKeys() {
  try {
    // Get the contents of the .env.example file
    const frontendEnvironmentVariables = fs.readFileSync(
      "frontend/.env.example",
      "utf8"
    );

    console.log(
      `Create a Google OAuth Client from https://console.developers.google.com/apis/credentials/oauthclient and copy the credentials to GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env file inside the frontend directory\n`
    );

    // Generate the private.pem file
    await exec("openssl genrsa -out private.pem 2048");

    // Generate the public.pem file
    await exec("openssl rsa -in private.pem -pubout > public.pem");

    // Get the value of the private key
    const { stdout: privateKey } = await exec(
      "awk -v ORS='\\n' '1' private.pem"
    );

    // Get the value of the public key
    const { stdout: publicKey } = await exec("awk -v ORS='\\n' '1' public.pem");

    // Construct the values of all the necessary keys
    const AUTH_PRIVATE_KEY = { type: "RS256", key: privateKey };
    const AUTH_PUBLIC_KEY = { type: "RS256", key: publicKey };
    const frontendEnv = `${frontendEnvironmentVariables}AUTH_PRIVATE_KEY='${JSON.stringify(
      AUTH_PRIVATE_KEY
    )}'`;

    // Write the contents into the .env file
    fs.writeFileSync("frontend/.env", frontendEnv);

    // Get the contents of the .env.example file
    const backendEnvironmentVariables = fs.readFileSync(
      "backend/.env.example",
      "utf8"
    );

    // Construct the values of all the necessary keys
    const backendEnv = `${backendEnvironmentVariables}HASURA_GRAPHQL_JWT_SECRET='${JSON.stringify(
      AUTH_PUBLIC_KEY
    )}'`;

    // Write the contents into the .env file
    fs.writeFileSync("backend/.env", backendEnv);

    console.log(
      "Secret keys was generated in frontend/.env and backend/.env\n"
    );
  } catch (err) {
    console.error(err);
  }
}

generateKeys();
