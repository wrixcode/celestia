import { Instagram, Linkedin, Mail, Phone, Twitter } from "react-feather";
import Footerlogo from "../assets/images/footerlogo.svg"


const userful = [
    { "title": "Home", "href": "" },
    { "title": "About", "href": "" },
    { "title": "Events", "href": "" },
    { "title": "Team", "href": "" },
    { "title": "Contact", "href": "" },
    { "title": "Gallery", "href": "" },
]
const Footer = () => {
    return (
        <>

            {/* logo */}
            <div className="hidden md:block"> 
                <img src={Footerlogo} alt="footer" />
            </div>
            {/* content */}
            <div className="flex justify-between space-x-20">
                {/* useful links */}
                <div>
                    <h1 className="font-semibold text-2xl text-center pb-5">Useful links</h1>
                    <div className="border-l-4  border-white px-10 space-y-3">
                        {
                            userful.map((item, index) => (
                                <div key={index}>
                                    <a href={item.href} className="text-orange-500 hover:text-orange-800">{item.title}</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Get in touch */}
                <div>
                    <h1 className="font-semibold text-2xl text-start pb-5">Get in touch</h1>
                    <div className="border-l-4  border-white px-10 space-y-3">
                        <p className="text-sm">
                            Eranad Knowledge City Technical Campus, <br />
                            Cherukulam, Manjeri, Malappuram District, <br />
                            Kerala, Pin: 676122
                        </p>
                        
                        <div className="email flex space-x-4">
                          <Mail /> <p>celestia@ekc.edu.in</p>
                        </div>
                        <div className="phone flex space-x-4">
                           <Phone /> <p>+91 9074114876</p>
                        </div>
                        <p className="text-[20px] text-orange-500">Social media links</p>
                        <div className="social-media-icons flex space-x-10">
                            <a href="https://www.instagram.com/_celesti_a/" target="_blank"><Instagram/> </a>
                            <a href="#"  target="_blank"><Linkedin/></a>
                            <a href="#"  target="_blank"><Twitter/></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;