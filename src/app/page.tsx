import FeaturesSection from "@/components/ladingpage/features/features";
import LadingPageHeader from "@/components/ladingpage/header/Header";
import HeroSection from "@/components/ladingpage/hero/Hero";

export default async function Home() {

  return (
    <main>
      <LadingPageHeader />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
