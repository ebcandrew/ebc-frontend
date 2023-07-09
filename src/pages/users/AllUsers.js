import axios from "../../axios";
import React, { useEffect, useState } from "react";

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const user = async () => {
      await axios.get("/users").then((res) => {
        console.log(res.data);
      });
    };

    user();
  },[]);
  return <div className="allusers"></div>;
}

export default AllUsers;
