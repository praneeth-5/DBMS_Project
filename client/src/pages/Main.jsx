import React, { useEffect, useState } from 'react';
import { getGames } from "../api/getGames";
import Landing from "../components/Landing";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Main = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await getGames();
        setGameData(response.data.products);
        // console.log(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGameDetails();
  }, []);


  return (
    <div>
      <Navbar />
      <Landing />
      <div className="flex justify-center my-6">
        <div className="bg-black h-[3px] w-1/2 my-2"></div>
      </div>
      <List data={gameData} />
    </div>
  );
};

export default Main;
