import React from "react";
import Header from "../Components/Header";
import ModelHome from "../Components/ModelHome";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="Home">
      <Header />

      <ModelHome
        class="model3"
        name="Model 3"
        price="Starting at $32,740"
        description="After Federal Tax Credit"
        button1="Explore Inventory"
        button2="Custom Order"
      />
      <ModelHome
        class="modelY"
        name="Model Y"
        price="Starting at $40,240"
        description="After Federal Tax Credit"
        button1="Explore Inventory"
        button2="Custom Order"
      />
      <ModelHome
        class="modelS"
        name="Model S"
        link="Explore Inventory"
        button1="Custom Order"
        button2="Demo Drive"
      />
      <ModelHome
        class="modelX"
        name="Model X"
        link="Explore Inventory"
        button1="Custom Order"
        button2="Demo Drive"
      />
      <ModelHome
        name="Solar Panels"
        description="Schedule a Virtual Consultation"
        button1="Order Now"
        button2="Learn More"
        class="solarPanels"
      />
      <ModelHome
        name="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        button1="Order Now"
        button2="Learn More"
        class="solarRoof"
      />

      <ModelHome name="Accessories" class="accessories" button3="Shop Now"/>
    </div>
  );
};

export default Home;
