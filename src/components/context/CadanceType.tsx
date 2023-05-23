import React from "react";

export type CadanceType = {
  type: "month" | "year";
  value: string;

  changeCadance: (type: "month" | "year", value: string) => void;
};

const CadanceContext = React.createContext<CadanceType>({
  type: "month",
  value: "1",
  changeCadance: () => {},
});

export default CadanceContext;
