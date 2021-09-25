import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
export default function DemoUseSpring() {
  const propsAnim = useSpring({
    to: { opacity: 1, color: "red" },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const [flip, set] = useState(false);
  const { number } = useSpring({
    // reset: true,
    // reverse: flip,
    from: { number: 0 },
    number: 100,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const propsNumAnim = useSpring({
    to: { num: 100 },
    from: { num: 0 },
  });
  return (
    <>
      <animated.div style={propsAnim}>I will fade in</animated.div>
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      <animated.h2>{propsNumAnim.num}</animated.h2>
    </>
  );
}
