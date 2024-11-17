// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";

const App = () => {
  const [coins, setCoins] = useState(0);

  const addCoins = (amount) => {
    setCoins((prevCoins) => prevCoins + amount);
  };

  const deductCoins = (amount) => {
    setCoins((prevCoins) => prevCoins - amount);
  };

  return (
    <div>
      <div className="px-36 py-10">
        <Header coins={coins} />
      </div>
      <div className="px-36">
        <Banner addCoins={addCoins} />
      </div>
      <div className="px-36 pb-96">
        <Players coins={coins} deductCoins={deductCoins} />
      </div>
      <div className="bg-black pt-52">
        <Footer />
      </div>
    </div>
  );
};

export default App;
