import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React from "react";

export default function Demo2UseSpring() {
  let propsUseSpring = useSpring({
    color: [131, 111, 255],
    from: {
      color: [238, 99, 99],
    },
    config: { duration: 3000 },
  });

  let propsAnim = useSpring({
    from: {
      fontSize: 10,
      color: "red",
    },
    to: async (next, cancel) => {
      await next({ fontSize: 30, color: "blue" });
      await next({ fontSize: 10, color: "yellow" });
      await next({ fontSize: 40, color: "green" });
    },
    config: { duration: 1000 },
  });
  return (
    <>
      <animated.div
        style={{
          color: propsUseSpring.color.interpolate((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        Lorem ipsum dolor sit amet.
      </animated.div>
      <animated.div style={propsAnim}>asdas</animated.div>
    </>
  );
}
