import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import Home from "./pages/home";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/resume/" element={<Resume/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
