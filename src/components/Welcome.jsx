import './style/Welcome.css'
import github from '../assets/name.png'
import share from '../assets/share.png'

function Welcome() {
    return (
        <>
            <div className='wrapper'>
                <div className='bg-img'>
                    <div className='nav'>
                        <h2>-RMS?-</h2>
                        <div>
                            <span>
                                <a href='github.com/radityaseptian/react-search-movie-sederhana'>
                                    <img src={github} alt='Github' className='github' />
                                    <img src={share} alt='Menuju Link' className='share' />
                                </a>
                            </span>
                            <span>Hamburger</span>
                        </div>
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
