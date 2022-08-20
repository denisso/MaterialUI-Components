import React from "react";
import { useLocation, NavLink } from "react-router-dom";

export const QueryNavLink = React.forwardRef(
  ({ to, ...props }: any, ref: any) => {
    let location = useLocation();
    return (
      <NavLink
        ref={ref}
        to={to + location.search}
        style={({ isActive }) => ({
          color: isActive ? "red" : ""
        })}
        {...props}
      />
    );
  }
);
