import React, { useState } from "react";
import CancelItem from "../../Components/Shared/CancelItem/CancelItem";
import "./UploadPage.css";

function Uploadpage() {
  return (
    <div className="Upload">
      <CancelItem />
      <h1>
        Upload a photo <br />
        or video
      </h1>
      <form onSubmit={onsubmit}>
        {/* <div className="inputBx">
          <input type="file" id="archivo" ref={inputRef} placeholder="Place" />
          <input type="text" id="date" placeholder="Date" />
          <input type="submit" placeholder="" />
        </div> */}
      </form>
    </div>
  );
}

export default Uploadpage;
