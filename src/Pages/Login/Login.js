import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import log from "../../assets/images/signup.png";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const notify = () => toast.success("Successfully Login");
  const notify1 = () => toast.error("Email or Password not match");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    const passwordField = document.getElementById("user-password");
    const passwordValue = passwordField.value;

    if (email === "polinmam12@gmail.com" && passwordValue === "nahidsir") {
      notify();
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      notify1();
    }
  };

  useEffect(() => {
    const submitButton = document.getElementById("btn-submit");
    submitButton.addEventListener("click", handleSubmit);

    return () => {
      submitButton.removeEventListener("click", handleSubmit);
    };
  }, [navigate]);

  return (
    <div className="cont-1">
      <main className="cont2">
        <section className="img-container">
          <h1>
            <i>
              New in My <br />
              Site ?
            </i>
          </h1>

          <div className="img">
            <img src={log} alt="" />
          </div>
        </section>
        <section className="contaner2">
          <form
            className="form-container"
            id="form-desgin"
            onSubmit={handleSubmit}
          >
            <h1>LogIn</h1>
            <section className="form-content1">
              <h3>Personal</h3>
              <div className="">
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="name" id="name" placeholder="name" />
              </div>
              <div className="">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="user-email"
                  placeholder="email"
                />
              </div>
              <div className="">
                <label htmlFor="name">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="user-password"
                  placeholder="password"
                />
              </div>
            </section>

            <input
              type="submit"
              value="SignUp"
              className="btn"
              id="btn-submit"
            />
            <Toaster position="top-center" reverseOrder={false} />
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
