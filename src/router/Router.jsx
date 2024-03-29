import { createBrowserRouter } from "react-router-dom";
import UseStatePage from "../pages/UseStatePage";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import UseImperativeHandlePage from "../pages/UseImperativeHandlePage";
import UseMemoPage from "../pages/UseMemoPage";
import UseMemoPage2 from "../pages/UseMemoPage2";
import UseDebugPage from "../pages/UseDebugPage";
import Callback from "../useCallback/Callback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/useState",
        element: <UseStatePage />,
      },
      {
        path: "/useImperativeHandle",
        element: <UseImperativeHandlePage />,
      },
      {
        path: "/useMemo",
        element: <UseMemoPage />,
      },
      {
        path: "/useMemo2",
        element: <UseMemoPage2 />,
      },
      {
        path: "/useDebugValue",
        element: <UseDebugPage />,
      },
      { path: "/useCallback", element: <Callback /> },
    ],
  },
]);

export default router;
