import PropTypes from "prop-types";
import { IoIosFlag } from "react-icons/io";
import { ToastContainer } from "react-toastify";
const Player = ({ player, removeCredits }) => {
  const {
    name,
    img,
    nation,
    role,
    rating,
    batting_style,
    price,
    bowling_type,
  } = player;
  return (
    <div className="border rounded-md p-2 space-y-3">
      <img
        className="w-full h-[250px] rounded-md object-bottom object-center"
        src={img}
        alt={`img of ${name}`}
      />
      <h2 className="text-xl font-bold flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
        {name}
      </h2>
      <div className="card-part-1 flex items-center justify-between">
        <h5 className="text-xs font-bold flex items-center"><IoIosFlag className="text-gray-500 size-4"></IoIosFlag>{nation}</h5>
        <button className="btn border-none m-0 px-2 opacity-80">{role}</button>
      </div>
      <hr />
      <div className="card-part-2 flex items-center justify-between">
        <h5 className="text-xs font-bold">Rating</h5>
        <button className="btn border-none m-0 p-0 opacity-80 font-thin">
          {rating}
        </button>
      </div>
      <div className="card-part-4 flex items-center justify-between">
        <h5 className="text-xs font-bold">
          {role === "Batsman" ? "Bating Style" : "Bowling Style"}
        </h5>
        <h5 className="text-xs opacity-80 font-thin">
          {role === "Batsman" ? batting_style : bowling_type}
        </h5>
      </div>
      <div className="card-part-5 flex items-center justify-between">
        <div className="price-section flex items-center gap-2">
          <h5 className="text-xs font-bold">Price:</h5>
          <h5 className="text-xs font-bold">${price}</h5>
        </div>
        <a
          onClick={() => {
            removeCredits(price, player);
          }}
          className="btn bg-white"
        >
          Choose Player
          <ToastContainer position="top-right" autoClose={3000}/>
        </a>
      </div>
    </div>
  );
};
Player.propTypes = {
  player: PropTypes.object,
  removeCredits: PropTypes.func,
};
export default Player;
