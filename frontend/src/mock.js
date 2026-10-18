// Life Choices redesign prototype — all content is MOCK/reference data.
// Sourced/adapted from the public lifechoices.co.za site for demonstration only.
// Placeholder copy is clearly marked where exact content was unavailable.

export const org = {
  name: "Life Choices",
  established: 2005,
  location: "Lansdowne, Cape Town",
  address: "314 Imam Haron Road, Lansdowne, Cape Town, South Africa",
  email: "info@lifechoices.co.za",
  phone: "+27 21 761 4640",
  tagline: "Youth is 37% of South Africa, but 100% of its future",
  intro:
    "Life Choices is an innovative and impactful youth development organisation based in Cape Town. We work in schools, communities and from our Campus in Lansdowne, investing in young people so they can reach their potential.",
  visionLead: "Life Choices is working towards a world where\u2026",
  vision:
    "Every young person feels safe and valued. Every young person is free to thrive.",
  visionSupport:
    "We\u2019re doing this through programmes that ignite the potential of young people by healing, uplifting and empowering lives."
};

export const heroStats = [
  { value: 200000, suffix: "+", label: "Lives impacted since 2005" },
  { value: 20, suffix: "+", label: "Years working on the Cape Flats" },
  { value: 10, suffix: "", label: "Partner high schools" },
  { value: 4, suffix: "", label: "Core interventions" }
];

export const buildingBlocks = [
  {
    key: "family",
    title: "Family Stability",
    color: "#5E7E1C",
    icon: "Home",
    text: "Nurturing home environments where young people feel safe, supported and able to grow."
  },
  {
    key: "health",
    title: "Health & Wellbeing",
    color: "#3C6B1A",
    icon: "HeartPulse",
    text: "Access to youth-friendly health information, counselling and mental wellbeing support."
  },
  {
    key: "leadership",
    title: "Leadership & Life Skills",
    color: "#5E7E1C",
    icon: "Compass",
    text: "Personal leadership, self-awareness and the life skills to take responsibility and dream big."
  },
  {
    key: "education",
    title: "Education & Skills",
    color: "#3C6B1A",
    icon: "GraduationCap",
    text: "Learning support and skills development that open doors to further study and opportunity."
  },
  {
    key: "employment",
    title: "Employment & Work-readiness",
    color: "#5E7E1C",
    icon: "Briefcase",
    text: "Preparing young people for the world of work with market-relevant, practical skills."
  }
];

