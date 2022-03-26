import { useState } from "react";
import "./debitCard.scss";

function MemberInfo({ memberSelected }) {
  const [isHide, setIsHide] = useState(false);

  return (
    <div className="member-root">
      <div className="hide-button">
        <button onClick={() => setIsHide(!isHide)}>
          {isHide ? "Show card number" : "Hide card number"}
        </button>
      </div>
      <div className="member">
        <div className="member-name">{memberSelected.name}</div>
        <div className="member-number">
          {isHide
            ? `.... .... .... ${memberSelected.cardNumber.slice(
                memberSelected.cardNumber.length - 4
              )}`
            : `${memberSelected.cardNumber.slice(
                0,
                4
              )} ${memberSelected.cardNumber.slice(
                4,
                8
              )} ${memberSelected.cardNumber.slice(
                8,
                12
              )} ${memberSelected.cardNumber.slice(12)}`}
        </div>
        <div className="member-info">
          <div className="member-info__expiredDate">
            Thru: {memberSelected.expiredDate}
          </div>
          <div className="member-info__cvv">
            CVV: {isHide ? "***" : memberSelected.cvv}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberInfo;
