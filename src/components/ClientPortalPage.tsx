import { useState } from 'react';
import { ArrowRight, CheckCircle2, Download, KeyRound, Shield } from 'lucide-react';
import { PageRoute } from '../types';

interface ClientPortalPageProps {
  onNavigate: (route: PageRoute) => void;
}

interface WorkspaceSample {
  code: string;
  company: string;
  city: string;
  connectors: { name: string; lastSync: string; volume: string }[];
}

const SAMPLE_WORKSPACES: WorkspaceSample[] = [
  {
    code: 'SHRINGAR-IND',
    company: 'Shringar Enterprises',
    city: 'Ahmedabad & Mumbai',
    connectors: [
      { name: 'Tally Prime XML Bridge', lastSync: '4 mins ago', volume: '1,420 vouchers / wk' },
      { name: 'WhatsApp Cloud (GUJ / HIN / ENG)', lastSync: 'Real-time', volume: '654 enquiries / day' },
      { name: 'Razorpay UPI Settlement Sync', lastSync: '11 mins ago', volume: '₹14.8L reconciled' },
    ],
  },
  {
    code: 'KAVERI-PUNE',
    company: 'Kaveri Precision Components',
    city: 'Chakan MIDC, Pune',
    connectors: [
      { name: 'Gate Challan & LR OCR Desk', lastSync: '9 mins ago', volume: '312 challans / wk' },
      { name: 'Tally Prime Inventory Watch', lastSync: '18 mins ago', volume: '140 active SKUs' },
      { name: 'Vendor GSTIN Portal Verifier', lastSync: '1 hour ago', volume: '100% matched' },
    ],
  },
];

export function ClientPortalPage({ onNavigate }: ClientPortalPageProps) {
  const [workspaceCode, setWorkspaceCode] = useState('SHRINGAR-IND');
  const [activeWorkspace, setActiveWorkspace] = useState<WorkspaceSample>(SAMPLE_WORKSPACES[0]);
  const [lookupError, setLookupError] = useState('');
  const [guideDownloaded, setGuideDownloaded] = useState(false);

  const handleLoadWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = workspaceCode.trim().toUpperCase();
    const match = SAMPLE_WORKSPACES.find((w) => w.code === cleaned);
    if (match) {
      setActiveWorkspace(match);
      setLookupError('');
    } else {
      setLookupError(
        'Workspace code not recognized in preview mode. Try SHRINGAR-IND or KAVERI-PUNE, or book onboarding below.'
      );
    }
  };

  const handleDownloadGuide = () => {
    const guideText = [
      'THELIVU AI LABS — INDIAN BUSINESS IMPLEMENTATION GUIDE (2026)',
      '==============================================================',
      '',
      '1. WHATSAPP SALES & MULTILINGUAL ASSISTANT',
      '   - Supports Hindi, Tamil, Telugu, Kannada, Marathi, Gujarati, Bengali, and English',
      '   - Connects directly to Meta Verified WhatsApp Cloud API',
      '   - Shares PDF price lists, checks live stock, and sends Razorpay UPI payment links',
      '',
      '2. ZERO-TYPING GST BILL & CHALLAN PROCESSING',
      '   - Captures vendor invoices and handwritten lorry receipts via smartphone photo',
      '   - Validates GSTIN, HSN codes, and tax splits before posting to Tally Prime / Zoho Books',
      '',
      '3. SOVEREIGN INDIA COMPLIANCE',
      '   - Hosted strictly in Mumbai & Hyderabad cloud regions',
      '   - Zero third-party model training retention · DPDP Act 2023 compliant',
    ].join('\n');

    const blob = new Blob([guideText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Thelivu-Business-Use-Case-Guide.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setGuideDownloaded(true);
    setTimeout(() => setGuideDownloaded(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="space-y-3 max-w-3xl">
        <p className="text-xs font-mono font-medium text-[#4cd7f6]">
          Client Portal · Connector Health &amp; Implementation Briefs
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#dae2fd] [text-wrap:balance]">
          Client Integration Workspace
        </h1>
        <p className="text-base text-[#bcc9cd] leading-relaxed">
          Preview how active Indian enterprise clients inspect their Tally XML bridges, WhatsApp
          Cloud throughput, and GST reconciliation checkpoints, or download the implementation guide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Workspace Access Form */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-[#131b2e] border border-[#3d494c]/35 space-y-6">
          <form onSubmit={handleLoadWorkspace} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="workspace-code"
                className="block text-xs font-mono text-[#bcc9cd]"
              >
                Client Workspace ID
              </label>
              <div className="flex gap-2">
                <input
                  id="workspace-code"
                  type="text"
                  value={workspaceCode}
                  onChange={(e) => setWorkspaceCode(e.target.value)}
                  placeholder="e.g. SHRINGAR-IND"
                  className="flex-1 px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm font-mono text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-xs font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-colors"
                >
                  Load View
                </button>
              </div>
              {lookupError && <p className="text-xs text-[#ffb4ab]">{lookupError}</p>}
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-[#869397]">
              <span>Sample IDs:</span>
              {SAMPLE_WORKSPACES.map((sample) => (
                <button
                  key={sample.code}
                  type="button"
                  onClick={() => {
                    setWorkspaceCode(sample.code);
                    setActiveWorkspace(sample);
                    setLookupError('');
                  }}
                  className="font-mono text-[#4cd7f6] hover:underline cursor-pointer"
                >
                  {sample.code}
                </button>
              ))}
            </div>
          </form>

          <div className="pt-5 border-t border-[#3d494c]/30 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#4fdbc8]">
              <Shield className="w-4 h-4" />
              <span>DPDP Act 2023 Sovereign Tenancy</span>
            </div>
            <p className="text-xs text-[#bcc9cd] leading-relaxed">
              Every client deployment runs inside an isolated Mumbai or Hyderabad VPC with
              role-based ledger approval before posting vouchers.
            </p>
            <button
              type="button"
              onClick={handleDownloadGuide}
              className="w-full py-2.5 px-4 rounded-lg bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] text-xs font-semibold border border-[#3d494c]/40 inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {guideDownloaded
                  ? 'Implementation Guide Downloaded'
                  : 'Download Business Use-Case Guide'}
              </span>
            </button>
          </div>
        </div>

        {/* Right: Active Workspace Connectors */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#060e20] border border-[#3d494c]/35 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#3d494c]/30">
            <div>
              <div className="text-xs font-mono text-[#4cd7f6]">
                Workspace · {activeWorkspace.code}
              </div>
              <h2 className="text-xl font-semibold text-[#dae2fd] mt-0.5">
                {activeWorkspace.company}
              </h2>
              <p className="text-xs text-[#869397]">{activeWorkspace.city}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4fdbc8]">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Verified Read-Write Bridge</span>
            </span>
          </div>

          <div className="space-y-3">
            {activeWorkspace.connectors.map((conn) => (
              <div
                key={conn.name}
                className="p-4 rounded-lg bg-[#131b2e] border border-[#3d494c]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#4fdbc8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-[#dae2fd]">{conn.name}</div>
                    <div className="text-xs font-mono text-[#869397]">
                      Last synced: {conn.lastSync}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono font-semibold text-[#4cd7f6] tabular-nums">
                  {conn.volume}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#3d494c]/30 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#bcc9cd]">
              Ready to set up your own private workspace?
            </span>
            <button
              type="button"
              onClick={() => onNavigate('book-ai-audit-consultation')}
              className="px-4 py-2.5 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-xs font-semibold rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Request Workspace Onboarding</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
