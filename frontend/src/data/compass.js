// All static data for COMPASS — Climate Action Routing System

export const HAZARDS = [
  { id: "flood", label: "Flood", accent: "#1b9cfc" },
  { id: "heat", label: "Heat Stress", accent: "#e74c3c" },
  { id: "cyclone", label: "Cyclone", accent: "#2161c2" },
  { id: "drought", label: "Drought", accent: "#ffa600" },
  { id: "landslide", label: "Landslide", accent: "#a0522d" },
  { id: "glof", label: "GLOF", accent: "#2bb6b7" },
];

export const ROLES = [
  { id: "community", label: "Community Member", sub: "Farmer · Fisher · Village Resident" },
  { id: "local_node", label: "Local Node", sub: "Sarpanch · CDMC · SHG Leader" },
  { id: "ngo", label: "NGO Partner", sub: "Field Practitioner · Programme Lead" },
  { id: "government", label: "Government Official", sub: "Block · District · State Officer" },
];

export const GEOGRAPHIES = [
  {
    id: "vidarbha",
    label: "Vidarbha",
    sub: "Maharashtra",
    color: "#ffa600",
    photo: "vidarbha.jpg",
    fallback: "https://images.pexels.com/photos/20515274/pexels-photo-20515274.jpeg",
    blurb: "Rain-fed dryland. Farmer distress. Heat wave corridor.",
  },
  {
    id: "coastal_odisha",
    label: "Coastal Odisha",
    sub: "Odisha",
    color: "#2bb6b7",
    photo: "odisha.jpg",
    fallback: "https://images.pexels.com/photos/5261381/pexels-photo-5261381.jpeg",
    blurb: "Cyclone landfall zone. Mangrove frontier. Fisher livelihoods.",
  },
  {
    id: "ladakh",
    label: "Ladakh",
    sub: "UT Ladakh",
    color: "#2161c2",
    photo: "ladakh.jpg",
    fallback: "https://images.pexels.com/photos/34998312/pexels-photo-34998312.jpeg",
    blurb: "Cold desert. Glacial retreat. High-altitude agriculture.",
  },
];

