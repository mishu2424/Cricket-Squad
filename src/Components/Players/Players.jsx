import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ removeCredits }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("squad.JSON");
    const data = await res.json();
    setPlayers(data);
  };
  return (
    <div className="w-[90vw] mx-auto">
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
};
export default Players;
