import { ReactElement } from 'react';

export function Home(): ReactElement {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-info">
            <h2>LAMDA-UAI</h2>
            <p> A Machine Learning and Deep Learning Lab</p>
          </div>
        </div>
      </div>
      <div className="container news">
        <h4>News</h4>
        <ul>
          <li>
            <b>Jan. 2025: </b> Alejandra Bravo-Diaz has successfully defended his PhD thesis proposal. Congratulations!.
          </li>
          <li>
            <b>Jan. 2025: </b> Alfonso Tobar has started working in the .
          </li>
          <li>
            <b>Jan. 2025: </b> Agustin Soto has started his internship in the Centro Nacional de Inteligencia Artificial (Cenia), Chile.
          </li>
          <li>
            <b>Jan. 2025: </b> Sofía Álvarez has started her internship in ENTEL, Chile.
          </li>
          <li>
            <b>Dec. 2024: </b> Denis Berroeta has successfully defended his Master thesis proposal. Congratulations!.
          </li>
        </ul>
      </div>
      <div id="about" className="team">
        <div className="container">
          <h4>About us</h4>
          <div className="group">
            <img src="images/about.jpeg" alt=" " />
          </div>
          <div className="group-text">
            <h3> LAMDA at UAI</h3>
            <p>
              <b>Lamda</b> (<b>La</b>boratorio de <b>M</b>achine Learning, <b>D</b>eep Learning y <b>A</b>lgoritmos)
              is a part of Faculty of Engineering and Sciences
              in UAI. The lab is headed by Prof.{' '}
              <a href="https://ingenieria.uai.cl/profesor/sebastian-moreno/">Sebastian Moreno</a>.
              We are interested in machine learning applications to various domains.
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
