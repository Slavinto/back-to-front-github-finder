import { useState, useContext } from "react";
import GithubContext from "../../context/github/github.context";

const UserSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { userData, searchUsers, resetSearch } = useContext(GithubContext);

  const handleInputChange = (e) => setSearchQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      alert("Please enter something!");
    } else {
      searchUsers(searchQuery);
    }
    setSearchQuery("");
  };

  const handleClearClick = () => resetSearch();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                onChange={handleInputChange}
                value={searchQuery}
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                SEARCH
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {userData.length > 0 && (
          <button onClick={handleClearClick} className="btn btn-ghost btn-lg">
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
