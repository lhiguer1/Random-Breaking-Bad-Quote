"use client";
import React, { useState } from "react";
import { Quote, QuoteResponse } from "./lib/quote";

export default function Home() {
  const [quote, setQuote] = useState<Quote>();

  const clickHandler = async () => {
    await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((res) => {
        return res.json();
      })
      .then((qr: QuoteResponse) => {
        setQuote(qr[0]);
      });
  };

  return (
    <main className="flex-grow flex flex-col justify-center items-center m-2">
      <h1 className="text-5xl font-bold text-center">Breaking Bad Random Quote</h1>
      <p className="py-6 text-center">{quote?.quote}</p>
      <div>
        <button onClick={clickHandler} className="btn btn-primary">
          New Quote
        </button>
      </div>
    </main>
  );
}
