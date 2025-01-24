import { useState } from "react";

import "./App.css";
import EmailForm from "./Components/EmailForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmailForm />
    </>
  );
}

export default App;
