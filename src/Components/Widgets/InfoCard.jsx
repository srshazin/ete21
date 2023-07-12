import { BiSolidCaretDownCircle } from "react-icons/bi";
import { AiFillCopy } from "react-icons/ai";
import { useState } from "react";
const InfoCard = ({ cardTitle, cardValue, clipboard = false }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="infoCardWrapper">
      <div className="infoCardHeader" onClick={() => setOpened(!opened)}>
        <div className="infoCardTitle">{cardTitle}</div>
        <div className="infoCardDropDownIC">
          <BiSolidCaretDownCircle />{" "}
        </div>
      </div>

      <div
        className="infoCardBody"
        style={{
          height: opened ? "auto" : "0",
          padding: opened ? "16px 15px" : "0",
        }}
      >
        <p>{cardValue}</p>
        <div className="infoCardCopyIc">
          <AiFillCopy />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
