import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { toast } from "react-toastify";

const Body = () => {
  const [coin, setCoin] = useState(0);
  const [selections, setSelections] = useState([]);
  const handleCredits = () => {
    const updatedCoin = coin + 6000000;
    setCoin(updatedCoin);
    toast.dismiss();
    toast.success("Credits have been added",{
        pauseOnHover: false, // Ensures it closes even when hovered
        pauseOnFocusLoss: false, // Closes even if the user switches tabs
        theme:'colored',
    });
  };

  const removeCredits = (money, player) => {
    if (selections.length < 6) {
      const isExist = selections.find(
        (selection) => selection.id === player.id
      );
      if (!isExist) {
        if (coin > money) {
          const updateAmount = coin - money;
          setCoin(updateAmount);
          setSelections([...selections, player]);
        } else {
          //   console.log("You don't have enough amount to buy this player!");
          toast.dismiss(); 
          toast.error(`You don't have enough amount to buy this player!`, {theme:'colored',});
        }
      } else {
        // console.log("Player have already been added! ");
        toast.dismiss(); 
        toast.info("Player has already been added! ", {
          theme: "colored", // Closes automatically after 3 seconds
          closeOnClick: true, // Allows user to close on click
          draggable: true, // Enables dragging the toast
          pauseOnHover: true, // Stops autoClose on hove
        });
      }
    } else {
      //   console.log("Squad Full!");
      toast.info("Squad Full!", { theme: "colored" });
    }
  };

  const removeSelections = (id) => {
    const remainingPlayers = selections.filter(
      (selection) => selection.id !== id
    );
    setSelections(remainingPlayers);
  };
  console.log(selections, typeof selections);
  return (
    <div className="space-y-30">
      <Header handleCredits={handleCredits} coin={coin}></Header>
      <Main
        removeCredits={removeCredits}
        selections={selections}
        removeSelections={removeSelections}
      ></Main>
      <Footer></Footer>
    </div>
  );
};

export default Body;
