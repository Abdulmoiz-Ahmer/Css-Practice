import React, { useState } from "react";

export const useNavBar = () => {
  const [navElements, setNavElements] = useState([
    "Database",
    "Latest News & Analysis",
    "Rankings & Report",
    "Events",
    "Bookstore",
  ]);

  return navElements;
};
