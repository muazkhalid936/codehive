import React from "react";

const OurProcess = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center  container mx-auto text-white text-center text-6xl font-extrabold">
      <p className="text-4xl font-bold">Our Process</p>

      <div
        className="h-[200px] md:h-[400px] flex justify-center items-center gap-10 rounded-xl "
        style={{
          backgroundImage: "url('/services/bg/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex  w-1/2 font-medium text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quaerat vero ex animi magni minima laudantium repellendus sed deserunt
          at!
        </div>
        <div className="flex justify-center w-1/2">
          <img
            src="/services/1.jpg"
            className="w-[330px] h-[180px] md:w-[430px] md:h-[350px] border-2 border-blue-300 rounded-2xl"
            alt="process"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
