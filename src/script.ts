const INCLUDE_PHONE = true;

type Query = HTMLElement | undefined | null;

const CODING_LANGUAGES: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "CSS3",
  "HTML5",
  "SQL",
];

const FRONTEND: string[] = ["React", "React Native", "Electron", "Next.js"];

const BACKEND: string[] = [
  "Express",
  "GraphQL",
  "Node",
  "GCP",
  "AWS",
  "Mongo",
  "PostgreSQL",
  "Docker",
];

const DESIGN: string[] = ["Figma"];

const SPOKEN: string[] = ["English", "Spanish"];

type Job = {
  title: string;
  company: string;
  location: string;
  startDate: `${number}/${number}`;
  endDate: `${number}/${number}`;
  responsibilities: string[];
};

const JOBS: Job[] = [
  {
    title: "Senior Software Engineer",
    company: "Switchboard",
    location: "Remote, USA",
    startDate: "7/2022",
    endDate: "7/2024",
    responsibilities: [
      "Architected and implemented a recording creation engine to produce interactive video recordings of meetings and asynchronous work, with near-instantaneous cloud streaming.",
      "Developed a high-performance collaborative PDF app with shared viewing and commenting, achieving a 95% performance improvement over its predecessor.",
      "Collaborated with engineers to implement usage tiers, encouraging membership upgrades.",
      "Organized two virtual team outings for coworkers.",
    ],
  },
  {
    title: "Senior Software Engineering Consultant & Tech Lead",
    company: "DEPT",
    location: "Remote, USA",
    startDate: "12/2021",
    endDate: "7/2022",
    responsibilities: [
      "Acted as technical lead on a greenfield project to explore a new market and new technologies.",
      "Launched 91 member security collective focused on company-wide security.",
    ],
  },
  {
    title: "Founder",
    company: "Painless Prototyping",
    location: "Boston, MA",
    startDate: "8/2020",
    endDate: "10/2021",
    responsibilities: [
      "Created practical, affordable, and approachable hardware and software kits for learning about engineering topics.",
      "Ran successful Kickstarter campaign for BYO Keyboard Kit with $31,828 raised across 510 backers.",
    ],
  },
  {
    title: "Lead Full Stack Software Engineer",
    company: "Prenda",
    location: "Remote, USA",
    startDate: "2/2021",
    endDate: "9/2021",
    responsibilities: [
      "Led a team of 10 engineers to rewrite the student attendance tool to improve company profitability.",
      "Brought structure to engineering team of 25 by establishing biweekly all hands and learning meetings.",
      "Managed one direct report, enhancing their coding and soft skills and helping define their career goals.",
    ],
  },
  {
    title: "Senior Full Stack Software Engineer",
    company: "Pluralsight",
    location: "Boston, MA",
    startDate: "6/2018",
    endDate: "2/2021",
    responsibilities: [
      "Brought critical path search engine, built with React, TypeScript, Express, Elasticsearch, and Python, from idea to general release which serves over 1.6 million searches a month.",
      "Improved team health by running quarterly health surveys and organizing team building activities.",
      "Performed user research and data analysis, and prototyped over 10 experiences to improve the product in the areas of search, browse, spell check, content, and technical certifications.",
      "Created and presented over 15 presentations on topics including prototyping outside of the product and communication skills to groups of between 10 and 200 people.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Contract & Freelance",
    location: "Remote, USA",
    startDate: "8/2015",
    endDate: "3/2018",
    responsibilities: [
      "Built 14 frontend and backend solutions for clients including non-profits, scientists, and doctors.",
    ],
  },
  {
    title: "Environmental Health Specialist",
    company: "Peace Corps",
    location: "Panama",
    startDate: "6/2013",
    endDate: "7/2015",
    responsibilities: [],
  },
];

type Education = {
  degree: string;
  institution: string;
  location: string;
  endDate: `${number}/${number}`;
};

const EDUCATION: Education[] = [
  {
    degree: "B.S. in Mechanical Engineering",
    institution: "Rutgers University",
    location: "New Brunswick, NJ",
    endDate: "6/2013",
  },
];

type PersonalExploration = {
  title: string;
  description: string;
};

const PERSONAL_EXPLORATIONS: PersonalExploration[] = [
  {
    title: "Photography Portfolio",
    description:
      "Created with React, TypeScript, Framer Motion, Zustand, GCP, Adobe Lightroom.",
  },
  {
    title: "Ideas Down",
    description:
      "iPhone app for quickly recording ideas. Created with Figma, React Native, TypeScript.",
  },
  {
    title: "Todo Today",
    description:
      "Todo list desktop app for the easily distracted. Created with React, Electron, TypeScript.",
  },
];

const formatLeftColumn = (query: Query, list: string[]) => {
  if (!query) {
    throw new Error("formatLeftColumn Query is null");
  }
  query.innerHTML += list.map((item) => `<li>${item}</li>`).join("");
};

const formatJob = (job: Job) => {
  const headerContent = `<div class="job-header"><div><span class="job-title">${job.title}</span> | <span class="job-company">${job.company}</span></div><div><span class="job-location">${job.location}</span> | <span class="job-date">${job.startDate} - ${job.endDate}</span></div></div>`;
  const bodyContent = `<div class="job-body"><ul>${job.responsibilities
    .map((responsibility) => `<li>${responsibility}</li>`)
    .join("")}</ul></div>`;
  return `<div class="job-container">${headerContent}${
    job.responsibilities.length > 0 ? bodyContent : ""
  }</div>`;
};

const formatJobs = (query: Query, jobs: Job[]) => {
  if (!query) {
    throw new Error("formatJobs Query is null");
  }
  query.innerHTML += jobs.map(formatJob).join("");
};

const formatPersonalExploration = (exploration: PersonalExploration) => {
  return `<div class="side-project-container"><div class="side-project-header"><p><span class="side-project-title">${exploration.title}</span> | <span class="side-project-description">${exploration.description}</span></p></div></div>`;
};

const formatPersonalExplorations = (
  query: Query,
  personalExplorations: PersonalExploration[]
) => {
  if (!query) {
    throw new Error("formatPersonalExplorations Query is null");
  }
  query.innerHTML += personalExplorations
    .map(formatPersonalExploration)
    .join("");
};

const formatEducation = (education: Education) => {
  return `<div class="education-container"><div class="education-header"><div class="education-title">${education.degree}</div><div>${education.institution} | ${education.location} | ${education.endDate}</div>    </div></div>`;
};

const formatEducations = (query: Query, educations: Education[]) => {
  if (!query) {
    throw new Error("formatEducations Query is null");
  }
  query.innerHTML += educations.map(formatEducation).join("");
};

const formatContactInfo = (query: Query) => {
  if (!query) {
    throw new Error("formatContactInfo Query is null");
  }
  let contactInfoContent = [
    { label: "Email", value: "hello@me.com" },
  ];

  if (INCLUDE_PHONE) {
    contactInfoContent.push({ label: "Phone", value: "123-456-7890" });
  }

  contactInfoContent.push({
    label: "GitHub",
    value: "github.com/travisbumgarner",
  });
  contactInfoContent.push({ label: "Website", value: "travisbumgarner.dev" });

  query.innerHTML = contactInfoContent
    .map(
      (contactInfo) =>
        `<p><strong>${contactInfo.label}</strong> ${contactInfo.value}</p>`
    )
    .join("");
};

const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

const appendDocumentTitleHeader = () => {
  const date = getCurrentDate();
  document.title = `Travis Bumgarner Resume - ${date} ${
    INCLUDE_PHONE ? "- P" : "- NP"
  }`;
};

(() => {
  formatLeftColumn(
    document.getElementById("languages")?.querySelector("ul"),
    CODING_LANGUAGES
  );
  formatLeftColumn(
    document.getElementById("frontend")?.querySelector("ul"),
    FRONTEND
  );
  formatLeftColumn(
    document.getElementById("backend")?.querySelector("ul"),
    BACKEND
  );
  formatLeftColumn(
    document.getElementById("design")?.querySelector("ul"),
    DESIGN
  );
  formatLeftColumn(
    document.getElementById("spoken")?.querySelector("ul"),
    SPOKEN
  );
  formatJobs(document.getElementById("jobs")?.querySelector("ul"), JOBS);
  formatEducations(
    document.getElementById("education")?.querySelector("ul"),
    EDUCATION
  );
  formatPersonalExplorations(
    document.getElementById("personal-explorations")?.querySelector("ul"),
    PERSONAL_EXPLORATIONS
  );
  formatContactInfo(document.getElementById("contact-info"));
  appendDocumentTitleHeader();
})();
