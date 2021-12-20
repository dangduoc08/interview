import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import Sum from "./Sum";
import HookDebug from "./HookDebug";

ReactDOM.render(
  <BrowserRouter>
    <nav>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          fontSize: 24,
          paddingLeft: 0,
        }}
      >
        <li style={{ paddingRight: "1rem" }}>
          <Link style={{ textDecoration: "none" }} to="/users">
            Users
          </Link>
        </li>
        <li style={{ paddingRight: "1rem" }}>
          <Link style={{ textDecoration: "none" }} to="/sum">
            Sum
          </Link>
        </li>
        <li style={{ paddingRight: "1rem" }}>
          <Link style={{ textDecoration: "none" }} to="/hook">
            Hook
          </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/sum" element={<Sum />}></Route>
      <Route path="/hook" element={<HookDebug />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
