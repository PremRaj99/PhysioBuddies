import React from "react";

export default function SecondaryButton({
  className,
  children,
}) {
  return (
    <button
      className={`${className} px-4 py-2 border border-text-primary  rounded-full `}
    >
      {children}
    </button>
  );
}
