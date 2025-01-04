import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "OnchainCoffee",
  projectId: "a59a845fb007d6774400476a3dcc7157",
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
