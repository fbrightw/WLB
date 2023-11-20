import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Main from "./pages/main";
import Bar from "./pages/bar";
import Form from "./pages/form";
import Pie from "./pages/pie";
import Modal from "./pages/shared/Modal";
import Geography from "./pages/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/calendar";

const routes = [
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/form",
    element: <Form />
  },
  {
    path: "/bar",
    element: <Bar />
  },
  {
    path: "/pie",
    element: <Pie />
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "/geography",
    element: <Geography />
  },
]


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {routes.map((el, index) => (
                <Route key={index} path={el.path} element={el.element} />
              ))}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
