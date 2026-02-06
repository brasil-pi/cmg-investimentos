import Hero from '@/components/Hero';
import APIsSection from '@/components/APIsSection';
import ManagedAccounts from '@/components/ManagedAccounts';
import DashboardDemo from '@/components/DashboardDemo';
import Integrations from '@/components/Integrations';
import UseCases from '@/components/UseCases';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <APIsSection />
      <ManagedAccounts />
      <DashboardDemo />
      <Integrations />
      <UseCases />
      <Footer />
    </div>
  );
}
