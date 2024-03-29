import React, { useState } from "react";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";
import GreetingHeader from "../../components/auth/GreetingHeader";
import { ValidateList, ValidationTypes } from "../../utils/helpers";
import axios from "axios";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login api call started
  const login = async (e) => {
    e.preventDefault();
    let validate_arr = [
      [email, ValidationTypes.Empty, "Please enter Email ID"],
      [email, ValidationTypes.Email, "Please enter valid Email ID"],
      [password, ValidationTypes.Empty, "Please enter Password"],
    ];
    let validate = await ValidateList(validate_arr);
    if (!validate) {
      return;
    }

    let obj = {
      email: email,
      password: password,
    };
    try {
      let resp = await axios.post(
        import.meta.env.VITE_API_URL + Endpoints.login,
        obj
      );
      if (resp && resp.data?.status === "success") {
        if (resp?.data?.access_token) {
          localStorage.setItem(
            "token",
            JSON.stringify(resp?.data?.access_token)
          );
          localStorage.setItem("userEmail", JSON.stringify(email))
          navigate("/dashboard");
        } else {
          toast.error(resp?.data?.message);
        }
      } else {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      if (e && e.response && e.response?.data?.message) {
        toast.error(e.response?.data?.message);
      }
    }
  };
  //login api call end

  return (
    <form onSubmit={login} className="flex flex-col gap-3 w-full">
      <GreetingHeader
        title="Welcome back!"
        subTitle='Log in to your "App Name" account'
      />
      <InputBox
        className="border-lightgray"
        label="Email Id"
        placeholder="Enter Email Id"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        className="border-lightgray"
        label="Enter Password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" className="bg-purple text-white h-[50px]">
        Log In
      </Button>
    </form>
  );
};

export default Login;
