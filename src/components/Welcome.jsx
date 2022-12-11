import './style/Welcome.css'
import github from '../assets/logo-white.png'
import share from '../assets/share.png'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Welcome() {
    const [slide, setSlide] = useState(true)
    return (
        <>
            <div className='wrapper'>
                <div className='bg-img'>
                    <div className='nav'>
                        <h2>-RMS?-</h2>
                        <div>
                            <span>
                                <a href='github.com/radityaseptian/react-search-movie-sederhana' target='_blank'>
                                    <img src={github} alt='Github' className='github' />
                                    <img src={share} alt='Menuju Link' className='share' />
                                </a>
                            </span>
                            {slide ? <MenuIcon onClick={() => setSlide(false)} /> : <CloseIcon onClick={() => setSlide(true)} />}
                        </div>
                    </div>
                    <div id='menu'>
                        
                    </div>
                    <div className='content'>
                        <h1>TODOLIST PENCARIAN MOVIE DENGAN REACT JS</h1>
                        <p>Masukan movie yang ingin dicari</p>
                        <input
                            type='text'
                            placeholder='Masukan judul movie..'
                        />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome
