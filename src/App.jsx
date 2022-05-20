import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
