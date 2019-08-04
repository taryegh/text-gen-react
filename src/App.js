import React from "react";
import "./App.css";
import Header from "./components/Header";
import QuoteGenerator from "./components/QuoteGenerator";

export default function App() {
  return (
    <div>
      <Header />
      <QuoteGenerator />
    </div>
  );
}
