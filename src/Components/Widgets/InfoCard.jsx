import { BiSolidCaretDownCircle } from "react-icons/bi";
import { AiFillCopy } from "react-icons/ai";
const InfoCard = ({ cardTitle, cardValue, clipboard = false }) => {
  return (
    <div className="infoCardWrapper">
      <div className="infoCardHeader">
        <div className="infoCardTitle">{cardTitle}</div>
        <div className="infoCardDropDownIC">
          <BiSolidCaretDownCircle />{" "}
        </div>
        <div className="infoCardBody">
          <p>{cardValue}</p>
          <div className="infoCardCopyIc">
            <AiFillCopy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
