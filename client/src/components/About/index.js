import React from "react";
import "./style.css";

function About() {
  return (
    <main className="container">
      <section className="card mx-auto" style={{ width: 'fit-content' }}>
        <div className="row" style={{ padding: '10px' }}>
          <div className="col-md-12">
            <div className="page-header">
              {/* <h1 style={{ textAlign: 'center' }}>Welcome To Everest</h1> */}
              <center><h1 class="animate__animated animate__bounce">Welcome To Everest</h1></center>
              <br></br>
              <h3 style={{ textAlign: 'center' }}>The Everest App is about achieving your desired goals through customizable tasks and activities that you track with ease on a daily basis.</h3>
              <br></br>
              <h3 style={{ textAlign: 'center' }}>Establishing daily goals in a tangible format is scientifically proven to provide an enhanced focus that leads to increased productivity. In 1979, researchers at "The Harvard MBA Business School" conducted a study highlighting the importance of goal setting. Furthermore, documenting those desired goals is essential to the likelihood of achieving your goals.</h3>
              <br></br>
              <h5 style={{ textAlign: 'center' }}>https://www.forbes.com/sites/annabelacton/2017/11/03/how-to-set-goals-and-why-you-should-do-it/?sh=199f3e97162d</h5>
              <br></br>
              <h3 style={{ textAlign: 'center' }}>The Everest App is an amazingly simple and convenient tool to stay on-task, get more done, and enjoy the personal rewards of accomplishment! Start getting more done in your life today!</h3>
              <br></br>
              <h1 style={{ textAlign: 'center' }}>Start getting more done...today!!</h1>
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}

export default About;
