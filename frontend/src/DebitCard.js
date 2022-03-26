import React, { useEffect, useState } from "react";
import axios from "axios";
import "./debitCard.scss";
import MemberList from "./MemberList";
import MemberForm from "./MemberForm";
import MemberInfo from "./MemberInfo";
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
  const [data, setData] = useState([]);
  const [memberSelected, setMemberSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4040/debits");
        setData(res?.data?.data || []);
        setMemberSelected(res?.data?.data?.[0] || null);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4040/debits", {
        ...data,
      });

      setData(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="root">
      {/* CARD FIELD */}
      {memberSelected && (
        <MemberInfo memberSelected={memberSelected}></MemberInfo>
      )}

      {/* FORM FIELD */}
      <MemberForm onSubmit={onSubmit}></MemberForm>

      {/* MEMBER LIST FIELD */}
      <p>MEMBER LIST</p>
      <MemberList data={data} onMemberSelect={setMemberSelected}></MemberList>
    </div>
  );
}

export default Debitcard;
