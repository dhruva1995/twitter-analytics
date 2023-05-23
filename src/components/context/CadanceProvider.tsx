import React from "react";
import CadanceContext from "./CadanceType";

const CadanceProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [type, setType] = React.useState<"month" | "year">("month");
  const [value, setValue] = React.useState("1");
  const onChangeCadance = (newType: "month" | "year", newValue: string) => {
    setType(newType);
    setValue(newValue);
  };
  return (
    <CadanceContext.Provider
      value={{
        type: type,
        value: value,
        changeCadance: onChangeCadance,
      }}
    >
      {props.children}
    </CadanceContext.Provider>
  );
};

export default CadanceProvider;
