import './Design.css'
import code2 from '../assets/code2.png'
import chrome from '../assets/chrome.png'
import firefox from '../assets/firefox.png'


function Design() {
    return (
        <div className="section2">
            <h2 className='heading2'>Remote-first. Secure by design.</h2>
            <img src={code2} alt="code2"/>
            <p className="text2">You no longer need an over-powered laptop to code, Gitpod works just as <br /> smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes <br /> all source code and never stores it on insecure machines and networks.</p>
            <div className="btn-wrapper2">
                <button className="btn4"><img src={chrome} alt="chrome logo"/>Chrome Extension</button>
                <button className="btn4"><img src={firefox} alt="firefox logo"/>Firefox Extension</button>
            </div>
        </div>
    )
}

export default Design;