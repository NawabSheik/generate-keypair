import dotenv from "dotenv";
import { Keypair } from "@solana/web3.js";

dotenv.config();

function getKeypairFromEnvironment(variableName) {
  const secretKeyString = process.env[variableName];

  if (!secretKeyString) {
    throw new Error(`Environment variable '${variableName}' is not set!`);
  }

  // Remove the brackets and split by commas, then convert to numbers
  const keyArray = secretKeyString.slice(1, -1).split(",").map(Number);
  const decodedSecretKey = Uint8Array.from(keyArray);

  return Keypair.fromSecretKey(decodedSecretKey);
}

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("Finished! We've loaded our secret key securely, using an env file!");
