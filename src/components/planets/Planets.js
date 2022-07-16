import { Outlet } from "react-router-dom";

const Planets = () => {
  return (
    <>
      <p>Planets</p>
      <aside>
        <Outlet />
      </aside>
    </>
  );
};

export default Planets;
