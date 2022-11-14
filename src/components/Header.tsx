import React from "react";

type HeaderType = {
  children?: React.ReactNode;
};

const commonClassName = "";

export const H1: React.FC<HeaderType> = ({ children }) => (
  <h1 className="text-6xl font-bold">{children}</h1>
);

export const H2: React.FC<HeaderType> = ({ children }) => (
  <h1 className="text-4xl font-bold">{children}</h1>
);
