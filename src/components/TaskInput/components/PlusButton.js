import React, { useState } from "react";

import "./PlusButton.css";
import { PlusIcon } from "../../../assets";

function PlusButton({ onClick }) {
  const [opacity, setOpacity] = useState(1);
  return (
    <button
      className="plus_button"
      onClick={onClick}
      style={{ opacity }}
      onMouseDown={() => setOpacity(0.8)}
      onMouseUp={() => setOpacity(1)}
    >
      <PlusIcon />
    </button>
  );
}

export default PlusButton;
