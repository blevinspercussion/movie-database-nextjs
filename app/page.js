"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";

import React from "react";

const Home = () => {
  const api_key = process.env.OMDB_API_KEY;

  const [searchString, setSearchString] = useState("");
  const [url, setUrl] = useState("");

  const constructUrl = async (e) => {
    console.log(process.env.OMDB_API_KEY);

    e.preventDefault();
    let formattedSearchString = searchString.split(" ").join("+");
    console.log(formattedSearchString);
    setUrl(
      `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${formattedSearchString}&plot=full`
    );
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    console.log(data);
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
        <button className="btn" onClick={constructUrl}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
