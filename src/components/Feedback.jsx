import './Feedback.css';
import contact from '../assets/contact.png';
import beard from '../assets/bearded.png';
import sunglass from '../assets/sunglass.png';
import gitlab from '../assets/gitlab.png';
import free from '../assets/free.png';
import dwave from '../assets/dwave.svg';
import google from '../assets/google.png';
import amazon from '../assets/amazon.png';
import facebook from '../assets/facebook.png';
import uber from '../assets/uber.png';
import openai from '../assets/openai.png';
import intel from '../assets/intel.png';
import theia from '../assets/theia.png';
import code from '../assets/code.png';
import geeks from '../assets/geeks.png';

function Feedback() {
    return (
        <div className="section3">
            <h2 className="heading2">Used by 400,000+ developers.</h2>
            <div className="feedback-wrapper">
                <div className="feedback-item">
                    <p className="text3">GitPod is incredibly cool.</p>
                    <p className="text3">In my opinion, this is a big step in open source <br /> software contribution. I'm excited to see <br /> where we go from here.</p>
                    <div className="bottom-side">
                        <img className='contact' src={contact} alt="contact"/>
                        <div className="text-wrapper">
                            <h3 className="headinger2">Ben Halpern</h3>
                            <p className="text4">Creator and CO-founder <span className='spn1'>@forem</span> and <br/> <span className='spn1'>@ThePracticalDev</span></p>
                        </div>
                    </div>
                </div>

                <div className="feedback-item">
                    <p className="text3">Let's say we were overwhelmed how smooth <br /> @gitpod workspaces creation & own Docker <br /> image for workspaces worked.</p>
                    <p className="text3">Plus, installing @code extensions from the <br /> store and integrating @gitlab CI. That blew <br /> my mind entirely, and that is hard ;</p>
                    <div className="bottom-side">
                        <img className='contact' src={beard} alt="contact"/>
                        <div className="text-wrapper">
                            <h3 className="headinger2">Michael Friedrich</h3>
                            <p className="text4">Developer Evangelist <span className='spn1'>@GitLab</span></p>
                        </div>
                    </div>
                </div>

                <div className="feedback-item">
                    <p className="text3">Look at any PR (pull request) in a full coding <br /> environment where you can edit, build, and <br /> test the PR code, by just prepending <br /> "gitpod.io#" to the PR URL. Super useful for <br /> reviewing/testing stuff without having to <br /> check it out locally!</p>
                    <div className="bottom-side">
                        <img className='contact' src={sunglass} alt="contact"/>
                        <div className="text-wrapper">
                            <h3 className="headinger2">Julius Volz</h3>
                            <p className="text4">Creator <span className='spn1'>@PrometheusIO</span></p>
                        </div>
                    </div>
                </div>

                <div className="feedback-item">
                    <p className="text3">GitPod is incredibly cool.</p>
                    <p className="text3">In my opinion, this is a big step in open source <br /> software contribution. I'm excited to see <br /> where we go from here.</p>
                    <div className="bottom-side">
                        <img className='contact' src={contact} alt="contact"/>
                        <div className="text-wrapper">
                            <h3 className="headinger2">Ben Halpern</h3>
                            <p className="text4">Creator and CO-founder <span className='spn1'>@forem</span> and <br/> <span className='spn1'>@ThePracticalDev</span></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="logo-wrapper">
                <img className='logos1' src={gitlab} alt=" gitlab logo"/>
                <img className='logos2' src={free} alt="free  logo"/>
                <img className='logos3' src={dwave} alt="dwave  logo"/>
                <img className='logos4' src={google} alt=" google logo"/>
                <img className='logos5' src={amazon} alt="amazon logo"/>
                <img className='logos6' src={facebook} alt="facebook logo"/>
                <img className='logos7' src={uber} alt="uber logo"/>
                <img className='logos8' src={openai} alt="openai logo"/>
                <img className='logos9' src={intel} alt="intel logo"/>
                <img className='logos10' src={theia} alt="theia logo"/>
                <img className='logos11' src={code} alt="code logo"/>
                <img className='logos12' src={geeks} alt="geeks logo"/>

            </div>
            
        </div> 
    )
}

export default Feedback;