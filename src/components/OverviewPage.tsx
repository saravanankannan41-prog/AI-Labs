import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Eye,
  Factory,
  FileCheck2,
  Lock,
  MessageSquare,
  Receipt,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  Wallet,
} from 'lucide-react';
import { CASE_STUDIES, SECTORS, SOFTWARE_COMPATIBILITY } from '../data/thelivuData';
import { PageRoute, SectorKey, SolutionCardItem } from '../types';
import { RoiCalculatorSection } from './RoiCalculatorSection';

interface OverviewPageProps {
  onNavigate: (route: PageRoute) => void;
}

function SolutionIcon({ name }: { name: SolutionCardItem['iconName'] }) {
  const cls = 'w-5 h-5';
  switch (name) {
    case 'chat':
      return <MessageSquare className={cls} />;
    case 'eye':
      return <Eye className={cls} />;
    case 'trending':
      return <TrendingUp className={cls} />;
    case 'receipt':
      return <Receipt className={cls} />;
    case 'factory':
      return <Factory className={cls} />;
    case 'truck':
      return <Truck className={cls} />;
    case 'file':
      return <FileCheck2 className={cls} />;
    case 'shield':
      return <ShieldCheck className={cls} />;
    case 'briefcase':
      return <Briefcase className={cls} />;
    case 'clock':
      return <Clock className={cls} />;
    case 'users':
      return <Users className={cls} />;
    case 'wallet':
      return <Wallet className={cls} />;
  }
}

