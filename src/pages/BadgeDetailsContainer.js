import React, { useState, useEffect } from "react";
import api from "../api";
import PageLoading from "../components/PageLoading";
import BadgeDetails from "./components/BadgeDetails";

const BadgeDetailsContainer = props => {
  const [dataState, setDataState] = useState({ data: undefined });
  const [state, setState] = useState({ loading: true, error: null });

  const fetchData = async () => {
    setState({ loading: true });
    try {
      const data = await api.badges.read(props.match.params.badgeId);
      setDataState({ data: data });
      setState({ loading: false, error: null });
    } catch (error) {
      setState({ loading: false, error: error });
    }
  };

  useEffect(() => {
    // componentDidMount
    fetchData();
    return () => {
      // componentWillUnMount
      console.log(true);
    };
  }, []);

  console.log(dataState);
  if (state.loading) {
    return <PageLoading />;
  }

  if (state.error) {
    return <h1>{state.error.message}</h1>;
  }

  return (
    <BadgeDetails
      id={dataState.data.id}
      firstName={dataState.data.firstName}
      lastName={dataState.data.lastName}
      email={dataState.data.email}
      jobTitle={dataState.data.jobTitle}
      twitter={dataState.data.twitter}
    />
  );
};

export default BadgeDetailsContainer;
