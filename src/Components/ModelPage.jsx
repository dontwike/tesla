import React from "react";
import "../styles/home.css";

const ModelPage = (props) => {
    return (
        <div className={`${props.class} w-screen h-screen bg-no-repeat bg-cover`}>
            <div className="content">
                <div className="flex flex-col w-screen justify-center items-center mt-16 pt-24">
                    <h1 className="text-4xl font-semibold items-center mb-2">
                        {props.name}
                    </h1>
                    <p className="mt-2 underline">{props.description}</p>
                </div>

                <div className=" specs flex flex-row justify-center text-white">
                    {props.range &&
                        <div className="mx-16 text-2xl font-extrabold">
                            <h1>{props.range}</h1>
                            <p className="text-xs font-semibold mt-2">Range (EPA est.)</p>
                        </div>
                    }
                    {props.time &&
                        <div className="mx-16 text-2xl font-extrabold">
                            <h1>{props.time}</h1>
                            <p className="text-xs font-semibold mt-2">0-60 mph*</p>
                        </div>
                    }
                    {props.space &&
                        <div className="mx-16 text-2xl font-extrabold">
                            <h1>{props.space}</h1>
                            <p className="text-xs font-semibold mt-2">Cargo Space</p>
                        </div>
                    }
                    {props.speed &&
                        <div className="mx-16 text-2xl font-extrabold">
                            <h1>{props.speed}</h1>
                            <p className="text-xs font-semibold mt-2">Top Speed†</p>
                        </div>
                    }   
                    {props.mile &&
                        <div className="mx-16 text-2xl font-extrabold">
                            <h1>{props.mile}</h1>
                            <p className="text-xs font-semibold mt-2">1/4 Mile</p>
                        </div>
                    }        
                    {props.power &&
                        <div className="mx-16 text-2xl font-extrabold">
                            <h1>{props.power}</h1>
                            <p className="text-xs font-semibold mt-2">Peak Power</p>
                        </div>
                    }        {props.price &&
                        <div className="mx-16 text-2xl font-extrabold">
                            <h1>{props.price}</h1>
                            <p className="text-xs font-semibold mt-2">After Tax Credit</p>
                        </div>
                    }
                </div>

                <div className="highlighted-specs-MP w-screen flex flex-row justify-center items-center text-center text-white pt-8">
                    {props.button1 && (
                        <div className="mr-5">
                            <button className="bg-white text-gray-700 py-2 px-24 text-base font-semibold rounded-md tracking-wider hover:opacity-80">
                                {props.button1}
                            </button>
                        </div>
                    )}
                    {props.button2 && (
                        <div className="mr-5">
                            <button className="bg-black/60 py-2 px-24 text-base font-semibold rounded-md tracking-wider hover:border-white hover:border-solid hover:border-2">
                                {props.button2}
                            </button>
                        </div>
                    )}
                    {/* { props.button3 &&
          <div className="mr-5">
            <button className="bg-black py-2 px-24 text-lg font-semibold rounded-md tracking-wider mt-9 ml-8">{props.button3}</button>
          </div>
          } */}
                </div>

                <div className="flex justify-center">
                    <p className="text-xs mt-5 text-white">{props.disclaimer}</p>
                </div>
            </div>
        </div>
    );
};

export default ModelPage;
