import { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Layers } from 'lucide-react';
import { CORE_CAPABILITIES } from '../data/thelivuData';
import { PageRoute } from '../types';

interface SolutionsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const [selectedId, setSelectedId] = useState<string>(CORE_CAPABILITIES[0].id);
  const selected =
    CORE_CAPABILITIES.find((c) => c.id === selectedId) ?? CORE_CAPABILITIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      <div className="space-y-4 max-w-3xl">
        <p className="text-xs font-mono font-medium text-[#4cd7f6]">
          6 Core AI Capabilities · Built for Indian Operations
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#dae2fd] [text-wrap:balance]">
          Modular AI Systems That Plug Directly Into Your Existing Workflow
        </h1>
        <p className="text-base text-[#bcc9cd] leading-relaxed">
          Select any capability below to inspect how it connects with Tally Prime, Zoho Books, Marg
          ERP, or WhatsApp Cloud API — along with expected rollout timelines.
        </p>
      </div>

      {/* Interactive Split Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List: 6 Capabilities */}
        <div className="lg:col-span-6 space-y-3">
          {CORE_CAPABILITIES.map((cap) => {
            const isActive = cap.id === selected.id;
            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => setSelectedId(cap.id)}
                className={`w-full text-left p-5 rounded-xl border transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#171f33] border-[#4cd7f6]/60'
                    : 'bg-[#131b2e] border-[#3d494c]/30 hover:border-[#3d494c]/70'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#4cd7f6]">
                      {cap.index}. {cap.category}
                    </div>
                    <h2 className="text-base sm:text-lg font-semibold text-[#dae2fd]">
                      {cap.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#bcc9cd] line-clamp-2 leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#4fdbc8] whitespace-nowrap shrink-0">
                    {cap.deploymentTime}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Detail Panel */}
        <aside className="lg:col-span-6 lg:sticky lg:top-24 p-6 sm:p-8 rounded-xl bg-[#060e20] border border-[#4cd7f6]/30 space-y-6">
          <div className="space-y-2 pb-5 border-b border-[#3d494c]/30">
            <div className="text-xs font-mono text-[#4cd7f6]">
              Capability {selected.index} · {selected.category}
            </div>
            <h3 className="text-2xl font-semibold text-[#dae2fd]">{selected.title}</h3>
            <p className="text-sm text-[#bcc9cd] leading-relaxed">{selected.summary}</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[#131b2e] border border-[#3d494c]/30 space-y-1.5">
              <div className="text-xs font-mono text-[#869397]">Bottleneck Eliminated</div>
              <p className="text-sm text-[#dae2fd] leading-relaxed">{selected.problemSolved}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#131b2e] border border-[#3d494c]/30 space-y-1.5">
                <div className="text-xs font-mono text-[#869397] inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>Go-Live Timeline</span>
                </div>
                <div className="text-base font-mono font-semibold text-[#dae2fd] tabular-nums">
                  {selected.deploymentTime}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#131b2e] border border-[#3d494c]/30 space-y-1.5">
                <div className="text-xs font-mono text-[#869397] inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4fdbc8]" />
                  <span>Verified Outcome</span>
                </div>
                <div className="text-sm font-medium text-[#4fdbc8]">
                  {selected.measurableOutcome}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#131b2e] border border-[#3d494c]/30 space-y-2">
              <div className="text-xs font-mono text-[#869397] inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#4cd7f6]" />
                <span>Supported Connectors</span>
              </div>
              <div className="text-sm font-mono text-[#dae2fd]">
                {selected.integrations.join(' · ')}
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('book-ai-audit-consultation')}
              className="px-5 py-3 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-sm font-semibold rounded-lg inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Scope This Module in Your Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('roi-calculator')}
              className="text-xs font-mono text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer"
            >
              Estimate Annual Savings →
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
