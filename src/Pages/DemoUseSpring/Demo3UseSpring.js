import { useSprings } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React from "react";

export default function Demo3UseSpring() {
  let arrOpacity = [
    {
      opacity: 0.1,
    },
    {
      opacity: 0.3,
    },
    {
      opacity: 0.5,
    },
    {
      opacity: 0.7,
    },
    {
      opacity: 0.9,
    },
    {
      opacity: 1,
    },
  ];
  let propsAnimUseSprings = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => ({
      opacity: item.opacity,
      from: { opacity: 0 },
      config: 3000,
      delay: 200,
    }))
  );
  return (
    <div>
      {propsAnimUseSprings.map((propsAnim, index) => {
        return <animated.div style={propsAnim}>asdf</animated.div>;
      })}
    </div>
  );
}
