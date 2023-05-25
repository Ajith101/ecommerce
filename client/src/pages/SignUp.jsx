import React, { useState } from "react";
import { InputField } from "../components/inputForm/InputField";
import { useInputForms } from "../hooks/useInputForms";

const SignUp = () => {
  const { handleChange, inputFields, errorFields, setErrorField } =
    useInputForms({
      email: "",
      firstName: "",
      password: "",
      cPassword: "",
    });

  // formvalidation Logic
  const formValid = () => {
    let errValues = { ...errorFields };
    if (
      inputFields.email === "" ||
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        inputFields.email
      )
    ) {
      errValues.email = "Email required";
    } else errValues.email = "";
    if (inputFields.firstName.length < 3) {
      errValues.firstName = "Morethan 3 Charactor required";
    } else errValues.firstName = "";
    if (inputFields.password === "" || inputFields.password.length < 6) {
      inputFields.password === ""
        ? (errValues.password = "Password required")
        : (errValues.password = "More Than 6 Charector required");
    } else errValues.password = "";
    if (inputFields.cPassword !== inputFields.password) {
      inputFields.cPassword === ""
        ? (errValues.cPassword = "Enter password")
        : (errValues.cPassword = "password not Matched");
    } else errValues.cPassword = "";
    setErrorField(errValues);
  };

  // form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    formValid();
  };
  return (
    <>
      {/* <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-[450px] flex-col gap-[15px] rounded-[4px] bg-slate-200 p-[15px]"
        >
          <h2 className="mb-[10px] text-[26px] font-[500]">Sign Up</h2>
          {errorFields.email && <h2>{errorFields.email}</h2>}
          <InputField
            handleChange={handleChange}
            datas={{
              type: "text",
              name: "email",
              placeholder: "Email or Phone Nmber",
            }}
          />
          {errorFields.firstName && <h2>{errorFields.firstName}</h2>}
          <InputField
            handleChange={handleChange}
            datas={{
              type: "text",
              name: "firstName",
              placeholder: "First Name",
            }}
          />
          {errorFields.password && <h2>{errorFields.password}</h2>}
          <InputField
            handleChange={handleChange}
            datas={{
              type: "password",
              name: "password",
              placeholder: "Password",
            }}
          />
          {errorFields.cPassword && <h2>{errorFields.cPassword}</h2>}
          <InputField
            handleChange={handleChange}
            datas={{
              type: "password",
              name: "cPassword",
              placeholder: "Confirm Password",
            }}
          />

          <button
            type="submit"
            className="w-full rounded-[4px] bg-slate-800 py-[15px] text-center text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </div> */}

      <div className="flex h-screen w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-[90%] flex-col gap-7 bg-slate-200 p-[15px] sm:w-[450px]"
        >
          <h2 className="mb-[10px] text-[26px] font-[500]">Sign Up</h2>
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
            {errorFields.firstName && (
              <h2 className="text-red-600">{errorFields.firstName}</h2>
            )}
            <InputField
              handleChange={handleChange}
              datas={{
                type: "text",
                name: "firstName",
                placeholder: "First Name",
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
          <div>
            {errorFields.cPassword && (
              <h2 className="text-red-600">{errorFields.cPassword}</h2>
            )}
            <InputField
              handleChange={handleChange}
              datas={{
                type: "password",
                name: "cPassword",
                placeholder: "Confirm Password",
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

export default SignUp;
