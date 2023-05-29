import React from "react";
import Lefthover from "../../Components/Shared/Lefthover/Lefthover";
import ContainerCardPublication from "../../Components/Index/ContainerCardPublicacion";
import SearchBar from "../../Components/Index/SearchBar";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="PageWithMenu">
      <Lefthover />
      <div>
        <ContainerCardPublication />
        <SearchBar />
      </div>
    </div>
  );
}

export default SearchPage;
