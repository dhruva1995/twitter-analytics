import { NavLink } from "react-router-dom";

import React, { ChangeEvent } from "react";
import classes from "./MainNavigation.module.css";
import CadanceContext from "./context/CadanceType";

function MainNavigation() {
  const cadanceCtx = React.useContext(CadanceContext);
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "year") {
      cadanceCtx.changeCadance("year", "year");
    } else {
      cadanceCtx.changeCadance("month", value);
    }
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trending"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Users
            </NavLink>
          </li>
        </ul>

        <select
          title="Select a cadance interval"
          name="cadance"
          placeholder="Select a cadance"
          onChange={onChangeHandler}
        >
          <optgroup label="Month">
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </optgroup>
          {/* <option value="year">Year</option> */}
        </select>
      </nav>
    </header>
  );
}

export default MainNavigation;
