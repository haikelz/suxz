import { tw } from "../lib/helpers";
import Template from "./ui/template";

const companiesList: Array<{ id: number; image: string }> = [
  {
    id: 1,
    image: "github.svg",
  },
  {
    id: 2,
    image: "microsoft.svg",
  },
  {
    id: 3,
    image: "redis.svg",
  },
  {
    id: 4,
    image: "amazon.svg",
  },
  {
    id: 5,
    image: "paypal.svg",
  },
  {
    id: 6,
    image: "linkedin.svg",
  },
  {
    id: 7,
    image: "reddit.svg",
  },
  {
    id: 8,
    image: "medium.svg",
  },
];

export default function CompaniesList() {
  return (
    <Template className="py-20 bg-[#F8F8FF]">
      <div class="flex justify-center items-center flex-col">
        <div class="text-center">
          <h2 class="font-extrabold text-[44px]">
            Companies That Recruit Our Graduates
          </h2>
          <p class="font-medium text-[26px] mt-4">
            Our graduates have worked in more than 400 companies around the
            World
          </p>
        </div>
        <div
          class={tw(
            "grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4",
            "gap-16 lg:gap-10 lg:grid-rows-2 mt-20"
          )}
        >
          {companiesList.map((item) => (
            <img
              src={`/images/${item.image}`}
              alt={`${item.image.replace(/.svg/, "")} logo`}
            />
          ))}
        </div>
      </div>
    </Template>
  );
}
