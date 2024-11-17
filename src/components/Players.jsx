// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Players = ({ coins, deductCoins }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    fetch('/players.json')
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error('Error fetching players data:', error));
  }, []);

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
      toast.error("This player is already selected.");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("You can select 6 players only.");
      return;
    }

    if (coins >= player.biddingPrice) {
      setSelectedPlayers((prevSelected) => [...prevSelected, player]);
      deductCoins(player.biddingPrice);
      toast.success(`${player.name} has been added to selected players!`);
    } else {
      toast.error("Insufficient coins to select this player.");
    }
  };

  const handleRemovePlayer = (playerId) => {
    setSelectedPlayers((prevSelected) => {
      const updatedSelected = prevSelected.filter((p) => p.playerId !== playerId);
      toast.success("Player removed from selection!");
      return updatedSelected;
    });
  };

  const toggleSection = () => {
    setShowSelected(!showSelected);
  };

  return (
    <div>
      <ToastContainer position="top-center"/>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">
          {showSelected ? `Selected Players (${selectedPlayers.length}/6)` : "Available Players"}
        </h1>
        <div className="border rounded-md flex">
          <button 
            className={`px-4 rounded-bl-md rounded-tl-md py-2 border-r ${!showSelected ? 'bg-blue-500 text-white' : ''}`} 
            onClick={() => setShowSelected(false)}
          >
            Available
          </button>
          <button 
            className={`px-4 rounded-tr-md rounded-br-md flex py-2 ${showSelected ? 'bg-blue-500 text-white' : ''}`} 
            onClick={toggleSection}
          >
            Selected (<span className="font-semibold">{selectedPlayers.length}</span>)
          </button>
        </div>
      </div>

      {!showSelected ? (
        <div className="available-section grid grid-cols-3 gap-5">
          {players.map((player) => (
            <div key={player.playerId} className="player-card bg-white rounded-lg shadow-lg p-4">
              <img
                src={player.image}
                alt={player.name}
                className="h-72 w-full object-cover rounded-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
                <p className="text-gray-600">{player.country}</p>
                <p className="text-gray-500 text-sm mt-2 font-semibold">Role: {player.role}</p>
                <hr className='my-1' />
                <p className="text-gray-500 text-sm">Batting: {player.battingType}</p>
                <p className="text-gray-500 text-sm">Bowling: {player.bowlingType}</p>
                <div className='flex items-center justify-between'>
                  <p className="text-gray-800 font-semibold mt-2">
                    Bidding Price: ${player.biddingPrice} Million
                  </p>
                  <button 
                    onClick={() => handleSelectPlayer(player)} 
                    className='border rounded-lg p-2'>
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="selected-section mt-8">
          <div className="grid grid-cols-1 gap-5">
            {selectedPlayers.map((player) => (
              <div key={player.playerId} className="player-card flex items-center bg-white rounded-lg border p-4 justify-between">
                <div className='flex'>
                  <img
                    src={player.image}
                    alt={player.name}
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                  <div className="px-4">
                    <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
                    <p className="text-gray-600">{player.country}</p>
                    <p className="text-gray-500 text-sm mt-2 font-semibold">Role: {player.role}</p>
                    <p className="text-gray-500 text-sm mt-2 font-semibold">Price: ${player.biddingPrice} Million</p>
                  </div>
                </div>
                <div>
                  <button 
                    onClick={() => handleRemovePlayer(player.playerId)}  
                    className='delete-btn border p-2 rounded-lg cursor-pointer'>
                    <i className="fa-solid fa-delete-left"></i> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {showSelected && (
            <button 
              onClick={() => setShowSelected(false)} 
              className="mb-4 mt-7 bg-[#E7FE29] font-semibold px-4 py-2 rounded-lg border">
              Add More Players
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Players;
