import { createSignal } from "solid-js";
import { tw } from "../lib/helpers";
import Template from "./ui/template";

const curriculum = [
  {
    id: 1,
    title: "Starter",
    description: "Free class access for that start learning code and design",
    image: "starter.png",
  },
  {
    id: 2,
    title: "Premium",
    description: "Advanced material from the Starter & learn to build projects",
    image: "premium.png",
  },
  {
    id: 3,
    title: "Superstar",
    description: "Materials for experts who have completed the premium package",
    image: "superstar.png",
  },
  {
    id: 4,
    title: "Bootcamp",
    description:
      "Informatics science training program with the latest material",
    image: "bootcamp.png",
  },
];

export default function Learnings() {
  const [choice, setChoice] = createSignal<number>(0);

  return (
    <Template className="bg-[#F8F8FF] py-14">
      <div id="learnings" class="w-full">
        <div class="lg:w-[555px]">
          <p class="font-bold text-xl text-primary">Learnings</p>
          <h2 class="text-[44px] font-bold">
            Online Learning Platform International Curriculum
          </h2>
          <p class="font-medium mt-4 text-[22px] lg:w-[404px]">
            Study and understand the material class is more relaxed without time
            limit.
          </p>
        </div>
        <div
          class={tw(
            "grid grid-cols-1 sm:grid-cols-2 gap-10",
            "xl:gap-16 xl:grid-cols-4 xl:grid-rows-1 mt-14 w-full"
          )}
        >
          {curriculum.map((item) => (
            <div
              class={tw(
                "bg-white rounded-lg w-full p-6 transition-all",
                choice() === item.id ? "bg-primary text-white" : ""
              )}
              tabIndex={0}
              role="button"
              onClick={() => setChoice(item.id)}
            >
              <img src={`/images/${item.image}`} alt="starter" />
              <h4 class="font-bold mt-6 mb-2 text-xl">{item.title}</h4>
              <p class="mb-7">{item.description}</p>
              <button
                type="button"
                aria-label="see class"
                class="bg-secondary text-white rounded-md py-1.5 w-full text-base font-bold"
              >
                See Class
              </button>
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
}
