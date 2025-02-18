import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ removeCredits, isLoading, loading }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    console.log(loading);
    setTimeout(()=>{
      fetchData();
      isLoading(!loading);
    },2000)
  }, []);

  const fetchData = async () => {
    const res = await fetch("squad.JSON");
    const data = await res.json();
    setPlayers(data);
  };
  return (
    <div className="w-[90vw] mx-auto relative">
      {loading && <span className="loading loading-infinity loading-lg absolute right-1/2"></span>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            removeCredits={removeCredits}
          ></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  removeCredits: PropTypes.func,
  handleSelections: PropTypes.func,
  loading:PropTypes.bool,
  isLoading:PropTypes.func,
};
export default Players;
