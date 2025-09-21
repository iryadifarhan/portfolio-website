export type Experiences = {
    period: string;
    image: string;
    org: string;
    title: string;
    detail: string;
};

export const EXPERIENCE : Experiences[] = [
  {
    period: "2025 - Present",
    image: "/about/idemia.webp",
    org: "IDEMIA",
    title: "Software Engineer Intern",
    detail:
      "Developing & Shipping internal IT Asset Management tools from development to production phase. Utilizes Laravel and Snipe-IT base open source to respond toward Stakeholder's requirements, with a touch of DevOps for product deployment and storage (Docker, NGINX, MinIO).",
  },
];

export const EDUCATION: Experiences[] = [
  {
    period: "2022 – Present",
    image: "/about/binus.svg",
    org: "BINUS University",
    title: "Bachelor's Degree of Software Engineering",
    detail:
      "Core Computer Science & Software Engineering fundamentals. Building a base knowledge in systems design, code structuring, product development, project management, automation testing, and its intersection with science (e.g. Physics, Biology).",
  },
  {
    period: "2019 – 2022",
    image: "/about/al-azhar.webp",
    org: "Al Azhar 4 Islamic Senior High School",
    title: "Natural Science Major",
    detail:
      "Focused on science, mathematics, and programming (Pascal & Scratch) subjects. Laying the foundation groundwork for analytical thinking, problem-solving, and computational thinking skills.",
  },
];