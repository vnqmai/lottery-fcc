import { ConnectButton } from "web3uikit";

const Header = () => {
  return (
    <div className="p-5 border-b-2 flex flex-row justify-between items-center">
      <h1 className="py-4 px-4 font-blog text-3xl">Decentrialized Lottery</h1>
      <ConnectButton></ConnectButton>
    </div>
  );
};

export default Header;