export const SOLUTIONS = [
  {
    id: 1,
    name: "Bio-Dyke + Mangrove Buffer",
    category: "Nature-Based",
    hazards: ["cyclone", "flood"],
    geographies: ["coastal_odisha"],
    evidenceLevel: 3,
    costRange: "₹18–35 lakh/km",
    photo: "sol-biodyke.jpg",
    plain:
      "An earthen embankment reinforced with mangrove trees that absorbs storm surge and protects coastal villages from cyclones.",
    triedAt: "Kendrapara, Jagatsinghpur, Bhitarkanika — Odisha coastline",
    bestFor: "Estuary-adjacent land with community forest rights. 60%+ mangrove survival potential.",
    failureModes:
      "Fails where land tenure is contested or shrimp farms compete. Non-Bhitarkanika sites show <25% ten-year survival without facilitation.",
    story:
      "After Cyclone Fani, Chittaranjan Behera's cluster in Kendrapara lost no houses — the mangrove belt held where concrete walls collapsed.",
    storyBy: "Chittaranjan Behera · Kendrapara",
    firstStep: "Call RCDC Bhubaneswar: 0674-2435985. Ask for their Eco-DRR programme team.",
    tags: ["MGNREGS convergence", "CAMPA eligible", "CFR required"],
    provider: "RCDC / FES Bhubaneswar",
    accessible: true,
  },
  {
    id: 2,
    name: "Watershed Treatment (Ridge-to-Valley)",
    category: "Nature-Based",
    hazards: ["drought", "flood"],
    geographies: ["vidarbha"],
    evidenceLevel: 3,
    costRange: "₹12,000–22,000/ha",
    photo: "sol-watershed.jpg",
    plain:
      "Full micro-watershed treatment — contour trenches to farm bunds — that raises groundwater and extends the cropping season.",
    triedAt: "6,000+ villages in Maharashtra, MP, Telangana (WOTR). 843 watersheds (BAIF).",
    bestFor: "Rainfed dryland with 500–900mm rainfall. 3+ year community commitment.",
    failureModes:
      "Siting errors without hydrogeological planning. Farm ponds lined with LDPE become evaporation pans.",
    story:
      "In Ramtek, Nagpur district, groundwater rose 1.8 metres in three years. 43 women farmers grew a second crop for the first time.",
    storyBy: "Ramtek Micro-Watershed · Nagpur",
    firstStep: "Call WOTR Amravati: 0721-2560545. Request their climate-resilient watershed programme.",
    tags: ["MGNREGS convergence", "WDC-PMKSY eligible", "PoCRA priority"],
    provider: "WOTR / BAIF Maharashtra",
    accessible: true,
  },
  {
    id: 3,
    name: "Ice Stupa (Artificial Glacier)",
    category: "Tech-Assisted NbS",
    hazards: ["drought", "glof"],
    geographies: ["ladakh"],
    evidenceLevel: 2,
    costRange: "₹1.5–5 lakh per stupa",
    photo: "sol-icestupa.jpg",
    plain:
      "A conical ice tower built in winter from stream water. Melts April–May to give farmers irrigation exactly when needed for sowing.",
    triedAt: "~40 villages: Phyang, Igoo, Shara, Zanskar cluster (2025 verified).",
    bestFor: "Above 3,500m altitude. Below -10°C winter consistently. Trained village fabricator essential.",
    failureModes:
      "Pipe freezing. Year-to-year variability. Collapses without trained maintenance. Not viable below 3,500m.",
    story:
      "Jigmet Namgyal from Phyang built his district's fourth ice stupa in 2023. His April harvest was the best in six years.",
    storyBy: "Jigmet Namgyal · Phyang",
    firstStep: "Email HIAL Phyang: ice.stupa@hial.ac.in. Request village fabricator training.",
    tags: ["Requires trained fabricator", "LAHDC grant possible", "HIAL support"],
    provider: "HIAL / LEDeG Leh",
    accessible: false,
  },
  {
    id: 4,
    name: "SRI — System of Rice Intensification",
    category: "Agroecology",
    hazards: ["flood", "drought"],
    geographies: ["coastal_odisha"],
    evidenceLevel: 3,
    costRange: "₹2,000–4,000/ha (training)",
    photo: "sol-sri.jpg",
    plain:
      "Younger seedlings, wider spacing, less water. 20–50% more rice with 25–40% less water. Proven for women farmers in flood-prone areas.",
    triedAt: "Mayurbhanj, Keonjhar, Sundargarh — ~200,000 women farmers (PRADAN).",
    bestFor: "Rainfed or canal-irrigated paddy land. Works best with SHG for group learning.",
    failureModes: "Fails without one supported demonstration season. Lone adopters without peer group rarely sustain.",
    story:
      "Sunita Dehuri from Keonjhar increased paddy yield from 18 to 28 quintals per acre. Her water use dropped by half.",
    storyBy: "Sunita Dehuri · Keonjhar",
    firstStep: "Call PRADAN Odisha: 0671-2301156. Ask for SRI group formation in your block.",
    tags: ["SHG entry point", "KVK support", "Flood Sub1 variety"],
    provider: "PRADAN / Sambhav / ICAR-NRRI",
    accessible: true,
  },
  {
    id: 5,
    name: "Village Heat Action Plan",
    category: "Community Protocol",
    hazards: ["heat"],
    geographies: ["vidarbha"],
    evidenceLevel: 2,
    costRange: "₹50,000–2 lakh (GP level)",
    photo: "sol-heatplan.jpg",
    plain:
      "A locally-adapted plan that opens cooling centres, triggers ORS through ASHAs, notifies labour contractors, and activates health surveillance during heat waves.",
    triedAt: "Nagpur Municipal Corporation (NMC + NRDC India, 2013→). Rural Vidarbha: almost no coverage.",
    bestFor: "Active ASHA network, functional Panchayat Bhawan, IMD heat alert integration.",
    failureModes:
      "Rural Vidarbha farm labourers are outside any existing HAP. Urban design has not reached village scale.",
    story:
      "During the 2024 Vidarbha heat wave, ASHA Rekha in Yavatmal activated her village protocol. Three elderly residents at risk were monitored daily.",
    storyBy: "ASHA Rekha · Yavatmal",
    firstStep: "Contact your District Health Officer and request the Heat Action Plan template.",
    tags: ["SDRF health component", "Ayushman Bharat linkage", "ASHA network required"],
    provider: "NRDC India / District Health Office",
    accessible: false,
  },
  {
    id: 6,
    name: "Cyclone Early Warning Cascade",
    category: "Community Protocol",
    hazards: ["cyclone", "flood"],
    geographies: ["coastal_odisha"],
    evidenceLevel: 3,
    costRange: "₹3–8 lakh per GP cluster",
    photo: "sol-ews.jpg",
    plain:
      "A colour-coded alert cascade from IMD to OSDMA to block to GP task force to household — with named roles, trained volunteers, annual drills.",
    triedAt: "879+ cyclone shelters across Odisha. Deaths: ~10,000 (1999) → 64 (Fani 2019).",
    bestFor: "Functional Multi-Purpose Cyclone Shelter, 20-person Community Task Force, annual mock drill.",
    failureModes: "Not extended to lightning, heat or flash floods. Ganjam model exists but has scaled slowly.",
    story:
      "Satabhaya in Kendrapara has been displaced three times. After task force training, their last evacuation took 4 hours. In 1999 it took days they didn't have.",
    storyBy: "Satabhaya CTF · Kendrapara",
    firstStep: "Contact your BDO. Ask to register for OSDMA Community Task Force training.",
    tags: ["OSDMA support", "NDRF training", "SDRF funded"],
    provider: "OSDMA / NDRF 4th Bn",
    accessible: true,
  },
  {
    id: 7,
    name: "PMFBY Claim Navigation",
    category: "Financial Protection",
    hazards: ["drought", "flood", "cyclone"],
    geographies: ["vidarbha", "coastal_odisha"],
    evidenceLevel: 3,
    costRange: "Free (entitlement)",
    photo: "sol-pmfby.jpg",
    plain:
      "A step-by-step process to file a PMFBY crop-loss claim with photographic documentation — before the Revenue Inspector arrives.",
    triedAt: "Yavatmal, Amravati, Buldhana — documented by Prayas Energy Group.",
    bestFor: "Loanee farmers (auto-enrolled). Non-loanee must opt in before sowing season cutoff.",
    failureModes: "Cluster-level yield assessment denies individual losses. Non-loanees rarely opt in.",
    story:
      "Dattatray Wankhede in Yavatmal was rejected twice. In 2023, with documentation support, he received ₹42,000 — first payment in 8 years of premiums.",
    storyBy: "Dattatray Wankhede · Yavatmal",
    firstStep: "Call 1800-180-1551 (Kisan Call Centre, free) within 72 hours of crop damage. Photograph damage first.",
    tags: ["72-hr deadline critical", "Photo evidence essential", "Toll-free helpline"],
    provider: "Prayas Energy Group / Kisan Call Centre",
    accessible: true,
  },
  {
    id: 8,
    name: "Solar-Passive House Retrofit",
    category: "Structural",
    hazards: ["heat", "drought"],
    geographies: ["ladakh"],
    evidenceLevel: 2,
    costRange: "₹40,000–1.2 lakh per house",
    photo: "sol-solarhouse.jpg",
    plain:
      "A south-facing glazed wall stores solar heat by day, releases it at night. Cuts winter fuel by 40–60%. No electricity needed.",
    triedAt: "Leh cluster villages — GERES India evaluations at 3,000–4,000m.",
    bestFor: "South-facing wall exposure. Trained local mason. Altitude 3,000–4,500m.",
    failureModes: "Overheats in summer without shading. No subsidy channel — PMAY-G does not fund thermal retrofit.",
    story:
      "Sonam Dolma's house in Nimmu stays warm through January without a gas heater. Her family saved ₹18,000 in fuel last winter.",
    storyBy: "Sonam Dolma · Nimmu",
    firstStep: "Call LEDeG Leh: 01982-252068. Request the solar passive house programme.",
    tags: ["No current subsidy", "LEDeG support", "LAHDC grant possible"],
    provider: "LEDeG / GERES India",
    accessible: false,
  },
];

