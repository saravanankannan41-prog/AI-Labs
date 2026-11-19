import { CORE_CAPABILITIES, OFFICE_LOCATIONS } from '../data/thelivuData';
import { PageRoute } from '../types';
import { LogoMark } from './LogoMark';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-[#060e20] border-t border-[#3d494c]/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3d494c]/30">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('overview')}
              className="inline-flex items-center gap-2.5 text-left group"
            >
              <LogoMark className="w-7 h-7" />
              <span className="text-base font-semibold tracking-tight text-[#dae2fd] group-hover:text-[#4cd7f6] transition-colors">
                Thelivu AI Labs
              </span>
            </button>

            <p className="text-sm text-[#bcc9cd] leading-relaxed max-w-md">
              Architecting explainable enterprise AI infrastructure, multilingual WhatsApp sales
              assistants, and zero-typing accounting automation for Indian MSMEs and scaled
              conglomerates.
            </p>

            <p className="text-xs font-mono text-[#869397] leading-relaxed">
              Made for Indian Businesses (MSMEs to Enterprises) · Mumbai &amp; Hyderabad Sovereign
              Clouds
            </p>
          </div>

          {/* Enterprise AI Capabilities */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4cd7f6]">
              Enterprise AI Capabilities
            </h4>
            <ul className="space-y-2">
              {CORE_CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('6-core-ai-solutions')}
                    className="text-sm text-[#bcc9cd] hover:text-[#dae2fd] transition-colors text-left cursor-pointer"
                  >
                    {cap.index}. {cap.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* India Enterprise Trust */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4cd7f6]">
              India Compliance &amp; Offices
            </h4>
            <ul className="space-y-2 text-sm text-[#bcc9cd]">
              <li>DPDP Act 2023 Ready</li>
              <li>RBI IT Framework Aligned</li>
              <li>ISO 27001 Certified Controls</li>
              <li>Zero Third-Party Data Retention</li>
              <li>MeitY Sovereign Cloud Ready</li>
            </ul>
            <div className="pt-2 text-xs text-[#869397] space-y-1">
              {OFFICE_LOCATIONS.map((loc) => (
                <div key={loc.city}>
                  <span className="text-[#dae2fd] font-medium">{loc.city}</span> · {loc.hub}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#869397] font-mono">
          <div>
            © 2026 Thelivu AI Labs Pvt. Ltd. · Bengaluru · Mumbai · Chennai · Hyderabad
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('roi-calculator')}
              className="hover:text-[#dae2fd] transition-colors cursor-pointer"
            >
              ROI Calculator
            </button>
            <button
              type="button"
              onClick={() => onNavigate('case-studies-impact')}
              className="hover:text-[#dae2fd] transition-colors cursor-pointer"
            >
              Impact Studies
            </button>
            <button
              type="button"
              onClick={() => onNavigate('book-ai-audit-consultation')}
              className="hover:text-[#4cd7f6] transition-colors cursor-pointer"
            >
              Book AI Audit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
