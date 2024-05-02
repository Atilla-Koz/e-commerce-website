import one from '../../assets/NavIcon/1.png';
import two from '../../assets/NavIcon/2.png';
import ws from '../../assets/NavIcon/ws.svg';
import t from '../../assets/NavIcon/t.png';
export default function NavIcon() {
  return (
    <section className="flex flex-col items-center w-full h-[1402px] lg:h-[744px]">
      <div className="flex flex-col items-center text-icon w-[a309px] h-[84px]">
        <h6 className="text-click"> Practice Advice</h6>
        <h2 className="text-title">Featured Posts</h2>
      </div>
      <section className="lg:flex lg:flex-row lg:gap-6">
        <div className="lg:flex lg:flex-row lg:gap-4">
          <div
            className="w-[330px] h-[300px] lg:w-[209px] lg:h-[404px] "
            style={{ backgroundImage: `url(${one})` }}
          >
            <button className="w-[56px] h-[24px] p-[0px 10px 0px 10px] bg-[#E74040] text-white rounded ml-4 mt-4">
              <h6>NEW</h6>
            </button>
          </div>
          <div className="w-[330px] h-[306px] flex flex-col gap-4  lg:w-[292px] lg:h-[404px]">
            <div className="flex flex-row gap-4 pt-4 lg:flex lg:flex-col lg:content-between lg:h-[404px] ">
              <p className="text-[#8EC2F2]">Google</p>
              <p>Trending</p>
              <p>New</p>
            </div>
            <h4>Loudest à la Madison #1 (L'integral)</h4>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex flex-row justify-between">
              <p className="flex flex-row ">
                {' '}
                <img className="h-[16px] pr-1" src={ws} />
                22 April 2021
              </p>
              <p className="flex flex-row">
                {' '}
                <img className="h-[16px] pr-1" src={t} />
                10 comments
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-4">
          <div
            className="w-[330px] h-[300px] lg:w-[209px] lg:h-[404px]  "
            style={{ backgroundImage: `url(${two})` }}
          >
            <button className="w-[56px] h-[24px] p-[0px 10px 0px 10px] bg-[#E74040] text-white rounded ml-4 mt-4">
              <h6>NEW</h6>
            </button>
          </div>
          <div className="w-[330px] h-[306px] flex flex-col gap-4  lg:w-[292px] lg:h-[404px]">
            <div className="flex flex-row gap-4 pt-4 lg:flex lg:flex-col lg:content-between lg:h-[404px]">
              <p className="text-[#8EC2F2]">Google</p>
              <p>Trending</p>
              <p>New</p>
            </div>
            <h4>Loudest à la Madison #1 (L'integral)</h4>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex flex-row justify-between">
              <p className="flex flex-row ">
                {' '}
                <img className="h-[16px] pr-1" src={ws} />
                22 April 2021
              </p>
              <p className="flex flex-row">
                {' '}
                <img className="h-[16px] pr-1" src={t} />
                10 comments
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
