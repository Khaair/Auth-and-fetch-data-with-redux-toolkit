import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../store/slices/userSlices";

const UserList = () => {
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.users);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchAllUsers());
    setUsers(list);
  }, [dispatch, list]);

  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <img src={user.avatar} alt="avatar" />
              <div className="card-body">
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
