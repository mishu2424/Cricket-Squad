import PropTypes from "prop-types";
import Selection from "../Selection/Selection";
const Selections = ({
  selections,
  removeSelections,
  setCompo,
  isLoading
}) => {
  return (
    <div className="w-[90vw] mx-auto space-y-3">
      {/* <h2>Hello {name}</h2> */}
      {selections.map((selection) => (
        <Selection
          key={selection.id}
          selection={selection}
          removeSelections={removeSelections}
        ></Selection>
      ))}
      <a
        onClick={() => {
            setCompo("players");
            isLoading(true);
        }}
        className="btn bg-[#E7FE29] cursor-pointer"
      >
        {" "}
        Add More Players
      </a>
    </div>
  );
};

Selections.propTypes = {
  selections: PropTypes.array,
  removeSelections: PropTypes.func,
  setCompo: PropTypes.func,
  isLoading: PropTypes.func,
};
export default Selections;
