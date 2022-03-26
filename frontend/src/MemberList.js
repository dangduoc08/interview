import React from "react";

function MemberList({ data, onMemberSelect }) {
  return data.map((member, index) => {
    return (
      <div
        className="member-cart"
        key={index}
        onClick={() => onMemberSelect(member)}
      >
        <div className="member-cart__name">
          {index + 1}. {member.name}
        </div>
        <div className="member-cart__number">{member.cardNumber}</div>
        <div className="member-cart__info">
          {member.expiredDate} - {member.cvv}
        </div>
      </div>
    );
  });
}

export default MemberList;
