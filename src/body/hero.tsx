import React from "react";
import Logo from "../assets/mart.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="md:pt-56 pt-40 pb-40 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto  text-center md:text-left"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="max-w-2xl text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Ulonnam Ugochukwu Martins</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
            Full Stack Developer
          </h2>
          <p className=" text-gray-400 text-lg mb-8 max-w-lg">
            I build end-to-end solutions from responsive front-end interfaces
            using React and TypeScript to robust back-end systems with Node.js
            and databases. With expertise spanning both client and server-side
            development, I deliver seamless user experiences backed by scalable
            architecture.
          </p>
        </div>
        <div>
          <div className="hidden sm:block">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 right-30 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <img
            src={Logo}
            alt="Logo"
            className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
