import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://media.istockphoto.com/id/513320180/photo/word-react-on-wood-planks.jpg?s=1024x1024&w=is&k=20&c=Vj4ZkwHajTInJVjNnvmBy149wX9JSFceXcWXzLGKv_I="
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React development is driven by passionate developers who leverage
              its powerful tools to create dynamic and engaging user
              experiences. With a strong focus on component reusability,
              performance optimization, and community support, React empowers
              developers to build innovative web applications that are fast,
              scalable, and highly interactive, pushing boundaries in modern web
              development
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
