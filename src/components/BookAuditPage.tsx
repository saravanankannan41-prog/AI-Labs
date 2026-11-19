import { useState } from 'react';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/thelivuData';
import { AuditBooking } from '../types';

const STACK_OPTIONS = [
  'Tally Prime',
  'Zoho Books',
  'Marg ERP',
  'Shopify / WooCommerce',
  'WhatsApp Business',
  'Razorpay / UPI',
  'Excel / Custom ERP',
];

const TURNOVER_TIERS = [
  '₹5L – ₹25L / month',
  '₹25L – ₹1 Cr / month',
  '₹1 Cr – ₹5 Cr / month',
  '₹5 Cr+ / month',
];

export function BookAuditPage() {
  const [form, setForm] = useState<AuditBooking>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    monthlyTurnover: TURNOVER_TIERS[1],
    cityOrMode: 'Google Meet (Online Video Audit)',
    preferredDate: '',
    softwareStack: ['Tally Prime', 'WhatsApp Business'],
    primaryGoal: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const toggleStack = (item: string) => {
    setForm((prev) => ({
      ...prev,
      softwareStack: prev.softwareStack.includes(item)
        ? prev.softwareStack.filter((s) => s !== item)
        : [...prev.softwareStack, item],
    }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.companyName.trim()) nextErrors.companyName = 'Please enter your business name.';
    if (!form.contactName.trim()) nextErrors.contactName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid work email address.';
    }
    if (!/^[+\d\s-]{8,15}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid 10-digit phone or WhatsApp number.';
    }
    if (!form.preferredDate) {
      nextErrors.preferredDate = 'Please choose a preferred audit date.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const refId = `TLV-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refId);
  };

  if (submittedRef) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="p-8 sm:p-10 rounded-xl bg-[#131b2e] border border-[#4fdbc8]/40 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#4fdbc8]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Audit Request Confirmed · Reference {submittedRef}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-[#dae2fd]">
            Your 45-Minute Business AI Audit Is Scheduled
          </h1>

          <p className="text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
            Thank you, <span className="text-[#dae2fd] font-medium">{form.contactName}</span>. Our
            solutions engineer will review the workflow requirements for{' '}
            <span className="text-[#dae2fd] font-medium">{form.companyName}</span> and send a
            calendar invite to <span className="font-mono text-[#4cd7f6]">{form.email}</span>.
          </p>

          <div className="p-5 rounded-lg bg-[#060e20] border border-[#3d494c]/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <div className="text-[#869397] font-mono">Meeting Location</div>
              <div className="text-[#dae2fd] font-medium mt-1">{form.cityOrMode}</div>
            </div>
            <div>
              <div className="text-[#869397] font-mono">Preferred Date</div>
              <div className="text-[#dae2fd] font-mono mt-1">{form.preferredDate}</div>
            </div>
            <div>
              <div className="text-[#869397] font-mono">Turnover Volume</div>
              <div className="text-[#dae2fd] font-mono mt-1">{form.monthlyTurnover}</div>
            </div>
            <div>
              <div className="text-[#869397] font-mono">Software Stack</div>
              <div className="text-[#dae2fd] mt-1">
                {form.softwareStack.length > 0 ? form.softwareStack.join(', ') : 'To be assessed'}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSubmittedRef(null)}
            className="px-5 py-2.5 bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] text-xs font-semibold rounded-lg border border-[#3d494c]/40 transition-colors cursor-pointer"
          >
            Submit Another Audit Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="space-y-3 max-w-3xl">
        <p className="text-xs font-mono font-medium text-[#4cd7f6]">
          Free 45-Minute Consultation · Zero Sales Pressure
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#dae2fd] [text-wrap:balance]">
          Book Your Business AI Audit
        </h1>
        <p className="text-base text-[#bcc9cd] leading-relaxed">
          Speak directly with a Thelivu systems engineer — online via Google Meet or in person at
          our Bengaluru, Mumbai, Chennai, or Hyderabad offices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-[#131b2e] border border-[#3d494c]/35 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="companyName" className="block text-xs font-medium text-[#bcc9cd]">
                Company / Business Name *
              </label>
              <input
                id="companyName"
                type="text"
                value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                placeholder="e.g. Shringar Enterprises Pvt. Ltd."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
              />
              {errors.companyName && (
                <p className="text-xs text-[#ffb4ab]">{errors.companyName}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contactName" className="block text-xs font-medium text-[#bcc9cd]">
                Your Name &amp; Role *
              </label>
              <input
                id="contactName"
                type="text"
                value={form.contactName}
                onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                placeholder="e.g. Rajesh Khandelwal, MD"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
              />
              {errors.contactName && (
                <p className="text-xs text-[#ffb4ab]">{errors.contactName}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-medium text-[#bcc9cd]">
                Work Email *
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="name@company.in"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
              />
              {errors.email && <p className="text-xs text-[#ffb4ab]">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-medium text-[#bcc9cd]">
                Phone / WhatsApp Number *
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98XXX XXXXX"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm font-mono text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
              />
              {errors.phone && <p className="text-xs text-[#ffb4ab]">{errors.phone}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="turnover" className="block text-xs font-medium text-[#bcc9cd]">
                Monthly Operating Volume
              </label>
              <select
                id="turnover"
                value={form.monthlyTurnover}
                onChange={(e) => setForm({ ...form, monthlyTurnover: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
              >
                {TURNOVER_TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="preferredDate" className="block text-xs font-medium text-[#bcc9cd]">
                Preferred Date *
              </label>
              <input
                id="preferredDate"
                type="date"
                value={form.preferredDate}
                onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm font-mono text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
              />
              {errors.preferredDate && (
                <p className="text-xs text-[#ffb4ab]">{errors.preferredDate}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="cityOrMode" className="block text-xs font-medium text-[#bcc9cd]">
              Preferred Format or Indian Office
            </label>
            <select
              id="cityOrMode"
              value={form.cityOrMode}
              onChange={(e) => setForm({ ...form, cityOrMode: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
            >
              <option value="Google Meet (Online Video Audit)">
                Google Meet (Online Video Audit)
              </option>
              {OFFICE_LOCATIONS.map((loc) => (
                <option key={loc.city} value={`${loc.city} Office — ${loc.hub}`}>
                  {loc.city} Office — {loc.hub}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2.5">
            <span className="block text-xs font-medium text-[#bcc9cd]">
              Existing Software You Currently Use
            </span>
            <div className="flex flex-wrap gap-2">
              {STACK_OPTIONS.map((item) => {
                const selected = form.softwareStack.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleStack(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      selected
                        ? 'bg-[#06b6d4] text-[#00232a] border-[#06b6d4] font-semibold'
                        : 'bg-[#060e20] text-[#bcc9cd] border-[#3d494c]/40 hover:text-[#dae2fd]'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="primaryGoal" className="block text-xs font-medium text-[#bcc9cd]">
              Biggest Bottleneck You Want to Eliminate (Optional)
            </label>
            <textarea
              id="primaryGoal"
              rows={3}
              value={form.primaryGoal}
              onChange={(e) => setForm({ ...form, primaryGoal: e.target.value })}
              placeholder="e.g. Manual GST bill entry into Tally takes 3 hours daily, or missing evening WhatsApp enquiries."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] border border-[#3d494c]/50 text-sm text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00232a] text-sm font-semibold rounded-lg inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Confirm 45-Minute AI Audit</span>
          </button>
        </form>

        {/* Right: Office Locations & What Happens in the Audit */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-[#060e20] border border-[#3d494c]/35 space-y-4">
            <h2 className="text-base font-semibold text-[#dae2fd]">
              What We Cover in 45 Minutes
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#bcc9cd]">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-[#4cd7f6] font-semibold">01.</span>
                <span>Map manual WhatsApp, challan, and billing bottlenecks across your team.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-[#4cd7f6] font-semibold">02.</span>
                <span>Verify live compatibility with your Tally, Zoho, or Marg ERP setup.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-[#4cd7f6] font-semibold">03.</span>
                <span>Deliver a fixed-price 7-day rollout plan with projected INR savings.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#060e20] border border-[#3d494c]/35 space-y-4">
            <h2 className="text-base font-semibold text-[#dae2fd] inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#4cd7f6]" />
              <span>Our Indian Engineering Hubs</span>
            </h2>
            <div className="space-y-3">
              {OFFICE_LOCATIONS.map((loc) => (
                <div
                  key={loc.city}
                  className="pb-3 last:pb-0 border-b last:border-b-0 border-[#3d494c]/25"
                >
                  <div className="text-sm font-semibold text-[#dae2fd]">
                    {loc.city} · <span className="font-normal text-[#bcc9cd]">{loc.hub}</span>
                  </div>
                  <div className="text-xs font-mono text-[#869397] mt-0.5">{loc.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
