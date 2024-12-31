import { ReactElement } from 'react';

export function Home(): ReactElement {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-info">
            <h2>LAMDA-UAI</h2>
            <p> An Machine Learning and Applied Machine Learning Lab</p>
          </div>
        </div>
      </div>
      <div className="container news">
        <h4>News</h4>
        <ul>
          <li>
            <b>Jan. 2024: </b> Jiajun Hu and Jialun Cao have successfully
            defended their PhD thesis.
          </li>

          <li>
            <b> Nov. 2023: </b> One paper is accepted by IEEE S&P 2024.
          </li>

          <li>
            <b>Jul. 2023: </b> Huaxun Huang has successfully defended his PhD
            thesis. Congratulations!
          </li>

          <li>
            <b>Jul. 2023: </b> Three papers are accepted by ESEC/FSE 2023.
            Congrats to Ying, Ming, Jialun and Xiao.
          </li>

          <li>
            <b>Jul. 2023: </b> One paper on software testing using LLM is
            accepted by ASE'23.
          </li>

          <li>
            <b>Jul. 2023: </b> Yongqiang Tian has successfully defended his PhD
            thesis. Congratulations!
          </li>

          <li>
            <b>Jul. 2023: </b> Prof. Shing-Chi Cheung has been promoted to chair
            professorship.
          </li>

          <li>
            <b>Jun. 2023: </b> One paper on program synthesis is accepted by
            TOSEM.
          </li>

          <li>
            <b>Nov. 2022: </b> Prof. Shing-Chi Cheung has been elected to the
            IEEE Fellow Class 2023.
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
