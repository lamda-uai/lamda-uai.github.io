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
        <h4>2024-2025 News</h4>
        <ul>
          <li>
            <b>Jan. 2025: </b> Alejandra Bravo-Diaz has successfully defended his PhD thesis proposal, Congratulations!!!
          </li>
          <li>
            <b>Jan. 2025: </b> Alfonso Tobar has started working as a researcher in the FONDEF #IT24I0144 (Intrusion.aware: An integral platform to detect and reply cyberattacks using responsible artificial intelligence).
          </li>
          <li>
            <b>Jan. 2025: </b> Agustin Soto has started his internship in the Centro Nacional de Inteligencia Artificial (Cenia), Chile.
          </li>
          <li>
            <b>Jan. 2025: </b> Sofía Álvarez has started her internship in ENTEL, Chile.
          </li>
          <li>
            <b>Dec. 2024: </b> Denis Berroeta has successfully defended his Master thesis proposal, Congratulations!!!
          </li>
          <li>
            <b>Aug. 2024: </b> Oue paper CNN sensitivity analysis for land cover map models using sparse and heterogeneous satellite data is
            accepted at.{' '}
	      <a href="http://www.ciarp24.org/">CIARP 2024</a>. Congrats to Bravo-Diaz and Corvalan.
          </li>                    
          <li>
            <b>Aug. 2024: </b> We give a warmth welcome to Sofía Álvarez, who has started the Master of Science in Data Science.
          </li>                    
          <li>
            <b>July 2024: </b> Alfonso Tobar has successfully defended his Master thesis proposal, Congratulations!!!
          </li>          
          <li>
            <b>March 2024: </b> We give a warmth welcome to Agustín Ghent, who has started the Master of Science in Data Science.
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
            <h3> LAMDA at FIC-UAI</h3>
            <p>
              <b>Lamda</b> (<b>La</b>boratorio de <b>M</b>achine Learning, <b>D</b>eep Learning y <b>A</b>lgoritmos)
              is a laboratory headed by Associate Professor.{' '}
              <a href="https://ingenieria.uai.cl/profesor/sebastian-moreno/">Sebastian Moreno</a> from the.{' '}
	      <a href="https://ingenieria.uai.cl/">Faculty of Engineering and Sciences</a> at.{' '}
	      <a href="https://uai.cl/">Universidad Adolfo Ibáñez</a>, Chile.<br>
              We are interested in the creation of machine learning and deep learning models, and their applications to multiple domains.
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
