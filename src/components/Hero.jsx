import './Hero.css'
import roomPhoto from '../assets/room.png'
import github from '../assets/github.png'
import gitlub from '../assets/gitlub.png'
import bitbucket from '../assets/bitbucket.png'

function Hero() {
    return( 
        <div className="hero container">
            <div className="left-side">
                <h1>Always <br /> ready to code</h1>
                <p className="text1">Spin up fresh, automated dev environments <br/> for each task, in the cloud, in seconds.</p>
                <div className="wrapper">
                    <div className="top-wrapper">
                        <button className="btn1">Try now</button>
                        <a className='textjon' href="#">Open a workspace.<br/> Start from any Git context</a>
                    </div>
                    <div className="bottom-wrapper">
                        <img className='logos' src={gitlub} alt="gitlub" />
                        <img className='logos' src={github} alt="github" />
                        <img className='logos' src={bitbucket} alt="bitbucket" />

                    </div>
                </div>
            </div>
            <div className="right-side">
                <img src={roomPhoto} alt="room Photo" />
            </div>
        </div>

        
    ) 
}





export default Hero;