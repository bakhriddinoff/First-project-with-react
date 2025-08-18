import './Footer.css';
import logo from '../assets/Gitpod.png'
import gityellow from '../assets/gityellow.png';
import chat from '../assets/chat.png';
import twitter from '../assets/twitter.png';


function Footer() {
    return (
        <div className="footer">
            <div className="ul-wrapper">
                <ul className='ul-footer'>
                    <h4>Gitpod</h4>
                    <li><a className='link-footer' href="#">Home</a></li>
                    <li><a className='link-footer' href="#">Features</a></li>
                    <li><a className='link-footer' href="#">Pricing</a></li>
                    <li><a className='link-footer' href="#">Changelog</a></li>
                    <li><a className='link-footer' href="#">Self-Hosted</a></li>
                    <li><a className='link-footer ft' href="#">Gitpod vs Github <br /> Codescpaces</a></li>
                    <li><a className='link-footer' href="#">Status</a></li>
                </ul>
                <ul className='ul-footer'>
                    <h4>Developer</h4>
                    <li><a className='link-footer' href="#">Getting started</a></li>
                    <li><a className='link-footer' href="#">Screencasts</a></li>
                    <li><a className='link-footer' href="#">Blog</a></li>
                    <li><a className='link-footer' href="#">Documentation</a></li>
                    <li><a className='link-footer' href="#">Report a bug</a></li>
                    <li><a className='link-footer' href="#">Community</a></li>
                </ul>
                <ul className='ul-footer'>
                    <h4>Company</h4>
                    <li><a className='link-footer' href="#">About</a></li>
                    <li><a className='link-footer' href="#">Careers</a></li>
                    <li><a className='link-footer' href="#">Contact</a></li>
                    <li><a className='link-footer' href="#">Media Kit</a></li>
                </ul>
                <ul className='ul-footer'>
                    <h4>Legal</h4>
                    <li><a className='link-footer' href="#">Imprint</a></li>
                    <li><a className='link-footer' href="#">Terms of Service</a></li>
                    <li><a className='link-footer' href="#">Privacy Policy</a></li>
                </ul>

            </div>
<hr />
            <div className="bottom-footer">
                <div className="left-footer">
                    <img src={logo} alt="logo"/>
                    <p>Copyright &copy; 2021Gitpod</p>
                </div>

                <div className="right-footer">
                    <img className='imgF' src={twitter} alt="twitter" />
                    <img className='imgF' src={gityellow} alt="gityellow" />
                    <img className='imgF' src={chat} alt="chat" />
                </div>
            </div>

        </div>
    )
}


export default Footer;