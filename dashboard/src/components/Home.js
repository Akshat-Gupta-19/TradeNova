import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios
      .get("https://tradenova-9d2p.onrender.com/verify", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status) {
          setIsAuth(true);
        } else {
          window.location.href = "https://YOUR-FRONTEND-URL.onrender.com/login";
        }
      })
      .catch(() => {
        window.location.href = "https://YOUR-FRONTEND-URL.onrender.com/login";
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (!isAuth) return null;

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
