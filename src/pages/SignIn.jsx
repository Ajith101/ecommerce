import React from "react";
import Container from "../components/layout/Container";
import { InputField } from "./../components/inputForm/InputField";
import { useInputForms } from "../hooks/useInputForms";

const SignIn = () => {
  const { errorFields, handleChange, inputFields, setErrorField } =
    useInputForms({
      email: "",
      password: "",
    });

  const formValid = () => {
    let formEroors = { ...errorFields };
    if (
      inputFields.email === "" ||
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        inputFields.email
      )
    ) {
      formEroors.email = "Email required";
    } else formEroors.email = "";
    if (inputFields.password === "") {
      formEroors.password = "Password required";
    } else formEroors.password = "";
    setErrorField(formEroors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formValid();
  };
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-[90%] flex-col gap-7 bg-slate-200 p-[15px] sm:w-[450px]"
        >
          <h2 className="mb-[10px] text-[26px] font-[500]">Sign In</h2>
          <div>
            {errorFields.email && (
              <h2 className="text-red-600">{errorFields.email}</h2>
            )}
            <InputField
              handleChange={handleChange}
              datas={{
                type: "text",
                name: "email",
                placeholder: "Email or Phone Nmber",
              }}
            />
          </div>
          <div>
            {errorFields.password && (
              <h2 className="text-red-600">{errorFields.password}</h2>
            )}
            <InputField
              handleChange={handleChange}
              datas={{
                type: "password",
                name: "password",
                placeholder: "Password",
              }}
            />
          </div>
          <button className="w-full rounded-[4px] bg-slate-800 py-[15px] text-center text-white">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
