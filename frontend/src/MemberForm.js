import React, { useState } from "react";

function MemberForm({ onSubmit }) {
  const [form, setForm] = useState({});

  const onFormChange = (name, value) => {
    setForm((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  return (
    <div className="member-form">
      <div className="member-form__name">
        <input
          placeholder="Name"
          onChange={(e) => onFormChange("name", e.target.value)}
        ></input>
      </div>
      <div className="member-form__number">
        <input
          placeholder="Card Number"
          onChange={(e) => onFormChange("cardNumber", e.target.value)}
        ></input>
      </div>
      <div className="member-form__info">
        <input
          className="expired-input"
          placeholder="Expired Date"
          onChange={(e) => onFormChange("expiredDate", e.target.value)}
        ></input>
        <input
          placeholder="CVV"
          onChange={(e) => onFormChange("cvv", e.target.value)}
        ></input>
      </div>
      <button onClick={() => onSubmit(form)}>Submit</button>
    </div>
  );
}

export default MemberForm;
