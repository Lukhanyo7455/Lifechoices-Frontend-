// Data-driven content for standard & initiative pages, derived from the Life Choices
// WordPress/Elementor export (manifest.json). Titles, slugs and IA are preserved from the
// export; body copy is concise placeholder text (marked) where the Elementor body was not
// included, so real content can be dropped in later. No organisational claims are invented.

export const contentMap = {
  "meet-the-board": {
    template: "standard",
    eyebrow: "About",
    title: "Meet the Board",
    subtitle:
      "Our board provides governance, strategic direction and oversight, ensuring Life Choices remains accountable to the young people and communities we serve.",
    sections: [
      {
        type: "people",
        heading: "Board of Directors",
        note: "Board members shown are placeholders for this prototype.",
        people: [
          { name: "Placeholder Name", role: "Chairperson" },
          { name: "Placeholder Name", role: "Deputy Chairperson" },
          { name: "Placeholder Name", role: "Treasurer" },
          { name: "Placeholder Name", role: "Board Member" },
          { name: "Placeholder Name", role: "Board Member" },
          { name: "Placeholder Name", role: "Board Member" }
        ]
      },
      {
        type: "cta",
        heading: "Learn more about our governance",
        text: "View our annual reports and legal documents for full transparency on how Life Choices is run.",
        primary: { label: "Annual Reports", to: "/annual-reports" },
        secondary: { label: "Legal Documents", to: "/legal-documents" }
      }
    ]
  },

  "annual-reports": {
    template: "standard",
    eyebrow: "About",
    title: "Annual Reports",
    subtitle:
      "We report on our work openly, every year. Explore our organisation-wide and programme annual reports.",
    sections: [
      {
        type: "downloads",
        heading: "Organisation Reports",
        note: "Report links reference publicly available Life Choices reports for this prototype.",
        items: [
          { label: "Annual Report", years: ["2025", "2024", "2023", "2022", "2021"] }
        ]
      },
      {
        type: "downloads",
        heading: "Programme Reports",
        items: [
          { label: "Family Affairs", years: ["2025", "2024", "2023"] },
          { label: "Health4Life", years: ["2025", "2024", "2023"] },
          { label: "Leaders\u2019 Quest", years: ["2025", "2024", "2023"] }
        ]
      }
    ]
  },

  "legal-documents": {
    template: "standard",
    eyebrow: "About",
    title: "Legal Documents",
    subtitle:
      "Life Choices is a registered non-profit and public benefit organisation. Our key governance and compliance documents are available below.",
    sections: [
      {
        type: "documents",
        heading: "Documents",
        note: "Document links are placeholders for this prototype.",
        items: [
          { label: "PAIA Manual", desc: "Promotion of Access to Information Act manual" },
          { label: "NPO Registration", desc: "Non-Profit Organisation registration certificate" },
          { label: "PBO Certificate", desc: "Public Benefit Organisation tax certificate" },
          { label: "B-BBEE Certificate", desc: "Broad-Based Black Economic Empowerment status" },
          { label: "Constitution", desc: "Founding constitution of Life Choices" }
        ]
      }
    ]
  },

  "my-difference": {
    template: "standard",
    eyebrow: "Support Us",
    title: "My Difference",
    subtitle:
      "Make your giving personal. My Difference lets you choose how your contribution supports young people across our programmes.",
    sections: [
      {
        type: "text",
        heading: "Your gift, your impact",
        body: [
          "My Difference is a way to give that puts you in control \u2014 directing your support to the programme or cause closest to your heart. [Placeholder copy for prototype.]",
          "Every contribution, once-off or monthly, helps us keep our programmes free, local and rooted in care."
        ]
      },
      {
        type: "cta",
        heading: "Ready to make your difference?",
        text: "Set up a once-off or monthly gift in just a few steps.",
        primary: { label: "Donate now", to: "/get-involved" },
        secondary: { label: "Talk to us", to: "/contact" }
      }
    ]
  },

  "leave-legacy": {
    template: "standard",
    eyebrow: "Support Us",
    title: "Leave a Legacy",
    subtitle:
      "A gift in your will is a profound way to invest in future generations of young people on the Cape Flats.",
    sections: [
      {
        type: "text",
        heading: "A lasting investment in youth",
        body: [
          "By remembering Life Choices in your will, you help ensure that young people can continue to heal, grow and thrive for years to come. [Placeholder copy for prototype.]",
          "Our team can guide you and your family through the process with sensitivity and care."
        ]
      },
      {
        type: "cta",
        heading: "Start a conversation",
        text: "We would be honoured to discuss how a legacy gift can reflect your values.",
        primary: { label: "Contact our team", to: "/contact" }
      }
    ]
  },

  // ---- Initiative template ----
  "safe-and-healthy-high-schools": {
    template: "initiative",
    eyebrow: "Interventions",
    color: "#159AA8",
    icon: "ShieldCheck",
    block: "Schools",
    title: "Safe and Healthy High Schools",
    heroLine:
      "Every learner deserves a school environment where they feel safe, supported and able to thrive.",
    intro:
      "Safe and Healthy High Schools brings our health, wellbeing and leadership work together inside partner schools \u2014 creating environments where young people can learn, grow and flourish. [Summarised for prototype.]",
    what: [
      "Working alongside school communities to strengthen wellbeing, safety and psychosocial support for learners and staff.",
      "Integrating Health4Life and Leaders\u2019 Quest approaches so support is holistic and youth-friendly across the school."
    ],
    stats: [
      { value: 10, suffix: "", label: "Partner high schools" },
      { value: 1, suffix: "-on-1", label: "Psychosocial support" },
      { value: 100, suffix: "%", label: "School-community rooted" }
    ]
  },

  "youthcode": {
    template: "initiative",
    eyebrow: "Initiatives",
    color: "#2E62D8",
    icon: "Code2",
    block: "Digital Skills",
    title: "YouthCode",
    heroLine: "Every young person deserves the digital skills to build their future.",
    intro:
      "YouthCode introduces young people to coding and digital literacy, opening doors to the fast-growing technology economy. [Summarised for prototype.]",
    what: [
      "Hands-on coding and digital-skills training that builds confidence, problem-solving and employability.",
      "Pathways into further learning, internships and the digital workforce."
    ],
    stats: [
      { value: 100, suffix: "%", label: "Practical, project-based" },
      { value: 1, suffix: "", label: "Clear digital pathway" },
      { value: 2005, suffix: "", label: "Rooted since" }
    ]
  },

  "youthforce": {
    template: "initiative",
    eyebrow: "Initiatives",
    color: "#E8A800",
    icon: "Rocket",
    block: "Work-readiness",
    title: "YouthForce",
    heroLine: "Connecting young people to real opportunities and the world of work.",
    intro:
      "YouthForce prepares young people for employment through work-readiness training, mentorship and pathways into meaningful opportunity. [Summarised for prototype.]",
    what: [
      "Work-readiness, professional skills and interview preparation tailored to young job-seekers.",
      "Connections to employers, internships and further opportunity."
    ],
    stats: [
      { value: 100, suffix: "%", label: "Opportunity-focused" },
      { value: 1, suffix: "-on-1", label: "Mentorship support" },
      { value: 4, suffix: "+", label: "Skills pathways" }
    ]
  },

  "solar-youth": {
    template: "initiative",
    eyebrow: "Initiatives",
    color: "#3E9B57",
    icon: "Sun",
    block: "Green Skills",
    title: "Solar Youth",
    heroLine: "Training a new generation for careers in the green energy economy.",
    intro:
      "Solar Youth, in partnership with the Green Solar Academy, trains young people for careers in the growing solar and renewable-energy sector. [Summarised for prototype.]",
    what: [
      "Accredited green-skills training that prepares young people for solar installation and renewable-energy work.",
      "A direct pathway into one of South Africa\u2019s fastest-growing industries."
    ],
    stats: [
      { value: 100, suffix: "%", label: "Green-skills focused" },
      { value: 1, suffix: "", label: "Industry partnership" },
      { value: 4, suffix: "+", label: "Career pathways" }
    ]
  },

  "lc-studio": {
    template: "initiative",
    eyebrow: "Initiatives",
    color: "#159AA8",
    icon: "Video",
    block: "Creative Enterprise",
    title: "LC Studio",
    heroLine: "A creative media enterprise that builds skills and sustains our mission.",
    intro:
      "LC Studio is a creative media and production enterprise that develops young people\u2019s talent while generating income that supports our youth programmes. [Summarised for prototype.]",
    what: [
      "Media, film and content production that builds real creative and technical skills.",
      "A social enterprise model where commercial work helps fund our impact."
    ],
    stats: [
      { value: 100, suffix: "%", label: "Purpose-driven revenue" },
      { value: 1, suffix: "", label: "In-house creative team" },
      { value: 2005, suffix: "", label: "Part of Life Choices since" }
    ]
  }
};

export const getContent = (slug) => contentMap[slug];
