import { createSignal } from "solid-js";

export default function Header() {
  const [isOpen, setIsOpen] = createSignal<boolean>(false);

  return (
    <header class="w-full fixed top-0 bg-white/70 backdrop-blur-md z-50 max-w-full flex flex-col justify-center items-center">
      <nav class="w-full flex justify-between items-center p-4 max-w-7xl">
        <div class="flex items-center">
          <a href="#">
            <button
              class="flex items-center mr-12"
              type="button"
              aria-label="suxz logo"
            >
              <img src="/images/logo.svg" alt="logo" class="mr-4" />
              <span class="font-bold text-[34px] leading-9">Suxz</span>
            </button>
          </a>
          <ul class="hidden lg:flex items-center space-x-6">
            <li>
              <a href="#" class="font-semibold text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="#learnings" class="font-semibold text-xl">
                Learnings
              </a>
            </li>
            <li>
              <a href="#about" class="font-semibold text-xl">
                About Us
              </a>
            </li>
            <li>
              <a href="#testimonial" class="font-semibold text-xl">
                Testimonial
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          aria-label="open and close navbar"
          class="block lg:hidden"
          onClick={() => setIsOpen(!isOpen())}
        >
          <img src="/images/nav.svg" alt="nav" />
        </button>
        <div class="lg:flex items-center hidden space-x-6">
          <button
            type="button"
            aria-label="login"
            class="text-primary font-semibold"
          >
            Log in
          </button>
          <button
            type="button"
            aria-label="Sign Up"
            class="bg-primary text-white font-semibold rounded-lg py-2.5 px-8"
          >
            Sign up
          </button>
        </div>
      </nav>
      {isOpen() ? (
        <div class="pb-4 px-4">
          <ul class="text-center space-y-4">
            <li>
              <a href="#" class="font-medium text-xl">
                Home
              </a>
            </li>
            <li>
              <a href="#learnings" class="font-medium text-xl">
                Learnings
              </a>
            </li>
            <li>
              <a href="#about" class="font-medium text-xl">
                About Us
              </a>
            </li>
            <li>
              <a href="#testimonial" class="font-medium text-xl">
                Testimonial
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
