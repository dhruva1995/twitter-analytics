import { PropsWithChildren } from "react";
import classes from "./Card.module.css";
const Card: React.FC<PropsWithChildren<{ className?: string }>> = (
  props: PropsWithChildren<{ className?: string }>
) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
