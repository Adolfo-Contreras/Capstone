import React, { useState, useEffect } from 'react';


const Home = ()=>{
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <p>{!data ? "Loading..." : data}</p>
  )
}

export default Home