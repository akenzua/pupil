import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PlanetDetails = () => {
  const { planet } = useParams();
  const [details, setDetails] = useState();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // check localStorage and fetch cached data
    const cache =
      localStorage.getItem("planet") === null
        ? {}
        : JSON.parse(localStorage.getItem("planet"));
    if (localStorage.getItem("planet") !== null && cache[planet]) {
      const data = cache[planet];
      setDetails(data);
      setFetching(false);
    } else {
      // call api if data not already stored in localStorage
      const fetchPlanet = async () => {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${planet}&media_type=image`
        );
        const data = await response.json();
        cache[planet] = data;
        localStorage.setItem("planet", JSON.stringify(cache));
        setDetails(data);
        setFetching(false);
      };
      fetchPlanet();
    }
  }, [planet]);

  return (
    <>
      <div>
        <Link to="/" className="planet-back">
          &#8592; Back
        </Link>
      </div>
      {fetching ? (
        <p>Fetching .....</p>
      ) : (
        <div className="planet-content">
          {details &&
            details.collection.items[0].data.map((orbit, index) => {
              return (
                <div key={index}>
                  <h2 className="planet-heading">{orbit?.title}</h2>
                  <p className="planet-description">{orbit?.description}</p>
                </div>
              );
            })}
          {details &&
            details.collection.items[0].links.map((link, index) => {
              return (
                <div key={index}>
                  <img
                    src={link.href}
                    width="400"
                    height="300"
                    alt={link.render}
                  />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default PlanetDetails;
