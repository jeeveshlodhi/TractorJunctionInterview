import "./styles.css";
import Box from "./Box";
import { useState } from "react";

export default function App() {
  const [showNumber, setShowNumber] = useState(undefined);

  return (
    <div className="App">
      {Array(20)
        .fill(0)
        .map((ele, idx) =>
          idx === showNumber ? (
            <Box key={idx} setShow={setShowNumber} toShow={true} id={idx} />
          ) : (
            <Box key={idx} setShow={setShowNumber} toShow={false} id={idx} />
          )
        )}
    </div>
  );
}
