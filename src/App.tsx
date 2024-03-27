import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="container">
        <div className="w-3/4 flex flex-col gap-6 relative">
          {" "}
          <p className="text-4xl">Field sales software for humans</p>
          <p className="text-2xl">
            Supersales enables your team to perform at the highest level, yet
            stay human. With a sleek design and an easy-to-navigate app.
          </p>
          <div className="flex flex-row gap-6 justify-center">
            <button
              type="button"
              className="font-bold text-black text-2xl py-2 px-[33px] rounded-full border-black bg-yellow-400 hover:bg-yellow-500 "
              style={{
                borderWidth: "1px 1px 6px 1px",
              }}
            >
              Book a demo
            </button>
            <button type="button" className="flex items-center gap-1">
              <img alt="play" src={require("./assets/images/play.png")} />
              See how it works
            </button>
          </div>
          <div className="bg-red-100 w-full relative">
            <img
              className="cssanimation fadeInBottom border rounded-2xl relative"
              style={{ borderColor: "#414141" }}
              src={require("./assets/images/catalog.jpg")}
              alt="catalog"
            />
            <img
              className="cssanimation fadeInBottom border rounded-full absolute z-50 w-24"
              style={{ borderColor: "#414141", top: "38%", left: -50 }}
              src={require("./assets/images/people_1.png")}
              alt="catalog"
            />
            <img
              className="cssanimation fadeInBottom border rounded-full w-24"
              src={require("./assets/images/people_2.png")}
              style={{ borderColor: "#414141" }}
              alt="catalog"
            />
            <img
              className="cssanimation fadeInBottom border rounded-full w-24"
              style={{ borderColor: "#414141" }}
              src={require("./assets/images/people_3.png")}
              alt="catalog"
            />
          </div>
          <p>Trusted by leading companies</p>
        </div>
        <div className="flex gap-8 items-center">
          <img
            alt="company_1"
            src={require("./assets/images/company_1.png")}
            className="h-16"
          />
          <img
            alt="company_2"
            src={require("./assets/images/company_2.png")}
            className="h-16"
          />
          <img
            alt="company_3"
            src={require("./assets/images/company_3.png")}
            className="h-16"
          />
          <img
            alt="company_4"
            src={require("./assets/images/company_4.png")}
            className="h-16"
          />
          <img
            alt="company_5"
            src={require("./assets/images/company_5.png")}
            className="h-16"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
