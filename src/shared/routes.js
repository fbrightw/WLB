import Calendar from "../pages/calendar";
import TextPage from "../components/TextPage";
import CanvasPage from "../components/CanvasPage";
import Main from "../pages/main";
import Bar from "../pages/bar";
import Form from "../pages/form";
import Pie from "../pages/pie";
import Geography from "../pages/geography";


export const routes = [
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
    {
      path: '/text/:name',
      element: <TextPage />
    },
    {
      path: '/canvas/:name',
      element: <CanvasPage />
    },
]