export const PROVIDERS = [
  {
    id: 1,
    name: "WOTR",
    full: "Watershed Organisation Trust",
    type: "NGO",
    geographies: ["vidarbha"],
    hazards: ["drought", "flood"],
    what:
      "Participatory watershed treatment, groundwater management, climate-resilient agriculture across 6,000+ villages.",
    districts: "Amravati · Akola · Yavatmal · Wardha",
    phone: "0721-2560545",
    email: "info@wotr.org",
    responsiveness: 4,
    projectOnly: false,
    track: "Strong evidence base with CARIAA climate links. Slower outside programme geographies.",
  },
  {
    id: 2,
    name: "RCDC",
    full: "Regional Centre for Development Cooperation",
    type: "NGO",
    geographies: ["coastal_odisha"],
    hazards: ["cyclone", "flood"],
    what: "Community forest rights, mangrove restoration, bio-dyke implementation, coastal commons advocacy.",
    districts: "Kendrapara · Jagatsinghpur · Bhadrak · Balasore",
    phone: "0674-2435985",
    email: "rcdc@rcdc.in",
    responsiveness: 4,
    projectOnly: false,
    track: "Most credible bio-dyke partner in Odisha. FRA-linked community work.",
  },
  {
    id: 3,
    name: "PRADAN",
    full: "Professional Assistance for Development Action",
    type: "NGO",
    geographies: ["coastal_odisha"],
    hazards: ["flood", "drought"],
    what: "SHG formation, SRI adoption, rainfed agriculture — 3.4 million households across 9 states.",
    districts: "Mayurbhanj · Keonjhar · Sundargarh",
    phone: "0671-2301156",
    email: "pradan@pradan.net",
    responsiveness: 5,
    projectOnly: false,
    track: "Deepest community embeddedness in the sector. SHG-led, women-centred.",
  },
  {
    id: 4,
    name: "HIAL",
    full: "Himalayan Institute of Alternatives Ladakh",
    type: "NGO",
    geographies: ["ladakh"],
    hazards: ["drought", "glof"],
    what: "Ice stupa technology, cold-desert climate education, village fabricator training.",
    districts: "Leh · Zanskar · Kargil (limited)",
    phone: null,
    email: "ice.stupa@hial.ac.in",
    responsiveness: 3,
    projectOnly: false,
    track: "Pioneered ice stupa technology. Strong innovation culture. Small institution.",
  },
  {
    id: 5,
    name: "SEEDS India",
    full: "Sustainable Environment and Ecological Development Society",
    type: "NGO",
    geographies: ["vidarbha", "coastal_odisha", "ladakh"],
    hazards: ["cyclone", "flood", "landslide"],
    what: "Disaster response, Owner-Driven Reconstruction, school safety. India's most certified DRR agency.",
    districts: "Pan-India · Odisha since Phailin · Ladakh since 2021",
    phone: "011-26195081",
    email: "seeds@seedsindia.org",
    responsiveness: 4,
    projectOnly: false,
    track: "Best institutional credibility. Strong in acute disaster phases.",
  },
  {
    id: 6,
    name: "LEDeG",
    full: "Ladakh Ecological Development Group",
    type: "NGO",
    geographies: ["ladakh"],
    hazards: ["heat", "drought"],
    what: "Solar-passive housing, clean energy, traditional water system revival. 40+ years in Leh.",
    districts: "Leh · Nimmu · Khaltsi · Nubra · Zanskar",
    phone: "01982-252068",
    email: "ledegled@gmail.com",
    responsiveness: 4,
    projectOnly: false,
    track: "Most locally rooted Ladakh organisation. Decades of trust capital.",
  },
  {
    id: 7,
    name: "SSP",
    full: "Swayam Shikshan Prayog",
    type: "NGO",
    geographies: ["vidarbha", "coastal_odisha"],
    hazards: ["flood", "cyclone", "drought"],
    what:
      "Women-led climate-resilient agriculture, community resilience funds. 48,000 women farmers in Maharashtra and Odisha.",
    districts: "Osmanabad · Latur (MH) · Ganjam · Malkangiri (OD)",
    phone: "022-25108064",
    email: "info@ssorganisation.org",
    responsiveness: 5,
    projectOnly: false,
    track: "UNDP Equator Prize 2016. Highest community-responsiveness. Women-centred.",
  },
  {
    id: 8,
    name: "OSDMA",
    full: "Odisha State Disaster Management Authority",
    type: "Government",
    geographies: ["coastal_odisha"],
    hazards: ["cyclone", "flood"],
    what: "879+ cyclone shelters, community task force training, EWS cascade across all coastal districts.",
    districts: "All 14 coastal Odisha districts",
    phone: "1070",
    email: "osdma@nic.in",
    responsiveness: 3,
    projectOnly: false,
    track: "India's most capable SDMA. Low direct access — use BDO or NGO intermediary.",
  },
];

