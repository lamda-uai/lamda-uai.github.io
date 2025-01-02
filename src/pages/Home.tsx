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
        <h4>Last year news</h4>
        <ul>
          <li>
            <b>Jan. 2025: </b> Alejandra Bravo-Diaz has successfully defended his PhD thesis proposal, Congratulations!!!
          </li>
          <li>
            <b>Jan. 2025: </b> Alfonso Tobar has started working as a researcher in the FONDEF #IT24I0144.
          </li>
          <li>
            <b>Jan. 2025: </b> Agustin Soto has started his internship at the Centro Nacional de Inteligencia Artificial (Cenia), Chile.
          </li>
          <li>
            <b>Jan. 2025: </b> Sofía Álvarez has started her internship in ENTEL, Chile.
          </li>
          <li>
            <b>Dec. 2024: </b> Denis Berroeta has successfully defended his Master of Science in Data Science thesis, Congratulations!!!
          </li>
          <li>
            <b>Oct. 2024: </b> Alfonso Tobar is sub-reviewer at The 18th ACM International Conference on Web Search and Data Mining (<a href="https://www.wsdm-conference.org/2025/">WSDM 2025</a>).
          </li>		
          <li>
            <b>Oct. 2024: </b> Alejandra Bravo-Diaz is reviewer at Jornadas Chilenas de la Computación 2024.
          </li>				
          <li>
            <b>Oct. 2024: </b> Alejandra Bravo-Diaz is reviewer at The Thirty-Eighth Annual Conference on Neural Information Processing Systems (<a href="https://neurips.cc/">NeuRIPS 2024</a>).		  
          </li>						
          <li>		  
            <b>Aug. 2024: </b> <a href="https://doi.org/10.1007/978-3-031-76607-7_5">Paper accepted</a> at <a href="http://www.ciarp24.org/">CIARP 2024</a>. Congrats to Bravo-Diaz and Corvalan.
          </li>                    
          <li>
            <b>Aug. 2024: </b> We give a warm welcome to Sofía Álvarez, who has started the Master of Science in Data Science.
          </li>                    
          <li>
            <b>July 2024: </b> Alfonso Tobar has successfully defended his Master of Science in Data Science thesis, Congratulations!!!
          </li>          
          <li>
            <b>July 2024: </b> <a href="https://www.sciencedirect.com/science/article/pii/S2352711024002139">Paper accepted</a> in the journal <a href="https://www.sciencedirect.com/journal/softwarex">SoftwareX</a> (WOS-Q2). Congrats to Heredia.
          </li>          
          <li>
            <b>June 2024: </b> <a href="https://doi.org/10.1016/j.ecoinf.2024.102684">Paper accepted</a> in the journal <a href="https://www.sciencedirect.com/journal/ecological-informatics">Ecological Informatics</a> (WOS-Q1). Congrats to Bravo-Diaz.
          </li>          
          <li>
            <b>April 2024: </b> Diego Corvalán has successfully defended his Master of Science thesis, Congratulations!!!
          </li>
          <li>
            <b>April 2024: </b> Ninnete Olhabe has successfully defended her Master in Industrial Engineering and Operational Research thesis, Congratulations!!!
          </li>
	   <li>
            <b>April 2024: </b> <a href="https://www.sciencedirect.com/science/article/pii/S2352711024001031">Paper accepted</a> in the journal <a href="https://www.sciencedirect.com/journal/softwarex">SoftwareX</a>  (WOS-Q2). Congrats to Heredia.
          </li>          		
          <li>
            <b>April 2024: </b> <a href="https://doi.org/10.3390/math12081255">Paper accepted</a> in the journal <a href="https://www.mdpi.com/journal/mathematics">Mathematics)</a> (WOS-Q1.
          </li>          				
          <li>
            <b>March 2024: </b> We give a warm welcome to Agustín Ghent, who has started the Master of Science in Data Science.
          </li>                    
          <li>
            <b>Jan. 2024: </b> Cristobal Heredia has started a new position as a Phd. Student at Univesity of South Florida, USA.
          </li> 
          <li>
            <b>Jan. 2024: </b> Our collaborator Enrique Canessa has won a FONDECYT fund research, by ANID, Chile.
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
              is a laboratory headed by Associate Professor {' '}
              <a href="https://ingenieria.uai.cl/profesor/sebastian-moreno/">Sebastian Moreno</a> from the {' '}
	      <a href="https://ingenieria.uai.cl/">Faculty of Engineering and Sciences</a> at {' '}
	      <a href="https://uai.cl/">Universidad Adolfo Ibáñez</a>, Chile.
		    
              We are interested in the creation of machine learning and deep learning models, and their applications to multiple domains.
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
