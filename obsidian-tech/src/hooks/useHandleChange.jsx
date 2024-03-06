import React, { useState } from "react";

export const useHandleChange = ({ initialState }) => {
  const [data, setData] = useState({ initialState });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prevState) => ({
        ...prevState,
        [name]: value
    }))
  }
  return {data, setData ,handleChange};
};
