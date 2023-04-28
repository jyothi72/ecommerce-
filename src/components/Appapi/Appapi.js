import React, { useEffect, useState ,useCallback} from "react";

const Appapi = () => {
  const [movie, setmovie] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [error, seterror] = useState(null);
 
  const  fetchmoviehandle=useCallback(async() =>{
    setisloading(true);
    seterror(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("something is worng");
      }
      const data = await response.json();

      const transformedmovies = data.results.map((movied) => {
        return {
          id: movied_episode_id,
          title: movied.title,
          opening: movied.opening_crawl,
        };
      });
      setmovie(transformedmovies);
    } catch (error) {
      seterror(error.message);
    }
    setisloading(false);
  },[])
  useEffect(()=>{
    fetchmoviehandle()
  },[fetchmoviehandle])
  let content = <p>found no movies</p>;
  if (movie.length > 0) {
    content = <moviesList movies={movie} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isloading) {
    content = <p>loading....</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviehandle}>fetchmovie</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Appapi;