export function OverviewPage({ onNavigate }: OverviewPageProps) {
  const [activeSector, setActiveSector] = useState<SectorKey>('retail');
  const currentSector = SECTORS.find((s) => s.key === activeSector) ?? SECTORS[0];
  const featuredStory = CASE_STUDIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14">
      {/* Clean Unboxed Context Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#3d494c]/30 text-xs font-mono text-[#bcc9cd]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[#4cd7f6] font-medium">
            Made for Indian Businesses (MSMEs to Enterprises)
          </span>
          <span aria-hidden="true" className="text-[#869397]">
            /
          </span>
          <span>Universal Commercial Applications</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#4fdbc8]">Zero Jargon Guaranteed</span>
          <span aria-hidden="true" className="text-[#869397]">
            ·
          </span>
          <span>DPDP Act 2023 Sovereign Storage</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <p className="text-xs font-mono font-medium text-[#4cd7f6] tracking-wide">
          Practical AI for Every Indian Business · Plain English, Zero Tech Talk
        </p>

        <h1
          className="font-semibold tracking-tight text-[#dae2fd] leading-[1.12] [text-wrap:balance]"
          style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
        >
          AI Solutions Built for Any Business{' '}
          <span className="text-[#4cd7f6] underline decoration-[#4cd7f6]/40 decoration-2 underline-offset-8">
            That Works in India
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#bcc9cd] max-w-3xl leading-relaxed">
          From local merchants and growing distributors to mid-sized factories and multi-city
          enterprises — deploy proven tools that save staff hours, prevent margin leakage, and
          close more daily orders over WhatsApp and Tally.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <button
            type="button"
            onClick={() => onNavigate('book-ai-audit-consultation')}
            className="px-6 py-3 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-sm font-semibold rounded-lg inline-flex items-center gap-2 transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <span>Book Free 45-Min Business AI Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('6-core-ai-solutions')}
            className="px-5 py-3 bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] text-sm font-medium rounded-lg border border-[#3d494c]/40 transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            Explore 6 Core AI Solutions
          </button>
        </div>
      </section>

      {/* Interactive Sector Switcher */}
      <section aria-labelledby="sector-solutions-heading" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-[#060e20] border border-[#3d494c]/30">
          <div className="space-y-1">
            <h2
              id="sector-solutions-heading"
              className="text-sm font-semibold text-[#dae2fd]"
            >
              Choose Your Business Sector
            </h2>
            <p className="text-xs text-[#869397]">
              Inspect exact bottlenecks solved across sales, warehouse, and GST accounting
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Business sector solutions"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#131b2e] rounded-lg border border-[#3d494c]/30"
          >
            {SECTORS.map((sector) => {
              const isSelected = activeSector === sector.key;
              return (
                <button
                  key={sector.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveSector(sector.key)}
                  className={`px-3.5 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#06b6d4] text-[#00232a] font-semibold'
                      : 'text-[#bcc9cd] hover:text-[#dae2fd] hover:bg-[#171f33]'
                  }`}
                >
                  {sector.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sector Banner */}
        <div className="p-6 sm:p-7 rounded-xl bg-[#131b2e] border border-[#4cd7f6]/25 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <p className="text-xs font-mono text-[#4cd7f6] font-medium">
              {currentSector.label} · Ready in Days
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#dae2fd] tracking-tight">
              {currentSector.headline}
            </h3>
            <p className="text-sm text-[#bcc9cd] leading-relaxed">{currentSector.subheadline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#4fdbc8] shrink-0">
            {currentSector.highlights.map((item, idx) => (
              <span key={item} className="inline-flex items-center gap-2">
                {idx > 0 && (
                  <span aria-hidden="true" className="text-[#869397]">
                    ·
                  </span>
                )}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 4 Solution Cards for Active Sector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentSector.cards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-[#131b2e] border border-[#3d494c]/35 hover:border-[#4cd7f6]/45 transition-colors duration-150"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#171f33] border border-[#3d494c]/40 flex items-center justify-center text-[#4cd7f6] shrink-0">
                      <SolutionIcon name={card.iconName} />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#dae2fd] leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-xs font-mono text-[#869397] mt-0.5">
                        {card.subtitle} · {card.tagText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* The Headache */}
                <div className="p-4 rounded-lg bg-[#1c131d] border border-[#ffb4ab]/20 space-y-1.5">
                  <div className="text-xs font-mono font-medium text-[#ffb4ab] inline-flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>The Headache</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#dae2fd]/90 leading-relaxed">
                    {card.headache}
                  </p>
                </div>

                {/* How Thelivu Solves It */}
                <div className="p-4 rounded-lg bg-[#101e2e] border border-[#4cd7f6]/20 space-y-1.5">
                  <div className="text-xs font-mono font-medium text-[#4cd7f6] inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>How Thelivu Solves It</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#dae2fd]/90 leading-relaxed">
                    {card.solution}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#3d494c]/30 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-mono text-[#869397]">Demonstrated Result</span>
                <span className="font-mono font-semibold text-[#4fdbc8] tabular-nums">
                  {card.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cross-Department Snapshot */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-[#dae2fd]">
            Built for Every Operating Department
          </h3>
          <span className="text-xs font-mono text-[#869397]">
            Connects sales, dispatch, and accounts in one workflow
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#131b2e] border border-[#3d494c]/30 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#171f33] flex items-center justify-center text-[#4cd7f6] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-sm font-semibold text-[#dae2fd]">Operations &amp; Logistics</h4>
                <span className="text-xs font-mono text-[#4fdbc8]">· Immediate Sync</span>
              </div>
              <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                Challan &amp; lorry receipt OCR, real-time dispatch tracking, transport bill
                reconciliation, and instant bottleneck alerts.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#131b2e] border border-[#3d494c]/30 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#171f33] flex items-center justify-center text-[#4cd7f6] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-sm font-semibold text-[#dae2fd]">
                  Back-Office &amp; Administration
                </h4>
                <span className="text-xs font-mono text-[#4fdbc8]">· Auto-Workflow</span>
              </div>
              <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                Instant proposal and quotation drafting in 3 minutes, vendor document verification,
                and polite automated payment follow-ups on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Indian Growth Story */}
      <section
        aria-labelledby="featured-case-study"
        className="p-6 sm:p-8 rounded-xl bg-[#131b2e] border border-[#3d494c]/35"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono font-medium text-[#4fdbc8]">
              Verified Indian Growth Story · {featuredStory.city}
            </p>
            <h3
              id="featured-case-study"
              className="text-xl sm:text-2xl font-semibold text-[#dae2fd] leading-snug"
            >
              How {featuredStory.company} {featuredStory.headline}
            </h3>
            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#dae2fd]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                <span>From 80 enquiries/day to 650+ handled automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                <span>Zero extra administrative headcount hired in 12 months</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                <span>Full sync with Tally Prime, Razorpay, and dispatch logs</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => onNavigate('case-studies-impact')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#4cd7f6] hover:text-[#acedff] pt-2 cursor-pointer"
            >
              <span>Read all 3 verified case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#3d494c]/30 lg:pl-8">
            <blockquote className="text-sm sm:text-base text-[#dae2fd] leading-relaxed">
              “{featuredStory.quote}”
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#3d494c]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#171f33] border border-[#4cd7f6]/35 flex items-center justify-center text-sm font-semibold text-[#4cd7f6]">
                  RK
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#dae2fd]">
                    {featuredStory.spokesperson}
                  </div>
                  <div className="text-xs font-mono text-[#869397]">
                    {featuredStory.role} ({featuredStory.city})
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-[#bcc9cd]">
                {featuredStory.stack.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Business Savings Calculator */}
      <RoiCalculatorSection onNavigate={onNavigate} />

      {/* Native India Software Compatibility Strip */}
      <section className="p-6 sm:p-7 rounded-xl bg-[#131b2e] border border-[#3d494c]/30 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs font-mono font-medium text-[#4cd7f6]">
              Native India Software Compatibility
            </p>
            <h3 className="text-base sm:text-lg font-semibold text-[#dae2fd]">
              No Need to Change Your Existing Accounting or Billing Software
            </h3>
          </div>
          <span className="text-xs font-mono text-[#4fdbc8]">Plug-and-play in 7 days or less</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {SOFTWARE_COMPATIBILITY.map((item) => (
            <div
              key={item.name}
              className="p-3 rounded-lg bg-[#171f33] border border-[#3d494c]/30 flex flex-col items-center justify-center text-center gap-1"
            >
              <span className="text-xs font-semibold text-[#dae2fd]">{item.name}</span>
              <span className="text-[11px] font-mono text-[#869397]">{item.protocol}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#3d494c]/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#bcc9cd]">
          <div className="inline-flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#4fdbc8]" />
            <span>Data stays 100% in India (Mumbai &amp; Hyderabad Sovereign Clouds)</span>
          </div>
          <div>Compliant with Digital Personal Data Protection (DPDP) Act 2023</div>
        </div>
      </section>
    </div>
  );
}
