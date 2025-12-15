import Banner from "./components/banner";
import FamilyAccess from "./components/family-access";
import FeaturesSection from "./components/FeaturesSection";
import LivingLegacy from "./components/living-legacy";
import Time from "./components/time";
import WeBelieveSection from "./components/WeBelieveSection";
import HowWorksSection from "./components/HowWorksSection";
import ComparisonSection from "./components/ComparisonSection";
import PlanSection from "./components/PlanSection";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <WeBelieveSection />
        <FeaturesSection />
        <ComparisonSection />
        <HowWorksSection />
        <LivingLegacy />
        <FamilyAccess />
        <PlanSection />
        <Time />
      </main>
      <Footer />
    </>
  );
}

export default App;
