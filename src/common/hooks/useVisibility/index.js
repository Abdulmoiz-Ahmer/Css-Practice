import React from "react";

export const useVisibility = (initialState) => {
  const [visibility, setVisibility] = React.useState(initialState);

  function toggleVisibility() {
    setVisibility((prev) => !prev);
  }

  return [visibility, toggleVisibility];
};
