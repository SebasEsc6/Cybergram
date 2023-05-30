import React from "react";
import Lefthover from "../../Components/Shared/Lefthover/Lefthover";
import CardMesagge from "../../Components/Index/CardMesagge";
import ItemUserName from "../../Components/Index/ItemUserName";

function InChatPage() {
  return (
    <div className="Div_Inchatepage">
      <Lefthover />
      <ItemUserName />
      <CardMesagge />
    </div>
  );
}

export default InChatPage;
