import { useContext } from "react";

import Spinner from "../layout/spinner/spinner.component";
import UserItem from "../user-item/user-item.component.jsx";
import GithubContext from "../../context/github/github.context.js";

const UserResults = () => {
  const { loading, userData } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {userData.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
};

export default UserResults;
