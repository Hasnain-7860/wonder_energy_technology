import { createContext, useContext, useEffect, useState } from "react";
import { BrowserProvider } from "ethers";

const Web3Context = createContext<any>(null);

const BASE_URL = "https://web3-auth-mjwy.onrender.com";

export const Web3Provider = ({ children }: any) => {
  const [provider, setProvider] = useState<any>(null);
  const [signer, setSigner] = useState<any>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  
  const loginHandler = async () => {
    try {
      if (!window.ethereum) {
        throw new Error("MetaMask not installed");
      }

      await window.ethereum.request({
  method: "wallet_requestPermissions",
  params: [{ eth_accounts: {} }],
});
      const browserProvider = new BrowserProvider(window.ethereum);
      await browserProvider.send("eth_requestAccounts", []);

      const signerInstance = await browserProvider.getSigner();
      const walletAddress = await signerInstance.getAddress();

      const nonceRes = await fetch(`${BASE_URL}/auth/nonce`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress }),
      });

      const { message } = await nonceRes.json();
      const signature = await signerInstance.signMessage(message);
      const verifyRes = await fetch(`${BASE_URL}/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          walletAddress,
          signature,
          message,
        }),
      });

      const data = await verifyRes.json();

      console.log("Login Success:", data);
      setProvider(browserProvider);
      setSigner(signerInstance);
      setAccount(walletAddress);
      setIsConnected(true);
      localStorage.setItem("walletConnected", "true");

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        if (!window.ethereum) return;

        const isPreviouslyConnected = localStorage.getItem("walletConnected");
        if (!isPreviouslyConnected) return; 

        const browserProvider = new BrowserProvider(window.ethereum);
        const accounts = await browserProvider.send("eth_accounts", []);

        if (accounts.length > 0) {
          const signerInstance = await browserProvider.getSigner();

          setProvider(browserProvider);
          setSigner(signerInstance);
          setAccount(accounts[0]);
          setIsConnected(true);

          console.log("Auto reconnected:", accounts[0]);
        }
      } catch (err) {
        console.error("Auto connect failed:", err);
      }
    };

    checkWalletConnection();
  }, []);
  const  logout =async ()  => {
    setProvider(null);
    setSigner(null);
    setAccount(null);
    setIsConnected(false);
    

    localStorage.removeItem("walletConnected");

    console.log("Disconnected");
  await window.ethereum.revokePermissions()
 
  };
  
  // useEffect(() => {
  //   if (!window.ethereum) return;

  //   window.ethereum.on("accountsChanged", (accounts: string[]) => {
  //     if (accounts.length === 0) {
  //       logout();
  //     } else {
  //       setAccount(accounts[0]);
  //       setIsConnected(true);
  //     }
  //   });

  //   return () => {
  //     window.ethereum?.removeListener("accountsChanged", () => {});
  //   };
  // }, []);

  return (
    <Web3Context.Provider
      value={{
        provider,
        signer,
        account,
        isConnected,
        loginHandler,
        logout,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);