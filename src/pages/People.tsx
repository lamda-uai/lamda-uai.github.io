import { ReactElement } from 'react';

export function People(): ReactElement {
  return (
    <>
      <div className="banner-bottom">
        <div className="container people">
          <h2>Academics</h2>

          <div className="banner-bottom-left">
            <a href="https://ingenieria.uai.cl/profesor/sebastian-moreno/">
              <div className="portrait">
                <img
                  alt=""
                  src="images/moreno.jpg"
                  className="portrait-round"
                />
              </div>
            </a>
            <h3>
              <a href="https://ingenieria.uai.cl/profesor/sebastian-moreno/">Sebastian Moreno</a>
            </h3>
            <p>Associate Professor</p>
          </div>


          {/*  Students  */}

          <div className="clearfix"> </div>
          <h2>Students</h2>

          <div className="banner-bottom-left">
            <a href="https://ingenieria.uai.cl/profesor/sebastian-moreno/">
              <div className="portrait">
                <img
                  alt=""
                  src="images/moreno.jpg"
                  className="portrait-round"
                />
              </div>
            </a>
            <h3>
              <a href="https://ingenieria.uai.cl/profesor/sebastian-moreno/">Agustin Ghent</a>
            </h3>
            <p>MSc Student</p>
          </div>

          

          {/* Former Members */}
          <div className="clearfix"> </div>
          <h2>Former Members</h2>

          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/DiegoOpazo.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>Diego Opazo</h3>
            <p>MSc Graduate (2021)</p>
            <h5>Triada Solutions</h5>
            <h5>Data Scientist</h5>
          </div>
          
          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/ValentinaMartinez.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>Valentina Martinez</h3>
            <p>Master of Science(2022)</p>
            <h5>Cotalker</h5>
            <h5>Product Lead</h5>
          </div>
          
          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/DanielaMiranda.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>Daniela Miranda</h3>
            <p>Bachelor's in Engineering (2021)</p>
            <h5>Cotalker</h5>
            <h5>Customer Success Lead</h5>
          </div>

          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/MartinPinto.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>Martín Pinto</h3>
            <p>Bachelor's in Engineering (2021)</p>
            <h5>Coderhub</h5>
            <h5>Product Owner</h5>
          </div>          
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
