import React from "react";
import Lefthover from "../Components/Shared/Lefthover/Lefthover";
import ContainerCardPublicacion from "../Components/Index/ContainerCardPublicacion";

const Homepage = () => {
  return (
    <div className="containerHome">
      <Lefthover />
      <ContainerCardPublicacion />
    </div>
  );
};

export default Homepage;
