import './Project.css'
import code from '../assets/img.png'

function Project() {
    return (
        <div className="section1">
            <h2 className='heading1'>Select project, <br/> start coding</h2>
            <div className="wrapper1">
                <div className="left">
                    <h3 className='headinger1'>Think CI/CD for dev environments</h3>
                    <p className="text1">We invented prebuilds so application code, configuration and <br /> infrastructure can all be stored as machine-executable code <br /> in your git repositories and applied to dev environments <br /> automatically and continuously.</p>
                    <div className="btn-wrapper">
                        <button className="btn2">More on prebuilds</button>
                        <button className="btn2 btn3">Documentation</button>
                    </div>
                </div>
                <div className="right">
                    <img className='img1' src={code} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Project;