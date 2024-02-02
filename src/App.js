import logo from './logo.svg';
import './App.css';
import { FaLocationDot ,FaMobileScreen,FaFacebookF,FaTwitter ,FaLinkedinIn  ,FaInstagram} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSearch,FaStar  } from "react-icons/fa";

import i1 from './image/logo.png'
import i2 from './image/1.jpg'
import i3 from './image/2.png'
import i4 from './image/3.jpg'
import i5 from './image/1.svg'
import i6 from './image/2.svg'
import i7 from './image/3.svg'
import i8 from './image/4.svg'
import i9 from './image/5.svg'
import i10 from './image/6.svg'
import i11 from './image/4.jpg'
import i12 from './image/6.jpg'
import i13 from './image/6.jpg'
import i14 from './image/7.jpg'
import i15 from './image/8.jpg'
import i16 from './image/9.jpg'
import i17 from './image/10.jpg'
import i18 from './image/11.jpg'
import i19 from './image/12.jpg'
import i20 from './image/13.jpg'
import i21 from './image/14.jpg'
import i22 from './image/15.jpg'
import i23 from './image/16.jpg'
import i24 from './image/17.jpg'
import i30 from './image/c1.png'
import i31 from './image/c2.png'
import i32 from './image/c3.png'
import i33 from './image/c4.png'
import i34 from './image/c5.png'
import i35 from './image/logo2.png'

// link
  // https://cutesolution.com/html/techSoft/#

