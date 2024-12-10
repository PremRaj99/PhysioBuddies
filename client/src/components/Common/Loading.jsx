import React from "react";
import { OrbitProgress } from "react-loading-indicators";
export default function Loading() {
  return (
    <div>
      <OrbitProgress
        color="#000"
        size="medium"
        text=""
        textColor=""
      />
    </div>
  );
}
