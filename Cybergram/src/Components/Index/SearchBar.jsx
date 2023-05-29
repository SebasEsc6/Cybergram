import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  return (
    <div className="itemsearch">
      <label></label>
      <div className="inputBx">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="3x"
          style={{ marginLeft: "45px" }}
        />
        <input
          type="text"
          placeholder="Search..."
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
      </div>
    </div>
  );
}

export default SearchBar;
