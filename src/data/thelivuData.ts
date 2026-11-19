import { CaseStudy, CoreCapability, SectorContent, SoftwareCompatibility } from '../types';

export const SECTORS: SectorContent[] = [
  {
    key: 'retail',
    label: 'Retail, Trade & D2C',
    headline: 'Stop Losing Money to Late Replies, Typing Paperwork & Unmonitored Margins',
    subheadline:
      'Ready to connect out-of-the-box with WhatsApp, Tally Prime, Zoho, UPI, and email. Deployed in days with zero coding or disruption.',
    highlights: ['12+ Indian Languages', 'Tally & Zoho Ready', 'UPI Payment Links'],
    cards: [
      {
        id: 'whatsapp-sales',
        iconName: 'chat',
        title: '24/7 WhatsApp Sales & Customer Support Assistant',
        subtitle: 'Instant Lead Conversion & Vernacular Service',
        tagText: 'Live Auto-Agent',
        headache:
          'Clients and buyers message late in the evening asking for price lists, availability, or order status. By the time staff replies the next day, they have already gone to someone else.',
        solution:
          'Handles enquiries instantly, shares digital price lists & brochures, collects delivery details, generates UPI payment links, and confirms orders in 12+ Indian languages 24 hours a day.',
        result: '4.8x more leads closed, zero missed enquiries',
      },
      {
        id: 'price-watch',
        iconName: 'eye',
        title: 'Daily Market & Competitor Price Watch',
        subtitle: 'Marketplaces, Competitor Portals & Trade Channels',
        tagText: 'Daily Morning Brief',
        headache:
          'Competitors drop prices or offer discounts unannounced. You only notice days later after your sales velocity slows down and revenue slips.',
        solution:
          'Tracks competitor prices across web and marketplaces, sends a clean WhatsApp summary every morning with alerts on price drops, and suggests optimal pricing strategies to stay competitive.',
        result: '+22% protected gross margin',
      },
      {
        id: 'demand-forecasting',
        iconName: 'trending',
        title: 'Smart Demand & Sales Trend Forecasting',
        subtitle: 'Working Capital & Inventory Optimizer',
        tagText: 'Direct Accounting Sync',
        headache:
          'Money gets trapped in slow-moving stock or uncollected balances, while your most demanded products or services face sudden shortages and stockouts.',
        solution:
          'Connects to Tally, Zoho, or accounting data, highlights your fastest-selling items and seasonal surges, and provides clear cash flow and re-order insights without needing a full-time financial analyst.',
        result: '35% reduction in tied-up working capital',
      },
      {
        id: 'gst-paperwork',
        iconName: 'receipt',
        title: 'Zero-Typing GST Bills & Paperwork Processor',
        subtitle: 'Paper-to-Ledger Automated Processing',
        tagText: '5-Second Posting',
        headache:
          'Accounts and operations staff spend entire afternoons manually keying in paper bills, handwritten challans, and receipts, leading to errors in GST numbers and delayed filings.',
        solution:
          'Snap a smartphone photo of any vendor bill, challan, or receipt; auto-verifies GSTIN on the portal and syncs directly into Tally or Zoho in 5 seconds with zero manual data entry.',
        result: '25+ hours saved weekly per branch/office',
      },
    ],
  },
  {
    key: 'mfg',
    label: 'Manufacturing & Logistics',
    headline: 'Eliminate Challan Backlogs, Fleet Blind Spots & Raw Material Bottlenecks',
    subheadline:
      'Built for factory floors, B2B distributors, and multi-warehouse operations across Pune, Chennai, Gujarat, and NCR.',
    highlights: ['Lorry Receipt & E-Way OCR', 'Marg & Tally XML Sync', 'Shift-Ready Alerts'],
    cards: [
      {
        id: 'challan-lr-ocr',
        iconName: 'truck',
        title: 'Challan, Lorry Receipt & E-Way Bill Reconciliation',
        subtitle: 'Dispatch Gate & Transport Desk Automation',
        tagText: 'Gate-to-Ledger Sync',
        headache:
          'Dispatch clerks pile up handwritten lorry receipts, weighbridge slips, and transport invoices, delaying transporter payouts and holding up GST input credit claims.',
        solution:
          'Reads stamped and handwritten LRs via WhatsApp photo, cross-checks freight rates against transporter contracts, flags overbilling, and posts verified vouchers into Tally or Marg ERP.',
        result: '94% faster transport bill reconciliation',
      },
      {
        id: 'raw-material-planner',
        iconName: 'factory',
        title: 'Raw Material & Reorder Alert Engine',
        subtitle: 'Production Continuity & Vendor Lead-Time Watch',
        tagText: 'Zero Line Stoppage',
        headache:
          'Critical fasteners, packaging, or chemical inputs run out mid-shift because spreadsheets were not updated after last week’s urgent batch.',
        solution:
          'Tracks daily consumption against open purchase orders and supplier lead times, sending automated WhatsApp reorder approvals to plant managers 7 days before stock hits minimum thresholds.',
        result: '62% fewer emergency spot-buy premiums',
      },
      {
        id: 'dealer-order-desk',
        iconName: 'users',
        title: 'Vernacular Distributor & Dealer Order Desk',
        subtitle: 'Voice & Text Order Capture on WhatsApp',
        tagText: '12+ Languages',
        headache:
          'Regional dealers send voice notes or rough handwritten lists for 40-SKU orders in Hindi, Tamil, Marathi, or Gujarati, forcing inside sales reps to decode and re-type every line.',
        solution:
          'Transcribes voice notes and photos into clean GST-ready proforma invoices, checks live warehouse stock, and confirms dispatch ETAs directly on the dealer’s WhatsApp thread.',
        result: '3.4x faster dealer order turnaround',
      },
      {
        id: 'receivables-nudge',
        iconName: 'wallet',
        title: 'Polite Automated Credit & Payment Follow-Ups',
        subtitle: 'MSME Receivables & Overdue Protection',
        tagText: 'Cash Flow Guard',
        headache:
          'Sales teams feel awkward chasing long-standing distributors for overdue invoices, letting 45-day credit terms quietly stretch past 90 days.',
        solution:
          'Sends courteous, itemized ledger reminders with embedded Razorpay/NEFT/UPI links on scheduled intervals, escalating only genuine disputes to your accounts head.',
        result: '19 days faster average DSO collection',
      },
    ],
  },
  {
    key: 'services',
    label: 'Services & Back-Office',
    headline: 'Draft Proposals in Minutes, Automate Compliance & Free Up Senior Staff',
    subheadline:
      'Designed for CA firms, healthcare clinics, logistics agencies, B2B consultancies, and regional service teams.',
    highlights: ['3-Minute Proposals', 'DPDP Act 2023 Vault', 'Zero Hallucinated Figures'],
    cards: [
      {
        id: 'proposal-drafter',
        iconName: 'briefcase',
        title: '3-Minute Client Proposal & Quotation Builder',
        subtitle: 'Rate-Card & Scope-Driven Drafting',
        tagText: 'Sales Velocity',
        headache:
          'Senior partners and managers spend evenings assembling custom quotes, copying old Word templates, and recalculating GST totals for prospective clients.',
        solution:
          'Takes a brief voice summary or client email, pulls approved pricing slabs from your internal rate card, and outputs a branded, ready-to-send PDF quotation in under 3 minutes.',
        result: '70% faster quote-to-close cycle',
      },
      {
        id: 'compliance-kyc',
        iconName: 'shield',
        title: 'Instant Vendor KYC & Document Verification',
        subtitle: 'PAN, GSTIN, MSME Udyam & Bank Cheque Checks',
        tagText: 'Audit-Ready Trail',
        headache:
          'Onboarding a single new vendor or client involves manually downloading PDFs, verifying cancelled cheques, and checking GST filing status across government portals.',
        solution:
          'Extracts fields from uploaded documents automatically, cross-verifies registration status, flags name mismatches, and files an audit-ready onboarding packet.',
        result: '45 mins reduced to 90 seconds per onboarding',
      },
      {
        id: 'appointment-desk',
        iconName: 'clock',
        title: 'Multilingual Appointment & Follow-Up Coordinator',
        subtitle: 'Clinics, Showrooms & Service Centres',
        tagText: 'Zero No-Shows',
        headache:
          'Front-desk staff miss incoming calls during peak hours, and booked appointments frequently no-show without a timely reminder in the customer’s preferred language.',
        solution:
          'Books, reschedules, and confirms slots over WhatsApp in English, Hindi, Tamil, Kannada, Telugu, or Marathi, while syncing directly with your team calendar.',
        result: '41% drop in missed appointments',
      },
      {
        id: 'ledger-audit',
        iconName: 'file',
        title: 'Month-End Reconciliation & Anomaly Checker',
        subtitle: 'GSTR-2B vs Purchase Register Matching',
        tagText: 'Error-Free Books',
        headache:
          'Accountants lose the first ten days of every month hunting down ₹140 mismatches between bank statements, vendor portals, and Tally purchase registers.',
        solution:
          'Cross-matches bank feeds, GSTR-2B downloads, and Tally ledgers overnight, presenting a clean exception list with exact invoice references ready for sign-off.',
        result: '80% less month-end reconciliation effort',
      },
    ],
  },
];

