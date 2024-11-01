import { ClientOptions, GridClient, NetworkEnv } from "@threefold/grid_client";

type NetworkName = keyof typeof NetworkEnv;

export async function getClient(): Promise<GridClient> {
  const clientOptions: ClientOptions = {
    network: NetworkEnv[process.env.TF_NETWORK as NetworkName],
    mnemonic: process.env.TF_MNEMONIC || "",
  }
  const gridClient = new GridClient(clientOptions);

  await gridClient.connect();

  return gridClient;
}
