import React, { useEffect, useRef } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

const MathJaxRenderer = ({ formula, inline = false }) => {
  return (
    <MathJaxContext config={config}>
      <MathJax>{inline ? `$${formula}$` : `\\[${formula}\\]`}</MathJax>
    </MathJaxContext>
  );
};

export default MathJaxRenderer;
