import Navbar from '../../components/Navbar';
import React from 'react';


export default function Home(){
    const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <main className=' w-screen h-screen'>
    <Navbar></Navbar>
    <p className=' text-red-400'>{!data ? "Loading..." : data}</p>
    </main>
  )
}
