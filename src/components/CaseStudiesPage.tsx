import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/thelivuData';
import { PageRoute, SectorKey } from '../types';

interface CaseStudiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function CaseStudiesPage({ onNavigate }: CaseStudiesPageProps) {
  const [filter, setFilter] = useState<'all' | SectorKey>('all');

  const filteredStudies =
    filter === 'all' ? CASE_STUDIES : CASE_STUDIES.filter((cs) => cs.sector === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <p className="text-xs font-mono font-medium text-[#4cd7f6]">
            Verified Indian Deployments · Audited Production Outcomes
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#dae2fd] [text-wrap:balance]">
            Real Results Across Trade, Manufacturing &amp; Distribution
          </h1>
          <p className="text-base text-[#bcc9cd] leading-relaxed">
            Every case study includes the exact starting bottleneck, the software integrated, and
            audited savings achieved within 60 to 180 days.
          </p>
        </div>

        {/* Interactive Sector Filter */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#131b2e] rounded-lg border border-[#3d494c]/30 shrink-0">
          {[
            { key: 'all' as const, label: 'All Sectors' },
            { key: 'retail' as const, label: 'Trade & Retail' },
            { key: 'mfg' as const, label: 'Manufacturing' },
            { key: 'services' as const, label: 'Pharma & Services' },
          ].map((item) => {
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                className={`px-3.5 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#06b6d4] text-[#00232a] font-semibold'
                    : 'text-[#bcc9cd] hover:text-[#dae2fd]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Studies List */}
      <div className="space-y-8">
        {filteredStudies.map((cs) => (
          <article
            key={cs.id}
            className="p-6 sm:p-8 rounded-xl bg-[#131b2e] border border-[#3d494c]/35 space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#3d494c]/30">
              <div className="space-y-2 max-w-3xl">
                <div className="text-xs font-mono text-[#4fdbc8]">
                  {cs.company} · {cs.city} · {cs.sectorLabel}
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#dae2fd]">{cs.headline}</h2>
                <p className="text-sm text-[#bcc9cd] leading-relaxed">{cs.summary}</p>
              </div>

              <div className="text-xs font-mono text-[#869397] shrink-0">
                Stack: {cs.stack.join(' · ')}
              </div>
            </div>

            {/* 4 Quantified Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {cs.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-lg bg-[#171f33] border border-[#3d494c]/30 space-y-1"
                >
                  <div className="text-xs text-[#869397]">{metric.label}</div>
                  <div className="text-xl sm:text-2xl font-mono font-semibold text-[#4cd7f6] tabular-nums">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Before -> Change -> Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[#060e20] border border-[#3d494c]/25 space-y-1.5">
                <div className="text-xs font-mono text-[#ffb4ab]">Before Thelivu</div>
                <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">{cs.beforeState}</p>
              </div>
              <div className="p-4 rounded-lg bg-[#060e20] border border-[#3d494c]/25 space-y-1.5">
                <div className="text-xs font-mono text-[#4cd7f6]">System Deployed</div>
                <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                  {cs.changeImplemented}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#060e20] border border-[#3d494c]/25 space-y-1.5">
                <div className="text-xs font-mono text-[#4fdbc8]">Measured Outcome</div>
                <p className="text-xs sm:text-sm text-[#dae2fd] leading-relaxed">
                  {cs.outcomeStatement}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="pt-4 border-t border-[#3d494c]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <blockquote className="text-sm text-[#dae2fd] italic max-w-3xl leading-relaxed">
                “{cs.quote}”
              </blockquote>
              <div className="shrink-0 text-left sm:text-right">
                <div className="text-sm font-semibold text-[#dae2fd]">{cs.spokesperson}</div>
                <div className="text-xs font-mono text-[#869397]">{cs.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#060e20] border border-[#4cd7f6]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-[#dae2fd]">
            Want to benchmark similar savings for your business?
          </h3>
          <p className="text-sm text-[#bcc9cd]">
            Book a 45-minute technical discovery call with our Bengaluru or Mumbai engineering team.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('book-ai-audit-consultation')}
          className="px-5 py-3 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-sm font-semibold rounded-lg inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>Book Free AI Audit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
