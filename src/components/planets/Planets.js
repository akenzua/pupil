import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const Planets = () => {
  const planetsList = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  const { planet } = useParams();

  const displayPlanet = planetsList.map((planetItem, index) => {
    return (
      <li
        key={index}
        className={
          planetItem.toLowerCase() === planet
            ? "active-planet"
            : "inactive-active"
        }
      >
        <Link to={`/${planetItem.toLowerCase()}`}>{planetItem}</Link>
      </li>
    );
  });

  return (
    <>
      <ul>{displayPlanet}</ul>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Planets;
