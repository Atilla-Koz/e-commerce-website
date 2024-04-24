import phone from '../assets/Header/phone.svg';
import mail from '../assets/Header/mail.svg';
import instagram from '../assets/Header/insta.svg';
import youtube from '../assets/Header/youtube.svg';
import facebook from '../assets/Header/facebook.svg';
import twitter from '../assets/Header/twitter.svg';

export default function Header() {
  return (
    <header className="flex flex-col">
      <span className="hidden lg:block">
        <section className="flex flex-row items-center justify-between text-white bg-headerTop w-full h-14 px-6">
          <div className="flex flex-row gap-6">
            <p className="flex flex-row  gap-1">
              <img src={phone} alt="Phone icon" />
              (225) 555-0118
            </p>
            <p className="flex flex-row  gap-1">
              <img src={mail} alt="Phone icon" />
              michelle.rivera@example.com
            </p>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex flex-row gap-2">
            <p>Follow Us:</p>
            <img src={instagram} alt="Instagram icon" />
            <img src={youtube} alt="Youtube icon" />
            <img src={facebook} alt="Facebook icon" />
            <img src={twitter} alt="Twitter icon" />
          </div>
        </section>
      </span>
      <section className="flex xl:flex-row flex-col">dasdasd</section>
    </header>
  );
}
