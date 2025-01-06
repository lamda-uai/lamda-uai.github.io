import { ReactElement } from 'react';

export function Projects(): ReactElement {
  return (
    <>
      <div className="container">
        <h3>Funded Research Projects</h3>
        <ul className="project_ul">
          <li>
            Intrusion aware: An integral platform to detect and reply cyberattacks using responsible artificial intelligence.<br />
            FONDEF #IT24I0144, Chile (2024-2026).<br />
            Researchers: S. Moreno and A. Tobar.<br />
          </li>
          <li>
            Development and implementation of an automatic coding algorithm for content analysis and a method to calculate coverage in the collection of conceptual property norms.<br />
            FONDECYT #1240075, Chile (2024-2028).<br />
            Director: E. Canessa; Co-director: S. Chaigneau; Technical personnel: S. Moreno and D. Ramos.<br />
          </li>          
          <li>
            Statistical relational models for OD-matrix estimation and behavioral mobility patterns.<br />
            FONDECYT #11230076, Chile (2023-2026).<br />
            Director: S. Moreno; Researchers: S. Álvarez, C. Heredia, A. Tobar; Technical Personnel: A. Bravo-Diaz, A. Ghent, D. Ramos.<br />
          </li>          
          <li>
            A method for studying shared meaning in cultural groups.<br />
            Opportunity Award, J. S. McDonnel Foundation, USA (2022-2025).<br />
            Director: S. Chaigneau; Co-director: E. Canessa and S. Moreno; Researcher: D. Ramos.<br />
          </li>          
          <li>
            A descriptive and dynamic model of the property listing task for the characterization between abstract and concrete concepts.<br />
            FONDECYT #1200139, Chile (2022-2024).<br />
            Director: E. Canessa; Co-director: S. Chaigneau; Technical personnel: S. Moreno.<br />
          </li>          
          <li>
            Development of big data technologies to How to avoid high drop out rate of first-year university students.<br />
            FONDEF #ID18I10216, Chile (2018-2020).<br />
            Researcher: S. Moreno and D. Opazo.<br />
          </li>          
        </ul>
      </div>
    </>
  );
}
