import React from "react";

export const InputField = ({ datas, handleChange }) => {
  const { type, name, placeholder } = datas;
  return (
    <>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-[4px] px-[12px] py-[8px] outline-none"
      />
    </>
  );
};
