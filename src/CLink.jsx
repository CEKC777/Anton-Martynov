import React from "react";
import { Link } from "react-router-dom";

const CLink = ({ to, disabled, children, className, id, target }) => {
  return (
    <Link to={to} className={className} id={id} target={target}>
      {children}
    </Link>
  );
};

export default CLink;
