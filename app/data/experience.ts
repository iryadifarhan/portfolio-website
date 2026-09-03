export type Experiences = {
    period: string;
    still_working?: boolean;
    image: string;
    org: string;
    title: string;
    detail?: string;
};

export const EXPERIENCE : Experiences[] = [
  {
    period: "Apr 2026 - Sep 2026",
    still_working: true,
    image: "/about/allobank.webp",
    org: "Allo Bank",
    title: "Product Life Cycle Intern",
    detail:
      "Support product development from launch preparation to post-release evaluation. Involved in Go-To-Market research, UAT test case development based on PRDs, and performance monitoring through data analysis using Metabase.",
  },
  {
    period: "Feb 2025 - Feb 2026",
    still_working: false,
    image: "/about/idemia.webp",
    org: "IDEMIA",
    title: "Software Engineer Intern",
    detail:
      "Refined and refactored a legacy internal IT Asset Management System (built on OSS Snipe-IT), while implementing backlog features from ideation to production. Delivered stakeholder-driven enhancements and incorporated DevOps practices for deployment automation and operational efficiency.",
  },
];

export const EDUCATION: Experiences[] = [
  {
    period: "Sep 2022 – Aug 2026",
    image: "/about/binus.svg",
    org: "BINUS University",
    title: "Bachelor's Degree of Software Engineering",
    detail:
      "Core Computer Science & Software Engineering fundamentals. Building a base knowledge in systems design, code structuring, product development, project management, automation testing, and its intersection with science (e.g. Physics, Biology).",
  },
  {
    period: "Jul 2019 – Jun 2022",
    image: "/about/al-azhar.webp",
    org: "Al Azhar 4 Islamic Senior High School",
    title: "Natural Science Major",
    detail:
      "Focused on science, mathematics, and programming (Pascal & Scratch) subjects. Laying the foundation groundwork for analytical thinking, problem-solving, and computational thinking skills.",
  },
];
