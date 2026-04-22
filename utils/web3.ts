import { ethers } from "ethers";
import abi from "../Abi.json";


const PRESALE_ADDRESS = "0x7e46004e9847A874Bfb70a00a70842BBBE0C5E2a";


const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");


export const readContract = new ethers.Contract(
  PRESALE_ADDRESS,
  abi,
  provider
);


export const getSigner = async () => {
  if (!window.ethereum) throw new Error("MetaMask not installed");

  const browserProvider = new ethers.BrowserProvider(window.ethereum);
  await browserProvider.send("eth_requestAccounts", []);

  return await browserProvider.getSigner();
};


export const getWriteContract = async () => {
  const signer = await getSigner();
  return new ethers.Contract(PRESALE_ADDRESS, abi, signer);
};

// =======================
// BUY WITH ETH
// =======================
export const buyWithETH = async (amountEth: string) => {
  const contract = await getWriteContract();

  const tx = await contract.buyWithETH({
    value: ethers.parseEther(amountEth),
  });

  await tx.wait();
  return tx;
};


export const buyWithUSDT = async (amount: string) => {
  const contract = await getWriteContract();

  const tx = await contract.buyWithUSDT(
    ethers.parseUnits(amount, 6)
  );

  await tx.wait();
  return tx;
};

export const getEthRate = async () => {
  return await readContract.ethRate();
};

export const getUsdtRate = async () => {
  return await readContract.usdtRate();
};

export const getOwner = async () => {
  return await readContract.owner();
};