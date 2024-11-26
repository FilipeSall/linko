import { auth } from "@/auth";
import FeaturesSection from "@/components/ladingpage/features/features";
import LadingPageHeader from "@/components/ladingpage/header/Header";
import HeroSection from "@/components/ladingpage/hero/Hero";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await auth();

  if(session !== null){
    redirect('/dashboard');
  }

  return (
    <main>
      <LadingPageHeader />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
