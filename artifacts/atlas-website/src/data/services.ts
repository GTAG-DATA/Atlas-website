export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  overview: string;
  features: ServiceFeature[];
  steps: ServiceStep[];
  whatsIncluded: string[];
  ctaText: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "difc-company-setup",
    title: "DIFC Company Setup",
    tagline: "Establish your business in Dubai's premier financial hub",
    description:
      "Set up your company in DIFC, Dubai's leading financial hub. Designed for regulated and non-regulated business activities. Structured for compliance, credibility, and global operations.",
    heroImage:
      "https://framerusercontent.com/images/H7uTwhmDFTPQD22lho2q2ZJbNE.jpg?width=4104&height=2736",
    overview:
      "The Dubai International Financial Centre (DIFC) is the Middle East, Africa and South Asia's premier financial hub. As a dedicated onshore financial free zone, DIFC offers world-class infrastructure, a common law legal framework, and zero per cent tax rate on income and profits. Atlas guides you through every step of establishing your business presence in this prestigious jurisdiction, from selecting the right entity type to obtaining your DIFC licence and opening corporate bank accounts.",
    features: [
      {
        title: "Regulated & Non-Regulated Activities",
        description:
          "Whether you operate a regulated financial services firm or a non-regulated business, DIFC offers the right structure for your needs.",
      },
      {
        title: "Common Law Framework",
        description:
          "DIFC operates under its own independent legal system based on English common law, giving international businesses a familiar and trusted legal environment.",
      },
      {
        title: "100% Foreign Ownership",
        description:
          "Enjoy full foreign ownership of your company with no requirement for a local UAE sponsor or partner.",
      },
      {
        title: "Low to Zero Tax Environment",
        description:
          "DIFC entities may benefit from a 0% tax rate on qualifying income and profits under the UAE Corporate Tax regime, subject to eligibility conditions, with no restrictions on capital or profit repatriation.",
      },
      {
        title: "World-Class Infrastructure",
        description:
          "Access premium Grade A office space, a vibrant ecosystem of financial and professional services firms, and state-of-the-art facilities.",
      },
      {
        title: "Global Credibility",
        description:
          "A DIFC address instantly signals credibility to clients, investors, and counterparties around the world.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Initial Consultation",
        description:
          "We assess your business objectives, activities, and structure to recommend the most appropriate DIFC entity type and licence category.",
      },
      {
        number: "02",
        title: "Entity Structuring",
        description:
          "We design the optimal corporate structure, including shareholding arrangements, directorship, and governance framework.",
      },
      {
        number: "03",
        title: "Name Registration & Approval",
        description:
          "We handle the DIFC Registrar of Companies name reservation and submit all required documentation.",
      },
      {
        number: "04",
        title: "Licence Application",
        description:
          "We prepare and submit your DIFC operating licence application, coordinating with the DIFC Authority throughout the approval process.",
      },
      {
        number: "05",
        title: "Office & Visa Setup",
        description:
          "We assist with securing your registered office address and obtaining UAE residency visas for key personnel.",
      },
      {
        number: "06",
        title: "Banking & Ongoing Support",
        description:
          "We connect you with our banking partners and provide ongoing corporate secretarial and compliance support.",
      },
    ],
    whatsIncluded: [
      "DIFC entity type and licence category advisory",
      "Corporate structure design",
      "Company name reservation",
      "Memorandum & Articles of Association drafting",
      "DIFC Registrar of Companies filing",
      "Operating licence application and coordination",
      "Registered office address arrangement",
      "UAE residency visa processing for key personnel",
      "Corporate bank account introduction",
      "Post-incorporation compliance support",
    ],
    ctaText:
      "Ready to establish your DIFC company? Our experts are here to guide you through every step.",
  },
  {
    slug: "family-office-setup",
    title: "Family Office Setup",
    tagline: "Bespoke structures for long-term wealth stewardship",
    description:
      "Comprehensive family office formation services delivering bespoke structures, regulatory compliance, and integrated wealth management solutions for ultra-high-net-worth families.",
    heroImage:
      "https://framerusercontent.com/images/KoUWP2aYlCOne6cr66MZd9uRmw.jpg?width=8192&height=4096",
    overview:
      "A DIFC Family Office provides ultra-high-net-worth families with a dedicated, regulated structure to manage, protect, and grow their wealth across generations. DIFC is one of the world's leading jurisdictions for family office formation, offering a sophisticated regulatory environment, robust asset protection laws, and access to a global network of investment managers, legal advisors, and private banks. Atlas provides end-to-end family office formation and ongoing management services tailored to each family's unique requirements.",
    features: [
      {
        title: "Single & Multi-Family Office Structures",
        description:
          "We establish both single-family offices (serving one family) and multi-family offices (serving multiple unrelated families), tailored to your scale and objectives.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Full compliance with DIFC Authority and Dubai Financial Services Authority (DFSA) requirements, with ongoing regulatory reporting and governance support.",
      },
      {
        title: "Bespoke Governance Frameworks",
        description:
          "Custom family constitutions, investment policy statements, and governance structures that reflect the family's values, objectives, and decision-making preferences.",
      },
      {
        title: "Integrated Wealth Management",
        description:
          "Coordination with investment managers, private banks, tax advisors, and legal counsel to provide a seamless, integrated wealth management platform.",
      },
      {
        title: "Succession Planning",
        description:
          "Structures designed to facilitate smooth intergenerational wealth transfer, minimising friction, tax exposure, and family conflict.",
      },
      {
        title: "Confidentiality & Asset Protection",
        description:
          "DIFC's robust legal framework provides strong asset protection and confidentiality measures for family wealth and personal information.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Needs Assessment",
        description:
          "We conduct a detailed assessment of the family's wealth, objectives, governance needs, and jurisdictional requirements.",
      },
      {
        number: "02",
        title: "Structure Design",
        description:
          "We design a bespoke family office structure, entity type, licence category, ownership, and governance framework.",
      },
      {
        number: "03",
        title: "Regulatory Approval",
        description:
          "We manage the entire DIFC and DFSA licensing process, including preparation and submission of all regulatory applications.",
      },
      {
        number: "04",
        title: "Governance Documentation",
        description:
          "We draft the family constitution, investment policy statement, and all corporate governance documents.",
      },
      {
        number: "05",
        title: "Operational Setup",
        description:
          "We establish banking relationships, appoint service providers, and set up the operational infrastructure of the family office.",
      },
      {
        number: "06",
        title: "Ongoing Management",
        description:
          "We provide continuing compliance, corporate secretarial, and governance support to keep the family office running smoothly.",
      },
    ],
    whatsIncluded: [
      "Family office structure advisory",
      "DIFC entity formation and licensing",
      "DFSA regulatory approval coordination",
      "Family constitution drafting",
      "Investment policy statement preparation",
      "Governance framework design",
      "Banking and custodian introductions",
      "Ongoing compliance and regulatory reporting",
      "Annual corporate secretarial services",
      "Succession and estate planning coordination",
    ],
    ctaText:
      "Build a lasting legacy. Let Atlas design and establish your family office in DIFC.",
  },
  {
    slug: "fund-setup",
    title: "Fund Setup",
    tagline: "End-to-end investment fund formation in DIFC and ADGM",
    description:
      "End-to-end investment fund formation and setup services in DIFC, including fund structuring, regulatory licensing, PPM drafting, and ongoing compliance support.",
    heroImage:
      "https://framerusercontent.com/images/P76llRCKVB3dVH4mQZOPnkQk.jpg?width=1600&height=896",
    overview:
      "DIFC is an internationally recognised fund domiciles offering flexible fund structures, a sophisticated regulatory environment, and access to a deep pool of institutional and private investors. Atlas provides comprehensive fund formation services for private equity, venture capital, real estate, hedge, and other alternative investment funds, from initial structuring through to regulatory approval and investor onboarding.",
    features: [
      {
        title: "Multiple Fund Structures",
        description:
          "Closed-ended, open-ended, umbrella, and feeder fund structures available within DIFC.",
      },
      {
        title: "Regulatory Licensing",
        description:
          "Full coordination with the DFSA for fund manager and fund licensing, including pre-application meetings and submission management.",
      },
      {
        title: "PPM & Legal Documentation",
        description:
          "Drafting of Private Placement Memoranda, Limited Partnership Agreements, Subscription Agreements, and all investor-facing documents.",
      },
      {
        title: "Investor Relations Support",
        description:
          "Assistance with investor onboarding, KYC/AML procedures, and capital call management.",
      },
      {
        title: "Fund Administration",
        description:
          "Coordination with fund administrators for NAV calculation, financial reporting, and investor statements.",
      },
      {
        title: "Ongoing Compliance",
        description:
          "Continuing regulatory reporting, economic substance compliance, and annual filing obligations managed by our expert team.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Strategy & Structuring",
        description:
          "We analyse your fund strategy, target investors, and jurisdiction requirements to recommend the optimal fund structure.",
      },
      {
        number: "02",
        title: "Entity Formation",
        description:
          "We establish the fund vehicle and fund manager entity in DIFC, including all corporate filings.",
      },
      {
        number: "03",
        title: "Regulatory Application",
        description:
          "We prepare and submit the DFSA fund registration and fund manager licensing applications.",
      },
      {
        number: "04",
        title: "Documentation Drafting",
        description:
          "We draft the PPM, LPA, Subscription Agreement, and all other fund legal and investor documents.",
      },
      {
        number: "05",
        title: "Investor Onboarding",
        description:
          "We set up investor KYC/AML procedures and first close processes in coordination with the fund administrator.",
      },
      {
        number: "06",
        title: "Ongoing Operations",
        description:
          "We provide ongoing regulatory reporting, secretarial services, and compliance support throughout the fund's life.",
      },
    ],
    whatsIncluded: [
      "Fund strategy and jurisdiction advisory",
      "Fund and fund manager entity formation",
      "DFSA licensing application management",
      "PPM and LPA drafting",
      "Subscription Agreement and side letter templates",
      "KYC/AML framework setup",
      "Fund administrator and auditor introductions",
      "Banking and custodian introductions",
      "Ongoing regulatory reporting and compliance",
      "Annual corporate secretarial services",
    ],
    ctaText:
      "Launch your investment fund in DIFC or ADGM. Talk to our fund specialists today.",
  },
  {
    slug: "fund-spv-support",
    title: "Fund & SPV Support",
    tagline: "Specialised administration for investment vehicles",
    description:
      "Specialised fund administration and SPV support services for investment funds, family offices, and investment vehicles operating in DIFC.",
    heroImage:
      "https://framerusercontent.com/images/boAvRohjbYrJ6IpCgHMw0B5fSU.jpg?width=6144&height=3456",
    overview:
      "Atlas provides specialist administration and support services to investment funds, family offices, and special purpose vehicles (SPVs) in DIFC. Our team acts as a dedicated back-office partner, handling the administrative, compliance, and reporting obligations that allow fund managers and investors to focus on generating returns.",
    features: [
      {
        title: "Fund Administration",
        description:
          "Coordination with fund administrators for NAV calculation, investor reporting, capital call and distribution processing.",
      },
      {
        title: "SPV Management",
        description:
          "Full corporate administration of DIFC Prescribed Companies and other SPV structures used for investment holding and asset protection.",
      },
      {
        title: "Regulatory Reporting",
        description:
          "Preparation and filing of all periodic regulatory reports required by DFSA, DIFC Authority, and other relevant regulators.",
      },
      {
        title: "Board & Governance Support",
        description:
          "Preparation of board packs, resolutions, and minutes; coordination of board and investor meetings.",
      },
      {
        title: "KYC/AML Compliance",
        description:
          "Ongoing monitoring and periodic review of investor and counterparty KYC/AML records in line with DFSA requirements.",
      },
      {
        title: "Economic Substance Compliance",
        description:
          "Assessment, reporting, and ongoing compliance with UAE Economic Substance Regulations for investment holding entities.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Onboarding & Review",
        description:
          "We review your existing fund or SPV structure, documentation, and compliance status to identify gaps and priorities.",
      },
      {
        number: "02",
        title: "Service Design",
        description:
          "We design a tailored support package covering administration, compliance, and reporting.",
      },
      {
        number: "03",
        title: "System Setup",
        description:
          "We establish reporting templates, investor registers, and compliance monitoring frameworks.",
      },
      {
        number: "04",
        title: "Ongoing Administration",
        description:
          "We handle day-to-day administration, board meeting preparation, and investor communications.",
      },
      {
        number: "05",
        title: "Regulatory Filings",
        description:
          "We manage all periodic and ad hoc regulatory filings and reporting obligations.",
      },
      {
        number: "06",
        title: "Annual Review",
        description:
          "We conduct an annual review of your structure and compliance status to keep pace with regulatory changes.",
      },
    ],
    whatsIncluded: [
      "Fund and SPV administration coordination",
      "Investor register maintenance",
      "KYC/AML review and monitoring",
      "Board meeting preparation and minutes",
      "Regulatory filing and reporting",
      "Economic substance assessment and reporting",
      "Capital call and distribution processing support",
      "Annual financial statement coordination",
      "Corporate secretarial services",
      "Ad hoc regulatory advisory",
    ],
    ctaText:
      "Let Atlas handle the administration so you can focus on performance.",
  },
  {
    slug: "residency-banking-concierge",
    title: "Residency & Banking Concierge",
    tagline: "End-to-end UAE visa and banking solutions",
    description:
      "End-to-end UAE visa processing and corporate banking support for business owners, key personnel, and their families operating through DIFC entities.",
    heroImage:
      "https://framerusercontent.com/images/fjX2nbcynvKYaaXBD9ffxXMNKvk.jpg?width=3840&height=5760",
    overview:
      "Establishing a company in DIFC is only half the story, your people need to be able to live and work in the UAE. Atlas provides a full concierge service for UAE residency visa processing and corporate banking setup, ensuring that your team can hit the ground running from day one.",
    features: [
      {
        title: "UAE Residency Visa Processing",
        description:
          "End-to-end management of UAE residency visa applications for company shareholders, directors, employees, and their dependents.",
      },
      {
        title: "Emirates ID Registration",
        description:
          "Coordination of Emirates ID applications and biometrics appointments for all visa holders.",
      },
      {
        title: "Corporate Bank Account Opening",
        description:
          "Introduction to our network of UAE and international banking partners, with full support through the account opening process.",
      },
      {
        title: "Personal Bank Account Support",
        description:
          "Assistance with personal bank account opening for company principals and key employees relocating to the UAE.",
      },
      {
        title: "Golden Visa Advisory",
        description:
          "Guidance on eligibility for the UAE Golden Visa (10-year residency) for investors, entrepreneurs, and exceptional talent.",
      },
      {
        title: "Ongoing Visa Renewals",
        description:
          "Management of periodic visa renewals and status changes to ensure continued compliance with UAE immigration requirements.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Eligibility Assessment",
        description:
          "We assess your team's residency requirements and recommend the most appropriate visa categories.",
      },
      {
        number: "02",
        title: "Document Preparation",
        description:
          "We collect and prepare all required documentation for visa and banking applications.",
      },
      {
        number: "03",
        title: "Visa Application",
        description:
          "We submit visa applications and coordinate medical fitness, biometrics, and other government requirements.",
      },
      {
        number: "04",
        title: "Emirates ID",
        description:
          "We manage Emirates ID registration and collection for all visa holders.",
      },
      {
        number: "05",
        title: "Banking Introduction",
        description:
          "We introduce you to suitable banking partners and coordinate the corporate account opening process.",
      },
      {
        number: "06",
        title: "Ongoing Management",
        description:
          "We manage visa renewals, dependent applications, and banking relationship support on an ongoing basis.",
      },
    ],
    whatsIncluded: [
      "Visa eligibility assessment",
      "UAE entry permit and residency visa processing",
      "Emirates ID registration and collection",
      "Dependent visa applications",
      "Golden Visa advisory and application",
      "Corporate bank account introductions",
      "Personal bank account support",
      "Ongoing visa renewal management",
      "Immigration status change coordination",
      "Ad hoc immigration advisory",
    ],
    ctaText:
      "Relocate with confidence. Let Atlas handle your UAE residency and banking needs.",
  },
  {
    slug: "difc-foundations",
    title: "DIFC Foundations",
    tagline: "Robust structures for wealth protection and legacy planning",
    description:
      "Establish a DIFC Foundation for asset protection and succession planning. A robust legal structure for holding and managing wealth, built for long-term control, governance, and legacy planning.",
    heroImage:
      "https://framerusercontent.com/images/qnS5ctlwALXI1iLRdk9RB29wQYo.jpg?width=6255&height=4170",
    overview:
      "A DIFC Foundation is a powerful legal structure that sits between a company and a trust, offering unique flexibility for wealth holding, succession planning, and asset protection. Unlike a trust, a foundation is a legal person with its own identity — it can hold assets, enter contracts, and sue or be sued in its own name. Atlas provides comprehensive DIFC Foundation formation and management services for families, entrepreneurs, and institutions seeking robust structures for long-term wealth stewardship.",
    features: [
      {
        title: "Flexible Asset Holding",
        description:
          "A DIFC Foundation can hold any type of asset globally — real estate, financial assets, shares in operating companies, and more.",
      },
      {
        title: "Independent Legal Personality",
        description:
          "Unlike a trust, a foundation is a legal entity in its own right, providing enhanced certainty and enforceability.",
      },
      {
        title: "Customisable Governance",
        description:
          "Foundations offer highly flexible governance structures — including a council, guardian, and beneficiaries — tailored to each founder's requirements.",
      },
      {
        title: "Succession Planning",
        description:
          "Foundations facilitate smooth intergenerational wealth transfer without the need for probate or court involvement.",
      },
      {
        title: "Asset Protection",
        description:
          "Assets held in a properly structured DIFC Foundation are protected from personal creditors and third-party claims.",
      },
      {
        title: "Confidentiality",
        description:
          "Foundation details, including beneficiary information, benefit from strong confidentiality protections under DIFC law.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Objectives Assessment",
        description:
          "We understand your wealth protection, succession, and governance objectives to design the optimal foundation structure.",
      },
      {
        number: "02",
        title: "Structure Design",
        description:
          "We design the foundation's governance framework, including founder rights, council composition, guardian role, and beneficiary designations.",
      },
      {
        number: "03",
        title: "Charter Drafting",
        description:
          "We draft the Foundation Charter and By-Laws, incorporating your specific governance and distribution requirements.",
      },
      {
        number: "04",
        title: "DIFC Registration",
        description:
          "We manage the DIFC Registrar of Companies registration process, including all required filings and approvals.",
      },
      {
        number: "05",
        title: "Asset Transfer",
        description:
          "We coordinate the transfer of assets into the foundation, working with your legal, tax, and investment advisors.",
      },
      {
        number: "06",
        title: "Ongoing Administration",
        description:
          "We provide continuing corporate secretarial, governance, and compliance services for the foundation.",
      },
    ],
    whatsIncluded: [
      "Foundation objectives and structure advisory",
      "DIFC Foundation Charter drafting",
      "By-Laws and supplementary documentation",
      "DIFC Registrar of Companies registration",
      "Council and guardian appointment coordination",
      "Beneficiary designation documentation",
      "Asset transfer coordination",
      "Banking and custodian introductions",
      "Ongoing annual secretarial and compliance services",
      "Governance and succession planning advisory",
    ],
    ctaText:
      "Protect your wealth and secure your legacy. Speak to our foundation specialists today.",
  },
  {
    slug: "difc-prescribed-company-spv",
    title: "DIFC Prescribed Company (SPV)",
    tagline: "Flexible special purpose vehicles for investment holding",
    description:
      "Establish special purpose vehicles and holding structures in the DIFC for investment holding, wealth management, and asset protection.",
    heroImage:
      "https://framerusercontent.com/images/g1PXHBRybcPGNQtd2UGsXW7OA.jpg?width=6720&height=4480",
    overview:
      "The DIFC Prescribed Company (PC) is a streamlined, cost-effective special purpose vehicle designed for holding investments, assets, and shares. PCs are widely used by family offices, investment funds, private equity firms, and high-net-worth individuals to create clean, efficient holding structures within the DIFC's robust legal and regulatory framework. Atlas provides end-to-end PC formation and management services.",
    features: [
      {
        title: "Streamlined Formation",
        description:
          "DIFC Prescribed Companies can be established quickly and cost-effectively, with a simplified licensing process.",
      },
      {
        title: "Broad Asset Holding",
        description:
          "PCs can hold shares in companies, real estate, financial instruments, intellectual property, and other asset classes.",
      },
      {
        title: "Reduced Compliance Burden",
        description:
          "Compared to operating companies, PCs have a lighter ongoing compliance and reporting obligation.",
      },
      {
        title: "Tax Efficiency",
        description:
          "PCs benefit from DIFC's zero per cent tax environment and UAE's extensive double tax treaty network.",
      },
      {
        title: "Asset Protection",
        description:
          "A DIFC PC provides legal separation between the holding vehicle and its beneficiaries, offering strong asset protection.",
      },
      {
        title: "Common Law Framework",
        description:
          "Operating under DIFC's English common law framework, PCs provide international investors with legal familiarity and certainty.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Structuring Advisory",
        description:
          "We advise on whether a DIFC PC is the appropriate vehicle for your objectives and design the optimal ownership and governance structure.",
      },
      {
        number: "02",
        title: "Name Registration",
        description:
          "We register the PC name with the DIFC Registrar of Companies and reserve the chosen entity name.",
      },
      {
        number: "03",
        title: "DIFC Filing",
        description:
          "We prepare and file all required DIFC Registrar documents, including the Memorandum of Association and shareholder agreements.",
      },
      {
        number: "04",
        title: "Corporate Documents",
        description:
          "We prepare all corporate governance documents, including director resolutions, share certificates, and registers.",
      },
      {
        number: "05",
        title: "Banking Setup",
        description:
          "We introduce the PC to our banking network and assist with corporate account opening.",
      },
      {
        number: "06",
        title: "Ongoing Administration",
        description:
          "We provide annual secretarial services, regulatory filings, and compliance support on an ongoing basis.",
      },
    ],
    whatsIncluded: [
      "Prescribed Company structure advisory",
      "DIFC name registration",
      "Memorandum of Association drafting",
      "DIFC Registrar of Companies filings",
      "Director and shareholder documentation",
      "Share certificate and register preparation",
      "Corporate bank account introduction",
      "Economic substance assessment",
      "Annual secretarial services",
      "Ongoing compliance and regulatory support",
    ],
    ctaText:
      "Set up a DIFC Prescribed Company with Atlas. Fast, efficient, and fully compliant.",
  },
  {
    slug: "company-secretarial-governance",
    title: "Company Secretarial & Governance",
    tagline: "Professional compliance for DIFC entities",
    description:
      "Professional company secretarial services ensuring compliance with DIFC regulations and best practice corporate governance for all DIFC entity types.",
    heroImage:
      "https://framerusercontent.com/images/kSZ1NXQtv1F9CSV4xIEvyPqLqk.jpg?width=4797&height=3198",
    overview:
      "Good corporate governance is the foundation of a well-run DIFC entity. Atlas provides comprehensive company secretarial and governance services to ensure your company remains compliant with DIFC Authority requirements, maintains proper records, and follows best practice governance standards. Our expert team acts as your dedicated company secretary, handling the full range of statutory and administrative obligations.",
    features: [
      {
        title: "Statutory Compliance",
        description:
          "Management of all DIFC Registrar of Companies filing obligations, including annual renewals, director changes, and capital amendments.",
      },
      {
        title: "Board Meeting Support",
        description:
          "Preparation of board meeting agendas, board packs, resolutions, and minutes in accordance with constitutional documents.",
      },
      {
        title: "Shareholder Services",
        description:
          "Management of shareholder registers, share transfers, and annual general meeting coordination.",
      },
      {
        title: "Regulatory Reporting",
        description:
          "Preparation and submission of periodic regulatory reports required by the DIFC Authority and DFSA.",
      },
      {
        title: "KYC & Beneficial Ownership",
        description:
          "Maintenance of beneficial ownership registers and management of KYC documentation for directors and shareholders.",
      },
      {
        title: "Governance Advisory",
        description:
          "Advice on best practice corporate governance, board composition, conflicts of interest, and constitutional amendments.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Compliance Review",
        description:
          "We review your entity's current compliance status and identify any outstanding obligations or gaps.",
      },
      {
        number: "02",
        title: "Service Plan",
        description:
          "We design a tailored secretarial service plan covering all your statutory and governance requirements.",
      },
      {
        number: "03",
        title: "Records Setup",
        description:
          "We establish or update your statutory registers, corporate records, and document management systems.",
      },
      {
        number: "04",
        title: "Ongoing Secretarial",
        description:
          "We handle all day-to-day secretarial tasks — resolutions, minutes, statutory filings, and correspondence.",
      },
      {
        number: "05",
        title: "Annual Filings",
        description:
          "We manage all annual DIFC Registrar renewals, regulatory filings, and reporting deadlines.",
      },
      {
        number: "06",
        title: "Governance Advisory",
        description:
          "We provide ongoing governance advice as your business evolves and regulatory requirements change.",
      },
    ],
    whatsIncluded: [
      "DIFC Authority annual licence renewal",
      "DIFC Registrar of Companies filings",
      "Director and shareholder change management",
      "Board meeting preparation and minutes",
      "Shareholder register maintenance",
      "Share transfer documentation",
      "Beneficial ownership register maintenance",
      "Regulatory reporting and filing",
      "KYC documentation management",
      "Corporate governance advisory",
    ],
    ctaText:
      "Keep your DIFC entity fully compliant and well-governed. Let Atlas be your company secretary.",
  },
  {
    slug: "compliance-economic-substance",
    title: "Compliance & Economic Substance",
    tagline: "Stay compliant, stay ahead",
    description:
      "UAE compliance and economic substance services for regulated businesses. Ensure adherence to ESR, corporate tax, and regulatory requirements — built to minimise risk and maintain operational integrity.",
    heroImage:
      "https://framerusercontent.com/images/YU2rhSsokkhKubOesoL3UxW8nE.jpg?width=6240&height=4160",
    overview:
      "The UAE's regulatory landscape has evolved significantly in recent years, with the introduction of Economic Substance Regulations (ESR), corporate tax, and enhanced AML/CFT requirements. Non-compliance carries serious consequences — including financial penalties, licence suspension, and reputational damage. Atlas provides comprehensive compliance and economic substance services to help UAE businesses navigate these obligations with confidence.",
    features: [
      {
        title: "Economic Substance Assessment",
        description:
          "Detailed assessment of whether your UAE entity falls within the scope of the Economic Substance Regulations and what substance requirements apply.",
      },
      {
        title: "ESR Reporting",
        description:
          "Preparation and submission of annual Economic Substance notifications and reports to the relevant UAE regulatory authority.",
      },
      {
        title: "Corporate Tax Compliance",
        description:
          "Guidance on UAE Corporate Tax registration, return preparation, and compliance — including qualifying income and exempt income analysis.",
      },
      {
        title: "AML/CFT Compliance",
        description:
          "Design and implementation of AML/CFT policies, procedures, and controls in line with CBUAE and DFSA requirements.",
      },
      {
        title: "Regulatory Health Checks",
        description:
          "Periodic compliance health checks to identify and remediate gaps before they become regulatory issues.",
      },
      {
        title: "Regulatory Liaison",
        description:
          "Representation and liaison with DIFC Authority, DFSA, FTA, and other UAE regulators on compliance matters.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Compliance Audit",
        description:
          "We conduct a comprehensive audit of your current compliance status across all relevant regulatory frameworks.",
      },
      {
        number: "02",
        title: "Gap Analysis",
        description:
          "We identify gaps and risks and prioritise remediation actions.",
      },
      {
        number: "03",
        title: "Remediation Plan",
        description:
          "We develop and implement a remediation plan to address identified gaps and strengthen your compliance framework.",
      },
      {
        number: "04",
        title: "Policy & Procedure Design",
        description:
          "We draft or update compliance policies and procedures in line with current regulatory requirements.",
      },
      {
        number: "05",
        title: "Reporting & Filings",
        description:
          "We prepare and submit all required regulatory reports and filings on your behalf.",
      },
      {
        number: "06",
        title: "Ongoing Monitoring",
        description:
          "We provide continuous compliance monitoring, regulatory updates, and periodic reviews.",
      },
    ],
    whatsIncluded: [
      "Economic Substance Regulations assessment",
      "Annual ESR notification and report",
      "Corporate tax registration and compliance",
      "AML/CFT policy and procedure design",
      "UBO register and KYC management",
      "Regulatory health checks",
      "Compliance training for staff",
      "Regulatory liaison and representation",
      "Ongoing compliance monitoring",
      "Regulatory change advisory",
    ],
    ctaText:
      "Stay ahead of UAE regulatory requirements. Let Atlas manage your compliance.",
  },
  {
    slug: "accounting-tax",
    title: "Accounting & Tax",
    tagline: "Accurate books. Full compliance.",
    description:
      "Accounting, financial reporting, and tax compliance services for DIFC-registered entities. From bookkeeping and management accounts through to UAE corporate tax and VAT filings, Atlas keeps your finances in order.",
    heroImage:
      "https://framerusercontent.com/images/YU2rhSsokkhKubOesoL3UxW8nE.jpg?width=6240&height=4160",
    overview:
      "Maintaining accurate financial records and meeting UAE tax obligations has never been more important for businesses operating in the DIFC and wider UAE. With the introduction of UAE Corporate Tax and the ongoing requirements of VAT, DIFC entities need reliable accounting support backed by strong regulatory knowledge. Atlas provides end-to-end accounting and tax compliance services, ensuring your financial statements are accurate, your tax filings are timely, and your business remains in good standing with the relevant authorities.",
    features: [
      {
        title: "Bookkeeping & Management Accounts",
        description:
          "Monthly or quarterly bookkeeping services, including transaction recording, bank reconciliations, and management account preparation to give you a clear picture of your financial position.",
      },
      {
        title: "Financial Statements",
        description:
          "Preparation of annual financial statements in accordance with IFRS or applicable accounting standards, ready for audit or regulatory submission.",
      },
      {
        title: "UAE Corporate Tax Compliance",
        description:
          "Corporate tax registration, return preparation, and filing with the Federal Tax Authority. DIFC entities may benefit from qualifying free zone person status, subject to eligibility and meeting the relevant conditions.",
      },
      {
        title: "VAT Compliance",
        description:
          "VAT registration, quarterly return preparation and submission, and ongoing VAT advisory to ensure your business meets its obligations under the UAE VAT framework.",
      },
      {
        title: "Audit Coordination",
        description:
          "Liaison with your appointed auditors to facilitate the annual audit process, including preparation of audit-ready schedules and documentation.",
      },
      {
        title: "Financial Reporting Advisory",
        description:
          "Guidance on accounting policy, IFRS compliance, and financial reporting requirements specific to DIFC-registered entities.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Onboarding & Review",
        description:
          "We review your existing financial records, accounting systems, and tax registration status to establish a clear starting point.",
      },
      {
        number: "02",
        title: "Bookkeeping Setup",
        description:
          "We set up or take over your bookkeeping, establishing a clean chart of accounts and consistent recording processes.",
      },
      {
        number: "03",
        title: "Monthly Reporting",
        description:
          "We deliver regular management accounts and financial summaries so you always have an up-to-date view of your business.",
      },
      {
        number: "04",
        title: "Tax Registration & Filing",
        description:
          "We handle corporate tax and VAT registrations, prepare returns, and submit filings to the Federal Tax Authority on your behalf.",
      },
      {
        number: "05",
        title: "Year-End Accounts",
        description:
          "We prepare your annual financial statements and coordinate with auditors to complete the year-end process smoothly.",
      },
      {
        number: "06",
        title: "Ongoing Advisory",
        description:
          "We provide continuous support as your business evolves, including advice on tax structuring, new registrations, and regulatory changes.",
      },
    ],
    whatsIncluded: [
      "Monthly bookkeeping and bank reconciliations",
      "Management accounts preparation",
      "Annual financial statements (IFRS)",
      "UAE Corporate Tax registration and returns",
      "VAT registration and quarterly filings",
      "Federal Tax Authority correspondence",
      "Audit-ready schedules and documentation",
      "Audit coordination support",
      "Financial reporting advisory",
      "Ongoing tax and accounting support",
    ],
    ctaText:
      "Keep your finances accurate and your tax filings on time. Let Atlas handle your accounting and tax compliance.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
