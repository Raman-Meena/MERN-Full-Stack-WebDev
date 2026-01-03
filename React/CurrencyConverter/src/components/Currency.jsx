import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";
import toast from "react-hot-toast";
import axios from "axios";
import { AiOutlineSwap } from "react-icons/ai";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");

  const swap = () => {
    setFrom(to);
    setTo(from);
    setFromAmt(toAmt);
    setToAmt(fromAmt);
  };

  const Convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("All fields are required");
      return;
    }

    if (from === to) {
      toast.error("From and To country cannot be same");
      return;
    }

    if (isNaN(fromAmt) || Number(fromAmt) <= 0) {
      toast.error("Enter a valid amount");
      return;
    }

    try {
      const fromCode = from.split(" ")[0].toLowerCase();
      const toCode = to.split(" ")[0].toLowerCase();

      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCode}.json`
      );

      const rate = res.data[fromCode][toCode];
      const result = Number(fromAmt) * rate;

      setToAmt(result.toFixed(2));
    } catch (error) {
      toast.error("Conversion failed. Try again later.");
    }
  };

  return (
    <div className="bg-amber-50 h-screen p-5">
      <div className="max-w-3xl bg-white rounded shadow border p-5 mx-auto space-y-5">
        <div className="relative grid grid-cols-2 gap-10">
          {/* FROM */}
          <div className="flex gap-2 border rounded px-3 items-center">
            {from && (
              <img
                src={`https://flagsapi.com/${from.split(" ")[1]}/flat/48.png`}
                alt="flag"
              />
            )}
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="p-3 w-full focus:outline-none"
            >
              <option value="">-Select Country-</option>
              {CountryData.map((country, idx) => (
                <option
                  key={idx}
                  value={`${country.currencycode} ${country.countrycode}`}
                >
                  {country.countryname}
                </option>
              ))}
            </select>
          </div>

          {/* TO */}
          <div className="flex gap-2 border rounded px-3 items-center">
            {to && (
              <img
                src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                alt="flag"
              />
            )}
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="p-3 w-full focus:outline-none"
            >
              <option value="">-Select Country-</option>
              {CountryData.map((country, idx) => (
                <option
                  key={idx}
                  value={`${country.currencycode} ${country.countrycode}`}
                >
                  {country.countryname}
                </option>
              ))}
            </select>
          </div>

          {/* SWAP */}
          <div className="absolute left-1/2 -translate-x-1/2 top-3">
            <button
              onClick={swap}
              className="text-2xl transition hover:scale-125 hover:text-green-500"
            >
              <AiOutlineSwap />
            </button>
          </div>
        </div>

        {/* AMOUNT */}
        <div className="flex gap-3 items-center">
          <label>Amount</label>
          <input
            type="number"
            value={fromAmt}
            onChange={(e) => setFromAmt(e.target.value)}
            placeholder="Enter amount"
            className="border rounded p-3 w-full"
          />
        </div>

        <button
          onClick={Convert}
          className="bg-green-300 hover:bg-green-600 hover:text-white text-green-900 px-4 py-2 rounded w-full"
        >
          Convert
        </button>

        <div className="border" />

        <div>
          <strong>Converted Amount: {toAmt ? toAmt : "XXXXXX"}</strong>
        </div>
      </div>
    </div>
  );
};

export default Currency;