export const programmes = [
  {
    slug: "family-affairs",
    name: "Family Affairs",
    color: "#5E7E1C",
    block: "Family Stability",
    icon: "Home",
    tag: "Parents & caregivers",
    heroLine:
      "Every young person deserves a safe, nurturing home environment in which to grow.",
    summary:
      "Positive parenting workshops, one-on-one counselling and ongoing support circles that help families thrive.",
    image:
      "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    why:
      "Homes are the centre of our communities. Yet often parents themselves feel overwhelmed, and unable to create nurturing spaces, given the stresses within their community and environment. Family Affairs works with local CBOs and NPOs to offer positive parenting workshops, one-on-one counselling and ongoing support circles, so that parents, and their loved ones, can thrive.",
    endorsement:
      "The programme is endorsed by the Department of Social Development and the workshops are DSD-approved as part of their family-strengthening initiative.",
    what: [
      "Life Choices runs a series of seven workshops with parents and caregivers. Topics include personal development, self-reflection and mindfulness, understanding child behaviour and stages of development, parenting styles, building a child\u2019s self-esteem, communication patterns and active listening, and identifying and managing feelings.",
      "Parents are encouraged to form support groups so they can continue to learn and grow together. They also have access to a registered social worker for one-on-one counselling, with linkages to further support such as social grants, trauma counselling and legal advice."
    ],
    stats: [
      { value: 7, suffix: "", label: "Structured parenting workshops" },
      { value: 1, suffix: "-on-1", label: "Registered social worker support" },
      { value: 100, suffix: "%", label: "DSD-approved curriculum" }
    ]
  },
  {
    slug: "health4life",
    name: "Health4Life",
    color: "#3C6B1A",
    block: "Health & Wellbeing",
    icon: "HeartPulse",
    tag: "Learners in schools",
    heroLine:
      "Every young person deserves great health care and information, and to feel mentally strong.",
    summary:
      "Health information, counselling and psychosocial support delivered in partnership with schools and communities.",
    image:
      "https://images.unsplash.com/photo-1781117244798-d3c52daa57dc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    why:
      "In adolescence, young people begin making their own choices about how they live. Nearly two-thirds of premature deaths and a third of the disease burden in adults are linked to conditions or behaviours that began in youth. Half of all mental health disorders in adulthood start by the age of 14, yet most cases go undetected and untreated. In our unequal society, those closer to the base of the pyramid have the least access to quality youth-friendly health services.",
    endorsement: "",
    what: [
      "Life Choices fills this gap by partnering with schools and communities to provide information, counselling and support. In our partner schools we provide HIV counselling and testing, including screening for TB, STIs and lifestyle risks, so each learner can develop a personalised risk-reduction plan.",
      "Our staff deliver sexual and reproductive health talks as part of the Life Orientation curriculum, run campaigns on topics such as bereavement, anxiety and suicide awareness, and our Wellness team provides one-on-one and group psychosocial support to learners and staff."
    ],
    stats: [
      { value: 8, suffix: " & 9", label: "Grades reached with SRH talks" },
      { value: 100, suffix: "%", label: "Personalised risk-reduction plans" },
      { value: 1, suffix: "-on-1", label: "Psychosocial counselling" }
    ]
  },
  {
    slug: "leaders-quest",
    name: "Leaders\u2019 Quest",
    color: "#5E7E1C",
    block: "Leadership & Life Skills",
    icon: "Compass",
    tag: "High school learners",
    heroLine:
      "Every young person deserves to fulfil their potential in the world.",
    summary:
      "After-school leadership and life-skills training, coaching and experiential learning across Cape Town high schools.",
    image:
      "https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    why:
      "South Africa is crying out for better leadership, in government, in companies, in communities and in homes. Leaders\u2019 Quest aims to grow a new generation of leaders who are attuned to themselves and cognisant of the problems of the world. The focus is on personal leadership, taking responsibility for one\u2019s life and decisions, and dreaming big and planning strong, so that young people are free to thrive.",
    endorsement: "",
    what: [
      "Leaders\u2019 Quest provides aspirant high school learners with personal development tools and life skills so they are ready for the future. Operating in 10 high schools in Cape Town, the programme offers after-school leadership training, one-on-one coaching and psychosocial support.",
      "A range of experiential activities help learners flex their leadership muscles and grow into the people they are meant to be. Coaches build close, nurturing relationships, and the groups become supportive environments for personal growth, social awareness and servant-leadership."
    ],
    stats: [
      { value: 10, suffix: "", label: "High schools reached" },
      { value: 272, suffix: "", label: "Grade 11 & 12 learners enrolled" },
      { value: 158, suffix: "", label: "One-on-one coaching sessions" }
    ]
  },
  {
    slug: "life-choices-academy",
    name: "Life Choices Academy",
    color: "#5E7E1C",
    block: "Employment & Work-readiness",
    icon: "Briefcase",
    tag: "Young adults",
    heroLine:
      "Every young person deserves a real pathway into meaningful work.",
    summary:
      "Skills development and work-readiness training that helps young people transition into employment and opportunity.",
    image:
      "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    why:
      "Youth unemployment is one of South Africa\u2019s most urgent challenges. Life Choices Academy helps young people bridge the gap between school and the world of work by building market-relevant skills, confidence and professional habits. [Placeholder copy, adapted from the public Life Choices Academy overview for this prototype.]",
    endorsement: "",
    what: [
      "The Academy equips young adults with practical, in-demand skills and work-readiness training, from digital and communication skills to professional conduct and interview preparation. [Placeholder copy for prototype.]",
      "Through partnerships with employers and further learning pathways, participants are supported to move into internships, further study or employment. [Placeholder copy for prototype.]"
    ],
    stats: [
      { value: 1000, suffix: "+", label: "Young people supported" },
      { value: 12, suffix: "", label: "Month learning journey" },
      { value: 100, suffix: "%", label: "Work-readiness focused" }
    ]
  }
];

