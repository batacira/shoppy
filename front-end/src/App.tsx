import Sidebar from "./components/Sidebar/Sidebar";

import { useRoutes } from "react-router";
import { protectedRoutes } from "./routes/protected";
import { publicRoutes } from "./routes/public";
import Header from "./components/Header";

function App() {
  const routes = "signedin" ? protectedRoutes : publicRoutes;
  console.log(routes, 'rute');

  console.log(routes);

  const element = useRoutes(routes);
  console.log(element);


  return element

  // return <Sidebar />;
}

export default App;
