import React, { useEffect } from "react";

import * as d3 from "d3";

const Chart: React.FC = () => {
  const divRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const d3Element = d3.select(divRef.current);
    d3Element.style("background-color", "red");
  }, []);

  return (
    <div ref={divRef}>
      <p>This is test paragraph</p>
    </div>
  );
};

export default Chart;