export const impactStats = [
  { value: 200000, suffix: "+", label: "People reached since 2005" },
  { value: 20, suffix: "+", label: "Years of continuous impact" },
  { value: 10, suffix: "", label: "Partner high schools" },
  { value: 4, suffix: "", label: "Interlocking interventions" }
];

export const stories = [
  {
    slug: "nurturing-the-leader-within",
    title: "Nurturing the Leader Within",
    programme: "Leaders\u2019 Quest",
    excerpt:
      "How one learner discovered the confidence to speak, lead and imagine a bigger future. [Placeholder excerpt for prototype.]",
    image:
      "https://images.unsplash.com/photo-1659093728055-45f8275166d9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    date: "May 2025"
  },
  {
    slug: "rebuilding-relationships",
    title: "Rebuilding Relationships",
    programme: "Family Affairs",
    excerpt:
      "A caregiver rebuilds trust at home after joining a positive parenting support circle. [Placeholder excerpt for prototype.]",
    image:
      "https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    date: "April 2025"
  },
  {
    slug: "a-beacon-of-love",
    title: "A Beacon of Love",
    programme: "Family Affairs",
    excerpt:
      "Finding strength and community through counselling and connection. [Placeholder excerpt for prototype.]",
    image:
      "https://images.unsplash.com/photo-1764265148991-0335c05ca841?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    date: "March 2025"
  },
  {
    slug: "taking-the-lead",
    title: "Taking the Lead",
    programme: "Leaders\u2019 Quest",
    excerpt:
      "From the back of the classroom to the front of the stage, a story of servant leadership. [Placeholder excerpt for prototype.]",
    image:
      "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    date: "February 2025"
  },
  {
    slug: "heart-work",
    title: "Heart Work",
    programme: "Health4Life",
    excerpt:
      "Meeting young people where they are with youth-friendly wellbeing support. [Placeholder excerpt for prototype.]",
    image:
      "https://images.unsplash.com/photo-1620464225966-8482645f2db1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    date: "January 2025"
  },
  {
    slug: "the-dream-team",
    title: "The Dream Team",
    programme: "Leaders\u2019 Quest",
    excerpt:
      "How a group of learners turned an idea into a community project. [Placeholder excerpt for prototype.]",
    image:
      "https://images.unsplash.com/photo-1782136660529-1f12b16e5d76?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    date: "December 2024"
  }
];

