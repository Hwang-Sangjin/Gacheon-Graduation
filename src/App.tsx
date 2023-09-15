import { Suspense, useState } from "react";
import Header from "./components/Header";
import Bananas from "./components/Bananas";
import { FadeIn, LeftMiddle } from "./layout/styles";
import Overlay from "./layout/Overlay";

function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => set(e.target.value)}
        />
      </LeftMiddle>
    </>
  );
}

export default App;
