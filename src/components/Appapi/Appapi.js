import React, { useState } from 'react'


const Appapi = () => {
    const[movie,setmovie]=useState([])
    const[isloading,setisloading]=useState(false)
    async function fetchmoviehandle(){
        setisloading(true)
     const response= await fetch("https://swapi.dev/api/films/") 
     const data=await response.json()
        const transformedmovies=data.results.map(movied=>{
                return{
                    id:movied_episode_id,
                    title:movied.title,
                    opening:movied.opening_crawl
                }
            })
           setmovie(transformedmovies);
           setisloading(false)
        }
    
  return (
    <React.Fragment>
        <section>
        <button onClick={fetchmoviehandle}>fetchmovie</button>
        </section>
        <section>
           {!isloading&&movie.length>0 &&<moviesList movies={movie}/>}
           {!isloading&&movie.length===0&&<p>no movies to show</p>}
           {isloading&& <p>loading.........</p>}
        </section>
         </React.Fragment>
  )
}

export default Appapi