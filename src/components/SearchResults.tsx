import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Result from "../types/Result";

const SearchResults: FC = () => {
  const { state } = useLocation();
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    retrieveTorrents();
  }, []);

  const retrieveTorrents = async () => {
    const searchInput = state.value;
    try {
      const response = await fetch(
        `https://torrent-search-engine-beta.vercel.app?query=${encodeURIComponent(
          searchInput
        )}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const data = await response.json();
      const results = data.data.filter(
        (result: Result) => result.magnet !== ""
      );
      setResults(results);
    } catch (error) {
    } finally {
    }
  };

  return (
    <div>
      <h1>Search Results</h1>
      <div className="card-container">
        {results.map((result) => (
          <div className="card">
            <h2>{result.name}</h2>
            <p>Size : {result.size}</p>
            <p>Seeders : {Number(result.seeders)}</p>
            <p>Leechers : {Number(result.leechers)}</p>
            <p>Date Upload : {result.dateUpload}</p>
            <p>Uploaded By : {result.uploadedBy}</p>
            <p>Category : {result.category}</p>
            <p>
              <a href={result.url}>Torrent Link</a>
            </p>
            <p>
              <a href={result.magnet}>Magnet Link</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
