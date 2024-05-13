import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Contact() {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-contact-bg flex flex-col items-center justify-center w-screen h-screen p-16">
      <h2>Questions & Answers</h2>
      <p>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </p>
      <Link>
        <h6 className="text-click">CONTACT US</h6>
      </Link>
    </section>
  );
}
