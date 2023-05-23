import React from "react";
import classes from "./Widget.module.css";

const Widget: React.FC<WidgetType> = (props: WidgetType) => {
  const [isActive, setIsActive] = React.useState(false);
  const onMouseEnterHandler = () => {
    setIsActive(true);
  };
  const onMouseLeaveHandler = () => {
    setIsActive(false);
  };
  return (
    <div
      className={`${classes.widget} ${isActive ? classes.active : ""}`}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <strong className={classes["widget-name"]}>{props.title}</strong>
      <p className={classes["widget-value"]}>{props.value}</p>
    </div>
  );
};

export default Widget;
export interface WidgetType {
  title: string;
  value: string;
}
