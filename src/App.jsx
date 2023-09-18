import React, { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampaign";
import Profile from "./pages/Profile";
import CampaignDetails from "./pages/CampaignDetails";
function App() {
  const [wallet, setWallet] = useState(null);
  const handleWalletConnect = (wallet) => {
    setWallet(wallet);
  };
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        {wallet ? (
          <div>
            Connected wallet address: {wallet.address}
          </div>
        ) : (
          <ConnectWallet onConnect={handleWalletConnect} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  

)
}

export default App
