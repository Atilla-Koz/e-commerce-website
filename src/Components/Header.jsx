import phone from '../assets/Header/phone.svg';
import mail from '../assets/Header/mail.svg';
import instagram from '../assets/Header/insta.svg';
import youtube from '../assets/Header/youtube.svg';
import facebook from '../assets/Header/facebook.svg';
import twitter from '../assets/Header/twitter.svg';
import user from '../assets/Header/user.svg';
import search from '../assets/Header/search.svg';
import basket from '../assets/Header/basket.svg';
import heart from '../assets/Header/Heart.svg';

export default function Header() {
  return (
    <header className="flex flex-col pb-[20rem] lg:pb-0">
      <span className="hidden lg:block">
        <section className="flex flex-row items-center justify-between text-white bg-headerTop w-full h-14 px-6">
          <div className="flex flex-row gap-6">
            <h6 className="flex flex-row  gap-1">
              <img src={phone} alt="Phone icon" />
              (225) 555-0118
            </h6>
            <h6 className="flex flex-row  gap-1">
              <img src={mail} alt="Phone icon" />
              michelle.rivera@example.com
            </h6>
          </div>
          <div>
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
          <div className="flex flex-row gap-4">
            <h6>Follow Us</h6>
            <h6>:</h6>
            <img src={instagram} alt="Instagram icon" />
            <img src={youtube} alt="Youtube icon" />
            <img src={facebook} alt="Facebook icon" />
            <img src={twitter} alt="Twitter icon" />
          </div>
        </section>
      </span>
      <section className="flex lg:flex-row flex-col items-center justify-between w-full h-20 px-6 bg-white gap-4">
        <div className="flex lg:flex-row flex-col items-center gap-4">
          <h3 className="lg:mr-24">Bandage</h3>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Pages</a>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2">
          <span className="flex flex-row gap-4">
            <a className="flex text-click" href="#">
              <img src={user} />
              Login
            </a>
            <span className="text-[14px] font-[700] text-click">/</span>
            <a className="text-click" href="#">
              Register
            </a>
          </span>
          <span className="flex lg:flex-row flex-col gap-8 ml-4">
            <a className="text-click" href="#">
              <img src={search} alt="search" />
            </a>
            <a className="text-click" href="#">
              <img src={basket} alt="basket" />
            </a>
            <a className="text-click flex flex-row" href="#">
              <img src={heart} alt="likes" />
              {'1'}
            </a>
          </span>
        </div>
      </section>
    </header>
  );
}
