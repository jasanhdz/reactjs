import React, { useState, useEffect, useRef } from "react";
import BadgesHero from "../components/BadgesHero";
import BadgesContainer from "../components/BadgesContainer";
import PageLoading from "../components/PageLoading";
import api from "../api";

const Badges = () => {
  console.log("1. Constructor()");
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined
  });

  useEffect(() => {
    console.log("3. ComponentDidMount()");
    fetchData();

    const intervalId = setInterval(fetchData(), 5000);

    return () => {
      console.log("4. componentdDidUnMount()");
      clearTimeout(intervalId);
    };
  }, []);

  const fetchData = async () => {
    setState({ error: null, data: [] });
    try {
      const data = await api.badges.list();
      setState({ loading: false, data: data, error: null });
    } catch (error) {
      setState({ loading: false, error: error });
    }
  };

  if (state.loading) {
    console.log(state.loading);
    return <PageLoading />;
  }

  if (state.error) {
    return `Error: ${state.error.message}`;
  }

  console.log("2. Render()");
  return (
    <React.Fragment>
      <BadgesHero />
      <BadgesContainer data={state.data} />
    </React.Fragment>
  );
};

export default Badges;
