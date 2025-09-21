// src/data/works.ts
export type Contribution = {
  title: string;
  description: string;
};

export type Work = {
  slug: string; // used for /work/[slug]
  title: string;
  scope: string;
  cover: string;
  year: number;
  tags: string[];
  description: string;
  role: string[];
  company: string;
  period: string;
  contributions?: Contribution[];
  
  gallery?: string[];
  linkExternal?: string;
  gitHubLink?: string;
  cloudLink?: string;
};

export const WORKS: Work[] = [
  {
    slug: "asset-management-website",
    title: "Asset Management Website",
    cover: "/works/asset-management-website.webp",
    company: "IDEMIA",
    scope: "Web App",
    year: 2025,
    period: "Feb - Present",
    tags: ["Snipe-IT", "Laravel", "Livewire", "PHP", "HTML", "JavaScript", "JQuery", "Bootstrap", "MySQL", "MinIO", "NGINX", "Docker", "Harbor", "Jenkins", "GitLab", "MkDocs", "Marp"],
    role: ["Software Engineer", "Fullstack Developer", "Devops & Automation Engineer"],
    description: "This project is the core assignment of my year-long internship at IDEMIA, where I continued and enhanced the development of an internal Asset Management web application. The system is used company-wide to track inventory, monitor item availability, manage stock movements, maintain audit trails, and support operational workflows. Built on top of the open-source Snipe-IT platform, the project required extensive customization to meet specific requirements from stakeholders and product owners, delivering features and workflows uniquely tailored to IDEMIA’s operational needs.",
    contributions: [ 
      { 
        title: "Software Engineering",
        description: "As part of an Agile Scrum team, I contributed to the full development lifecycle of the project—from refining requirements to implementing features and deploying releases. I worked on code development, handled branch management using <strong>GitLab</strong> + <strong>GitFlow</strong>, documented technical guidelines using <strong>MkDocs</strong>, and created presentation-ready documentation with <strong>Marp</strong>. I also participated as a <strong>speaker</strong> in a dedicated event for Asset Management showcase, where I convey the product upgrades and innovations applied toward whole IDEMIA Jakarta for feedback and improvement."
      },
      { 
        title: "Fullstack Developing",
        description: "I continued the improvement of IDEMIA’s customized <strong>Snipe-IT</strong> system by manually upgrading the core platform from <strong>v6.0.7</strong> to <strong>v8.1.2</strong>, resolving compatibility gaps along the way. My responsibilities included fixing bugs, implementing and refining new features, ensuring forward-compatible code, and integrating external services such as <strong>LDAP</strong> for authentication and <strong>MinIO</strong> for object storage. To maintain code quality and ensure its free of bugs, I also implemented <strong>PHPUnit</strong> test suites for reliable regression testing."
      },
      { 
        title: "Devops & Automation Engineering",
        description: "I applied a deployment pipeline by building and managing <strong>Docker</strong> and <strong>Docker Compose</strong> environments, creating production-ready images for <strong>NGINX</strong> (Webserver and Reverse Proxy), <strong>MinIO</strong> (S3 Object Storage) and <strong>Laravel</strong> (PHP FPM). I utilized <strong>Harbor</strong> as the private registry for image versioning and reuse. To eliminate manual deployment steps, I developed a <strong>Jenkins</strong> continuous deployment pipeline that automates building, testing, versioning, pushing images, and deploying updates directly to both staging and production servers via <strong>SSH</strong>, which improves deployment reliability and developer efficiency."
      },
    ],
    gallery: ["/works/gallery/asset-management/intro-to-smartops.png", "/works/gallery/asset-management/farhan-pra.gif"],
  },
  {
    slug: "gleam-wheels-web-app",
    title: "Gleam Wheels Web App",
    cover: "/works/gleam-wheels-web-app.webp",
    scope: "Web App",
    year: 2024,
    period: "Nov - Dec",
    tags: ["Laravel", "PHP", "HTML", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    role: ["Team lead", "Fullstack Developer"],
    description: "This project was developed for my Entrepreneurship lecture, where my team created Gleam Wheels, a web application designed to simplify daily vehicle-cleaning needs. The platform enables users to search and filter nearby car washes, check queues, make bookings, and access essential service information, all within a streamlined and user-friendly interface.",
    contributions: [ 
      { 
        title: "Team Leading",
        description: "I coordinated the team throughout the project, from concept development to prototype delivery. This included benchmarking competitors, preparing the pitch deck, managing audience engagement activities, and guiding the team through iterative improvements to increase product value."
      },
      { 
        title: "Fullstack Developing",
        description: "I implemented the core functionality of the web app using <strong>HTML</strong> with <strong>React.js</strong> (<strong>TypeScript</strong>) & <strong>TailwindCSS</strong> library for the front-end and <strong>Laravel</strong> (<strong>PHP</strong>) for the back-end. I developed both the user interface and the business logic layer for booking core feature, then integrating them with a <strong>MySQL</strong> database."
      },
    ],
    company: "BINUS University Project",
    gitHubLink: "https://github.com/iryadifarhan/gleam_wheels",
  },
  {
    slug: "donasi-sampah-rest-api",
    title: "Garbage Donation REST API",
    cover: "/works/donasi-sampah-rest-api.webp",
    scope: "Backend REST API and Database",
    year: 2024,
    company: "Personal Project",
    period: "Aug - Sep",
    tags: ["Kotlin", "Spring Boot", "Android Studio", "PostgreSQL", "Docker"],
    role: ["Back-end Developer"],
    description: "This project was created as a personal exploration into backend development and RESTful API design. I built a functional backend system for 'Donasi Sampah', a platform that allows users to donate recyclable waste in exchange for promos or vouchers. The system handles user data, donation records, reward redemption, and provides a scalable service architecture suitable for integration with a mobile app or web client.",
    contributions: [ 
      { 
        title: "Back-end Developing",
        description: "I developed the RESTful API using <strong>Kotlin</strong> and <strong>Spring Boot</strong>, implementing endpoints for user login, garbage donation processing, and voucher retrieving. I also designed and created the <strong>PostgreSQL</strong> database schema and tables used by the system. Additionally, packaged it into <code>.jar</code> file and build with <strong>Docker</strong> for a runnable container image."
      } 
    ],
    gitHubLink: "https://github.com/iryadifarhan/Proyek-Donasi-Sampah",
    cloudLink: "https://binusianorg-my.sharepoint.com/personal/farhan_iryadi_binus_ac_id/_layouts/15/guestaccess.aspx?share=EhE7OkI34TdIkTCcOvHGCUUB9A5Ob-xlK16BKVNpJhvztQ&e=SNDXAm",
  },
  {
    slug: "berakyat-mobile-app",
    title: "Be:Rakyat Mobile App",
    cover: "/works/berakyat-mobile-app.webp",
    scope: "Front-end Mobile App UI",
    year: 2024,
    company: "BINUS University Project",
    period: "Jun - Jul",
    tags: ["Kotlin", "XML", "Android Studio", "PostgreSQL", "Figma"],
    gallery: ["/works/gallery/berakyat/image-1.jpg", "/works/gallery/berakyat/image-2.jpg", "/works/gallery/berakyat/image-3.jpg", "/works/gallery/berakyat/image-4.jpg"],
    description: "This project was developed for my Software Engineering lecture, where my team built Be:Rakyat, a mobile application designed to support local farmers through a multi-functional platform. The app streamlines their daily workflow by providing e-commerce features for purchasing farming supplies and offering practical tools to assist with their day-to-day activities. The project is executed with software engineering principles from agile manifesto, system design to implementation.",
    contributions: [
      {
        title: "UI/UX Designing",
        description: "I contributed layout ideas, interaction flows through <strong>Figma Prototype</strong>, and functional recommendations to ensure each page aligned with user needs and the app’s intended features."
      },
      {
        title: "Front-end Mobile App Developing",
        description: "I implemented the final interface using <strong>Kotlin</strong> and <strong>XML</strong> in <strong>Android Studio</strong>, translating the UI/UX team’s prototype into a functioning app. My tasks included building <strong>mobile application</strong> and preparing the <strong>APK</strong> for distribution."
      },
      {
        title: "Database Designing",
        description: "I designed the database architecture by creating the <strong>Entity Relationship Diagram (ERD)</strong> and <strong>Data Flow Diagram (DFD)</strong>. I then implemented the database structure in <strong>PostgreSQL</strong>, producing the SQL migration dump used to support app data operations."
      }
    ],
    role: ["Front-end Developer", "UI/UX Desginer", "Database Designer"],
    gitHubLink: "https://github.com/FChang88/Be-Rakyat",
    cloudLink: "https://binusianorg-my.sharepoint.com/personal/farhan_iryadi_binus_ac_id/_layouts/15/guestaccess.aspx?share=Ejehxih6QDFKmmYDzKv5hUUBU-8GI8ZvazPk4I6nlf_ibQ&e=ME0jCs",
  },
  {
    slug: "binus-bekasi-booking-web",
    title: "BINUS @Bekasi Booking Facility Web",
    cover: "/works/binus-bekasi-booking-web.webp",
    scope: "Front-end Web UI",
    year: 2024,
    company: "BINUS University Project",
    period: "May - Jun",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    gallery: ["/works/gallery/binus-bekasi-booking/image-1.jpeg", "/works/gallery/binus-bekasi-booking/image-2.jpeg", "/works/gallery/binus-bekasi-booking/image-3.jpeg", "/works/gallery/binus-bekasi-booking/image-4.jpeg"],
    description: "This project was developed for my Human–Computer Interaction (HCI) lecture class, where my team designed a booking platform for BINUS @Bekasi campus facilities, enabling students and staff to reserve available rooms and spaces more efficiently. The project involved applying user-centered design principles to create an intuitive, accessible, and visually coherent booking experience.",
    contributions: [
      {
        title: "Team Leading",
        description: "I initiated the project concept and led the team throughout the development cycle. My role involved coordinating tasks, gathering respondent and expert feedback, <strong>ensuring all deliverables aligned with project goals</strong>."
      },
      {
        title: "UI/UX Designing",
        description: "I designed both the <strong>low-fidelity</strong> and <strong>high-fidelity</strong> prototypes using <strong>Figma</strong>, refining layout structure, color schemes, and system identity based on the design convention of <strong>8 Golden Rules of Interface Design</strong>."
      },
      {
        title: "Front-end Web Developing",
        description: "I contributed to implementing the final interface using vanilla <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. My work included building key features such as the facility carousel, a dynamic reservation form, and a custom date-and-time picker component."
      }
    ],
    role: ["Team Lead", "UI/UX Desginer", "Front-end Developer"],
    linkExternal: "https://iryadifarhan.github.io/Project_AOL_HCI/homePage/homepage.html",
    gitHubLink: "https://github.com/iryadifarhan/Project_AOL_HCI",
    cloudLink: "https://binusianorg-my.sharepoint.com/personal/farhan_iryadi_binus_ac_id/_layouts/15/guestaccess.aspx?share=EsTduyZXir5CqtTEY0G-7oUBtGJX3_bKCm-b-egbybesFQ&e=SbIiTb",
  },
  {
    slug: "vkellogg's-web",
    title: "Vkellogg's Web",
    cover: "/works/vkelloggs-web.webp",
    scope: "Front-end Web UI",
    year: 2024,
    company: "BINUS University Project",
    period: "May - Jun",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    gallery: ["/works/gallery/vkelloggs/image-1.jpeg", "/works/gallery/vkelloggs/image-2.jpeg", "/works/gallery/vkelloggs/image-3.jpeg", "/works/gallery/vkelloggs/image-4.jpeg"],
    description: "This project was created for my Human–Computer Interaction (HCI) lab lecture, where I redesigned the digital presence of a fictional food brand, “Vkellogg’s,” inspired by Kellogg’s. The goal was to build a user-centered interface that clearly presents the company’s values, product variety, brand history, career information, and a functional contact form. The redesign focuses on clarity, visual hierarchy, and intuitive navigation to help users easily explore the brand and its offerings.",
    contributions: [
      {
        title: "UI/UX Designing",
        description:
          "I crafted the full interface in <strong>Figma</strong> using reusable components, clear layout structure, and an interactive prototype to validate user flow and visual consistency.",
      },
      {
        title: "Front-end Web Developing",
        description:
          "I implemented the final design using vanilla <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, ensuring responsive behavior and smooth interactions, then deployed the site through GitHub Pages.",
      },
    ],
    role: ["UI/UX Desginer", "Front-end Developer"],
    linkExternal: "https://iryadifarhan.github.io/HCI_Project_Vkellog/",
    gitHubLink: "https://github.com/iryadifarhan/HCI_Project_Vkellog",
    cloudLink: "https://binusianorg-my.sharepoint.com/personal/farhan_iryadi_binus_ac_id/_layouts/15/guestaccess.aspx?share=EoHTEloh2ZNJqXMnJ2LtfeUBg-pHm-SaJ38xCiLHvJmvbA&e=woharD",
  },
];
