import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuth } from "../../utils/redux/actions/actions";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const togglePasswordEye = () => setIsPasswordShow((show) => !show);

  const renderPasswordEye = () => {
    if (!isPasswordShow) {
      return (
        <AiFillEye
          className="signup__icon password__eye"
          onClick={togglePasswordEye}
        />
      );
    } else {
      return (
        <AiFillEyeInvisible
          className="signup__icon password__eye"
          onClick={togglePasswordEye}
        />
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === "") {
      usernameRef.current.classList.toggle("inputRef");
      toast.error(" Invalid username!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (user.password !== user.confirmPassword) {
      passwordRef.current.classList.add("inputRef");
      toast.error("password does not match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(isAuth(true));
      toast.success("registered successfully");

      setUser({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  console.log(user);
  return (
    <div className="signup__container">
      <ToastContainer />
      <div className="signup-content">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              ref={usernameRef}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
              type="text"
            />
          </div>
          <div>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              type="email"
            />
          </div>
          <div>
            <input
              ref={passwordRef}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              type={isPasswordShow ? "text" : "password"}
            />
            {renderPasswordEye()}
          </div>
          <div>
            <input
              ref={passwordRef}
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              placeholder="confirm password"
              type={isPasswordShow ? "text" : "password"}
            />
            {renderPasswordEye()}
          </div>
          <button type="submit">Signup</button>
        </form>
        <div className="signup__alreadyHaveAccount">
          <h6>Already have an accout</h6>
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
