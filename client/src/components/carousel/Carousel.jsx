import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ productList }) => {
  const randomNumber = Math.ceil(Math.random() * productList.length - 1);
  const [currentPAge, setCurrentPage] = useState(randomNumber);
  const navigate = useNavigate();

  useEffect(() => {
    const intervel = setInterval(() => {
      let randomNum = Math.ceil(Math.random() * productList.length - 1);
      setCurrentPage((pre) => (pre = randomNum));
    }, 3000);

    return () => clearInterval(intervel);
  }, []);

  return (
    <div className="w-full h-[250px] sm:h-[320px]">
      <img
        onClick={() => navigate(`/products/${productList[currentPAge]?.id}`)}
        src={productList[currentPAge]?.image}
        className="w-full h-full object-cover cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default Carousel;
