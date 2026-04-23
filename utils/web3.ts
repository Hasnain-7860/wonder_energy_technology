  import { ethers } from "ethers";
  import abi from "../Abi.json";

  const PRESALE_ADDRESS = "0x7e46004e9847A874Bfb70a00a70842BBBE0C5E2a";
  const USDT_ADDRESS = "0xC6F3d8d230122aa01802b924f2aa0D79349d78A6";
  export const approveUSDT = async (amount: string) => {
    const signer = await getSigner();

    const usdt = new ethers.Contract(
      USDT_ADDRESS,
      [
        "function approve(address spender, uint256 amount) public returns (bool)"
      ],
      signer
    );

    const formatted = ethers.parseUnits(amount, 6);

    const tx = await usdt.approve(PRESALE_ADDRESS, formatted);
    await tx.wait();

    return tx;
  };

  export const provider = new ethers.JsonRpcProvider(
    "https://rpc.sepolia.org"
  );

  export const readContract = new ethers.Contract(
    PRESALE_ADDRESS,
    abi,
    provider
  );

  const SEPOLIA_CHAIN_ID = "0xaa36a7";

  const switchToSepolia = async () => {
    if (!window.ethereum) throw new Error("MetaMask not installed");

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA_CHAIN_ID }],
      });
    } catch (switchError: any) {
      // If network not added
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: SEPOLIA_CHAIN_ID,
              chainName: "Sepolia Test Network",
              nativeCurrency: {
                name: "SepoliaETH",
                symbol: "ETH",
                decimals: 18,
              },
              rpcUrls: ["https://rpc.sepolia.org"],
              blockExplorerUrls: ["https://sepolia.etherscan.io"],
            },
          ],
        });
      } else {
        throw switchError;
      }
    }
  };

  export const getSigner = async () => {
    if (!window.ethereum) throw new Error("MetaMask not installed");

    await switchToSepolia();

    const browserProvider = new ethers.BrowserProvider(window.ethereum);

    await browserProvider.send("eth_requestAccounts", []);

    return await browserProvider.getSigner();
  };

  export const getWriteContract = async () => {
    const signer = await getSigner();

    return new ethers.Contract(PRESALE_ADDRESS, abi, signer);
  };

  export const buyWithETH = async (amountEth: string) => {
    try {
      const contract = await getWriteContract();

      const tx = await contract.buyWithETH({
        value: ethers.parseEther(amountEth),
      });

      await tx.wait();
      return tx;
    } catch (error) {
      console.error("buyWithETH error:", error);
      throw error;
    }
  };

  export const buyWithUSDT = async (amount: string) => {
    try {
      const contract = await getWriteContract();

      const tx = await contract.buyWithUSDT(
        ethers.parseUnits(amount, 6)
      );

      await tx.wait();
      return tx;
    } catch (error) {
      console.error("buyWithUSDT error:", error);
      throw error;
    }
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