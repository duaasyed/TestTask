import React, { useState } from "react";

import "./styles.css";

function Button({
  title,
  buttonColor = "#FF8989",
  textColor = "red",
  onClick,
}) {
  const [opacity, setOpacity] = useState(1);

  return (
    <div
      className="button"
      onClick={onClick}
      style={{ opacity, backgroundColor: buttonColor }}
      onMouseDown={() => setOpacity(0.8)}
      onMouseUp={() => setOpacity(1)}
    >
      <h3 style={{ color: textColor }}>{title}</h3>
    </div>
  );
}

export default Button;
