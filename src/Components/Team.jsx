import face from '../assets/Team/face.png';
import insta from '../assets/Team/insta.png';
import twit from '../assets/Team/twit.png';

export default function Team() {
  return (
    <section className="flex flex-col items-center w-full h-full p-8 gap-8">
      <div className="flex flex-col items-center gap-4 lg:gap-8">
        <h2 className="flex flex-row justify-center w-[302px] h-[100px] lg:w-[607px] lg:h-[50px]">
          Meet Our Team
        </h2>
        <p className="flex flex-row justify-center w-[302px] h-[100px] lg:w-[607px] lg:h-[40px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{' '}
        </p>
      </div>
      <div className=" flex flex-col lg:flex lg:flex-row lg:justify-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-[316px] h-[280px] rounded-[20px] mb-4"
            src="https://atillakoz.netlify.app/assets/me-CO6W2Ur0.png"
          />
          <h5>Atilla Köz</h5>
          <p>Software Developer</p>
          <div className="flex flex-row justify-center gap-8">
            <img src={face} />
            <img src={insta} />
            <img src={twit} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-[316px] h-[280px] rounded-[20px] mb-4"
            src="https://media.licdn.com/dms/image/D4D03AQHHikjSDQq9xw/profile-displayphoto-shrink_800_800/0/1708951317641?e=1721260800&v=beta&t=yD2ETlUhceGV-5OQDmu-r1DTzUfLToErDLkjN2SjEwg"
          />
          <h5>Erhan Fırat</h5>
          <p>Software Developer</p>
          <div className="flex flex-row justify-center gap-8">
            <img src={face} />
            <img src={insta} />
            <img src={twit} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            className="w-[316px] h-[280px] rounded-[20px] mb-4"
            src="https://media.licdn.com/dms/image/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/0/1635783306921?e=1721260800&v=beta&t=JAw-28V-YucJK759UKeGeDwT9p38jtxYOiQtst4osTg"
          />
          <h5>Gökhan Özdemir</h5>
          <p>Software Developer</p>
          <div className="flex flex-row justify-center gap-8">
            <img src={face} />
            <img src={insta} />
            <img src={twit} />
          </div>
        </div>
      </div>
    </section>
  );
}
