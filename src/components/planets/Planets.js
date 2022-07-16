import { Link, Outlet } from "react-router-dom";

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

  const displayPlanet = planetsList.map((planetItem, index) => {
    return (
      <li key={index}>
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
