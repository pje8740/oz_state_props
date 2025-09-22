import { useState } from "react";
import "./App.css";
import CountResult from "./CountResult";

function App() {
  // 1.useState를 사용하여 상태를 활용하여 기능을 구현하세요.
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  /* 2. 상태로 관리하고 있는 count 값을 props를 통해 CountResult 컴포넌트로 전달하세요. */
  return (
    <>
      <h1>⏰ 카운트 앱 생성하기 </h1>
      <p>버튼을 누를 때 마다 버튼이 실시간으로 변경되도록 구현해 주세요.</p>
      <h2>count: {count}</h2>
      <CountResult count={count} />
      <PlusButton incrementCount={incrementCount} />
      <MinusButton decrementCount={decrementCount} />
    </>
  );
}

function PlusButton({ incrementCount }) {
  return <button onClick={incrementCount}>+</button>;
}

function MinusButton({ decrementCount }) {
  return <button onClick={decrementCount}>-</button>;
}

export default App;
