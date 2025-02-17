import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
const Selection = ({selection, removeSelections}) => {
    const {id, name, img, role, bowling_type, batting_style}=selection;
    return (
        <div className="flex items-center justify-between bg-gray-100 rounded-md p-2">
            <div className="player-infos flex gap-2">
                <img className="size-20 rounded-md" src={img} alt="" />
                <div className="player-details flex flex-col justify-evenly">
                    <h2 className="font-bold text-base">{name}</h2>
                    <h5 className="text-xs font-thin">{role==="Bowler"?bowling_type:batting_style}</h5>
                </div>
            </div>
            <MdDeleteForever onClick={()=>removeSelections(id)} className="text-red-500 text-xl cursor-pointer"></MdDeleteForever>
        </div>
    );
};
Selection.propTypes={
    selection:PropTypes.array,
    removeSelections:PropTypes.func,
}
export default Selection;