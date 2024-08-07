import React, {useState} from "react";
import './FrdCom.css';
import frd from "./data/friend.json";

const FrdCom = () => {
  const [num, setNum] = useState(0)

  const buttClick = () => {
    const randomNum = Math.floor(Math.random() * 6 + 0); //0~5랜덤
    setNum(randomNum)
  }

  return(
    <div className="div_wise">
      <button className="btnexe" onClick={buttClick}>Wise Saying</button>
      <p>{frd.wise[num].content}</p>
    </div>
  );
};

export default FrdCom;