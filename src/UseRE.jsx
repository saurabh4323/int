import React, { useRef } from "react";

const UseRE = () => {
  const curr = useRef(null);
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "black",
    "white",
    "pink",
    "cyan",
    "magenta",
    "grey",
    "brown",
    "beige",
    "violet",
    "indigo",
    "teal",
    "navy",
    "maroon",
    "olive",
    "lime",
    "silver",
    "gold",
    "coral",
    "salmon",
    "turquoise",
    "crimson",
    "orchid",
    "plum",
    "khaki",
    "lavender",
    "peach",
    "mint",
    "auburn",
    "emerald",
    "sapphire",
    "charcoal",
    "ivory",
    "tan",
    "fuchsia",
    "royalblue",
    "lightsalmon",
    "lightseagreen",
    "darkorange",
    "goldenrod",
    "darkviolet",
  ];

  const hi = () => {
    // Generate a random index and set the background color
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    curr.current.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <div
        ref={curr}
        style={{ width: "100%", backgroundColor: "yellow", height: "90vh" }}
      >
        <button
          onClick={hi}
          style={{
            marginLeft: "40%",
            width: "250px",
            backgroundColor: "yellow",
            height: "150px",
          }}
        >
          Click to Change the Background Color
        </button>
      </div>
    </div>
  );
};

export default UseRE;