export const team = [
  {
    name: "Ryan Geel",
    role: "Campus Director",
    photo: "https://lifechoices.co.za/wp-content/uploads/elementor/thumbs/Ryan-Geel-rd8l5wfvbilly9wmtryilw7k3r2x58f77tfvibqvwm.png",
    bio: "Ryan is a communicator and he approaches everything he touches in a thorough and passionate way. He is dependable and has sound judgement with a practical and logical approach to all of his endeavors in life. Ryan has a natural shining outlook to everything in life."
  },
  { name: "Placeholder Name", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1659093728055-45f8275166d9?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { name: "Placeholder Name", role: "Head of Programmes", image: "https://images.unsplash.com/photo-1764265148991-0335c05ca841?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { name: "Placeholder Name", role: "Wellness Lead", image: "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { name: "Placeholder Name", role: "Partnerships Director", image: "https://images.unsplash.com/photo-1620464225966-8482645f2db1?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" }
];

// Partner names below are placeholders for the prototype, except the DSD endorsement noted on Family Affairs.
export const partners = [
  "Department of Social Development",
  "Community Partner",
  "Corporate Supporter",
  "Philanthropic Foundation",
  "Education Partner",
  "Health Partner"
];

// Sustainability initiatives (from lifechoices.co.za/sustainability) \u2014 social enterprises
// that support the organisation's financial sustainability. Descriptions summarised for prototype.
export const sustainabilityInitiatives = [
  {
    name: "Solar Youth",
    icon: "Sun",
    color: "#5E7E1C",
    href: "/solar-youth",
    desc: "Green-skills training preparing young people for careers in the solar and renewable-energy sector."
  },
  {
    name: "LC Studio",
    icon: "Video",
    color: "#3C6B1A",
    href: "/lc-studio",
    desc: "A creative media and production enterprise that builds skills and generates income for our youth work."
  },
  {
    name: "YouthCode",
    icon: "Code2",
    color: "#5E7E1C",
    href: "/youthcode",
    desc: "Coding and digital-literacy training that opens doors to the technology economy."
  },
  {
    name: "YouthForce",
    icon: "Rocket",
    color: "#5E7E1C",
    href: "/youthforce",
    desc: "Work-readiness and mentorship connecting young people to real employment opportunities."
  },
  {
    name: "Nurturer",
    icon: "Sprout",
    color: "#5E7E1C",
    href: "https://nurturer.co.za/",
    desc: "An initiative focused on nurturing and early support, extending our impact into the wider community."
  },
  {
    name: "Campus Rental",
    icon: "Building2",
    color: "#3C6B1A",
    href: "mailto:innocent@lifechoices.co.za",
    desc: "Venue and space rental at our Lansdowne campus, creating a sustainable income stream for our programmes."
  }
];

// Present donors (real names from lifechoices.co.za/donors) \u2014 shown as placeholder logo tiles.
export const donorsPresent = [
  "Don Bosco Mondo",
  "Investec",
  "Maria Marina",
  "Knorr-Bremse",
  "Don Bosco Jugendhilfe",
  "Rolf Stephan Nussbaum Foundation",
  "Cover2Cover Books",
  "Dr Rau Stiftung",
  "Misereor",
  "Momentum",
  "Argon Asset Management",
  "Department of Social Development",
  "Umckaloabo Stiftung",
  "Van Kesteren Foundation",
  "VIK Stiftung",
  "Futuregrowth",
  "IDC",
  "FW de Klerk Foundation",
  "HCI Foundation",
  "Meltwater",
  "Western Cape Government",
  "Department of Health",
  "PEPFAR",
  "MBA",
  "Walter & Louise Davidson Foundation"
];

export const donorsPrevious = [
  "Naked Insurance",
  "Previous Partner Foundation",
  "Previous Corporate Supporter",
  "Previous Philanthropic Trust",
  "Previous Community Partner",
  "Previous Education Partner"
];


export const nav = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    type: "dropdown",
    items: [
      { label: "Who We Are", to: "/about", desc: "Our story, vision and the communities we serve" },
      { label: "Meet The Team", to: "/team", desc: "The people behind Life Choices" },
      { label: "Meet the Board", to: "/meet-the-board", desc: "Governance and strategic oversight" },
      { label: "Donors", to: "/donors", desc: "The partners who make our work possible" },
      { label: "Annual Reports", to: "/annual-reports", desc: "Transparent yearly impact reporting" },
      { label: "Legal Documents", to: "/legal-documents", desc: "Governance and compliance documents" }
    ]
  },
  {
    label: "Interventions",
    to: "/interventions",
    type: "mega",
    items: [
      ...programmes.map((p) => ({
        label: p.name,
        to: `/interventions/${p.slug}`,
        desc: p.summary,
        color: p.color,
        icon: p.icon,
        block: p.block
      })),
      {
        label: "Safe and Healthy High Schools",
        to: "/safe-and-healthy-high-schools",
        desc: "Whole-school wellbeing, safety and support for learners and staff.",
        color: "#3C6B1A",
        icon: "ShieldCheck",
        block: "Schools"
      }
    ]
  },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Blog", to: "/stories" },
  { label: "Contact", to: "/contact" }
];
