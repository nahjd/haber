"use client";

import { useState, FormEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { TiThMenu } from "react-icons/ti";

const SearchInput = () => {
  const [keywords, setKeywords] = useState<string>("");
  const router = useRouter();

  const searchKeywords = (e: FormEvent) => {
    e.preventDefault();
    if (!keywords) {
      router.push("/");
    } else {
      router.push(`/search?q=${keywords}`);
    }
  };

  return (
    <>
      <form
        className="flex space-x-2 items-center"
        style={{ position: "relative" }}
        onSubmit={searchKeywords}
      >
        <button type="submit" style={{ position: "absolute", left: "12px" }}>
          <BiSearch className="text-black text-xl" />
        </button>{" "}
        <input
          type="text"
          placeholder="  Find the best..."
          className="px-6 py-1 outline-none border border-[#0e0e0e] text-sm"
          style={{ marginRight: "15px", borderRadius: "3px" }}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button
          style={{
            width: "60px",
            fontSize: "12px",
            border: "10 px solid red",
            backgroundColor: "black",
            color: "white",
            borderRadius: "8px",
            marginRight: "15px",
            padding: "5px",
          }}
        >
          Sign in
        </button>
        <button className="menu" style={{ marginRight: "5px" }}>
          <TiThMenu />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
