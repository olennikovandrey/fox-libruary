import Header from "../Header/Header";
import TopSection from "../TopSection/TopSection";
import React, { useState } from "react";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="main">
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />
      <TopSection />
    </section>
  );
};

export default Main;
