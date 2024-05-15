import AboutHero from './AboutUs/AboutHero';
import InfoAbout from './AboutUs/InfoAbout';
import NumbersAbout from './AboutUs/NumbersAbout';
import VideoAbout from './AboutUs/VideoAbout';
import Footer from './Footer';
import Header from './Header';

export default function AboutUs() {
  return (
    <section>
      <Header />
      <AboutHero />
      <InfoAbout />
      <NumbersAbout />
      <VideoAbout />
      <Footer />
    </section>
  );
}
