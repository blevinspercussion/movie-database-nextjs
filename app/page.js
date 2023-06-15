"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";

import React from "react";

const Home = () => {
  const api_key = process.env.OMDB_API_KEY;

  const [searchString, setSearchString] = useState("");

  const handleSearchInput = () => {
    setSearchString();
  };

  return (
    <div>
      <Header />
      <hr />
      <form>
        <input
          type="text"
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
        <button className="btn">Search</button>
      </form>
      <h1>{searchString}</h1>
    </div>
  );
};

export default Home;
