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
                  src="images/BarbaraSalazar.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>
              <a href="https://www.linkedin.com/in/barbsp/">Bárbara Salazar</a>
            </h3>
            <p>Master of Science in Engineering (2022)</p>
            <h5>Akloe</h5>
            <h5>Consultant</h5>
          </div>    
          
          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/RodrigoMartinez.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>
              <a href="https://www.linkedin.com/in/rodrigo-martínez-araya-53a09b16b/">Rodrigo Martinez</a>
            </h3>
            <p>Master of Science in Engineering (2022)</p>
            <h5>Walmart</h5>
            <h5>Full Stack Developer</h5>
          </div>          
          
          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/ValentinaMartinez.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>
              <a href="https://www.linkedin.com/in/valentina-martinez-pastene/">Valentina Martinez</a>
            </h3>
            <p>Master of Science in Engineering (2022)</p>
            <h5>Cotalker</h5>
            <h5>Product Lead</h5>
          </div>
          
          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/DiegoOpazo.jpg"
                  className="portrait-round"
                />
              </div>
            <h3>
              <a href="https://www.linkedin.com/in/diego-opazo-inarejo/">Diego Opazo</a>
            </h3>
            <p>Master of Science in Engineering (2021)</p>
            <h5>Triada Solutions</h5>
            <h5>Data Scientist</h5>
          </div>
          
          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/DanielaMiranda.jpeg"
                  className="portrait-round"
                />
              </div>
            <h3>
              <a href="https://www.linkedin.com/in/dalejandramb/">Daniela Miranda</a>
            </h3>
            <p>Bachelor's in Engineering (2021)</p>
            <h5>Cotalker</h5>
            <h5>Customer Success Lead</h5>
          </div>

          <div className="banner-bottom-left">
              <div className="portrait">
                <img
                  alt=""
                  src="images/MartinPinto.jpeg"
                  className="portrait-round"
                />
              </div>
            <h3>
              <a href="https://www.linkedin.com/in/martin-pinto-stevens/">Martín Pinto</a>
            </h3>
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
