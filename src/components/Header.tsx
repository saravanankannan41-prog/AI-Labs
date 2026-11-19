import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../types';
import { LogoMark } from './LogoMark';

interface HeaderProps {
  activeRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { route: PageRoute; label: string }[] = [
  { route: 'overview', label: 'Overview' },
  { route: '6-core-ai-solutions', label: 'Core Solutions' },
  { route: 'case-studies-impact', label: 'Case Studies' },
  { route: 'roi-calculator', label: 'ROI Calculator' },
  { route: 'client-portal', label: 'Client Portal' },
];

export function Header({ activeRoute, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060e20]/90 backdrop-blur-xl border-b border-[#3d494c]/30">
      <div className="max-w-7xl mx-auto h-[72px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single clean brand wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cd7f6] rounded-md"
        >
          <LogoMark className="w-7 h-7 shrink-0" />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-[#dae2fd] group-hover:text-[#4cd7f6] transition-colors duration-150">
            Thelivu AI Labs
          </span>
        </button>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNavClick(item.route)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cd7f6] rounded ${
                  isActive
                    ? 'text-[#4cd7f6]'
                    : 'text-[#bcc9cd] hover:text-[#dae2fd]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4cd7f6] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('book-ai-audit-consultation')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#acedff] cursor-pointer"
          >
            Book AI Audit
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#171f33] text-[#dae2fd] hover:text-[#4cd7f6] border border-[#3d494c]/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060e20] border-t border-[#3d494c]/30 px-4 py-4 space-y-2">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#171f33] text-[#4cd7f6]'
                      : 'text-[#bcc9cd] hover:bg-[#131b2e] hover:text-[#dae2fd]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[#3d494c]/30">
            <button
              type="button"
              onClick={() => handleNavClick('book-ai-audit-consultation')}
              className="w-full py-2.5 px-4 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-sm font-semibold rounded-lg transition-colors"
            >
              Book AI Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
