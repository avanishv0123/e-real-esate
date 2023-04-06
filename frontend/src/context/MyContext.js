// MyContext.js
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [username, setUsername] = useState();

  const navigate = useNavigate();

  let LoginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log(data);
    console.log(data.status);

    if (data.status === 200) {
      setUsername(data["username"]);
      console.log(data["username"]);
      console.log("logged in user is ", username);

      Swal.fire({
        title: "Success!",
        text: "Logged in Successfully!!",
        icon: "success",
      });

      // window.alert('Logged in Successfully!!')

      navigate("/sell");
    } else {
      setUsername(null);
      Swal.fire({
        title: "Error!",
        text: "Invalid Credentials or User Not Registered ",
        icon: "error",
      });

      // navigate("/Register");
    }
  };
  let LogOut = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log(data);
    console.log(data.status);

    if (data.status === 200) {
      setUsername(data["username"]);
      console.log(data["username"]);

      Swal.fire({
        title: "Success!",
        text: "Logged out Successfully!!",
        icon: "success",
      });

      // window.alert('Logged in Successfully!!')

      navigate("/");
    } else {
      let res = window.confirm("Are you sure you want to logout?");
      if (res === true) {
        Swal.fire({
          title: "Success!",
          text: "Logged out Successfully!!",
          icon: "success",
        });
        setUsername(null);
      } else {
        // alert("logout cancelled");
        navigate("/homepage");
      }

      navigate("/");
    }
  };
  //
  const contextValue = { username, LoginUser, LogOut };

  return (
    <>
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    </>
  );
};

export default MyContext;
