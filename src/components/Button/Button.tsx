import React from "react";
import "./buttonStyles.css";

type LinkButton = {
  type: "linkButton";
  children: React.ReactNode;
  to: string;
};

type RegularButton = {
  type: "regular";
  children: React.ReactNode;
};

export default function Button(prop: RegularButton | LinkButton) {
  const { type, children } = prop;
  return (
    <button className="primary__btn">
      {type === "linkButton" ? (
        <a target="_blank" rel="noreferrer noopener" href={prop.to}>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
