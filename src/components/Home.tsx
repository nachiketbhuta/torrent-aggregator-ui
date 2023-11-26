import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const onClickHandler = (_: any) => {
    navigate("/results", { state: { value: searchInput } });
  };

  return (
    <div className="mx-auto">
      <div className="search-container">
        <div className="page-title">Torrent Search Engine</div>
        <input
          type="text"
          className="search-box"
          placeholder="Search..."
          onChange={onChangeHandler}
        />
        <button className="search-button" onClick={onClickHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
