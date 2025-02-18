import PropTypes from "prop-types";
import { useState } from "react";
import Players from "../Players/Players";
import Selections from "../Selections/Selections";

const Main = ({ removeCredits, selections, removeSelections }) => {
  const [compo, setCompo] = useState("players");
  const [loading, isLoading] = useState(true);
  return (
    <div className="space-y-2">
      <div className="w-[90vw] mx-auto section-header flex items-center justify-between">
        <h3 className="text-xl font-bold">
          {compo === "players"
            ? "Available Players"
            : `Selected Players ${selections.length}/6`}
        </h3>
        <div className="players-btns join rounded-md">
          <a
            onClick={() => {
              setCompo("players");
              isLoading(true);
            }}
            className={`join-item btn ${compo==="players" && 'bg-[#E7FE29]'}`}
          >
            Available
          </a>
          <a
            onClick={() => {
              setCompo("selected");
            }}
            className={`join-item btn ${compo!=="players" && 'bg-[#E7FE29]'}`}
          >
            Selected {selections.length}
          </a>
        </div>
      </div>
      {compo === "players" ? (
        <Players
          removeCredits={removeCredits}
          loading={loading}
          isLoading={isLoading}
        ></Players>
      ) : (
        <Selections
          selections={selections}
          removeSelections={removeSelections}
          setCompo={setCompo}
          loading={loading}
          isLoading={isLoading}
        ></Selections>
      )}
    </div>
  );
};

Main.propTypes = {
  removeCredits: PropTypes.func,
  selections:PropTypes.array,
  removeSelections:PropTypes.func
};
export default Main;
