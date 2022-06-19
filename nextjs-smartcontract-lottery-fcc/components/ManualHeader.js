import { Moralis } from "moralis";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

const ManualHeader = () => {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null account found");
      }
    });
  }, []);

  return (
    <div>
      {account ? (
        <>
          Connected to {account.slice(0, 6)}...
          {account.slice(account.length - 4, account.length)}
        </>
      ) : (
        <button
          disabled={isWeb3EnableLoading}
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "underfined") {
              window.localStorage.setItem("connected", "inject");
            }
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default ManualHeader;
