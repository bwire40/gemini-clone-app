import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

// AIzaSyCVqYOEU1hriOFPYfo6f_cbO7s3vB494fo

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    input,
    resultData,
    setInput,
  } = useContext(Context);

  console.log(recentPrompt);
  return (
    <div className="flex flex-1 flex-col relative min-h-screen w-full">
      {/* nav */}
      <div className="flex items-start justify-between text-xl p-[20px] text-gray-400 w-full">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
      </div>
      {/* main container */}
      <div className="max-w-4xl mx-auto flex gap-6 flex-col">
        {/* top */}

        {!showResult ? (
          <div>
            <div className="greet my-14 mx-0 text-[50px] text-gray-300 font-semibold p-4">
              <p>
                <span>Hello, Bwire.</span>
              </p>
              <p>How can i help you today?</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5 mb-10">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img src={assets.compass_icon} alt="compass" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          </div>
        ) : (
          <div className="result  py-0 px-1 max-h-[70vh] overflow-y-auto">
            <div className="result-title my-4 mx-0 flex items-center gap-5">
              <img src={assets.user_icon} alt="user" className="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data flex items-start gap-5">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading ? (
                <div className="loader w-full flex flex-col gap-3">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="w-full mx-auto flex gap-6 flex-col">
          <div className="search-box w-full flex items-center justify-between px-5 bg-gray-100 rounded-3xl">
            <input
              type="text"
              placeholder="Ask Gemini"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="border-2 w-full"
            />
            <div className="flex gap-2 items-center">
              <img src={assets.gallery_icon} alt="gallary" />
              <img src={assets.mic_icon} alt="mic" />
              <img src={assets.send_icon} alt="send" onClick={() => onSent()} />
            </div>
          </div>

          {/* <div className="bottom-0 py-2.5 px-5">
            <p className="bottom-info text-sm my-2 mx-auto font-normal max-w-2xl">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
