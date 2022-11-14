import React from "react";

type HeaderType = {
  children?: React.ReactNode;
  className?: string;
};

export const H1: React.FC<HeaderType> = ({ children, className = "" }) => (
  <h1 className={`text-7xl font-bold ${className}`}>{children}</h1>
);

export const H2: React.FC<HeaderType> = ({ children }) => (
  <h1 className="text-3xl font-bold">{children}</h1>
);
