import { useState } from "react";

export const useInputForms = (initalValue) => {
  const [inputFields, setInputFields] = useState(initalValue);
  const [errorFields, setErrorField] = useState(initalValue);

  const isFormValid = (event) => {
    let errors = { ...errorFields };
    let inputAllFields = { ...inputFields };
    const { name, value } = event.target;
    if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      errors.email = "Email required";
    } else errors.email = "";
    if (name === "firstName" && value.length < 3) {
      errors.firstName = "Morethan 3 Charactor required";
    } else errors.firstName = "";
    if (name === "password" && value.length < 6) {
      errors.password = "More Than 6 Charector required";
    } else errors.password = "";
    if (name === "cPassword" && value !== inputAllFields.password) {
      value === ""
        ? (errors.cPassword = "Enter password")
        : (errors.cPassword = "password not Matched");
    } else errors.cPassword = "";
    setErrorField((pre) => ({ ...pre, [name]: errors[name] }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputFields((pre) => ({ ...pre, [name]: value }));
    isFormValid(event);
  };

  return { handleChange, inputFields, errorFields, setErrorField };
};
