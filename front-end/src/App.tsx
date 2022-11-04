import Sidebar from './components/Sidebar/Sidebar';

import { useRoutes } from "react-router";
import { protectedRoutes } from "./routes/protected";
import { publicRoutes } from "./routes/public";

function App() {
  // const routes = "signedin" ? protectedRoutes : publicRoutes;

  // const element = useRoutes([...routes]);

  // return element


  return (
    <Sidebar />
  );
}

export default App;
