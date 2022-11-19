import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
   // const url = process.env.REACT_APP_OMDB_URL
   // const apikey = process.env.REACT_APP_OMDB_APIKEY
   // =====
   const endpoint = 'https://www.omdbapi.com/?'
   const apikey = 'apikey=ea9f72mr'
   const url = `${endpoint}${apikey}`
   // =====
   const [movie, setMovie] = useState([])
   async function fetchMovies(query) {
      const param = new URLSearchParams()
      param.append('s', query)
      return await fetch(`${url}&${param}`)
      .then(res => res.json())
      .then(body => {
         if (body.Response == 'True') {
            setMovie(body.Search)
         } else {
            content.innerHTML = `<h3>${body.Error}</h3>`
         }
      })
   }
   const enter = (key) => {
      if (key.code == 'Enter') {
         if (search.value.length >= 3) {
            fetchMovies(search.value)
         }
      }
   }
   const getMovies = () => {
      if (search.value.length >= 3) fetchMovies(search.value)
   }
   const content = useRef()
   return (
      <>
         <nav>
            <div>
               <h1>Search Movie Sederhana</h1>
               <ul>
                  <li><input type="search" placeholder='search..' name="search" id="search" onKeyUp={enter} /></li>
                  <li><button onClick={getMovies}>Search</button></li>
               </ul>
            </div>
         </nav>
         <div className="nav-height"></div>
         <div id="container">
            <h1>Hasil pencarian : </h1>
            <figcaption>Note: jumlah karakter harus melebihi 2!</figcaption><hr />
            <div id="content">
               {movie.map(value => {
                  return (
                     <div id='card' ref={content} key={value.imdbID}>
                        <img src={value.Poster} alt={value.Title} className='poster' />
                        <div>
                           <h3 className='title'>{value.Title}</h3>
                           <p className='year'>Tanggal rilis: {value.Year}</p>
                           <p className='type'>Tipe: {value.Type}</p>
                           <button className='details'>Lengkap</button>
                        </div>
                     </div>
                  )
                })}
            </div>
         </div>
      </>
   )
}
export default App
