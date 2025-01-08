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
            <h3>
              Diego Opazo
            </h3>
            <p>MSDS Graduate (2021)</p>
            <p>Triada Solutions</p>
            <p>Data Scientist</p>

          </div>

          

          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
