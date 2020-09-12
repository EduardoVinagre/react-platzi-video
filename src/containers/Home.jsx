import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist && initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends &&
            initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
        </Carousel>
      </Categories>

      {initialState.originals && (
        <Categories title="Especiales de Platzi Video">
          <Carousel>
            {initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
