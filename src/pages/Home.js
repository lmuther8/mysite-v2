import { Link } from "react-router-dom";
import {useRef} from 'react';
import $ from 'jquery';

const Home = () => {
  const contactSuccessRef = useRef();
  const contactFailRef = useRef();
  const emailFormRef = useRef();
  
  const submitForm = (e) => {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var subj = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    console.log({
        "name": name,
        "email": email,
        "subject": subj,
        "message": message
    })
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://vtt2m6ejlh4j2zfdxqa5aknyla0txwxs.lambda-url.us-east-1.on.aws/',
      processData: false,
      contentType: 'application/json',
      data: JSON.stringify({
          name: name,
          email: email,
          subject: subj,
          message: message
      }),
      dataType: 'json',
      success: function (response) {
          if (response.type !== 'error') {
            emailFormRef.current.style.display = "none"
            contactSuccessRef.current.style.display="flex"
          }
      },
      error: function () {
        emailFormRef.current.style.display = "none"
        contactFailRef.current.style.display="block"
      }
    })
  };

  return (
    <div>
        <section id="hero" className="mb-5">
        <div className="hero">
            <div className="container d-flex align-items-center">
            <div className="hero-content">
                <h1>Luke Muther</h1>
                <p>Student, Soccer Player, Software Developer</p>
                <ul className="list-unstyled hero-social">
                <li><a href="https://www.linkedin.com/in/lukemuther/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/lmuther8" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.facebook.com/luke.muther/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/lmutes8/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
            </div>
        </div>
        </section>

    <section id="about" className="py-5">
      <div className="container">
        <div className="row justify-content-between  align-items-center">
          <div className="col-lg-4">
            <div className="about-img-bg">
              <div className="about-img">
                <img src="assets/me.webp" alt="Luke Muther"></img>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-text">
              I am currently a student at Kenyon College in Gambier, Ohio. I am pursuing a Physics Major and Concentration in Scientific Computing. I also play on the Men's Soccer team.
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pb-4">
        <h1>Skills</h1>
        <ul className="list-unstyled d-flex skills">
          <li>
            <i className="fab fa-python"></i>
            <p>Python</p>
          </li>
          <li>
            <i className="fab fa-js"></i>
            <p>JavaScript</p>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <p>GitHub</p>
          </li>
          <li>
            <i className="fab fa-node-js"></i>
            <p>Node.js</p>
          </li>
          <li>
            <i className="fab fa-html5"></i>
            <p>HTML5</p>
          </li>
          <li>
            <i className="fab fa-css3"></i>
            <p>CSS3</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="experience" className="py-5 bg-gray">
      <div className="container text-center mb-5">
        <h2>Experience</h2>
      </div>

      <div className="container mb-5">
        <div className="row portfolio-container">
          <div className="col-lg-6 col-md-12 work-item">
            <h2>Software Development Intern</h2>
            <h3>RevOptimal</h3>
            <h4>Summer 2022</h4>
            <p>
              Working to create and test a RESTful API for 
              <a href="https://revoptimal.com/" target="_blank" rel="noreferrer">RevOptimal</a>, which is a Software as a Service company.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 work-item">
            <h2>Backend Web Developer</h2>
            <h3>Yakera</h3>
            <h4>Summer 2021</h4>
            <p>
              <a href="https://yakera.org/" target="_blank" rel="noreferrer">Yakera</a>
               is a non-profit crowd funding platform for people in Venezuela. I was working as a backend devloper creating an API using Express.js and Node.js.
              </p>
          </div>
          <div className="col-lg-6 col-md-12 work-item">
            <h2>Digital Imaging TA</h2>
            <h3>Kenyon College</h3>
            <h4>February 2018 – May 2020</h4>
            <p>I held tutoring hours each week to help students learn Photoshop, Lightroom, and Premiere Pro.</p>
          </div>
          <div className="col-lg-6 col-md-12 work-item">
            <h2>Lead Tutor</h2>
            <h3>Kenyon College</h3>
            <h4>February 2018 – May 2020</h4>
            <p>Work directly with a Calculus 1 section to tutor peers on a drop-in basis at the Math and Science Skills Center.</p>
          </div>
        </div>
      </div>

      <div className="container text-center mb-5">
        <Link to="resume/">
          <button><i className="fas fa-file-export"></i>My Resume</button>
        </Link>
      </div>
    </section>

    <section id="athletics" className="py-5">
      <div className="container text-center mb-5">
        <h2>Athletics</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="athletics">
              <div className="kenyon">
                <h2>Kenyon College</h2>
                <div className="row">
                  <div className="col-lg-1">
                    <h4>2021</h4>
                  </div>
                  <div className="col-lg-11">
                    <ul>
                      <li>United Soccer Coaches All-American</li>
                      <li>D3Soccer.com All-American</li>
                      <li>NCAC Defensive Player of the Year</li>
                      <li>Ranked 17th in final United Soccer Coaches poll</li>
                      <li>NCAC Regular season champions</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    <h4 className="green-text">2019</h4>
                  </div>
                  <div className="col-lg-11">
                    <ul>
                      <li>NCAC Regular season and tournament champions</li>
                      <li>Ranked 10th in final United Soccer Coaches poll</li>
                      <li>All-NCAC 3rd Team</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    <h4 className="green-text">2018</h4>
                  </div>
                  <div className="col-lg-11">
                    <ul>
                      <li>NCAC Regular season and tournament champions</li>
                      <li>Ranked 10th in final United Soccer Coaches poll</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="brooks">
                <h2>Brooks School</h2>
                <div className="row">
                  <div className="col-lg-1">
                    <h4>2017</h4>
                  </div>
                  <div className="col-lg-11">
                    <ul>
                      <li>Ranked #1 Prep School Team in the nation by MaxPreps</li>
                      <li>NEPSAC className B Champion</li>
                      <li>ISL Champions</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    <h4>2016</h4>
                  </div>
                  <div className="col-lg-11">
                    <ul>
                      <li>NEPSAC className B runner-up</li>
                      <li>ISL Champions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div id="soccerSlide" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#soccerSlide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#soccerSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#soccerSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#soccerSlide" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="assets/soccer1.webp" className="d-block w-100" alt="Luke Muther playing soccer."></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/soccer2.webp" className="d-block w-100" alt="Luke Muther playing soccer."></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/soccer3.webp" className="d-block w-100" alt="Luke Muther playing soccer."></img>
                </div>
                <div className="carousel-item">
                  <img src="assets/soccer4.webp" className="d-block w-100" alt="Luke Muther playing soccer."></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="contact py-5">
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-3">GET IN TOUCH</h1>
          <h2 ref={contactSuccessRef} className="text-center my-auto" style={{"display":"none"}}>Message Sent!</h2>
          <h2 ref={contactFailRef} className="text-center my-auto" style={{"display":"none"}}>Message Failed To Send</h2>
          <form ref={emailFormRef}>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="form-group contact-block1">
                  <input type="text" name="name" id="name" placeholder="Your Name" required></input>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <input type="email" name="email" id="email" placeholder="Your Email" required></input>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <input type="text" name="subject" id="subject" placeholder="Subject" required></input>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="form-group">
                  <textarea name="message" id="message" placeholder="Message" required></textarea>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 d-flex justify-content-center">
                <button onClick={submitForm} className="contact-btn">SEND</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
        </div>
    );
  };
  
  export default Home;
