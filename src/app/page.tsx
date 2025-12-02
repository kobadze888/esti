import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { FeaturedSalons } from '@/components/home/FeaturedSalons';
import { BusinessCTA } from '@/components/home/BusinessCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <CategoriesSection />
        <HowItWorks />
        <FeaturedSalons />
        <BusinessCTA />
      </main>

      <Footer />
    </div>
  );
}