export const CORE_CAPABILITIES: CoreCapability[] = [
  {
    index: '01',
    id: 'indic-agents',
    title: 'Indic Multilingual Agent Swarms',
    category: 'Customer & Dealer Operations',
    summary:
      'Production WhatsApp and voice assistants fluent in 12+ Indian languages including Hindi, Tamil, Telugu, Kannada, Marathi, Gujarati, and Bengali—trained strictly on your live catalogue and price rules.',
    problemSolved:
      'Eliminates after-hours lead drop-off and regional language friction between head office and Tier-2/Tier-3 buyers.',
    integrations: ['WhatsApp Cloud API', 'Shopify & Woo', 'Razorpay UPI'],
    deploymentTime: '5–7 Business Days',
    measurableOutcome: '4.8x higher enquiry-to-order conversion within 60 days',
  },
  {
    index: '02',
    id: 'supply-chain',
    title: 'Autonomous Supply Chain & Logistics',
    category: 'Inventory & Dispatch Intelligence',
    summary:
      'Continuous demand forecasting, reorder triggers, and lorry receipt verification across warehouses and regional distribution hubs.',
    problemSolved:
      'Prevents dead capital lockup in slow SKUs while protecting top-selling lines from festive and seasonal stockouts.',
    integrations: ['Tally Prime XML', 'Marg ERP', 'Amazon SP-API'],
    deploymentTime: '10–14 Business Days',
    measurableOutcome: '35% working capital freed from excess inventory',
  },
  {
    index: '03',
    id: 'fintech-auditing',
    title: 'FinTech Risk & Algorithmic Auditing',
    category: 'Credit, Reconciliation & Controls',
    summary:
      'Automated invoice-to-bank matching, GSTR-2B discrepancy detection, and real-time credit limit monitoring aligned with RBI IT governance norms.',
    problemSolved:
      'Stops revenue leakage from duplicate vendor claims, missed GST input credits, and unmonitored overdue accounts.',
    integrations: ['Zoho Books REST API', 'Razorpay Webhooks', 'Account Aggregator'],
    deploymentTime: '14 Business Days',
    measurableOutcome: '19-day average reduction in Days Sales Outstanding',
  },
  {
    index: '04',
    id: 'msme-erp-gst',
    title: 'Automated MSME ERP & GST Intelligence',
    category: 'Zero-Typing Back Office',
    summary:
      'Smartphone photo-to-ledger document ingestion for printed bills, handwritten delivery challans, and fuel receipts with automatic GSTIN validation.',
    problemSolved:
      'Replaces afternoon manual voucher entry and human typing errors across multi-branch accounting teams.',
    integrations: ['Tally Prime', 'Zoho Books', 'Marg ERP'],
    deploymentTime: '3–5 Business Days',
    measurableOutcome: '25+ staff hours saved weekly per branch office',
  },
  {
    index: '05',
    id: 'healthcare-diagnostics',
    title: 'Clinical & Healthcare Diagnostics AI',
    category: 'Hospitals, Labs & Pharma Distribution',
    summary:
      'Structured patient intake in local languages, lab report summarization for clinicians, and cold-chain batch expiry tracking for pharma distributors.',
    problemSolved:
      'Reduces front-desk wait queues and eliminates manual batch-code lookup errors across high-volume clinics and stockists.',
    integrations: ['Marg ERP', 'HL7 / FHIR Bridge', 'WhatsApp Cloud API'],
    deploymentTime: '14–21 Business Days',
    measurableOutcome: '41% reduction in appointment no-shows and intake delays',
  },
  {
    index: '06',
    id: 'sovereign-llm',
    title: 'Sovereign Private LLM Infrastructure',
    category: 'Enterprise Security & Compliance',
    summary:
      'Dedicated inference clusters hosted strictly in Mumbai and Hyderabad cloud regions with zero third-party data retention and full DPDP Act 2023 compliance.',
    problemSolved:
      'Enables regulated conglomerates, NBFCs, and industrial groups to deploy AI over confidential financials without data leaving Indian borders.',
    integrations: ['Mumbai / Hyderabad VPC', 'Active Directory SSO', 'Private REST Gateways'],
    deploymentTime: '21 Business Days',
    measurableOutcome: '100% India data residency with zero retention guarantees',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'shringar-enterprises',
    company: 'Shringar Enterprises',
    city: 'Ahmedabad & Mumbai',
    sector: 'retail',
    sectorLabel: 'Wholesale & Multi-City Retail',
    headline: 'Scaled Daily Transactions 3.8x Without Adding Administrative Headcount',
    summary:
      'Deployed multilingual WhatsApp enquiry handling and automated GST bill posting across two regional distribution hubs.',
    beforeState:
      'Handled ~80 daily enquiries manually over phone and WhatsApp; accounts team spent 4 hours every evening typing vendor challans into Tally.',
    changeImplemented:
      'Connected Thelivu WhatsApp Agent (Gujarati, Hindi, English) to live Tally Prime inventory and enabled photo-to-voucher GST bill capture.',
    outcomeStatement:
      'Expanded to 650+ automated enquiries per day with zero additional back-office hires across 12 months.',
    metrics: [
      { label: 'Daily Enquiries Handled', value: '80 -> 650+' },
      { label: 'Transaction Scale', value: '3.8x' },
      { label: 'Extra Admin Hires', value: '0 Staff' },
      { label: 'Annual Cost Saved', value: '₹18.4 Lakhs' },
    ],
    quote:
      'Before Thelivu, our biggest operational bottleneck was responsiveness and billing backlog. Customers and branch teams would send enquiries and vendor receipts across multiple channels at all hours. Thelivu’s AI now responds with accurate product and pricing info in Gujarati, Hindi, and English within seconds, generates GST-compliant bills into Tally automatically, and keeps our team focused on high-value client relationships.',
    spokesperson: 'Rajesh Khandelwal',
    role: 'Managing Director, Shringar Enterprises',
    stack: ['Tally Prime', 'Razorpay', 'WhatsApp Official API', 'DPDP Act 2023 Compliant'],
  },
  {
    id: 'kaveri-precision',
    company: 'Kaveri Precision Components',
    city: 'Pune (Chakan MIDC)',
    sector: 'mfg',
    sectorLabel: 'Automotive Tier-2 Manufacturing',
    headline: 'Cut Transport & Challan Reconciliation Time from 6 Days to 4 Hours',
    summary:
      'Automated inward gate challans, lorry receipt verification, and raw material safety-stock alerts across 140 active SKUs.',
    beforeState:
      'Handwritten dispatch slips and transporter bills caused week-long reconciliation delays and ₹4.2L in annual billing discrepancies.',
    changeImplemented:
      'Rolled out gate-desk mobile OCR synced to Tally Prime XML and automated daily WhatsApp reorder digests for procurement leads.',
    outcomeStatement:
      'Recovered ₹6.8 Lakhs in overbilled freight charges and eliminated unscheduled line stoppages over two quarters.',
    metrics: [
      { label: 'Month-End Closing', value: '6d -> 4h' },
      { label: 'Spot-Buy Reduction', value: '-62%' },
      { label: 'Freight Leakage Saved', value: '₹6.8 Lakhs' },
      { label: 'Payback Period', value: '7 Weeks' },
    ],
    quote:
      'Our storekeepers simply click a picture of the lorry receipt at the factory gate. By the time the truck leaves the compound, the entry is verified against our rate card and queued inside Tally.',
    spokesperson: 'Vikramaditya Deshmukh',
    role: 'Director of Operations, Kaveri Precision Components',
    stack: ['Tally Prime XML', 'WhatsApp Cloud API', 'Gate OCR Engine'],
  },
  {
    id: 'sri-lakshmi-pharma',
    company: 'Sri Lakshmi Pharma Distributors',
    city: 'Chennai & Coimbatore',
    sector: 'services',
    sectorLabel: 'Healthcare & Pharma Supply',
    headline: 'Automated 1,200+ Weekly Pharmacy Orders in Tamil & English via Marg ERP',
    summary:
      'Enabled local pharmacy retailers to place voice-note and photo orders over WhatsApp with instant batch and expiry allocation.',
    beforeState:
      'Six tele-callers spent all morning taking repetitive phone orders from 420 retail chemists, missing 18% of afternoon dispatch cutoffs.',
    changeImplemented:
      'Integrated Marg ERP stock and credit limits directly with a Tamil + English WhatsApp ordering assistant and automated Razorpay payment links.',
    outcomeStatement:
      'Freed tele-calling staff to focus on new chemist acquisition, lifting quarterly revenue by 24% across Tamil Nadu.',
    metrics: [
      { label: 'Weekly Auto-Orders', value: '1,200+' },
      { label: 'Missed Dispatch Cutoffs', value: '< 1.5%' },
      { label: 'Quarterly Revenue Lift', value: '+24%' },
      { label: 'DSO Improvement', value: '-14 Days' },
    ],
    quote:
      'Chemists send a quick Tamil voice note between customer rushes, receive their GST invoice within 15 seconds, and pay via UPI before the delivery van departs.',
    spokesperson: 'Meenakshi Sundaram',
    role: 'Managing Partner, Sri Lakshmi Pharma Distributors',
    stack: ['Marg ERP', 'WhatsApp Cloud API', 'Razorpay UPI'],
  },
];

