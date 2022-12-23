import { useEffect, useState } from "react";

const UserResults = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    console.log(process.env.REACT_APP_GITHUB_TOKEN);
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users`
      // , {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      //   },
      // }
    );
    const data = await response.json();
    console.log(data);
    data.length && setUserData(data);
  };

  return (
    <>
      <div>{userData.map((user) => user)}</div>
    </>
  );
};

export default UserResults;
