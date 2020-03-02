import React, { useState, useEffect } from "react";
import api from "../api";
import PageLoading from "../components/PageLoading";
import BadgeDetails from "./components/BadgeDetails";

const BadgeDetailsContainer = props => {
  const [dataState, setDataState] = useState({ data: undefined });
  const [state, setState] = useState({ loading: true, error: null });
  const [modal, setModal] = useState({ isVisibility: false });

  const handleClick = () => {
    if (modal.isVisibility) {
      setModal({ isVisibility: false });
    } else {
      setModal({ isVisibility: true });
    }
  };

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

  // console.log(dataState);
  if (state.loading) {
    return <PageLoading />;
  }

  if (state.error) {
    return <h1>{state.error.message}</h1>;
  }

  return (
    <BadgeDetails
      modalIsVisibility={modal.isVisibility}
      handleClick={handleClick}
      badge={dataState.data}
    />
  );
};

export default BadgeDetailsContainer;
