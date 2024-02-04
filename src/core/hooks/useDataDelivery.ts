import React, { useState } from "react";

export const useDataDelivery = () => {
  const [state, setState] = useState<boolean>(false);
  function setStateToTrue() {
    setState(!state);
  }
  function setStateToFalse() {
    setState(false);
  }
  return {
    setStateToTrue,
    setStateToFalse,
    state,
  };
};
