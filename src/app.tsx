import AboutUs from "./components/about-us";
import Banner from "./components/banner";
import CompaniesList from "./components/companies-list";
import Footer from "./components/footer";
import GetStarted from "./components/get-started";
import Header from "./components/header";
import Learnings from "./components/learnings";
import Testimonial from "./components/testimonial";

export default function App() {
  return (
    <>
      <Header />
      <main class="w-full">
        <Banner />
        <Learnings />
        <AboutUs />
        <CompaniesList />
        <Testimonial />
        <GetStarted />
        <Footer />
      </main>
    </>
  );
}