export const SCHEMES = [
  {
    id: 1,
    name: "MGNREGS",
    full: "Mahatma Gandhi NREGS",
    ministry: "Rural Development",
    hazards: ["flood", "drought", "cyclone", "landslide", "glof"],
    geographies: ["vidarbha", "coastal_odisha", "ladakh"],
    funds: "100 days of work/year for watershed, farm ponds, embankments, afforestation. 262+ permissible DRR works.",
    eligibility: "Any rural household. No income limit. Women-headed households have priority.",
    realWorld:
      "Wage delays of 60–90 days common in Odisha and Maharashtra. Ladakh rates inadequate for altitude costs.",
    steps: [
      "Register Job Card at GP/Ward Member (Aadhaar + bank passbook)",
      "Submit written demand for work — keep your copy",
      "Work must begin within 15 days",
      "Wages paid to bank account within 15 days of work",
    ],
    bottleneck: "GP Secretary controls work allocation. BDO for technical sanction above ₹10 lakh.",
    convergence: ["PMKSY PDMC (drip + watershed)", "PMAY-G (building works)", "CAMPA (afforestation)"],
    accessible: 4,
    warning: "Wage delays are real — track your payment on nrega.nic.in",
    firstStep:
      "Visit your Gram Panchayat office. Ask for a MGNREGS Job Card. Bring Aadhaar, bank passbook, passport photo.",
  },
  {
    id: 2,
    name: "PMFBY",
    full: "Pradhan Mantri Fasal Bima Yojana",
    ministry: "Agriculture",
    hazards: ["drought", "flood", "cyclone"],
    geographies: ["vidarbha", "coastal_odisha"],
    funds: "Crop insurance for pre-sowing to post-harvest losses. Farmer pays 2% kharif, 1.5% rabi, 5% commercial.",
    eligibility: "All farmers. Loanee (auto-enrolled). Non-loanee must opt in before sowing-season cutoff.",
    realWorld:
      "Cluster-level yield assessment means individual losses are often denied. Non-loanee farmers rarely opt in. Vidarbha rejection rates are high.",
    steps: [
      "Verify enrollment on pmfby.gov.in",
      "Photograph damage with timestamp immediately",
      "Call 1800-180-1551 within 72 hours",
      "Request Panchnama from Tehsildar's office",
      "Track claim on PMFBY portal",
    ],
    bottleneck: "Tehsildar's Panchnama team. Without documented evidence before their visit, claims are denied.",
    convergence: ["PM-KISAN (income support)", "NDRF/SDRF (same event, apply for both)"],
    accessible: 2,
    warning: "72 hours is the hard deadline. Photograph everything before calling.",
    firstStep: "Call 1800-180-1551 (Kisan Call Centre, free). Photograph your damaged crop first.",
  },
  {
    id: 3,
    name: "NDRF / SDRF Relief",
    full: "National and State Disaster Response Fund",
    ministry: "Home Affairs",
    hazards: ["flood", "cyclone", "landslide", "glof"],
    geographies: ["vidarbha", "coastal_odisha", "ladakh"],
    funds:
      "Death ex-gratia ₹4 lakh, crop loss ₹8,500–17,000/ha, fully damaged house ₹95,100, animal loss compensation.",
    eligibility: "Victims of 12 notified disasters. Suicides and heat stroke: partial/no coverage.",
    realWorld:
      "Revenue Inspector Panchnama is the gateway. Quality varies dramatically by district. Odisha is consistently faster than Vidarbha.",
    steps: [
      "Go to GP office immediately after disaster",
      "Demand Panchnama in writing within 72 hours",
      "Submit Aadhaar, bank details, land documents to Tehsildar",
      "Track via District Collector portal",
    ],
    bottleneck: "Revenue Inspector + Tehsildar control all flows. No fixed SLA for assessment completion.",
    convergence: ["PMFBY (crop loss — both claimable)", "MGNREGS (post-disaster reconstruction labour)"],
    accessible: 3,
    warning: "Demand the Panchnama in writing. Verbal assurances have no legal force.",
    firstStep: "Go to your GP office today. Ask the Secretary to formally request a Revenue Inspector Panchnama.",
  },
  {
    id: 4,
    name: "DAY-NRLM / Mission Shakti",
    full: "National Rural Livelihoods Mission",
    ministry: "Rural Development",
    hazards: ["drought", "flood", "cyclone", "heat"],
    geographies: ["vidarbha", "coastal_odisha", "ladakh"],
    funds:
      "SHG formation support, Community Investment Fund ₹1.5–5 lakh for mature SHGs, revolving funds, bank linkage.",
    eligibility: "Women from poor/vulnerable households. SHG must be active 6+ months for CIF.",
    realWorld:
      "Odisha's Mission Shakti (2.2M+ SHGs) is genuinely community-controlled. Maharashtra's Umed more variable. Ladakh early-stage.",
    steps: [
      "Find nearest active SHG through GP or Block office",
      "Join or help form SHG (10–20 women, regular savings)",
      "After 6 months: apply for CIF through Block Mission Manager",
      "Bank linkage after 2 years with clean records",
    ],
    bottleneck: "Block Mission Manager (BMM) approval for CIF. Dormant SHGs on paper delay access by years.",
    convergence: ["MGNREGS", "PMFBY", "PMAY-G", "PM-KISAN"],
    accessible: 4,
    warning: "Check SHG is genuinely active before joining — dormant SHGs waste years of your eligibility.",
    firstStep: "Visit your Block office. Ask for the Block Mission Manager (BMM) and the nearest active SHG.",
  },
  {
    id: 5,
    name: "PMAY-G",
    full: "Pradhan Mantri Awaas Yojana Gramin",
    ministry: "Rural Development",
    hazards: ["cyclone", "flood", "landslide"],
    geographies: ["coastal_odisha", "vidarbha", "ladakh"],
    funds:
      "₹1.20 lakh (plain) / ₹1.30 lakh (hilly) + 90–95 days MGNREGS labour. Odisha adds state top-up for cyclone-resistant specs.",
    eligibility: "Houseless households on SECC list. Priority: SC/ST, minorities, widows, persons with disability.",
    realWorld:
      "SECC list misses many eligible households. Cyclone-resistant specs are optional — not default. Ladakh costs are 4–5x the grant.",
    steps: [
      "Check your name on SECC list at GP office",
      "If not listed: apply via Pradhan Mantri Awaas+ survey",
      "Choose design from BMTPC disaster-resilient catalogue",
      "Funds released in three tranches directly to your bank account",
    ],
    bottleneck: "SECC list inclusion is the hardest gate. BDO manages the waitlist.",
    convergence: ["MGNREGS (90–95 labour days built in)", "NDRF/SDRF (post-disaster repairs)"],
    accessible: 3,
    warning: "SECC list exclusion is the most common barrier. Demand the GP Secretary show you the list.",
    firstStep: "Visit your GP office. Ask the Secretary to check if your household is on the SECC list for PMAY-G.",
  },
];

