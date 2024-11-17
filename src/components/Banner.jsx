// eslint-disable-next-line no-unused-vars
import React from 'react';
import { toast } from 'react-toastify';

const Banner = ({ addCoins }) => {
    const handleClaim = () => {
        const coinsToAdd = 1000;
        addCoins(coinsToAdd);
        toast.success(`Successfully added ${coinsToAdd} coins!`);
    };

    return (
        <div
            className="bg-cover bg-no-repeat rounded-3xl h-full mb-10 p-10"
            style={{
                backgroundImage: 'url(https://i.ibb.co.com/6wDXPBM/bg-shadow.png)',
                backgroundColor: "black",
            }}
        >
            <div className="mx-auto flex flex-col justify-center items-center text-center h-full space-y-3 py-6">
                <img className="w-1/5" src="https://i.ibb.co.com/vvCrwBK/banner-main.png" alt="" />
                <h1 className="font-semibold text-xl text-white ">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-slate-300 text-sm">Beyond Boundaries Beyond Limits</p>
                <div className="">
                    <button
                        className="text-sm p-2 rounded-md font-semibold claim-btn"
                        style={{
                            backgroundColor: 'rgb(231, 254, 41)',
                        }}
                        onClick={handleClaim}
                    >
                        Claim Free Credits
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
