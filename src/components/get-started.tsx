import { tw } from "../lib/helpers";

export default function GetStarted() {
  return (
    <section class="lg:p-4 text-center p-6 flex justify-center items-center w-full bg-workplace bg-black/55 bg-blend-multiply bg-center bg-cover lg:h-[382px]">
      <div>
        <h2 class="font-extrabold text-white text-[44px]">
          So? What Are You Waiting For
        </h2>
        <p class="font-medium text-2xl text-white">
          It's time to build your career, study in a relaxed and purposeful
          manner
        </p>
        <div
          class={tw(
            "lg:space-x-10 space-y-4 lg:space-y-0 flex flex-col",
            "items-center justify-center lg:flex-row space-x-0 mt-6"
          )}
        >
          <button
            type="button"
            aria-label="get started"
            class="bg-primary text-white rounded-md font-bold text-[23px] px-7 py-2 w-fit"
          >
            Get Started
          </button>
          <button
            type="button"
            aria-label="get started"
            class="text-white font-bold text-[23px] w-fit"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
