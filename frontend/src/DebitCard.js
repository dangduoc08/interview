import React, { useState } from "react";

// Requirements

/*
* Create 3 APIs on server
- POST http://localhost:4040/debit - to create card
- GET http://localhost:4040/debit/[id] - to get a card detail
- GET http://localhost:4040/debit - to get a member list with card information

* Create UI following the mockup

* Using SCSS, no inline styling
*/

import { CardForm } from './components/CardForm'
import { CardInfo } from './components/CardInfo'
import { CardList } from './components/CardList'

import './debitCard.scss'

function Debitcard() {
  const [member, setMember] = useState({
    name: 'Mark Henry',
    date: '12/20',
    cvc: '123',
    num: '1234567812345678'
  })

  const onRowClick = (row) => {
    setMember(row)
  }

  return (
    <div className="debit-card-container">
      {/* CARD FIELD */}
      <CardInfo cardInfo={member} />

      {/* FORM FIELD */}
      <CardForm />

      {/* MEMBER LIST FIELD */}
      <CardList onRowClick={onRowClick} />
    </div>
  );
}

export default Debitcard;
