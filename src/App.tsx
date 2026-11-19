import { useEffect, useState } from 'react';
import { BookAuditPage } from './components/BookAuditPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { ClientPortalPage } from './components/ClientPortalPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { OverviewPage } from './components/OverviewPage';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { SolutionsPage } from './components/SolutionsPage';
import { PageRoute } from './types';

const VALID_ROUTES: PageRoute[] = [
  'overview',
  '6-core-ai-solutions',
  'case-studies-impact',
  'roi-calculator',
  'client-portal',
  'book-ai-audit-consultation',
];

function getInitialRoute(): PageRoute {
  const hash = window.location.hash.replace('#', '') as PageRoute;
  return VALID_ROUTES.includes(hash) ? hash : 'overview';
}

export default function App() {
  const [activeRoute, setActiveRoute] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (VALID_ROUTES.includes(hash)) {
        setActiveRoute(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setActiveRoute(route);
    if (window.location.hash !== `#${route}`) {
      window.history.pushState(null, '', `#${route}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1326] text-[#dae2fd] relative overflow-x-hidden">
      {/* Subtle Ambient Surface Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-[420px] overflow-hidden -z-0"
      >
        <div className="mx-auto max-w-4xl h-[300px] -mt-32 rounded-full bg-[#4cd7f6]/[0.07] blur-[130px]" />
      </div>

      <Header activeRoute={activeRoute} onNavigate={handleNavigate} />

      <main className="flex-1 pt-[72px] relative z-10">
        {activeRoute === 'overview' && <OverviewPage onNavigate={handleNavigate} />}

        {activeRoute === '6-core-ai-solutions' && <SolutionsPage onNavigate={handleNavigate} />}

        {activeRoute === 'case-studies-impact' && <CaseStudiesPage onNavigate={handleNavigate} />}

        {activeRoute === 'roi-calculator' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
            <div className="space-y-3 max-w-3xl">
              <p className="text-xs font-mono font-medium text-[#4cd7f6]">
                Financial Impact Estimator · INR Lakhs &amp; Hours Saved
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#dae2fd] [text-wrap:balance]">
                Calculate Your Annual AI Savings &amp; Payback Period
              </h1>
              <p className="text-base text-[#bcc9cd] leading-relaxed">
                Model your operational savings based on monthly turnover, team size, and monthly GST
                invoices or challans processed.
              </p>
            </div>
            <RoiCalculatorSection onNavigate={handleNavigate} expanded />
          </div>
        )}

        {activeRoute === 'client-portal' && <ClientPortalPage onNavigate={handleNavigate} />}

        {activeRoute === 'book-ai-audit-consultation' && <BookAuditPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
