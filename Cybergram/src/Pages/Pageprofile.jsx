import React, { useEffect, useState } from "react";
import ContainerPerfil from "../Components/Index/ContainerPerfil";
import CardProfile from "../Components/Index/CardProfile";
import Gohome from "../Components/Shared/Gohome/Gohome";
import { extractUser } from "../Helpers/jwt";
import { getToken } from "../Helpers/localstorage";
import { userxId } from "../services/services";

const Pageprofile = () => {
  const [res, setres] = useState({});

  const ObtenerUser = async (user) => {
    try {
      const res = await userxId(user.uid);
      setres(res.user);
      console.log(res.user);
      console.log("Dios mio ayudame");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let token = getToken();
      let user = await extractUser(token);
      ObtenerUser(user);
      console.log(user);
    };
    fetchData();
  }, []);

  return (
    <div className="profilePageDiv">
      <Gohome />
      <CardProfile
        user={res.name}
        followers={res.followers}
        post="5"
        following={res.following}
      />
      <ContainerPerfil />
    </div>
  );
};

export default Pageprofile;