export function generatePathway(context, savedItems) {
  const geo = GEOGRAPHIES.find((g) => g.id === context.geo);
  const hazard = HAZARDS.find((h) => h.id === context.hazard);
  const geoLabel = geo?.label || context.geo;
  const hazardLabel = hazard?.label || context.hazard;

  const s1Action =
    context.hazard === "flood" && context.geo === "coastal_odisha"
      ? "Contact your BDO to register for OSDMA Community Task Force training. Get your GP's cyclone shelter location."
      : context.hazard === "drought" && context.geo === "vidarbha"
      ? "Call WOTR Amravati (0721-2560545) and ask about watershed treatment feasibility. Bring your GP resolution."
      : context.hazard === "heat" && context.geo === "vidarbha"
      ? "Contact your District Health Officer. Request the Heat Action Plan template. Identify your Panchayat Bhawan as a cooling centre."
      : `Contact your Block Development Officer and report ${hazardLabel} exposure in your area.`;

  const s1Contact =
    context.hazard === "flood" && context.geo === "coastal_odisha"
      ? "BDO + OSDMA: 1070"
      : context.hazard === "drought" && context.geo === "vidarbha"
      ? "WOTR Amravati: 0721-2560545"
      : "Block Development Office";

  const s2Action =
    context.role === "community"
      ? `Register for a MGNREGS Job Card at your GP office. This unlocks DRR-convergent works in ${geoLabel}.`
      : context.role === "local_node"
      ? `Pass a GP resolution formally identifying ${hazardLabel} as a priority threat. This activates MGNREGS DRR works.`
      : `Connect with your District Collector's DM nodal officer. Request the District DMP for ${geoLabel}.`;

  const s3Action =
    savedItems.length > 0
      ? `Begin the applications you identified: ${savedItems
          .slice(0, 2)
          .map((s) => s.name)
          .join(" and ")}.`
      : context.geo === "coastal_odisha"
      ? "Apply for MGNREGS convergence with embankment works. Contact RCDC for bio-dyke feasibility assessment."
      : context.geo === "vidarbha"
      ? "Submit GP resolution for MGNREGS watershed works. Contact WOTR for mobilisation support."
      : "Contact HIAL and LEDeG Leh. Apply for LAHDC rural development fund.";

  return [
    {
      ord: "01",
      timing: "Next 24 Hours",
      accent: "#e74c3c",
      action: s1Action,
      contact: s1Contact,
    },
    {
      ord: "02",
      timing: "This Week",
      accent: "#ffa600",
      action: s2Action,
      contact: "Gram Panchayat Office / Block Development Office",
    },
    {
      ord: "03",
      timing: "This Month",
      accent: "#2bb6b7",
      action: s3Action,
      contact: "Zilla Parishad / NABARD Regional Office / Lead NGO",
    },
    {
      ord: "04",
      timing: "This Quarter",
      accent: "#2161c2",
      action: `Establish a Village Climate Resilience Working Group — 5–8 members including the SHG president, ASHA, Ward Member, and a farmer leader. This becomes the standing node for all ${hazardLabel} routing.`,
      contact: "GP Secretary + Block Mission Manager",
    },
  ];
}
