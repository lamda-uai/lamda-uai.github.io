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
            <b>Dec. 2025: </b> Alfonso Tobar has successfully defended his PhD thesis proposal, Congratulations!!!
          </li>
			<li>
            <b>Dec. 2025: </b> ICPRS 2025 was a completely success, thanks to everyone. 
          </li>
			<li>
            <b>Nov. 2025: </b> Sofia Álvarez has successfully defended her Master of Science in Data Science, Congratulations!!!.
          </li>
         <li>
            <b>Oct. 2025: </b> Three conference paper accepted in <a href="https://www.icprs.org">The IEEE 15th International Conference on Pattern Recognition Systems</a>. Congrats to Álvarez, Bravo, Ramos, Tobar-Arancibia.
          </li>
         <li>
            <b>Sept. 2025: </b> Sebastián Orellana has successfully defended his PhD thesis proposal. Congratulations!!!
          </li>
		<li>
            <b>Sept. 2025: </b> Journal paper accepted in <a href="https://link.springer.com/journal/13428">Behavior Research Methods</a> (WOS-Q1). Congrats to Ramos.
          </li>          									
		<li>
            <b>Aug. 2025: </b> Welcome to Joaquín Urrutia!!!
          </li>          									
		<li>
            <b>Aug. 2025: </b> Diego Ramos attended  KDD 2025. Congrats to Ramos.
          </li>          									
		<li>
            <b>July 2025: </b> Workshop paper accepted in <a href="https://sites.google.com/view/ai4supplychain-kdd-2025/home">Workshop on AI for Supply Chain: Today and Future</a>. Congrats to Alvarez and Tobar.
          </li>          						
			<li>
            <b>June 2025: </b> Workshop paper accepted in <a href="https://kdd25scisocllm.github.io">SciSoc LLM Workshop at KDD 2025</a>. Congrats to Ramos.
          </li>          						
         <li> 
            <b>May  2025: </b> Alejandra Bravo-Diaz presented: Can models based on deep learning architectures be applied in new geographic regions? A remote sensing perspective, in the V Reunión Bienal IALE-Chile.
          </li>		
         <li> 
            <b>April 2025: </b> Diego Ramos has successfully defended his PhD thesis proposal, Congratulations!!!
          </li>
	<li>
            <b>April 2025: </b> Alejandra Bravo-Diaz, Diego Ramos, & Alfonso Tobar are reviewers at the 44th IEEE International Conference of the Chilean Computer Science Society (JCC 2025).
          </li>				
	<li>
            <b>April 2025: </b> Alejandra Bravo-Diaz, Diego Ramos, & Alfonso Tobar are reviewers at the 51st Latin American Informatics Conference (CLEI 2025).
          </li>				
	<li>
            <b>April 2025: </b> Journal paper accepted in <a href="https://link.springer.com/journal/521">Neural Computing and Applications</a> (SCOPUS). Congrats to Bravo-Diaz.
          </li>          				
	<li>
            <b>Mar. 2025: </b> Agustin Ghent started a part-time position at Centro Nacional de Inteligencia Artificial (CENIA), Chile.
        </li>		
	<li>
            <b>Mar. 2025: </b> Agustin Ghent attended the Latin American Meeting in Artificial Intelligence (KHIPU), Chile.
        </li>		
         <li>
            <b>Feb. 2025: </b> Alejandra Bravo-Diaz and Sebastián Moreno were invited as reviewer and area chair at NeurIPS 2025. 
          </li>		
          <li>
            <b>Jan. 2025: </b> Diego Ramos won the 2025 national Ph.D. scholarship (ANID), Congratulations!!!
          </li>
          <li>
            <b>Jan. 2025: </b> Sebastián Lillo has successfully defended his Master in Industrial Engineering and Operational Research thesis, Congratulations!!!
          </li>
	<li>
            <b>Jan. 2025: </b> Alejandra Bravo-Diaz is invited to give a talk at Universidad Católica del Maule.
          </li>		
         <li>
            <b>Jan. 2025: </b> Alejandra Bravo-Diaz has successfully defended her PhD thesis proposal, Congratulations!!!
          </li>
          <li>
            <b>Jan. 2025: </b> Alfonso Tobar has started working as a researcher in FONDEF #IT24I0144.
          </li>
          <li>
            <b>Jan. 2025: </b> Agustin Ghent has started an internship at the Centro Nacional de Inteligencia Artificial (Cenia), Chile.
          </li>
          <li>
            <b>Jan. 2025: </b> Sofía Álvarez has started an internship in ENTEL, Chile.
          </li>
	<li>
            <b>Dec. 2024: </b> Alfonso Tobar attended remotely the Thirty-Eight Annual Conference on Neural Information Processing Systems (NeurIPS), New Orleans, USA.		  
          </li> 		   
	<li>
            <b>Dec. 2024: </b> Agustín Ghent attended the Latin American Summer School on Robotics (LACORO), Rancagua Chile.
          </li>
          <li>
            <b>Dec. 2024: </b> Denis Berroeta has successfully defended his Master of Science in Data Science thesis, Congratulations!!!
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
