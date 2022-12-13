import Content from './components/Content'
import './App.css'
import github from './assets/logo-white.png'
import share from './assets/share.png'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState, useRef } from 'react'

function App() {
    const [welcome, setWelcome] = useState(true)
    const [slide, setSlide] = useState(false)
    const [movie, setMovie] = useState('')
    const value = useRef()

    const change = (e) => {
        setMovie(e.target.value)
    }
    const enter = (key) => {
        if (key.keyCode == 13) {
            if (movie.length >= 3) {
                setWelcome(false)
            }
        }
    }
    const redirect = () => {
        if (movie.length >= 3) {
            setWelcome(false)
        }
    }
    return (
        <>
            {welcome ? (
                <div className='wrapper'>
                    <div className='bg-img'>
                        <div className='nav'>
                            <h2>-RMS?-</h2>
                            <div>
                                <span>
                                    <a
                                        href='https://github.com/radityaseptian'
                                        target='_blank'
                                        title='Github'
                                    >
                                        <img
                                            src={github}
                                            alt='Github'
                                            className='github'
                                        />
                                        <img
                                            src={share}
                                            alt='Menuju Link'
                                            className='share'
                                        />
                                    </a>
                                </span>
                                {!slide ? (
                                    <MenuIcon onClick={() => setSlide(true)} />
                                ) : (
                                    <CloseIcon
                                        onClick={(e) => setSlide(false)}
                                    />
                                )}
                            </div>
                        </div>
                        {slide && (
                            <div id='menu'>
                                <h2>About</h2>
                                <p>
                                    Pencarian movie sederhana menggunakan api{' '}
                                    <a
                                        href='https://omdbapi.com/'
                                        title='omdbapi.com'
                                        target='_blank'
                                    >
                                        omdbapi.com
                                    </a>
                                    , dibuat menggunakan;
                                </p>
                                <div>
                                    <ul>
                                        <li>React js</li>
                                        <li>Vanilla css</li>
                                    </ul>
                                    <div>
                                        <p>Author &rarr; RMS15</p>
                                        <p>
                                            Github &rarr;{' '}
                                            <a href='https://github.com/radityaseptian' target='_blank' title='Github'>
                                                github.com/radityaseptian
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='content'>
                            <h1>TODOLIST PENCARIAN MOVIE DENGAN REACT JS</h1>
                            <p>Masukan movie yang ingin dicari</p>
                            <input
                                id='input'
                                type='text'
                                ref={value}
                                placeholder='Masukan judul movie..'
                                onChange={change}
                                onKeyUp={enter}
                            />
                            <button onClick={redirect}>Search</button>
                        </div>
                    </div>
                </div>
            ) : (
                <Content movie={movie} />
            )}
        </>
    )
}
export default App
