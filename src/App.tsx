import Header from "./components/header";
import Main from "./components/main";

import countries from "./data.json";

function App() {
  return (
    <>
      <Header />
      <Main countries={countries} />
    </>
  );
}

export default App;
