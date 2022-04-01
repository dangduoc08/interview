import { useState } from "react";

import "./CardForm.scss";

export const CardForm = () => {
  const [form, setForm] = useState({
    name: "",
    num: "",
    date: "",
    cvc: "",
  });

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(form)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="card-form">
        <input
          value={form.name}
          placeholder="Name"
          className="card-form__input"
          onChange={(e) => setForm((pre) => ({ ...pre, name: e.target.value }))}
        />
        <input
          value={form.num}
          placeholder="Card Number"
          className="card-form__input"
          onChange={(e) => setForm((pre) => ({ ...pre, num: e.target.value }))}
        />
        <div className="card-form__group">
          <input
            value={form.date}
            placeholder="Expired Date"
            className="card-form__input"
            onChange={(e) => setForm((pre) => ({ ...pre, date: e.target.value }))}
          />
          <input
            value={form.cvc}
            placeholder="CVC"
            className="card-form__input"
            onChange={(e) => setForm((pre) => ({ ...pre, cvc: e.target.value }))}
          />
        </div>
        <button className="card-form__btn" type="submit">Submit</button>
      </div>
    </form>
  );
};