function App() {
  return (
  
    <>
      {/* nav bar */}
     <div className='nav-bar'>
        <div className="container d-flex">
          <div className="left-nav ">
              <h1><FaLocationDot style={{marginRight : '7px'}} />  526 Melrose Street,New York.</h1>
              <h1><MdEmail style={{marginRight : '7px'}}/>info@example.com</h1>
              <h1><FaMobileScreen style={{marginRight : '7px'}} />+505 307 222-33</h1>
          </div>
          <div className="right-nav d-flex">
            <h1><FaFacebookF /></h1>
            <h1><FaTwitter /></h1>
            <h1><FaLinkedinIn /></h1>
            <h1><FaInstagram /></h1>
          </div>
        </div>
     </div>

     {/* menu bar */}

     <div className='menu-bar'>
      <div className="container d-flex">
        <div className="left-menu">
          <img src={i1} />
        </div>
        <div className="center-menu">
          <div className="menu d-flex">
              <h1>Home</h1>
              <h1>About Us</h1>
              <h1>Services</h1>
              <h1>Project</h1>
              <h1>Pages</h1>
              <h1>Blog</h1>
              <h1>Contact</h1>
          </div>
        </div>
        <div className="right-menu">
          <div className=''>
            <i><FaSearch /></i>
            <button> Get It Support</button>
          </div>
        </div>
      </div>
     </div>

    <div className='slider'>

      <img src={i2}></img>
    </div>


    {/* our service */}


    <div className='our'>
      <div className='container '>
        <h1>WHAT WE DO</h1>
        <h2>Our Services</h2>
        <div className='box d-flex'>
          <div className='box1'>
            <img src={i3}></img>
            <h3> Business Consulting</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</h4>
            <h5>Read More</h5>
          </div>
          <div className='box1'>
            <img src={i3}></img>
            <h3> Technology Services</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</h4>
            <h5>Read More</h5>
          </div>
          <div className='box1'>
            <img src={i3}></img>
            <h3>Digital Solutions</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</h4>
            <h5>Read More</h5>
          </div>
        </div>
        <div className='btn'>
          <button>View All Service</button>
        </div>

      </div>
    </div>


    {/*  IT SOLUTION */}

    <div className='it'>
      <div className='container d-flex'>
        <div className='part1'>
          <h1>IT SOLUTION COMPANY</h1>
          <h2>We design, develop, implement and support IT Systems</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit velit.</p>
          <h3> We are a highly trained and qualified team ready to provide viable IT solutions together with full-time support and expert advice to fulfill your business needs.</h3>
        </div>
        <div className='part1'>
          <img src={i4}></img>
        </div>
      </div>
    </div>


    {/*  Why Trust Us? */}

    <div className='why'>
      <div className='container'>
        <h1>TECHSOFT SO DIFFERENT?</h1>
        <h2>Why Trust Us?</h2>
        <div className='main-b'>
          <div className='bo'>
            <div className='bo1'>
              <img src={i5}></img>
              <div className='txt'>
                <h5>Protect your Business</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</h6>
              </div>
            </div>
            <div className='bo1'>
              <img src={i6}></img>
              <div className='txt'>
                <h5>Network Monitoring</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</h6>
              </div>
            </div>
            <div className='bo1'>
              <img src={i7}></img>
              <div className='txt'>
                <h5>Network Security</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='main-b'>
          <div className='bo'>
            <div className='bo1'>
              <img src={i8}></img>
              <div className='txt'>
                <h5>Managed IT Service</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</h6>
              </div>
            </div>
            <div className='bo1'>
              <img src={i9}></img>
              <div className='txt'>
                <h5> Dedicated IT Support</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</h6>
              </div>
            </div>
            <div className='bo1'>
              <img src={i10}></img>
              <div className='txt'>
                <h5>Custom Developed Software</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FEATURED WORKS */}

  <div className='work'>
    <div className='container'>
      <h1>FEATURED WORKS</h1>
      <h2>Case Studies</h2>
      <div className='img d-flex'>
        <img src={i11}></img>
        <img src={i12}></img>
        <img src={i13}></img>
      </div>
      <div className='img'>
        <img src={i14}></img>
        <img src={i15}></img>
       <img src={i16}></img>
      </div>
    </div>
    <div className='btn2'>
      <button>View All Project</button>
    </div>
  </div>


    {/* OUR LEADERSHIP  */}

<div className='leader'>
  <div className='container'>
    <h1> OUR LEADERSHIP</h1>
    <h2>Team Members</h2>
    <div className='person'>
      <div className='per1'>
        <img src={i17}></img>
        <h3>Howard Berry</h3>
        <h4>Executive Officer</h4>
      </div>
      <div className='per2'>
        <img src={i18}></img>
        <h3>Morris Nelson</h3>
        <h4>Staffing Director</h4>
      </div>
      <div className='per3'>
        <img src={i19}></img>
        <h3>Travis Wallace</h3>
        <h4>Content Executive</h4>
      </div>
      <div className='per4'>
        <img src={i20}></img>
        <h3>Steve Frazier</h3>
        <h4>Technical Executive</h4>
      </div>
    </div>
  </div>
</div>

    {/* our client */}

    <div className='client'>
      <div className='container'>
        <h1>OUR CLIENT SAY</h1>
        <h2>Testimonials</h2>
        <div className='m-cli d-flex'>
          <div className='m-1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua</p>
            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <p>Google</p>
          </div>
          <div className='m-1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua</p>
            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <p>Google</p>
          </div>
          <div className='m-1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua</p>
            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <p>Google</p>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row '>
        <div className='row1'>
          <div className='photo'>
            <img src={i21}></img>  
          </div>  
          <div className='the'>
            <h1>Ruben Houston</h1>
            <h2>Service Manager</h2>
          </div>
        </div>     
        <div className='row1'>
        <div className='photo'>
            <img src={i21}></img>  
          </div>  
          <div className='the'>
            <h1>Ruben Houston</h1>
            <h2>Service Manager</h2>
          </div></div>     
        <div className='row1'>
        <div className='photo'>
            <img src={i21}></img>  
          </div>  
          <div className='the'>
            <h1>Ruben Houston</h1>
            <h2>Service Manager</h2>
          </div></div>     
      </div>
    </div>

    {/* News & Updates */}

    <div className='news'>
      <div className="container">
        <h1>OUR LATEST BLOG</h1>
        <h2>News & Updates</h2>
        <div className="up d-flex">
          <div className="up1">
            <img src={i22}></img>
            <div className='path'>
              <h3>20 January - 2021</h3>
              <h4>What Could 5g Change About The Way We Use Technology?</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
              <h5>+ Read More</h5>
            </div>
          </div>
          <div className="up1">
            <img src={i23}></img>
            <div className='path'>
              <h3>25 January - 2021</h3>
              <h4>3 Factors To Consider When Choosing A Managed It Services</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
              <h5>+ Read More</h5>
            </div>
          </div>
          <div className="up1">
            <img src={i24}></img>
            <div className='path'>
              <h3>30 January - 2021</h3>
              <h4>How To Quickly Shift To A Work-from-home Business Model</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
              <h5>+ Read More</h5>
            </div>
          </div>
        </div>
        <div className='btn4'>
          <button>Get Free Quote</button>
          <button>View All Blog</button>
        </div>
      </div>
    </div>

    {/*  */}

    <div className='we'>
      <div className="we-img">
        <h1>We’re here to help and answer any question you might have.</h1>
        <p>Free Consultation About Our IT Solutions For Your Business</p>
        <button>Let's Talk Now</button>
      </div>
    </div>

    {/* client slider */}
    <div className="client">
      <div className="container">
        <img src={i30} />
        <img src={i31} />
        <img src={i32} />
        <img src={i33} />
        <img src={i34} />
      </div>
    </div>

    {/* footer */}

    <div className="footer">
      <div className="container">
        <div className="ma d-flex">
          <div className="logo">
            <img src={i35} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur</p>
          </div>
          <div className='company'>
            <h1>Company</h1>
            <h2>About Us</h2>
            <h2>Latest Project</h2>
            <h2>IT Solutions</h2>
            <h2>Digital Solutions</h2>
            <h2>Team Member</h2>
            <h2>Contact Us</h2>
          </div>
          <div className="service">
            <h1>Service</h1>
            <h2>IT Strategy</h2>
            <h2>Network Services</h2>
            <h2>Software Audits</h2>
            <h2>Business Intelligence</h2>
            <h2>Data Science</h2>
            <h2>Virtual Workstation</h2>
          </div>
          <div className="contact">
            <h1>Contact Info</h1>
            <h2>Address: 526 Melrose Street, Water Mill, New York.</h2>
            <h2>Phone: +080 707 555-321</h2>
            <h2>Email: contact-info@example.com</h2>
            <input type="text" placeholder='Enter Your Email'/><button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>

    {/* last */}

    <div className="last">
      <div className="container d-flex">
        <div className="la-left">
          <h1>© 2021 - All Rights Reserved - Designed by Cute Themes.</h1>
        </div>
        <div className="la-right">
          <h1>Terms & Conditions</h1>
          <h2>Privacy Policy</h2>
        </div>
      </div>
    </div>


    </>
    

  );
}

export default App;
