import PropTypes from "prop-types";

import UserRepoItem from "../user-repo-item/user-repo-item.component";

const UserRepoList = ({ repos }) => {
  return (
    <>
      {
        <div className="rounded-lg shadow-lg card bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
              Latest repositories
            </h2>
            {repos.map((repo) => (
              <h3 key={repo.id}>
                <UserRepoItem repo={repo} />
              </h3>
            ))}
          </div>
        </div>
      }
    </>
  );
};

UserRepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default UserRepoList;
