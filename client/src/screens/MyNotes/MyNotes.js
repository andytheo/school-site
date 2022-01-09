import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const MyNotes = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history("/");
  };

    return (
        <div>
        <button className="btn btn-primary mt-3 mb-5"
          onClick={logoutHandler}>Logout</button>
        <h1>Hi there</h1>
        </div>
    )
}

export default MyNotes
