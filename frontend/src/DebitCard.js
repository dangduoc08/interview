import React, { useState, useEffect } from "react";
import axiosInstance from "./utils/axois.js";
import { useForm } from "react-hook-form";
import "./debitCard.scss";

// Requirements

/*
* Create 3 APIs on server
- POST http://localhost:4040/debit - to create card
- GET http://localhost:4040/debit/[id] - to get a card detail
- GET http://localhost:4040/debit - to get a member list with card information

* Create UI following the mockup

* Using SCSS, no inline styling
*/

function Debitcard() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});
  const [hide, setHide] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axiosInstance.post("/cards", data).then((res) => {
      const updatedCards = [...cards];
      updatedCards.push(res.data.card);
      setCards(updatedCards);
    });
  };

  useEffect(() => {
    axiosInstance
      .get("/cards")
      .then((res) => {
        let cardLists = res.data.cards;
        if (!cardLists || cardLists.length === 0) return;
        setCards(cardLists);
        setCard(cardLists[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (card) => {
    setCard(card);
  };

  const hidden = (text, number) => {
    let stars = "******************";
    text = stars.substring(0, number) + text.substring(number, text.length);
    return text;
  };

  const formatCard = (card) => {
    let formated =
      card.substring(0, 4) +
      " " +
      card.substring(4, 8) +
      " " +
      card.substring(8, 12) +
      " " +
      card.substring(12);
    return formated;
  };

  const getCardNumber = () => {
    if (!card?.number) return "";
    return hide ? formatCard(hidden(card.number, 12)) : formatCard(card.number);
  };

  const getCVV = () => {
    if (!card?.cvv) return "";
    return hide ? hidden(card.cvv + "", 3) : card.cvv;
  };

  return (
    <div>
      {/* CARD FIELD */}
      <div style={{ height: "200px" }}>
        <p onClick={() => setHide(!hide)}>
          {hide ? "Show card number" : "Hide card number"}
        </p>
        <div
          style={{
            backgroundColor: "#31b931",
            width: "300px",
            height: "150px",
          }}
        >
          <h2 className="card-name">{card.name}</h2>
          {getCardNumber()}
          <br />
          Thru {card.month} - CVV: {getCVV()}
        </div>
      </div>

      {/* FORM FIELD */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="input"
        ></input>{" "}
        <br />
        <input
          type="text"
          placeholder="Card Number"
          {...register("number")}
          className="input"
        ></input>{" "}
        <br />
        <input
          type="text"
          placeholder="Expired Date"
          {...register("month")}
          className="month"
        ></input>
        <input
          type="text"
          placeholder="CVV"
          {...register("cvv")}
          className="cvv"
        ></input>
        <br />
        <input type="submit" className="submit" />
      </form>

      {/* MEMBER LIST FIELD */}
      <h1>MEMBER LIST</h1>
      <table>
        <tbody>
          {cards.map((card, index) => (
            <tr key={card.number} onClick={() => handleClick(card)}>
              <td>{index + 1}.</td>
              <td>{card.name}</td>
              <td>{card.number}</td>
              <td>
                {card.month} - {card.cvv}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Debitcard;
