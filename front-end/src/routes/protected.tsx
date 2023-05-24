import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Orders from "../components/Orders/Orders";

function ProtectedRoutesLayout() { // 3.
  return (
    <>
      <Layout> {/* 4. */}
        <Outlet /> {/* 5. */}
      </Layout>
    </>
  );
}

export const protectedRoutes = [ // 1.
  {
    element: <ProtectedRoutesLayout />, // 2.
    children: [
      {
        path: "/",
        element: `<Ecommerce />`,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/employees",
        element: `<Employees />`,
      },
      {
        path: "/customers",
        element: `<Customers />`,
      },
      {
        path: "/calendar",
        element: `<Calendar />`,
      },
      {
        path: "/kanban",
        element: `<Kanban />`,
      },
      {
        path: "/editor",
        element: `<Editor />`,
      },
      {
        path: "/color-picker",
        element: `<ColorPicker />`,
      },
      {
        path: "/line",
        element: `<Line />`,
      },
      {
        path: "/area",
        element: `<Area />`,
      },
      {
        path: "/bar",
        element: `<Bar />`,
      },
      {
        path: "/pie",
        element: `<Pie />`,
      },
      {
        path: "/financial",
        element: `<Financial />`,
      },
      {
        path: "/color-mapping",
        element: `<ColorMapping />`,
      },
      {
        path: "/pyramid",
        element: `<Pyramid />`,
      },
      {
        path: "/stacked",
        element: `<Stacked />`,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];
