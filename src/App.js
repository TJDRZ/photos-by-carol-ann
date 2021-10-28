import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './assets/imgs/img1.jpg';
import img2 from './assets/imgs/img2.jpg';
import img3 from './assets/imgs/img3.jpg';
import img4 from './assets/imgs/img4.jpg';
import img5 from './assets/imgs/img5.jpg';
import img6 from './assets/imgs/img6.jpg';
import img7 from './assets/imgs/img7.jpg';
import img8 from './assets/imgs/img8.jpg';
import img9 from './assets/imgs/img9.jpg';
import img10 from './assets/imgs/img10.jpg';
import img11 from './assets/imgs/img11.jpg';
import img12 from './assets/imgs/img12.jpg';
import email from './assets/icons/email.svg';
import facebook from './assets/icons/facebook.svg';

function App() {
  return (
    <main className="App">
      <header>
        <h1>Photos by Carol Ann</h1>
      </header>
      <Carousel className="Carousel" autoPlay={true} dynamicHeight={true} infiniteLoop={true}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div>
          <img src={img7} alt="" />
        </div>
        <div>
          <img src={img8} alt="" />
        </div>
        <div>
          <img src={img9} alt="" />
        </div>
        <div>
          <img src={img10} alt="" />
        </div>
        <div>
          <img src={img11} alt="" />
        </div>
        <div>
          <img src={img12} alt="" />
        </div>
      </Carousel>
      <section className="contact">
        <h2>Contact me by phone, email, or on Facebook</h2>
        <div>
          <p>(410) 207-3170</p>
          <a className="email" href="mailto:carolann12674@gmail.com">
            <img src={email} alt="" />
          </a>
          <a className="facebook" href="https://www.facebook.com/PhotosbyCarolAnn/">
            <img src={facebook} alt="" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
