import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navigations/Nav";
import HomePage from "./Tenerife_Project/Home/HomePage";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
