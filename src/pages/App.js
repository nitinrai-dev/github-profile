import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../Hooks/userContext";
import Dashboard from "./Dashboard";
import Home from "./Home";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
