import { ColorModeScript } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import api from "./api/axiosConfig";
import Admin from "./components/Admin";
import DataTabs from "./components/DataTabs";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ProtectedRoutes from "./components/ProtectedRoute";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/api/v1/admin");
        const data = response.data[0];
        setCategories(data.categories);
        console.log(data.categories);
        setSources(data.sources);
        console.log(data.sources);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ColorModeScript initialColorMode={"dark"} />
      <Nav
        setData={setNews}
        isDashboard={isDashboard}
        categories={categories}
        sources={sources}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          {" "}
          <Route path="/dashboard" element={<DataTabs data={news} />} />
          <Route
            path="/admin"
            element={
              <Admin
                categories={categories}
                sources={sources}
                setCategories={setCategories}
                setSources={setSources}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
