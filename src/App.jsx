import { useEffect, useRef, useState } from 'react'
import { Pagination, Grid } from '@mui/material'
import './App.css'

function App() {
    const endpoint = 'https://www.omdbapi.com/?'
    const apikey = 'apikey=ea93b7ec'
    const url = `${endpoint}${apikey}`
    // =====
    const [movie, setMovie] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    async function fetchMovies(query) {
        const param = new URLSearchParams()
        param.append('s', query)
        return await fetch(`${url}&${param}`)
            .then((res) => res.json())
            .then((body) => {
                body.Response == 'True' ? setMovie(body.Search) : setMovie(body)
                body.Response == 'True'
                    ? setTotalResults(body.totalResults)
                    : ''
            })
    }
    const enter = (key) => {
        if (key.code == 'Enter') {
            if (search.value.length >= 3) {
                pagination.current.className = 'MuiPagination-root MuiPagination-text css-1oj2twp-MuiPagination-root'
                fetchMovies(search.value)
            }
        }
    }
    const getMovies = () => {
        if (search.value.length >= 3) {
            pagination.current.className = 'MuiPagination-root MuiPagination-text css-1oj2twp-MuiPagination-root'
            fetchMovies(search.value)
        }
    }
    window.onscroll = () => {
        if (
            document.documentElement.scrollTop > 1 ||
            document.body.scrollTop > 1
        ) {
            document.querySelector('nav').style.boxShadow =
                '0 1px 4px rgba(0, 0, 0, 0.407)'
        } else {
            document.querySelector('nav').style.boxShadow = 'none'
        }
    }
    const pagination = useRef()
    useEffect(() => {
        pagination.current.className = 'MuiPagination-root MuiPagination-text css-1oj2twp-MuiPagination-root hide'
    }, [])
    return (
        <>
            <nav>
                <div>
                    <h1>Pencarian Movie Sederhana</h1>
                    <ul>
                        <li>
                            <input
                                type="search"
                                placeholder="Masukan judul movie.."
                                name="search"
                                id="search"
                                onKeyUp={enter}
                            />
                        </li>
                        <li>
                            <button onClick={getMovies}>Search</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="nav-height"></div>
            <div id="container">
                <h1>Hasil pencarian : </h1>
                <figcaption>Note: jumlah karakter harus melebihi 2!</figcaption>
                <hr />
                <div id="content">
                    {movie.Error ? (
                        <h1>{movie.Error}</h1>
                    ) : (
                        movie.map((value) => {
                            return (
                                <div id="card" key={value.imdbID}>
                                    <img
                                        src={value.Poster}
                                        alt={value.Title}
                                        className="poster"
                                    />
                                    <div>
                                        <h3 className="title">{value.Title}</h3>
                                        <p className="year">
                                            Tanggal rilis: {value.Year}
                                        </p>
                                        <p className="type">
                                            Tipe: {value.Type}
                                        </p>
                                        <button className="details">
                                            Lengkap
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
                <Pagination
                    ref={pagination}
                    count={
                        movie.Search || totalResults >= 100
                            ? 10
                            : Math.ceil(totalResults / 10)
                    }
                    shape="rounded"
                />
            </div>
        </>
    )
}
export default App
