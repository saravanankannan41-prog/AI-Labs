import { useState } from 'react';
import { Calendar, Check, Download } from 'lucide-react';
import { PageRoute, SectorKey } from '../types';

interface RoiCalculatorSectionProps {
  onNavigate: (route: PageRoute) => void;
  expanded?: boolean;
}

export function RoiCalculatorSection({ onNavigate, expanded = false }: RoiCalculatorSectionProps) {
  const [turnover, setTurnover] = useState<number>(25); // in Lakhs/month
  const [staff, setStaff] = useState<number>(8);
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(450);
  const [sector, setSector] = useState<SectorKey>('retail');
  const [downloaded, setDownloaded] = useState(false);

  const sectorMultiplier = sector === 'mfg' ? 1.12 : sector === 'services' ? 1.05 : 1.0;

  const hoursSavedMonthly = Math.round(
    (staff * 16 + turnover * 0.4 + (expanded ? monthlyInvoices * 0.06 : 0)) * sectorMultiplier
  );
  const annualSavingsLakhs = (
    (staff * 1.45 + turnover * 0.18 + (expanded ? monthlyInvoices * 0.004 : 0)) *
    sectorMultiplier
  ).toFixed(1);
  const revenueBoostPercent = Math.min(28, Math.round(12 + turnover * 0.08));
  const workdaysFreed = Math.round(hoursSavedMonthly / 8);
  const paybackWeeks = Math.max(4, Math.min(12, Math.round(64 / Number(annualSavingsLakhs))));

  const formattedTurnover =
    turnover >= 100
      ? `₹${(turnover / 100).toFixed(2)} Crore / month`
      : `₹${turnover} Lakhs / month`;

  const handleDownloadGuide = () => {
    const content = [
      'THELIVU AI LABS — BUSINESS USE-CASE & ROI ESTIMATE BRIEF',
      '=======================================================',
      `Generated on: ${new Date().toLocaleDateString('en-IN')}`,
      `Selected Sector: ${
        sector === 'retail'
          ? 'Retail, Trade & D2C'
          : sector === 'mfg'
            ? 'Manufacturing & Logistics'
            : 'Services & Back-Office'
      }`,
      '',
      'INPUT PROFILE',
      `- Monthly Operating Turnover: ${formattedTurnover}`,
      `- Operations & Sales Staff: ${staff} Members`,
      expanded ? `- Monthly GST Bills & Challans: ${monthlyInvoices} documents` : '',
      '',
      'ESTIMATED ANNUAL IMPACT',
      `- Staff Time Freed Monthly: ${hoursSavedMonthly} Hours (~${workdaysFreed} workdays)`,
      `- Projected Annual Cost Savings: ₹${annualSavingsLakhs} Lakhs`,
      `- Estimated Revenue Uplift: +${revenueBoostPercent}% from zero missed leads`,
      `- Typical Implementation Payback: ~${paybackWeeks} Weeks`,
      '',
      'RECOMMENDED DEPLOYMENT STACK',
      '1. 24/7 Multilingual WhatsApp Sales & Support Agent (12+ Indian languages)',
      '2. Zero-Typing GST Bill & Challan OCR -> Tally Prime / Zoho Books / Marg ERP',
      '3. Daily Market & Working Capital Demand Digest',
      '',
      'Schedule your complimentary 45-minute engineering review:',
      'Bengaluru (Indiranagar) | Mumbai (BKC) | Chennai (OMR) | Hyderabad (HITEC City)',
    ]
      .filter(Boolean)
      .join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Thelivu-AI-Use-Case-Estimate-${turnover}L.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  return (
    <section
      aria-labelledby="roi-calculator-heading"
      className="rounded-xl bg-[#060e20] border border-[#4cd7f6]/25 p-6 sm:p-10"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2.5">
          <p className="text-xs font-mono font-medium text-[#4cd7f6] tracking-wide">
            Quick Estimate for Your Business
          </p>
          <h2
            id="roi-calculator-heading"
            className="text-2xl sm:text-3xl font-semibold text-[#dae2fd] tracking-tight"
          >
            Interactive Business Savings Calculator
          </h2>
          <p className="text-sm text-[#bcc9cd] max-w-2xl mx-auto leading-relaxed">
            Adjust the sliders according to your monthly turnover and team strength to estimate the
            staff hours and working capital saved each year.
          </p>
        </div>

        {/* Sector Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { key: 'retail' as SectorKey, label: 'Retail & Trade' },
            { key: 'mfg' as SectorKey, label: 'Manufacturing & Logistics' },
            { key: 'services' as SectorKey, label: 'Services & Back-Office' },
          ].map((item) => {
            const active = sector === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setSector(item.key)}
                className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                  active
                    ? 'bg-[#06b6d4] text-[#00232a] font-semibold'
                    : 'bg-[#171f33] text-[#bcc9cd] hover:text-[#dae2fd] border border-[#3d494c]/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Sliders Panel */}
        <div
          className={`grid grid-cols-1 ${
            expanded ? 'md:grid-cols-3' : 'md:grid-cols-2'
          } gap-6 bg-[#131b2e] p-5 sm:p-6 rounded-xl border border-[#3d494c]/30`}
        >
          {/* Turnover Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 text-xs">
              <label htmlFor="slider-turnover" className="text-[#bcc9cd]">
                Monthly Turnover Volume
              </label>
              <span className="font-mono font-semibold text-[#4cd7f6] tabular-nums">
                {formattedTurnover}
              </span>
            </div>
            <input
              id="slider-turnover"
              type="range"
              min={5}
              max={200}
              step={5}
              value={turnover}
              onChange={(e) => setTurnover(Number(e.target.value))}
              className="w-full thelivu-slider"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#869397]">
              <span>₹5 Lakhs</span>
              <span>₹1 Crore</span>
              <span>₹2+ Crores</span>
            </div>
          </div>

          {/* Staff Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 text-xs">
              <label htmlFor="slider-staff" className="text-[#bcc9cd]">
                Operations &amp; Sales Staff
              </label>
              <span className="font-mono font-semibold text-[#4cd7f6] tabular-nums">
                {staff} Members
              </span>
            </div>
            <input
              id="slider-staff"
              type="range"
              min={2}
              max={60}
              step={1}
              value={staff}
              onChange={(e) => setStaff(Number(e.target.value))}
              className="w-full thelivu-slider"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#869397]">
              <span>2 Members</span>
              <span>25 Members</span>
              <span>60+ Members</span>
            </div>
          </div>

          {/* Expanded Monthly Documents Slider */}
          {expanded && (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs">
                <label htmlFor="slider-invoices" className="text-[#bcc9cd]">
                  Monthly Bills &amp; Challans
                </label>
                <span className="font-mono font-semibold text-[#4cd7f6] tabular-nums">
                  {monthlyInvoices} Docs
                </span>
              </div>
              <input
                id="slider-invoices"
                type="range"
                min={100}
                max={3000}
                step={50}
                value={monthlyInvoices}
                onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                className="w-full thelivu-slider"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#869397]">
                <span>100 Docs</span>
                <span>1,500 Docs</span>
                <span>3,000+ Docs</span>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Outputs */}
        <div
          className={`grid grid-cols-1 ${
            expanded ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'
          } gap-4 text-center`}
        >
          <div className="p-5 rounded-xl bg-[#131b2e] border border-[#3d494c]/30">
            <div className="text-xs text-[#bcc9cd] mb-1">Time Saved Monthly</div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-[#dae2fd] tabular-nums">
              {hoursSavedMonthly} Hours
            </div>
            <div className="text-[11px] text-[#4fdbc8] mt-1 font-mono tabular-nums">
              ≈ {workdaysFreed} workdays freed up
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#171f33] border border-[#4cd7f6]/40">
            <div className="text-xs font-medium text-[#4cd7f6] mb-1">
              Estimated Saved per Year
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-[#4cd7f6] tabular-nums">
              ₹{annualSavingsLakhs} Lakhs
            </div>
            <div className="text-[11px] text-[#bcc9cd] mt-1 font-mono">
              Labor, error &amp; dead-stock savings
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#131b2e] border border-[#3d494c]/30">
            <div className="text-xs text-[#bcc9cd] mb-1">Est. Revenue Boost</div>
            <div className="text-2xl sm:text-3xl font-mono font-semibold text-[#4fdbc8] tabular-nums">
              +{revenueBoostPercent}%
            </div>
            <div className="text-[11px] text-[#bcc9cd] mt-1 font-mono">
              from zero missed enquiries
            </div>
          </div>

          {expanded && (
            <div className="p-5 rounded-xl bg-[#131b2e] border border-[#3d494c]/30">
              <div className="text-xs text-[#bcc9cd] mb-1">Estimated Payback</div>
              <div className="text-2xl sm:text-3xl font-mono font-semibold text-[#dae2fd] tabular-nums">
                {paybackWeeks} Weeks
              </div>
              <div className="text-[11px] text-[#4fdbc8] mt-1 font-mono">
                typical MSME break-even
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => onNavigate('book-ai-audit-consultation')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Get a Free 45-Minute Business AI Audit</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadGuide}
            className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] hover:text-[#4cd7f6] border border-[#3d494c]/40 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-[#4fdbc8] shrink-0" />
                <span>Estimate Brief Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 shrink-0" />
                <span>Download Custom ROI Brief</span>
              </>
            )}
          </button>
        </div>

        <p className="text-center text-xs text-[#869397] font-mono">
          Zero commitment required · Review your setup on Google Meet or at our Bengaluru, Mumbai,
          Chennai, or Hyderabad offices
        </p>
      </div>
    </section>
  );
}
