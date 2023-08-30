import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "./components/Navigation/Nav";
import Casts from "./components/Casts/Casts";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import axios from "axios";

function App() {

  const [people ,setPeople]=useState([]);
  useEffect(()=>{
    const fetchPeople=async()=>{
        const {data}= await  axios.get("/api/casts");
        setPeople(data);
    }

    fetchPeople();
  },[])

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = people.filter(
    (person) => person.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(people, selected, query) {
    let filteredPeople = people;

    // Filtering Input Items
    if (query) {
      filteredPeople = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredPeople = filteredPeople.filter(
        ({ category, education, proffesion, expirance, title }) =>
          category === selected ||
          education === selected ||
          proffesion === selected ||
          expirance === selected ||
          title === selected
      );
    }

    return filteredPeople.map(
      ({ _id, img, title, star, reviews }) => (
        <Card
          key={_id}
          id={_id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          
          
        />
      )
    );
  }

  const result = filteredData(people, selectedCategory, query);

  return (
    <>
    
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Casts result={result} />
    </>
  );
}

export default App;
