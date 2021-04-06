import React from "react";
import { SocialIcon } from 'react-social-icons';
import PavelResume from '../../resumes/PavelResume.pdf';
import EricResume from '../../resumes/EricResume.pdf';
import AdamResume from '../../resumes/AdamResume.pdf';
import MattResume from '../../resumes/MattResume.pdf'
import './style.css';


function MeetTheTeam() {
  var pavel = require("../../images/Pavel.jpg");
  var eric = require("../../images/Eric.jpg");
  var adam = require("../../images/Adam.jpg");
  var matt = require("../../images/Matt.jpg");

  return (
    <main className="container">
      <section className="card mx-auto" style={{ width: 'fit-content' }}>

        <div className="row" style={{ padding: '10px' }}>
          <div className="col-md-12">
            <div className="page-header">
              <h1 className="animate__animated animate__zoomIn" style={{ textAlign: 'center' }}>Meet the Team</h1>
            </div>
          </div>
        </div>

        <article className="row" style={{ width: 'fit-content' }}>
          {/* Pavel Section */}
          <div className="col" style={{ textAlign: 'center' }}>
            <div className="card mx-auto" style={{ width: 'fit-content' }}>
              <div className="row" style={{ padding: '10px' }}>
                <div className="col-md-12">
                  <div className="page-header">
                  </div>
                </div>
                <div className="col-md-12">
                  <img src={pavel} alt="pavel" className="img-thumbnail" />
                  <h2 >Pavel Darii</h2>
                  <span className="text-muted">
                    <SocialIcon url="https://github.com/paveldarii" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="https://www.linkedin.com/in/pavel-darii-0aa546185/" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="mailto:paveldarii@yahoo.com" target="blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url={PavelResume} download="newfilename" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Eric Section */}
          <div className="col" style={{ textAlign: 'center' }}>
            <div className="card mx-auto" style={{ width: 'fit-content' }}>
              <div className="row" style={{ padding: '10px' }}>
                <div className="col-md-12">
                  <div className="page-header">
                  </div>
                </div>
                <div className="col-md-12">
                  <img src={eric} alt="eric" className="img-thumbnail" />
                  <h2 >Eric Ober</h2>
                  <span className="text-muted">
                    <SocialIcon url="https://github.com/esober101" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="https://www.linkedin.com/in/eric-ober-598b6b17/" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="mailto:ericscottober@gmail.com" target="blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url={EricResume} download="newfilename" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="row" style={{ width: 'fit-content' }}>
          {/* Adam Section */}
          <div className="col" style={{ textAlign: 'center' }}>
            <div className="card mx-auto" style={{ width: 'fit-content' }}>
              <div className="row" style={{ padding: '10px' }}>
                <div className="col-md-12">
                  <div className="page-header">
                  </div>
                </div>
                <div className="col-md-12">
                  <img src={adam} alt="adam" className="img-thumbnail" />
                  <h2 >Adam Lane</h2>
                  <span className="text-muted">
                    <SocialIcon url="https://github.com/alane019" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="https://www.linkedin.com/in/adam-lane-columbus-ohio/" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="mailto:adamlane.all@outlook.com" target="blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url={AdamResume} download="newfilename" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Matt Section */}
          <div className="col" style={{ textAlign: 'center' }}>
            <div className="card mx-auto" style={{ width: 'fit-content' }}>
              <div className="row" style={{ padding: '10px' }}>
                <div className="col-md-12">
                  <div className="page-header">
                  </div>
                </div>
                <div className="col-md-12">
                  <img src={matt} alt="matt" className="img-thumbnail" />
                  <h2 >Matt Trader</h2>
                  <span className="text-muted">
                    <SocialIcon url="https://github.com/matttrader" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="https://www.linkedin.com/in/matthewtrader/" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url="mailto:matthewtrader@sbcglobal.net" target="blank" style={{ height: 35, width: 35, margin: 5 }} />
                    <SocialIcon url={MattResume} download="newfilename" target="_blank" style={{ height: 35, width: 35, margin: 5 }} />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </article>

      </section>
    </main>

  );
}

export default MeetTheTeam;
