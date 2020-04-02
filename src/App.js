import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Nabar";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

    const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    const onHandleSearch = () => {
      fetchData();
    }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const data = response._embedded?.episodes;

  return (
    <>
      <Navbar />
      <div className="main">
        <Search setQuery={setQuery} onHandleSearch={onHandleSearch} />
        {
          data?.map((data, index) => (
            <Card key={index} data={data} />
          ))
        }
      </div>
    </>
  );
}

export default App;
