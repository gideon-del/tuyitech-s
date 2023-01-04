import React from "react";

const Loader = () => {
  return (
    <div className="fixed w-screen h-screen -z-10 flex justify-center items-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
