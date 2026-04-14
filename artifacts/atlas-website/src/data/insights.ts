export interface InsightArticle {
  slug: string;
  title: string;
  description: string;
  icon: string;
  content: string;
  relatedService?: string;
}

export const insightArticles: InsightArticle[] = [
  {
    slug: "difc-101",
    title: "DIFC 101: The Complete Guide for 2026",
    description: "Everything you need to know about the Dubai International Financial Centre: its legal framework, entity types, costs, and why it remains the jurisdiction of choice for international businesses.",
    icon: "Building2",
    relatedService: "difc-company-setup",
    content: `
The Dubai International Financial Centre (DIFC) is one of the world's leading financial free zones and the premier hub for financial services, professional services and wealth management in the Middle East, Africa and South Asia (MEASA) region.

## What Is the DIFC?

Established in 2004 by Dubai Law No. 9 of 2004, the DIFC is a financial free zone located in the heart of Dubai. It operates as an onshore financial centre with its own civil and commercial laws, regulatory body and courts system. The DIFC is not subject to UAE federal civil and commercial law; instead, it applies a legal framework based on English common law, independently enacted and administered within the DIFC.

The DIFC is home to more than 5,000 registered companies, including more than 400 financial institutions, and employs over 40,000 professionals across finance, law, consulting and technology.

## The DIFC's Legal Framework

The DIFC's legal system is one of its most important features. The DIFC has its own body of laws, covering companies, employment, insolvency, trusts, foundations, arbitration and more. These laws are broadly aligned with English common law principles, making the DIFC's legal environment immediately familiar to international businesses and investors.

The DIFC Courts are an independent, English-language common law court system with jurisdiction over civil and commercial disputes arising within the DIFC. The courts have an established body of case law and are widely respected for their efficiency and independence.

## Regulatory Authority: The DFSA

The Dubai Financial Services Authority (DFSA) is the independent regulator of financial services conducted in and from the DIFC. The DFSA is responsible for licensing and supervising financial services firms, including banks, asset managers, fund administrators, insurance companies and professional service firms carrying on regulated activities.

The DFSA applies a risk-based regulatory approach broadly aligned with international standards set by bodies including the Financial Stability Board (FSB), the Basel Committee, IOSCO and the FATF.

## Types of Entities in the DIFC

The DIFC offers a range of entity types to suit different business purposes:

**Company Limited by Shares**
The most common DIFC entity type, suitable for regulated and non-regulated businesses. Companies may be private or public and can be 100% foreign-owned.

**Limited Liability Company (LLC)**
An LLC in the DIFC limits the liability of its members to their capital contributions. This structure is commonly used for professional services firms and joint ventures.

**Prescribed Company (PC)**
A special purpose vehicle designed for holding purposes. Prescribed Companies may not carry on business activities but can hold assets, shares in group entities, real property and other investments. Particularly popular for GCC family holding structures and co-investment vehicles.

**Foundation**
A legal entity without shareholders or members, used for succession planning, wealth protection and philanthropy. DIFC Foundations own their assets outright and are governed by a charter and bylaws.

**Investment Company / Fund**
The DIFC offers a range of fund structures for collective investment, including Exempt Funds, Qualified Investor Funds (QIFs) and Public Funds, regulated by the DFSA under its Collective Investment Rules.

## Key Benefits of the DIFC

**Zero Per Cent Tax**
The DIFC offers a zero per cent tax rate on income and profits for qualifying entities. Under the UAE's Corporate Tax regime, DIFC entities meeting the Qualifying Free Zone Person (QFZP) criteria continue to benefit from a zero per cent rate on qualifying income.

**100% Foreign Ownership**
Unlike mainland UAE, the DIFC permits 100% foreign ownership of all entity types with no requirement for a local partner or sponsor.

**Common Law Framework**
The DIFC's English common law-based legal and judicial system is familiar to international investors and businesses, reducing legal uncertainty and facilitating cross-border transactions.

**Repatriation of Profits and Capital**
There are no restrictions on the repatriation of profits, dividends or capital from the DIFC.

**World-Class Infrastructure**
The DIFC campus offers premium office space, a vibrant business district and proximity to Dubai's international airport and financial services ecosystem.

## Who Uses the DIFC?

The DIFC serves a broad range of businesses and individuals:

- **Financial services firms**: Banks, asset managers, fund managers, brokers, insurance companies and payment service providers seeking a regulated environment with international credibility
- **Professional services firms**: Law firms, accounting firms, management consultancies and corporate service providers
- **Holding companies**: Businesses and families using DIFC entities, including Prescribed Companies, as holding vehicles for regional and international assets
- **Family offices**: High-net-worth families establishing single or multi-family office structures to manage wealth professionally
- **Technology and fintech companies**: Businesses seeking access to DIFC's innovation ecosystem and the DFSA's regulatory sandbox framework

## Getting Started

Setting up in the DIFC involves selecting the right entity type, preparing constitutional documents, registering with the DIFC Authority (DIFCA) and, where required, applying for authorisation from the DFSA.

Atlas Corporate Services provides full end-to-end DIFC setup support, from initial structuring advice through to registration, licensing and ongoing governance. Contact the Atlas team to discuss your DIFC requirements.
    `.trim()
  },
  {
    slug: "prescribed-company-handbook",
    title: "DIFC Prescribed Company (SPV) Handbook 2026",
    description: "A practical guide to the DIFC Prescribed Company regime, covering eligible uses, the GCC Holding Company category, setup process, annual obligations and key structuring considerations.",
    icon: "FileText",
    relatedService: "difc-prescribed-company-spv",
    content: `
The DIFC Prescribed Company (PC) is one of the most versatile and cost-effective corporate structures available within the Dubai International Financial Centre. This handbook covers everything you need to know about establishing and administering a DIFC Prescribed Company.

## What Is a DIFC Prescribed Company?

A DIFC Prescribed Company is a non-operating entity established under the Companies Law DIFC Law No. 5 of 2018. The Prescribed Company regime was introduced to provide a streamlined, lower-cost SPV structure for holding assets, facilitating investment structures and managing wealth, without the operational complexity of a full DIFC company.

A Prescribed Company may not carry on business activities in or from the DIFC. Its activities are limited to the prescribed purposes set out in the DIFC Companies Regulations.

## Prescribed Purposes

A Prescribed Company may be established for one or more of the following prescribed purposes:

1. **Group holding**: Holding shares or other ownership interests in group entities
2. **Asset holding**: Holding real property, movable property or other assets
3. **Co-investment**: Acting as a co-investment vehicle alongside a fund or group of investors
4. **Joint venture**: Facilitating a joint venture arrangement between two or more parties
5. **Intellectual property holding**: Holding patents, trademarks, copyrights or other intangible assets
6. **GCC Holding Company**: Holding assets or shares owned by nationals of GCC member states

## The GCC Holding Company Category

The GCC Holding Company category is a significant feature of the Prescribed Company regime. It allows GCC nationals to use a DIFC Prescribed Company as a holding vehicle for their assets, providing access to the DIFC's common law framework, internationally recognised corporate structure and zero per cent tax environment.

To qualify as a GCC Holding Company, the ultimate beneficial owners of the Prescribed Company must be nationals of a GCC member state (Bahrain, Kuwait, Oman, Qatar, Saudi Arabia or the UAE). A declaration of GCC beneficial ownership is required as part of the registration process.

## Key Features

**Reduced Registration Fees**
Prescribed Companies benefit from reduced DIFC registration fees compared to standard operating companies. The initial registration fee and annual renewal fee are set at a lower rate, reflecting the non-operating nature of the entity.

**No Physical Office Requirement**
Unlike standard DIFC companies, Prescribed Companies are not required to maintain physical office space within the DIFC. A registered office address (which may be provided by a registered agent such as Atlas) is sufficient.

**No DFSA Authorisation**
Prescribed Companies do not carry on regulated activities and are therefore not subject to DFSA authorisation requirements.

**Common Law Protection**
Assets held within a DIFC Prescribed Company benefit from the protections of the DIFC's English common law-based legal framework, providing confidence to international banks, investors and counterparties.

## Setup Process

**Step 1: Confirm Prescribed Purpose**
Confirm that the intended use of the Prescribed Company falls within one or more of the permitted prescribed purposes.

**Step 2: Prepare Constitutional Documents**
Prepare the Articles of Association and any supplementary documentation required for the specific prescribed purpose (for example, GCC Holding Company declarations).

**Step 3: Register with the DIFC Authority**
Submit the registration application to the DIFC Authority (DIFCA) along with supporting documentation, including director and shareholder information, passport copies, address verification and the relevant declarations.

**Step 4: Appoint a Registered Agent**
All Prescribed Companies must appoint a DIFC-registered agent to maintain the company's registered office and assist with ongoing compliance obligations. Atlas Corporate Services acts as registered agent for a wide range of DIFC Prescribed Companies.

**Step 5: Obtain the Certificate of Incorporation**
Upon approval, DIFCA issues a Certificate of Incorporation and a Commercial Licence confirming the company's prescribed purpose.

**Step 6: Open Banking Arrangements**
Arrange banking facilities with a UAE-regulated or DIFC-based bank. Note that banking due diligence for Prescribed Companies may be more detailed given their non-operating nature; a clear explanation of the company's purpose and beneficial ownership structure is important.

## Annual Obligations

DIFC Prescribed Companies have ongoing obligations that must be met to maintain good standing:

- **Annual renewal**: The Commercial Licence must be renewed annually with DIFCA, accompanied by the annual renewal fee
- **Registered agent**: The registered agent appointment must be maintained throughout the company's existence
- **Ultimate Beneficial Owner (UBO) register**: The company must maintain an up-to-date register of ultimate beneficial owners and submit required information to DIFCA
- **Director and shareholder register**: Maintain accurate records of directors and shareholders and notify DIFCA of any changes
- **Accounting records**: Maintain accurate financial records, though full audited accounts are not required for most Prescribed Companies

## UAE Corporate Tax Considerations

The introduction of the UAE Corporate Tax regime requires Prescribed Companies to consider their tax status. A DIFC Prescribed Company that meets the Qualifying Free Zone Person (QFZP) criteria may benefit from a zero per cent corporate tax rate on qualifying income. Key conditions include:

- Maintaining adequate substance in the DIFC (which for a Prescribed Company generally means maintaining a registered office and meeting minimum activity requirements)
- Deriving income from qualifying activities
- Meeting de minimis thresholds for non-qualifying income

Atlas recommends obtaining specific tax advice on the UAE Corporate Tax implications for your Prescribed Company structure.

## How Atlas Can Help

Atlas Corporate Services provides full Prescribed Company setup and administration services, including:

- Registered agent services and registered office provision
- Constitution and documentation preparation
- DIFCA registration management
- Annual licence renewal and compliance support
- UBO register maintenance
- Banking introduction support

Contact the Atlas team to discuss your Prescribed Company requirements.
    `.trim()
  },
  {
    slug: "economic-substance-guide",
    title: "Economic Substance Regulations: Complete Compliance Guide 2026",
    description: "A clear explanation of the UAE Economic Substance Regulations (ESR), how they have evolved since 2019, what still applies following the introduction of UAE Corporate Tax, and what DIFC companies need to know.",
    icon: "Scale",
    relatedService: "compliance-economic-substance",
    content: `
The UAE Economic Substance Regulations (ESR) were introduced in 2019 in response to the OECD's Base Erosion and Profit Shifting (BEPS) framework and the EU's concerns about preferential tax regimes in UAE jurisdictions. Since their introduction, the ESR have been amended several times and their practical scope has narrowed following the introduction of UAE Corporate Tax. This guide sets out what the ESR require and what DIFC companies need to know.

## Background: Why Were the ESR Introduced?

The UAE Economic Substance Regulations were introduced by Cabinet Resolution No. 31 of 2019, subsequently amended by Cabinet Resolution No. 57 of 2020. The regulations were designed to ensure that UAE entities deriving income from certain activities maintain genuine economic substance in the UAE, rather than using the jurisdiction solely as a low-tax holding location.

The ESR were introduced in response to the EU's listing of the UAE as a non-cooperative jurisdiction for tax purposes. By implementing the ESR, the UAE sought to demonstrate that entities benefiting from its tax environment were genuinely operating and economically active within the country.

## Which Entities Were Affected?

The ESR applied to UAE onshore and free zone entities, including DIFC entities, that carried on one or more of the following Relevant Activities:

- Banking business
- Insurance business
- Investment fund management business
- Lease-finance business
- Headquarters business
- Shipping business
- Holding company business
- Intellectual property business
- Distribution and service centre business

Entities carrying on a Relevant Activity and deriving income from that activity were required to meet the economic substance test and file an ESR notification and report each year.

## The Economic Substance Test

To satisfy the economic substance test, an entity carrying on a Relevant Activity was required to:

1. Conduct its core income-generating activities (CIGAs) in the UAE
2. Be directed and managed in the UAE
3. Have adequate employees, expenditure and physical assets in the UAE relative to the level of activity

The specific requirements varied by Relevant Activity, with higher thresholds applying to more complex activities such as banking and IP business.

## ESR and UAE Corporate Tax: What Changed?

The UAE Corporate Tax Law, which came into effect for financial years beginning on or after 1 June 2023, has significantly reduced the practical scope of the ESR for most entities.

**ESR Notification and Reporting**

For financial years beginning on or after 1 June 2023, entities that are subject to UAE Corporate Tax are generally no longer required to file ESR notifications or reports in respect of those financial years. The Ministry of Finance has confirmed that the ESR filing obligation is effectively suspended for corporate tax-registered entities for periods after the corporate tax effective date.

**Earlier Financial Periods**

Entities may still have outstanding ESR obligations for financial years prior to their UAE Corporate Tax registration date. It is important to confirm whether any ESR notifications or reports remain outstanding for earlier periods and to file any outstanding returns before the relevant deadlines.

**Holding Company Business**

Entities carrying on Holding Company Business under the ESR had reduced substance requirements. For DIFC Prescribed Companies and similar holding vehicles, holding company ESR obligations have generally been straightforward, but confirmation of historic filings remains important.

## What DIFC Companies Should Do

DIFC companies should take the following steps to ensure their ESR position is up to date:

1. **Confirm historic filing status**: Review whether ESR notifications and reports have been filed for all relevant financial periods prior to the UAE Corporate Tax effective date
2. **File any outstanding returns**: Engage with a qualified adviser to prepare and file any outstanding ESR notifications or reports before penalties are applied
3. **Assess corporate tax implications**: Confirm the entity's UAE Corporate Tax registration status and Qualifying Free Zone Person eligibility
4. **Review the substance position**: Ensure the entity's substance arrangements in the DIFC remain appropriate for UAE Corporate Tax purposes, which has its own substance-related requirements for Qualifying Free Zone Persons

## Penalties for Non-Compliance

Failure to file ESR notifications and reports or to meet the economic substance test can result in significant administrative penalties under the UAE ESR framework. Penalties for non-filing start at AED 20,000 and can escalate substantially for repeat or sustained non-compliance.

## How Atlas Can Help

Atlas Corporate Services provides compliance and economic substance advisory services for DIFC-registered entities. Our team assists with ESR historic filings, corporate tax registration, substance assessments and ongoing compliance support. Contact the Atlas team to discuss your ESR and corporate tax compliance requirements.
    `.trim()
  },
  {
    slug: "uae-corporate-tax-overview",
    title: "UAE Corporate Tax: What DIFC Businesses Must Know in 2026",
    description: "A comprehensive overview of the UAE Corporate Tax regime, how it applies to DIFC free zone entities, the Qualifying Free Zone Person concept and what businesses need to do to remain compliant.",
    icon: "Calculator",
    relatedService: "accounting-tax",
    content: `
The UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022) introduced a federal corporate tax on the net income of businesses operating in the UAE. The regime came into effect for financial years beginning on or after 1 June 2023 and represents the most significant change to the UAE's tax landscape in the country's history.

This guide explains how the UAE Corporate Tax regime applies to DIFC-registered companies and what businesses need to do to comply.

## Overview of UAE Corporate Tax

The UAE Corporate Tax applies a standard rate of nine per cent on the taxable income of businesses exceeding AED 375,000 per year. A zero per cent rate applies to taxable income up to AED 375,000 (the small business relief threshold).

Qualifying Free Zone Persons (QFZPs), including eligible DIFC entities, may benefit from a zero per cent rate on qualifying income, subject to meeting specific conditions.

## Who Is Subject to UAE Corporate Tax?

UAE Corporate Tax applies to:

- **UAE resident persons**: Legal entities incorporated in the UAE (including in free zones such as the DIFC) and foreign entities that are effectively managed and controlled in the UAE
- **Non-resident persons**: Foreign entities with a permanent establishment in the UAE or deriving UAE-sourced income

Most DIFC-registered companies will be treated as UAE resident persons and subject to UAE Corporate Tax from their first financial year beginning on or after 1 June 2023.

## The Qualifying Free Zone Person Regime

One of the most important features of the UAE Corporate Tax Law for DIFC companies is the Qualifying Free Zone Person (QFZP) regime. A QFZP is subject to a zero per cent corporate tax rate on qualifying income and a nine per cent rate on non-qualifying income.

**To qualify as a QFZP, a DIFC entity must:**

1. Maintain adequate substance in the DIFC or another free zone
2. Derive income from qualifying activities (as defined in Ministerial Decision No. 139 of 2023)
3. Not elect to be subject to the standard corporate tax rate
4. Comply with transfer pricing rules where transactions with related parties exist
5. Not derive income exceeding the de minimis threshold from non-qualifying activities or non-qualifying income sources
6. Prepare audited financial statements

**Qualifying Activities include:**

- Manufacturing of goods
- Processing of goods
- Holding of shares and other securities
- Ownership, management and operation of ships
- Reinsurance services
- Fund management services regulated by the DFSA or another competent authority
- Wealth and investment management services regulated by the DFSA
- Headquarters services to related parties
- Treasury and financing services to related parties
- Financing and leasing of aircraft
- Distribution in or from a designated zone
- Logistic services in or from a designated zone
- Any activities ancillary to the above

## Key Compliance Obligations

**Registration**

All UAE businesses subject to corporate tax must register with the Federal Tax Authority (FTA) through the EmaraTax portal and obtain a Tax Registration Number (TRN). Registration must be completed within the timeframes specified by the FTA.

**Financial Statements**

Taxable persons must prepare financial statements in accordance with International Financial Reporting Standards (IFRS) or another accounting standard approved by the UAE Ministry of Finance. QFZPs are required to prepare audited financial statements.

**Tax Return Filing**

UAE Corporate Tax returns must be filed within nine months of the end of the relevant tax period. For a company with a financial year ending 31 December, the return must be filed by 30 September of the following year.

**Transfer Pricing**

Transactions between related parties must be conducted on an arm's length basis. Transfer pricing documentation (master file and local file) is required for businesses meeting the relevant thresholds.

**Advance Pricing Agreements**

The FTA has introduced an Advance Pricing Agreement (APA) programme, allowing businesses to agree the transfer pricing treatment of related party transactions in advance.

## Exempt Income and Reliefs

Certain categories of income are exempt from UAE Corporate Tax:

- **Dividends**: Dividends received by a UAE resident company from a UAE or foreign subsidiary are generally exempt, subject to the participation exemption conditions
- **Capital gains**: Gains on the disposal of qualifying shareholdings may be exempt under the participation exemption
- **Foreign permanent establishment income**: A UAE company may elect to exempt income derived through a foreign permanent establishment
- **Intra-group transactions**: Qualifying intra-group transfers and business restructurings may be carried out on a tax-neutral basis

## Practical Steps for DIFC Companies

1. Confirm UAE Corporate Tax registration status with the FTA
2. Assess eligibility for the QFZP regime and qualifying income classification
3. Prepare audited financial statements for the relevant tax period
4. Review related party transactions and ensure transfer pricing documentation is in place
5. File the annual corporate tax return by the applicable deadline
6. Review VAT compliance, as VAT obligations continue alongside corporate tax

## How Atlas Can Help

Atlas Corporate Services provides accounting, tax registration and compliance support for DIFC-registered companies navigating the UAE Corporate Tax regime. Our team assists with FTA registration, QFZP eligibility assessments, financial statement preparation, corporate tax return filing and transfer pricing documentation. Contact the Atlas team to discuss your corporate tax obligations.
    `.trim()
  },
  {
    slug: "innovation-licence",
    title: "DIFC Innovation Licence Guide 2026",
    description: "A complete guide to the DIFC Innovation Licence for technology and fintech businesses: eligibility, costs, the Innovation Testing Licence, and the DFSA regulatory pathway.",
    icon: "Lightbulb",
    relatedService: "difc-company-setup",
    content: `
The DIFC Innovation Licence is a specialist licensing category designed to attract technology companies, fintech businesses and startups to the Dubai International Financial Centre. It offers a cost-effective entry point into the DIFC ecosystem for businesses at early and growth stages.

## What Is the DIFC Innovation Licence?

The DIFC Innovation Licence allows technology and innovation-driven companies to operate from the DIFC at a reduced cost compared to a standard commercial licence. It is available to businesses engaged in activities such as software development, technology consulting, artificial intelligence, blockchain, data analytics, cybersecurity and financial technology.

The licence is designed to support the DIFC's strategy of becoming a leading global hub for innovation and technology, complementing the DIFC's broader financial services ecosystem.

## Eligibility Requirements

To qualify for a DIFC Innovation Licence, a business must:

- Be engaged in a qualifying technology or innovation activity
- Meet the DIFC Authority's assessment criteria for innovation
- Demonstrate a credible business model and development roadmap
- Have at least one founder or director actively involved in the business
- Commit to establishing a genuine operational presence in the DIFC

The Innovation Licence is generally not available to businesses that primarily provide regulated financial services (which require a DFSA licence) unless they are operating under the Innovation Testing Licence programme.

## DIFC Innovation Licence Structure

**Standard Innovation Licence**
The standard Innovation Licence is issued by the DIFC Authority and allows technology companies to operate as a non-regulated business within the DIFC. It covers activities such as software development, IT consulting, technology product development and related services.

**Innovation Testing Licence (ITL)**
The Innovation Testing Licence is a regulatory sandbox administered by the DFSA. It allows fintech companies to test innovative financial products or services in the DIFC under a controlled regulatory environment, with a restricted client base and transaction limits. The ITL is designed as a pathway to a full DFSA licence for companies developing regulated financial technology products.

## Costs and Fees

The DIFC Innovation Licence is priced to be accessible for early-stage technology businesses. Indicative costs for 2026 include:

- **Registration and licence fee**: USD 1,500 to USD 3,000 depending on entity type
- **Annual licence renewal**: USD 1,500 to USD 3,000
- **Registered agent fee**: Required — typically USD 2,000 to USD 3,500 per annum

Additional costs include:

- Office space: DIFC offers co-working facilities through FinTech Hive and Gate Avenue co-working spaces, which are more cost-effective than dedicated office leases
- Employee visas: Standard UAE visa costs apply
- Registered agent and company secretarial fees

The total first-year cost of establishing a DIFC Innovation Licence company, including all government fees and professional costs, typically ranges from USD 10,000 to USD 20,000.

## The Innovation Testing Licence Process

For fintech businesses seeking regulatory authorisation, the ITL pathway involves the following steps:

1. **Expression of Interest**: Submit an initial application to the DFSA describing the proposed product, target market and testing parameters
2. **DFSA Review**: The DFSA assesses whether the proposed activity is genuinely innovative and cannot be adequately tested under existing regulatory provisions
3. **Restricted Authorisation**: If approved, the DFSA issues a restricted authorisation permitting the company to conduct the proposed activity with defined restrictions
4. **Testing Period**: The company operates under the ITL for up to two years, reporting regularly to the DFSA on testing progress
5. **Full Authorisation**: Successful applicants may apply for full DFSA authorisation at the end of the testing period

## Benefits of the DIFC Innovation Licence

- **Cost-effective market entry**: Lower fees than standard DIFC commercial licences
- **Credibility**: Operating from the DIFC provides credibility with investors, financial institutions and clients
- **Access to ecosystem**: Connection to the DIFC's network of banks, funds, family offices and professional services firms
- **FinTech Hive**: Access to DIFC's FinTech Hive accelerator programme, one of the region's leading fintech ecosystems
- **UAE residency visas**: Innovation Licence holders can sponsor employee and founder visas
- **Regulatory pathway**: Clear pathway to full DFSA authorisation for regulated fintech businesses

## Setting Up a DIFC Innovation Licence Company

The process for establishing a DIFC Innovation Licence company involves:

1. Selecting the appropriate entity type (typically a company limited by shares)
2. Preparing the application, including a business plan and description of activities
3. Appointing a DIFC registered agent
4. Submitting the application to the DIFC Authority
5. Registering with the relevant UAE authorities for tax and immigration purposes
6. Opening a UAE corporate bank account

## How Atlas Can Help

Atlas Corporate Services assists technology and fintech companies with DIFC Innovation Licence applications, including business plan preparation, entity formation, registered agent services and ongoing compliance support. We also advise on the DFSA's Innovation Testing Licence programme for fintech businesses seeking regulatory authorisation. Contact the Atlas team to discuss your DIFC Innovation Licence application.
    `.trim()
  }
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find(a => a.slug === slug);
}