export const SOFTWARE_COMPATIBILITY: SoftwareCompatibility[] = [
  { name: 'Tally Prime', protocol: 'Full XML Sync', syncSpeed: 'Real-time' },
  { name: 'Zoho Books', protocol: 'REST API', syncSpeed: 'Bi-directional' },
  { name: 'Shopify & Woo', protocol: 'Order Webhooks', syncSpeed: '< 2s Event' },
  { name: 'Amazon Seller', protocol: 'SP-API Connect', syncSpeed: '15m Polling' },
  { name: 'Marg ERP', protocol: 'Pharma & FMCG', syncSpeed: 'Direct Bridge' },
  { name: 'Razorpay / UPI', protocol: 'Instant Webhooks', syncSpeed: 'Instant' },
  { name: 'WhatsApp Cloud', protocol: 'Meta Verified', syncSpeed: 'Official API' },
];

export const OFFICE_LOCATIONS = [
  { city: 'Bengaluru', hub: 'Indiranagar 100ft Road', focus: 'Core Engineering & Sovereign Cloud' },
  { city: 'Mumbai', hub: 'Bandra Kurla Complex (BKC)', focus: 'Enterprise FinTech & Trade' },
  { city: 'Chennai', hub: 'OMR Tidel Corridor', focus: 'Manufacturing & Vernacular AI' },
  { city: 'Hyderabad', hub: 'HITEC City', focus: 'Pharma, Healthcare & Data Ops' },
];
