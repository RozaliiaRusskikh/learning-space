import Planet from '../../assets/images/planet.png'
import Star from '../../assets/images/star.png'
import Book from '../../assets/images/book.png'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      <div className="circle">
        <img className='my-planet' src={Planet} alt="my-planet" />
        <div className='starOrbit'>
          <img className='star' src={Book} alt='star' />
          <img className='star2' src={Star} alt='star2' />
        </div>
      </div>
      <div className='about-me'>
        <h2>Hello, I’m Roza and this is my learning space. </h2>
        <div className='description'>
          <p>
            I’m passionate about building things for the web. I started my journey as a web developer
            when I worked as a QA Engineer. I managed to create a web site that picks information to make a report which users can download as a .scv file,
            and once that happened, I was completely hooked to the world of apps development. </p>
          <p>I’ve cultivated my passion for coding by studying, but most of all, by building web apps using HTML, CSS, and JavaScript,
            so that I could put learning into practice.</p>
          <p>I’m now looking for a dev position
            to finally kick off my career and learn among professionals.</p>
          <p><span>
            Here you can find books that I have been reading to gain knowledge. Also you can read my posts under Progress Journal
            tab to know me better as a professional.
          </span> </p>
          <h2>Welcome to my space!
            <FontAwesomeIcon icon={faRocket} color="#abbacc" />
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home;