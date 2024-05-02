import face from '../assets/Footer/face.png';
import insta from '../assets/Footer/insta.png';
import twitter from '../assets/Footer/twitter.png';

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="flex flex-col gap-8 w-full h-[173px] bg-[#FAFAFA] pl-16">
        <h3>Bandage</h3>
        <div className="flex flex-row gap-4">
          <img src={face} />
          <img src={insta} />
          <img src={twitter} />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 ml-16">
          <h5>Company Info</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-2 ml-16">
          <h5>Legal</h5>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-2 ml-16">
          <h5>Features</h5>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="flex flex-col gap-2 ml-16">
          <h5>Resources</h5>
          <p>IOS & Android</p>
          <p>Customers</p>
          <p>Watch a Demo</p>
          <p>API</p>
        </div>
        <div className="flex flex-col ml-16">
          <h5>Get In Touch</h5>
          <form className="">
            <input
              className="border  h-[54px] rounded-[1px] bg-[#F9F9F9]"
              type="email"
              placeholder="Your email"
            />
            <button
              className="bg-click text-white w-[117px] h-[58px] rounded-[1px]"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p>Lore imp sum dolor Amit</p>
        </div>
        <div className="bg-[#FAFAFA] w-full h-[98px] flex justify-center items-center">
          <h6 className="text-softText">
            Made With Love By Finland All Right Reserved{' '}
          </h6>
        </div>
      </section>
    </footer>
  );
}
