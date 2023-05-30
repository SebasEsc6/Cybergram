import React, { useEffect, useState } from "react";
import ContainerPerfil from "../Components/Index/ContainerPerfil";
import CardProfile from "../Components/Index/CardProfile";
import Gohome from "../Components/Shared/Gohome/Gohome";
import { extractUser } from "../Helpers/jwt";
import { getToken } from "../Helpers/localstorage";
import { userxId } from "../services/services";

const Pageprofile = () => {
  const [User, setUser] = useState({});

  const ObtenerUser = async (user) => {
    try {
      const res = await userxId(user.uid);
      setUser(res);
      console.log(res);
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
        user={User.name}
        followers={User.followers}
        post="5"
        following={User.following}
      />
      <ContainerPerfil />
    </div>
  );
};

export default Pageprofile;
