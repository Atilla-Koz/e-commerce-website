import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import yc from '../../assets/ProductDetail/desc.png';
import yon from '../../assets/ProductDetail/yon.svg';
export default function Description() {
  return (
    <section className="flex flex-col items-center gap-16 h-[1306px] pr-8 pl-8 lg:h-[572px]">
      <div className="flex flex-row justify-center gap-4">
        <Link>Description</Link>
        <Link>Additional Information</Link>
        <Link>Reviews (0)</Link>
      </div>
      <span className="lg:flex lg:flex-row gap-16">
        <img src={yc} />
        <div className="flex flex-col items-center gap-4 lg:w-[332px]">
          <h3 className="text-headerTop">the quick fox jumps over </h3>
          <p className="text-softText">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-softText">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-softText">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4  ">
          <h3 className="text-headerTop">the quick fox jumps over </h3>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>

          <h3 className="text-headerTop">the quick fox jumps over </h3>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>
          <p className="text-softText flex flex-row gap-4">
            <img src={yon} />
            the quick fox jumps over the lazy dog
          </p>
        </div>
      </span>
    </section>
  );
}
