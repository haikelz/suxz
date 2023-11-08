import Template from "./ui/template";

export default function Banner() {
  return (
    <Template>
      <div class="flex flex-col-reverse pt-28 pb-20 lg:pt-40 lg:pb-0 lg:flex-row items-start lg:justify-between">
        <div class="w-full mt-8">
          <p class="text-xl text-primary font-bold">SUXZ MAKE IT EASY</p>
          <h1 class="lg:text-[64px] text-[44px] w-full lg:w-[434px] font-extrabold leading-snug">
            Find Your Way Of Success
          </h1>
          <p class="text-2xl mt-4 w-full lg:w-[527px] mb-6 md:mb-8">
            We help you to increase self-confidence and train yourself in a
            direction, and make you more creative in developing a work
          </p>
          <div class="flex items-center space-x-5 lg:space-x-7">
            <button
              type="button"
              aria-label="get started"
              class="text-white text-lg lg:text-[23px] bg-primary py-4 rounded-md font-bold px-8"
            >
              Get Started
            </button>
            <button
              type="button"
              aria-label="our services"
              class="px-8 py-4 bg-tertiary rounded-md font-bold text-lg lg:text-[23px] text-[#A2B3BF]"
            >
              Our Services
            </button>
          </div>
        </div>
        <div class="w-full flex justify-center items-center">
          <img
            src="/images/hero.png"
            class="lg:w-[574px] lg:h-[616px] md:w-[600px]"
            alt="hero"
          />
        </div>
      </div>
    </Template>
  );
}
