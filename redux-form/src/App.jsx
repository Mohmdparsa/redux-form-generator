import { Outlet } from "react-router-dom";
import FormList from "./components/FormList";
const App = () => {
  return (
    <>
    <FormList/>
    <Outlet/>
    </>
  );
};

export default App;
