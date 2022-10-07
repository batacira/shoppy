import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutesLayout() {
  return (
    <>
      {`<Layout />`}
      <Outlet />
    </>
  );
}

export const protectedRoutes = [
  {
    element: <ProtectedRoutesLayout />,
    children: [
      {
        path: "/",
        element: `<Ecommerce />`,
      },
      {
        path: "/orders",
        element: `<Orders />`,
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
