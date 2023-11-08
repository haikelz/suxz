import Template from "./ui/template";

export default function AboutUs() {
  return (
    <Template className="py-20">
      <div
        id="about"
        class="flex lg:space-x-10 flex-col lg:flex-row justify-center lg:justify-between w-full items-start"
      >
        <div class="flex justify-center w-full lg:w-fit items-center">
          <img
            src="/images/review.png"
            alt="review"
            class="w-[600px] lg:w-fit"
          />
        </div>
        <div class="w-full lg:mt-0 mt-10 lg:w-[468px]">
          <p class="text-primary font-bold text-xl">ABOUT US</p>
          <h2 class="font-extrabold text-[44px]">
            We Help Improve Your Work Experience
          </h2>
          <p class="text-[22px] font-medium mt-4">
            We help you to increase self-confidence and train yourself in a
            direction.
          </p>
          <ul class="space-y-5 mt-10">
            <li class="flex items-start space-x-4">
              <div class="rounded-full p-2 flex items-center w-8 h-8 justify-center bg-[#DDFFF9]">
                <img src="/images/check.svg" alt="check" class="w-8 h-8" />
              </div>
              <p class="text-xl font-semibold">
                Study and produce creation to get a job
              </p>
            </li>
            <li class="flex items-start space-x-4">
              <div class="rounded-full p-2 flex items-center w-8 h-8 justify-center bg-[#DDFFF9]">
                <img src="/images/check.svg" alt="check" class="w-8 h-8" />
              </div>
              <p class="text-xl font-semibold">
                Up to date material and created by expert creators
              </p>
            </li>
            <li class="flex items-start space-x-4">
              <div class="rounded-full p-2 flex items-center w-8 h-8 justify-center bg-[#DDFFF9]">
                <img src="/images/check.svg" alt="check" class="w-8 h-8" />
              </div>
              <p class="text-xl font-semibold">
                Complete classes and projects and get a certificate from us
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Template>
  );
}
