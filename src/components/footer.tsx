export default function Footer() {
  return (
    <footer class="w-full flex justify-center items-center py-14 px-4">
      <div class="max-w-7xl flex flex-col lg:flex-row items-start justify-between w-full">
        <div class="lg:w-[416px]">
          <div class="flex items-center space-x-3">
            <img src="/images/logo.svg" alt="logo" />
            <h4 class="font-bold text-[34px]">SUXZ</h4>
          </div>
          <p class="text-[22px] font-medium mt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div class="flex mt-10 lg:mt-0 flex-col lg:flex-row items-start space-y-10 lg:space-y-0 lg:space-x-14">
          <div>
            <h4 class="font-bold text-[28px]">Company</h4>
            <ul class="space-y-3 mt-4">
              <li>
                <p class="font-medium text-[22px]">Home</p>
              </li>
              <li>
                <p class="font-medium text-[22px]">Blogs</p>
              </li>
              <li>
                <p class="font-medium text-[22px]">Careers</p>
              </li>
              <li>
                <p class="font-medium text-[22px]">Portfolios</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-[28px]">Links</h4>
            <ul class="space-y-3 mt-4">
              <li>
                <p class="font-medium text-[22px]">Privacy & Policy</p>
              </li>
              <li>
                <p class="font-medium text-[22px]">Github</p>
              </li>
              <li>
                <p class="font-medium text-[22px]">Supports</p>
              </li>
              <li>
                <p class="font-medium text-[22px]">FAQs</p>
              </li>
            </ul>
          </div>
          <div class="w-[219px]">
            <h4 class="font-bold text-[28px]">Contact</h4>
            <div class="mt-4">
              <div class="flex items-center space-x-2">
                <img src="/images/telephone.svg" alt="telephone" />
                <p class="text-primary font-medium text-[22px]">
                  (021) 31048184
                </p>
              </div>
              <div class="flex items-center space-x-2 mt-4 mb-3">
                <img src="/images/email.svg" alt="email" />
                <p class="text-primary font-medium text-[22px]">
                  irham@suxz.com
                </p>
              </div>
              <p class="font-medium text-[22px]">
                Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan.
                12240.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
