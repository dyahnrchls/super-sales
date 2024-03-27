import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Avatar } from "./components/Avatar/Avatar";
import { Star } from "./components/Star/Star";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <div className="container">
        <div className="w-3/4 flex flex-col gap-6 relative">
          <div className="flex flex-col">
            <Star top={-50} left={-10} />
            <Star top={100} right={-10} hideImage />
            <Star top={2} right={-70} />
            <h1 className="font-bold text-primary text-4xl pb-6">
              Field sales software for humans
            </h1>
            <h2 className="text-primary text-xl">
              Supersales enables your team to perform at the highest level, yet
              stay human.
            </h2>
            <h2 className="text-primary text-xl pb-6">
              With a sleek design and an easy-to-navigate app.
            </h2>
            <div className="flex flex-row gap-6 justify-center">
              <button
                type="button"
                className="font-bold text-base text-primary py-2 px-[33px] rounded-full border-black bg-surface hover:bg-yellow-400 "
                style={{
                  borderWidth: "1px 1px 6px 1px",
                }}
              >
                Book a demo
              </button>
              <button
                type="button"
                className="flex items-center gap-1 text-base text-primary"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5 13.1962C16.1667 12.8113 16.1667 11.849 15.5 11.4641L11 8.86602C10.3333 8.48112 9.5 8.96225 9.5 9.73205L9.5 14.9282C9.5 15.698 10.3333 16.1791 11 15.7942L15.5 13.1962Z"
                    fill="#414141"
                  />
                </svg>
                See how it works
              </button>
            </div>
          </div>
          <div className="w-full relative">
            <img
              className="cssanimation fadeInBottom border rounded-2xl relative border-border-dark"
              src={require("./assets/images/catalog.jpg")}
              alt="catalog"
            />
            <Avatar
              alt="people1"
              src={require("./assets/images/people_1.png")}
              bgTitle="bg-success"
              title="Client"
              top={"10%"}
              right={-50}
            />
            <Avatar
              alt="people2"
              src={require("./assets/images/people_2.png")}
              bgTitle="bg-info"
              title="Sales"
              top={"50%"}
              left={-50}
              customClass="hide-image"
            />
            <Avatar
              alt="people3"
              src={require("./assets/images/people_3.png")}
              bgTitle="bg-warning"
              title="Sales Manager"
              top={"70%"}
              right={-50}
              widthTitle="w-40"
              customClass="hide-image"
            />
          </div>
          <p className="text-2xl text-primary">Trusted by leading companies</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex banner items-center no-scroll">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                alt={`company_${index + 1}`}
                src={require(`./assets/images/company_${index + 1}.png`)}
                className="h-16"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
