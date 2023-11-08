import { createSignal } from "solid-js";
import Template from "./ui/template";
import { tw } from "../lib/helpers";

const testimonialList = [
  {
    id: 1,
    name: "Jason Todd",
    role: "Entrepeneur",
    description:
      "“The mentor is cool, how to convey each material is also detailed and easy to understand..”",
    image: "jason.png",
  },
  {
    id: 2,
    name: "Cassandra K",
    role: "Web Developer",
    description:
      "“The mentor is cool, how to convey each material is also detailed and easy to understand..”",
    image: "cassandra.png",
  },
  {
    id: 3,
    name: "Peter Parker",
    role: "PHP Enthusiast",
    description:
      "“The mentor is cool, how to convey each material is also detailed and easy to understand..”",
    image: "peter.png",
  },
  {
    id: 4,
    name: "Jean Gray",
    role: "Designer",
    description:
      "“The mentor is cool, how to convey each material is also detailed and easy to understand..”",
    image: "jean.png",
  },
];

export default function Testimonial() {
  const [choice, setChoice] = createSignal<number>(0);

  return (
    <Template className="py-20">
      <div
        id="testimonial"
        class="flex text-center justify-center items-center flex-col"
      >
        <div class="text-center">
          <p class="font-primary text-xl font-bold text-primary">Testimonial</p>
          <h2 class="font-extrabold text-[44px]">Our Alumni Say</h2>
          <p class="font-medium text-2xl mt-4">
            These are the words of people who have taken our class
          </p>
        </div>
        <div
          class={tw(
            "flex w-full overflow-x-auto",
            "xl:overflow-x-visible py-10 xl:py-0",
            "items-center mt-20 space-x-16"
          )}
        >
          {testimonialList.map((item) => (
            <div
              class={tw(
                "border-2 border-primary min-w-[240px] w-full max-w-full px-4 rounded-md relative transition-all",
                "flex flex-col items-center justify-center",
                choice() === item.id ? "bg-primary text-white" : ""
              )}
              tabIndex={1}
              role="button"
              onClick={() => setChoice(item.id)}
            >
              <img
                src={`/images/${item.image}`}
                alt="jason"
                class="overflow-clip bg-clip-border absolute -top-10"
              />
              <div class="py-10">
                <h4 class="font-bold text-[22px]">{item.name}</h4>
                <p
                  class={tw(
                    "font-normal text-[#BAB8D2] text-[15px]",
                    choice() === item.id ? "text-white" : ""
                  )}
                >
                  {item.role}
                </p>
                <p class="font-normal text-[17px] mt-8">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
}
