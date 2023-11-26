import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults: FC = () => {
  const { state } = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    retrieveTorrents();
  }, []);

  const retrieveTorrents = async () => {
    const searchInput = state.value;
    try {
      const response = await fetch(
        `https://torrent-search-engine-beta.vercel.app?query=${encodeURIComponent(
          searchInput
        )}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
    } finally {
    }
  };

  return (
    <div>
      <h1>Horizontal Card List</h1>
      <div className="card-container">
        <div className="card">
          <img src="https://via.placeholder.com/150" alt="" />
          <h2>Card Title 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida odio eu rutrum malesuada.
          </p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/150" alt="" />
          <h2>Card Title 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida odio eu rutrum malesuada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
