import { useTrail } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";

const items = [
  { title: "ABC", content: "abc" },
  { title: "DEF", content: "def" },
  { title: "LMN", content: "lmn" },
  { title: "OPQ", content: "opq" },
];

export default function DemoUseTrail() {
  const [state, setState] = useState(true);
  const propUseTrail = useTrail(items.length, {
    opacity: state ? 1 : 0,
    x: state ? 0 : 20,
    height: state ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="h-screen w-screen">
      <button
        onClick={() => setState(!state)}
        className="rounded bg-red-600 hover:bg-red-700 text-white p-2 border-none  m-5 transition-all"
      >
        Click
      </button>
      {propUseTrail.map((propsUseSpring, index) => {
        return (
          <>
            <animated.h3 key={index} style={propsUseSpring}>
              {items[index].title}
            </animated.h3>
          </>
        );
      })}
    </div>
  );
}
