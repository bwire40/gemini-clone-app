import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";

// AIzaSyCVqYOEU1hriOFPYfo6f_cbO7s3vB494fo

const Main = () => {
  return (
    <div className="flex flex-1 flex-col pb-[15vh] relative min-h-screen">
      {/* nav */}
      <div className="flex items-start justify-between text-xl p-[20px] text-gray-400 w-full">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
      </div>

      {/* main container */}
      <div className="max-w-4xl mx-auto">
        <div className="greet my-20 mx-0 text-[50px] text-gray-300 font-semibold p-4">
          <p>
            <span>Hello, Bwire.</span>
          </p>
          <p>How can i help you today?</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5 mb-10">
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={assets.compass_icon} alt="compass" />
          </div>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img src={assets.bulb_icon} alt="bulb" />
          </div>
          <div className="card">
            <p>
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex
            </p>
            <img src={assets.message_icon} alt="message" />
          </div>
          <div className="card">
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, Lorem ipsum dolor sit amet, consectetur
            </p>
            <img src={assets.code_icon} alt="code" />
          </div>
        </div>

        {/* main bottom */}
        <div className="main-bottom absolute bottom-0 max-w-[900px] py-2.5 px-5 mx-auto w-full">
          <div className="search-box flex items-center justify-between py2.5 px-5 gap-5 bg-gray-100 rounded-3xl">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter a promt here"
            />
            <div className="flex gap-3 items-center">
              <img src={assets.gallery_icon} alt="gallary" />
              <img src={assets.mic_icon} alt="mic" />
              <img src={assets.send_icon} alt="send" />
            </div>
          </div>
          {/* bottom info */}
          <p className="bottom-info text-sm my-4 mx-auto font-normal max-w-2xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
