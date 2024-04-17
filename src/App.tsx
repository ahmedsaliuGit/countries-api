import { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";

import countries from "./data.json";
import Detail from "./components/deatil";

function App() {
  const [showDetail, setShowDetail] = useState("-1");
  return (
    <>
      <Header />
      {showDetail === "-1" ? (
        <Home countries={countries} setDetail={setShowDetail} />
      ) : (
        <Detail
          index={showDetail}
          setDetail={setShowDetail}
          countries={countries}
        />
      )}
    </>
  );
}

export default App;
