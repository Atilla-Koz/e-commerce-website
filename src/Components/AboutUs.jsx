import AboutBrand from './AboutUs/AboutBrand';
import AboutHero from './AboutUs/AboutHero';
import InfoAbout from './AboutUs/InfoAbout';
import NumbersAbout from './AboutUs/NumbersAbout';
import VideoAbout from './AboutUs/VideoAbout';
import Footer from './Footer';
import Header from './Header';
import Team from './Team';

export default function AboutUs() {
  return (
    <section>
      <Header />
      <AboutHero />
      <InfoAbout />
      <NumbersAbout />
      <VideoAbout />
      <Team />
      <AboutBrand />
      <Footer />
    </section>
  );
}
