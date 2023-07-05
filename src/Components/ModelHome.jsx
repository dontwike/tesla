import React from "react";
import '../styles/home.css'

const ModelHome = (props) => {
  return (
    <div className={`${props.class} w-screen h-screen bg-cover bg-no-repeat overflow-y-hidden`}>
      <div className="content flex flex-col justify-center">
        <div className="heading flex flex-col w-screen items-center justify-center mt-16 pt-24">
          <h1 className="text-4xl font-semibold items-center mb-2">{props.name}</h1>
          <p className="mt-2">{props.price}</p>
          <a href={`${props.class}`} className="underline text-lg">{props.link}</a>
          <p>{props.description}</p>
        </div>

        <div className="highlighted-specs w-screen flex flex-row justify-center items-center text-center text-white">
        { props.button1 &&
          <div className="mr-5">
            <button className="bg-white text-gray-700 py-2 px-24 text-lg font-semibold rounded-md tracking-wider">{props.button1}</button>
          </div>
          }
          { props.button2 &&
          <div className="mr-5">
            <button className="bg-black/60 py-2 px-24 text-lg font-semibold rounded-md tracking-wider">{props.button2}</button>
          </div>
          }
          { props.button3 &&
          <div className="mr-5">
            <button className="bg-black py-2 px-24 text-lg font-semibold rounded-md tracking-wider mt-9 ml-8">{props.button3}</button>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ModelHome;
