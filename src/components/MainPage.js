/* eslint-disable no-undef */
import React from 'react';
import './MainPage.css';
// import ParticlesBg from './ParticlesBg';
import { Button } from './Button';
import { Link } from 'react-scroll';
import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function HeroSection() {
    window.onload = function () {
        const ham = document.getElementById('hamburgerBtn');
        const head = document.getElementById('header');

        ham.addEventListener('click', () => {
            head.classList.toggle('open');
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`gmail`, `contact_temp`, e.target, `user_GZX5qoXYz9ooryIt5Vudc`)
            .then((result) => {
                alert("Message Sent, I'll get back to you shortly", result.text);
                console.log("Message Sent, I'll get back to you shortly", result.text);
            },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                    console.log("Error... Please try again", error.text);
                });
        e.target.reset()
    };

    const fileURL = 'https://srushtipatel.netlify.app/Srushti_Patel_Resume.pdf';

    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    }

    return (
        <div className="herosection">
            {/* Header Section */}
            <span id="hamburgerBtn" className="hamburgerBtn"><i class="fas fa-bars"></i></span>
            <header id="header" className="header">
                <nav className="side-nav">
                    <div className="logo-container">
                        <Link to="/" className="l-link">
                            <div className="logo-link">
                                <img src="./srushti_logo.png" alt="Loading..." className="menu-logo" />
                            </div>
                            <h4>Srushti Patel</h4>
                        </Link>
                    </div>
                    <div id="header-nav" className="snavbar navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link smooth={true} to="intro-sec" className="nav-link" activeClass="active" spy={true}>HOME</Link></li>
                            <li className="nav-item"><Link smooth={true} to="about" className="nav-link" activeClass="active" spy={true}>ABOUT ME</Link></li>
                            <li className="nav-item"><Link smooth={true} to="services" className="nav-link" activeClass="active" spy={true}>WHAT I DO</Link></li>
                            <li className="nav-item"><Link smooth={true} to="resume" className="nav-link" activeClass="active" spy={true}>RESUME</Link></li>
                            <li className="nav-item"><Link smooth={true} to="portfolio" className="nav-link" activeClass="active" spy={true}>PORTFOLIO</Link></li>
                            <li className="nav-item"><Link smooth={true} to="contact" className="nav-link" activeClass="active" spy={true}>CONTACT</Link></li>
                        </ul>
                    </div>
                    <ul className="social">
                        <li className="s-sites"><a className="s-links" href="https://www.facebook.com/shrushti.7998" target="blank"><i class="fab fa-facebook-f "></i></a></li>
                        <li className="s-sites"><a className="s-links" href="https://www.linkedin.com/in/srushtipatel07/" target="blank"><i class="fab fa-linkedin-in "></i></a></li>
                        <li className="s-sites"><a className="s-links" href="https://github.com/shrush07" target="blank"><i class="fab fa-github "></i></a></li>
                        <li className="s-sites"><a className="s-links" href="https://twitter.com/Srushti_07" target="blank"><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </nav>
            </header>

            {/* Intro Section */}
            <section id="intro-sec" className="intro-sec">
                <div className="intro-wrap">
                    <div className="in-row">
                        <div className="text-center">
                            <p className="intro-p">Welcome</p>
                            <div className="string-wrapper">
                                <div className="static-string">I'm a</div>
                                <ul class="typed-strings">
                                    <li><span>Srushti Patel.</span></li>
                                    <li><span>UI/UX Developer.</span></li>
                                    <li><span>Web Developer.</span></li>
                                    <li><span>Designer.</span></li>
                                </ul>
                            </div>
                            <h2><span className="typed"></span></h2>
                            <p className="intro-p" style={{ marginTop: '1rem' }}>based in Ontario, Canada.</p>
                            <div className="intro-btn">
                                <Link smooth to="contact">
                                    <Button className='btn' buttonStyle='btn--outline2' buttonSize='btn--large'>LET'S TALK</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link smooth to="about" class="scroll-down-arrow text-white smooth-scroll" style={{ cursor: 'pointer' }}>
                    <span class="animated"><i class="fa fa-chevron-down"></i></span>
                </Link>
            </section>

            {/* About Section */}
            <section id="about" className="about-sec">
                <div className="ab-container">
                    <div className="ab-heading">
                        <h2 className="ab-head">ABOUT ME</h2>
                        <p className="ab-ph">Know Me More
                            <span className="head-separator"></span>
                        </p>
                    </div>
                    <div className="ab-row">
                        <div className="ab-detail">
                            <h2 className="ab-head2">I'm
                                <span className="ab-hspan"> Srushti Patel </span>
                                a UI/UX Developer
                            </h2>
                            <p className="ab-p">
                                I'm a UI/UX developer with a passion for creating user-friendly and effective interfaces that satisfy business and
                                user's needs at the same time. To work in a good organization, learn, and contribute to the organization with my professional knowledge
                                and soft skills. I can continuously learn and improve the necessary skills and expertise needed
                                to help push both the company and myself forward into success.
                            </p>
                            <p className="ab-p"> To obtain a position in a dynamic work environment, where experience and professionalism are valued and
                                required as a means for attaining company success.
                            </p>
                        </div>
                        <div className="ab-contact">
                            <div className="ab-cdetails">
                                <ul className="ab-cul">
                                    <li className="ab-cli">
                                        <span className="ab-cspan">Name:</span>
                                        Srushti Patel
                                    </li>
                                    <li className="ab-cli">
                                        <span className="ab-cspan">Email:</span>
                                        <a href="mailto:shrupatel07@gmail.com" className="ab-a">shrupatel07@gmail.com</a>
                                    </li>
                                    <li className="ab-cli">
                                        <span className="ab-cspan">Contact:</span>
                                        <a href="tel:9714889403" className="ab-c">+91 9714889403</a>
                                    </li>
                                    <li className="ab-cli b0">
                                        <span className="ab-cspan">From:</span>
                                        Vadodara, Gujarat, India
                                    </li>
                                </ul>
                                <div className="ab-btn">
                                    <Button onClick={() => { downloadFileAtURL(fileURL) }} className='btn' buttonStyle='btn--primary' buttonSize='btn--medium'>DOWNLOAD CV</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-sec">
                <div className="sr-container">
                    <div className="sr-heading">
                        <h2 className="sr-head">SERVICES</h2>
                        <p className="sr-ph">What I Do?
                            <span className="head-separator"></span>
                        </p>
                    </div>
                </div>
                <div className="sr-row">
                    <div className="sr-detail">
                        <div className="sr-row2">
                            <div className="sr-det">
                                <div className="fe-box">
                                    <div className="fe-icon">
                                        <i class="fas fa-pencil-ruler"></i>
                                    </div>
                                    <h3 className="srh">UI/UX Design</h3>
                                    <p class="sr-p">Defining the creative direction for your product - form, colors, and general feel
                                        based on key pieces.
                                    </p>
                                </div>
                            </div>
                            <div className="sr-det">
                                <div className="fe-box">
                                    <div className="fe-icon">
                                        <i class="fas fa-desktop"></i>
                                    </div>
                                    <h3 className="srh">Web Design</h3>
                                    <p class="sr-p">I design web interfaces by understanding the needs of each project that
                                        are visually engaging and simple to use.
                                    </p>
                                </div>
                            </div>
                            <div className="sr-det">
                                <div className="fe-box">
                                    <div className="fe-icon">
                                        <i class="fas fa-palette"></i>
                                    </div>
                                    <h3 className="srh">Graphic Design</h3>
                                    <p class="sr-p">Graphic design is to assemble together images, motion graphics, or typography
                                        to create a piece of design.
                                    </p>
                                </div>
                            </div>
                            <div className="sr-det">
                                <div className="fe-box">
                                    <div className="fe-icon">
                                        <i class="fas fa-paint-brush"></i>
                                    </div>
                                    <h3 className="srh">Design & Develop</h3>
                                    <p class="sr-p">As a designer & developer, I understand the perfect user interface should look
                                        good and work even better.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sr-row3">
                            <h2 className="srh2">Tools</h2>
                            <div className="sr-tools">
                                <div className="sr-tool">
                                    <p className="srt-p">Figma
                                        <span className="tspan">80%</span>
                                    </p>
                                    <div className="sr-pbar">
                                        <div className="sr-pb" style={{ width: '80%' }}></div>
                                    </div>
                                    <p className="srt-p">Adobe XD
                                        <span className="tspan">75%</span>
                                    </p>
                                    <div className="sr-pbar">
                                        <div className="sr-pb" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                                <div className="sr-tool">
                                    <p className="srt-p">Adobe Photoshop
                                        <span className="tspan">70%</span>
                                    </p>
                                    <div className="sr-pbar">
                                        <div className="sr-pb" style={{ width: '70%' }}></div>
                                    </div>
                                    <p className="srt-p">Adobe Illustrator
                                        <span className="tspan">60%</span>
                                    </p>
                                    <div className="sr-pbar">
                                        <div className="sr-pb" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="re-btn">
                                <Button onClick={() => { downloadFileAtURL(fileURL) }} className='btn' buttonStyle='btn--primary' buttonSize='btn--medium'>DOWNLOAD CV</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Section */}
            <section id="resume" className="resume-sec">
                <div className="re-container">
                    <div className="re-heading">
                        <h2 className="re-head">SUMMARY</h2>
                        <p className="re-ph">Resume
                            <span className="head-separator"></span>
                        </p>
                    </div>
                    <div className="edu-sec">
                        <div className="edu-con">
                            <h2 className="edh">My Education</h2>
                            <div className="edu-container">
                                <p className="re-ep">2016 - 2020</p>
                                <h3 className="edh3">Computer Science and Engineering</h3>
                                <p className="ed-cn">Parul University
                                    <span className="espan">Vadodara, Gujarat, India</span>
                                </p>
                                <p className="edu-d">Aggregate: 7.51 / 10 CGPA</p>
                            </div>
                            <div className="edu-container">
                                <p className="re-ep">2014 - 2016</p>
                                <h2 className="edh3">Secondary Education</h2>
                                <p className="ed-cn">Rudra School of Science
                                    <span className="espan">Vadodara, Gujarat, India</span>
                                </p>
                                <p className="edu-d">Aggregate: 60.02%</p>
                            </div>
                            <div className="edu-container">
                                <p className="re-ep">2002 - 2014</p>
                                <h2 className="edh3">Primary Education</h2>
                                <p className="ed-cn">Auxilium Convent High School
                                    <span className="espan">Vadodara, Gujarat, India</span>
                                </p>
                                <p className="edu-d">Aggregate: 81.07%</p>
                            </div>
                        </div>
                        <div className="edu-con">
                            <h2 className="edh">My Experience</h2>
                            <div className="edu-container">
                                <p className="re-ep">12/2020 - 03/2024</p>
                                <h2 className="edh3">UI UX Developer</h2>
                                <p className="ed-cn">One5 Digital
                                    <span className="espan">Melbourne, VIC, Australia.</span>
                                </p>
                                <p className="edu-d">Design and develop websites, logo design, experience with software design.</p>
                            </div>
                            <div className="edu-container">
                                <p className="re-ep">05/2019 - 07/2019</p>
                                <h2 className="edh3">Internship</h2>
                                <p className="ed-cn">RAV infotech
                                    <span className="espan">Vadodara, Gujarat, India</span>
                                </p>
                                <p className="edu-d">Learn more about Web Designing, .Net, and JavaScript.</p>
                            </div>
                        </div>
                    </div>
                    <div className="sr-row3">
                        <h2 className="srh2">Skills</h2>
                        <div className="sr-tools">
                            <div className="sr-tool">
                                <p className="srt-p">React JS
                                    <span className="tspan">70%</span>
                                </p>
                                <div className="sr-pbar">
                                    <div className="sr-pb" style={{ width: '70%' }}></div>
                                </div>
                                <p className="srt-p">Web Design
                                    <span className="tspan">75%</span>
                                </p>
                                <div className="sr-pbar">
                                    <div className="sr-pb" style={{ width: '75%' }}></div>
                                </div>
                                <p className="srt-p">JavaScript
                                    <span className="tspan">60%</span>
                                </p>
                                <div className="sr-pbar">
                                    <div className="sr-pb" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="sr-tool">
                                <p className="srt-p">HTML/CSS
                                    <span className="tspan">90%</span>
                                </p>
                                <div className="sr-pbar">
                                    <div className="sr-pb" style={{ width: '90%' }}></div>
                                </div>
                                <p className="srt-p">Bootstrap
                                    <span className="tspan">80%</span>
                                </p>
                                <div className="sr-pbar">
                                    <div className="sr-pb" style={{ width: '80%' }}></div>
                                </div>
                                <p className="srt-p">Angular JS
                                    <span className="tspan">50%</span>
                                </p>
                                <div className="sr-pbar">
                                    <div className="sr-pb" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="re-btn">
                            <Button onClick={() => { downloadFileAtURL(fileURL) }} className='btn' buttonStyle='btn--outline' buttonSize='btn--medium'>DOWNLOAD CV</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio-sec">
                <div className="pr-container">
                    <div className="pr-heading">
                        <h2 className="pr-head">PORTFOLIO</h2>
                        <p className="pr-ph">My Work
                            <span className="head-separator"></span>
                        </p>
                    </div>
                    <div className="portfolio-gallery">
                        <input type="radio" id="All" name="categories" value="All" checked />
                        <input type="radio" id="Design" name="categories" value="Design" />
                        <input type="radio" id="Brand" name="categories" value="Brand" />
                        <input type="radio" id="Animation" name="categories" value="Animation" />
                        <ol className="filters">
                            <li className="lbl">
                                <label for="All">All</label>
                            </li>
                            <li className="lbl">
                                <label for="Design">Design</label>
                            </li>
                            <li className="lbl">
                                <label for="Brand">Brand</label>
                            </li>
                            <li className="lbl">
                                <label for="Animation">Animation</label>
                            </li>
                        </ol>
                        <ol className="posts">
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="ingenious_studiio_logo.png" alt="Loading..." style={{ border: '0.5px solid #749ba8' }} />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="ingenious_tech.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="Ingenious_Tech_Logo.png" alt="Loading..." style={{ border: '0.5px solid #749ba8' }} />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="astropushpa.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="Birchwood_Deli_&_Liquor_logo.png" alt="Loading..." style={{ border: '0.5px solid #749ba8' }} />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Animation">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="sky.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="bluepac_logo.png" alt="Loading..." style={{ border: '0.5px solid #749ba8' }} />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="Biovatika.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="ingenious_technology_logo.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="kerry.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="relish_developers_logo.png" alt="Loading..." style={{ border: '0.5px solid #749ba8' }} />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="Konsarutanto.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="inteurb_logo.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="beardog.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="beardog_logo.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="water_doctor_logo.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="snh_mono.png" alt="Loading..." style={{ border: '0.5px solid #749ba8' }} />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="ingenious_architects_logo.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="SuccessSquare.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="ingenious_crafting_logo.png" alt="Loading..." style={{ border: '0.5px solid #749ba8' }} />
                                    </figure>
                                </article>
                            </li>
                            {/* <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="hello_foody_logo.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li> */}
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="hello_foody.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="srushti_patel.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Brand">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="ingenious_architectso_logo.png" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                            <li className="post post-categories" data-category="Design">
                                <article>
                                    <figure>
                                        <img className="pg-img" src="one5.gif" alt="Loading..." />
                                    </figure>
                                </article>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-sec">
                <div className="cn-container">
                    <div className="cn-heading">
                        <h2 className="cn-head">CONTACT</h2>
                        <p className="cn-ph">Get in Touch
                            <span className="head-separator"></span>
                        </p>
                    </div>
                    <div className="con-container">
                        <div className="con-p1 order1">
                            <p className="cn-p">
                                <span className="cspan"><i class="fas fa-phone-alt"></i></span>
                                <a className="con-a" href="tel:9714889403">+(91) 9714889403</a>
                            </p>
                            <p className="cn-p2">
                                <span className="cspan"><i class="fas fa-envelope"></i></span>
                                <a href="mailto:shrupatel07@gmail.com" className="con-a">shrupatel07@gmail.com</a>
                            </p>
                            <h2 className="cnh2">Follow Me</h2>
                            <ul className="cnsocial">
                                <li className="cns-sites"><a className="cns-links" href="https://www.facebook.com/shrushti.7998" target="blank"><i class="fab fa-facebook-f "></i></a></li>
                                <li className="cns-sites"><a className="cns-links" href="https://www.linkedin.com/in/srushtipatel07/" target="blank"><i class="fab fa-linkedin-in "></i></a></li>
                                <li className="cns-sites"><a className="cns-links" href="https://github.com/shrush07" target="blank"><i class="fab fa-github "></i></a></li>
                                <li className="cns-sites"><a className="cns-links" href="https://twitter.com/Srushti_07" target="blank"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                        <div className="con-p2 order0">
                            <h2 className="cnh">Send a note</h2>
                            <Form id="contact-form" onSubmit={sendEmail}>
                                <div className="con-row">
                                    <div className="cn-col">
                                        <input name="name" type="text" className="form-control" placeholder="Name" required />
                                    </div>
                                    <div className="cn-col">
                                        <input name="email" type="text" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="cn-col">
                                        <input name="subject" type="text" className="form-control" placeholder="Subject" required />
                                    </div>
                                    <div className="cn-col">
                                        <input name="phone" type="tel" maxLength="10" className="form-control" placeholder="Contact Number" required />
                                    </div>
                                    <div className="cn-row">
                                        <textarea name="message" className="form-control" rows="5" placeholder="Send a message..." spellCheck="false" required></textarea>
                                    </div>
                                </div>
                                <p className="co-p">
                                    <Button id="submit-btn" className="btn" buttonStyle='btn--primary' buttonSize='btn--medium' type="submit">SEND MESSAGE</Button>
                                </p>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section id="footer" className="footer-sec">
                <div className="fr-container">
                    <div className="fr-row">
                        <div className="fr-det">
                            <p className="fr-p">2024 <a href="/" className="fr-a"><span className="fr-hspan">Srushti</span></a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
