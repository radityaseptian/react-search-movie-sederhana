import { useEffect, useRef, useState } from 'react'
import { Pagination } from '@mui/material'
import './style/Content.css'

function Content() {
    const endpoint = 'https://www.omdbapi.com/?'
    const apikey = 'apikey=ea93b7ec'
    const url = `${endpoint}${apikey}`
    // =====
    const [movie, setMovie] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [movieName, setMovieName] = useState('')

    async function fetchMovies(query, page = 1) {
        const param = new URLSearchParams()
        param.append('s', query)
        param.append('page', page)
        await fetch(`${url}&${param}`)
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
            if (movieName.length >= 3) {
                fetchMovies(movieName)
                pagination.current.className =
                    'MuiPagination-root MuiPagination-text css-1oj2twp-MuiPagination-root'
            }
        }
    }
    const getMovies = (e) => {
        if (movieName.length >= 3) {
            fetchMovies(movieName)
            pagination.current.className =
                'MuiPagination-root MuiPagination-text css-1oj2twp-MuiPagination-root'
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
    useEffect(() => {
        pagination.current.className =
            'MuiPagination-root MuiPagination-text css-1oj2twp-MuiPagination-root hide'
    }, [])
    const handleChange = (e) => {
        setMovieName(e.target.value)
    }
    const pagination = useRef()
    const dataChange = (e, num) => {
        fetchMovies(movieName, num)
    }
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
                                onChange={handleChange}
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
                {totalResults != 0 && <p id='result'>Total item ditemukan: {totalResults}</p>}
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
                    onChange={dataChange}
                    count={Math.ceil(totalResults / 10)}
                    shape="rounded"
                />
            </div>
        </>
    )
}
export default Content