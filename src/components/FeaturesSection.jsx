import React from 'react';

const data = [
  {
    circleColor: '#F37229',
    heading: 'A Living Voice Echo',
    txt: 'Upload their voice and StillHere recreates their familiar tone, warmth, and presence.',
  },
  {
    circleColor: '#DB0E3A',
    heading: 'A Private Memory Library',
    txt: 'Save their stories, signature sayings, recordings, and meaningful moments.',
  },
  {
    circleColor: '#089DB6',
    heading: 'A Gentle, Ongoing Connection',
    txt: 'Talk with their Life Echo anytime — private, intimate, and always there when you need them.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="ml-4.5 mr-5">
      <div className="max-w-360 mx-auto">
        <h2 className="xl:text-[52.8px] lg:text-4xl md:text-3xl text-2xl leading-[120%] font-amstel-thin text-center">
          Features
        </h2>

        <div className="relative">
          <div className="absolute flex lg:items-center max-lg:justify-center lg:w-full max-lg:h-full lg:top-2 max-lg:left-1.5 -z-1">
            <div className="lg:h-0.5 h-full w-0.5 bg-[url(/dash-180deg.svg)] lg:bg-[url(/dash.svg)] flex-1" />
            <div className="size-3 rounded-full bg-[#919191] absolute lg:left-0 max-lg:top-0" />
            <div className="size-3 rounded-full bg-[#919191] absolute lg:right-0 max-lg:bottom-0" />
          </div>

          <div className="flex max-lg:flex-col lg:gap-[45px] gap-6 lg:mt-10 mt-6">
            {data.map((cur, i) => (
              <div key={i} className="flex-1 flex lg:flex-col ">
                <div className="flex max-lg:flex-1 lg:flex-col items-center">
                  <div
                    className="lg:size-4 size-[13px] rounded-full "
                    style={{ background: cur.circleColor }}
                  />
                  <div className="lg:w-px lg:h-20.5 w-8 h-px bg-[#919191] max-lg:flex-1" />
                </div>

                <div
                  className={`border bg-[#EFF5F5] border-midnight-blue/10 rounded-2xl lg:pt-12.5 lg:px-8 px-5.5 lg:pb-[69px] flex flex-col lg:gap-7.5 gap-4.5 lg:text-center ${
                    i === data.length - 1 ? 'max-sm:max-w-[283px]' : ''
                  } ${i === 0 ? 'py-4 ' : 'py-6'}`}
                >
                  <h3 className="text-midnight-blue font-inter lg:text-2xl lg:leading-[120%] leading-[130%] font-bold ">
                    {cur.heading}
                  </h3>
                  <p className="text-gray lg:text-[25px] text-sm font-jost leading-normal ">
                    {cur.txt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
