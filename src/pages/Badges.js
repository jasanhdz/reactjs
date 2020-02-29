import React, { useState, useEffect, useRef } from "react";
import BadgesHero from "../components/BadgesHero";
import BadgesContainer from "../components/BadgesContainer";
import PageLoading from "../components/PageLoading";
import api from "../api";

let initiaState = {
  loading: true,
  error: null,
  data: undefined
};

const fetchData = async setState => {
  setState({ ...initiaState, loading: true, error: null });
  try {
    const data = await api.badges.list();
    setState({ loading: false, data: data, error: null });
  } catch (error) {
    setState({ ...initiaState, loading: false, error: error });
  }
};

const Mountend = setState => {
  const timeoutRef = useRef();
  useEffect(() => {
    console.log("3. ComponentDidMount()");
    fetchData(setState);
    return () => {
      console.log("4. componentdDidUnMount()");
      clearTimeout(timeoutRef.current);
    };
  }, []);
};

const Badges = () => {
  console.log("1. Constructor()");
  const [state, setState] = useState({ ...initiaState });
  Mountend(setState);

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
