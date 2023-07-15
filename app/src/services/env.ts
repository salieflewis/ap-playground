import { objectKeys } from "../helpers/arrays";

interface Env {
  NEXT_PUBLIC_ALCHEMY_KEY: string;
  NEXT_PUBLIC_WALLET_CONNECT_ID: string;
}

const env: Env = {
  NEXT_PUBLIC_ALCHEMY_KEY: process.env.NEXT_PUBLIC_ALCHEMY_KEY as string,
  NEXT_PUBLIC_WALLET_CONNECT_ID: process.env
    .NEXT_PUBLIC_WALLET_CONNECT_ID as string,
};

const frontendKeys = objectKeys(env).filter((key) =>
  key.includes("NEXT_PUBLIC")
);

frontendKeys.forEach((key) => {
  if (!env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export default env;