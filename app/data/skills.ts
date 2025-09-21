// src/data/skills.ts

export type Category = "languages" | "frameworks" | "devops" | "";

export type Skill = {
  name: string;
  src: string;                 // path under /public
  cat: Exclude<Category, "all">;
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "C",        src: "/tech/c.svg",        cat: "languages" },
  { name: "HTML",      src: "/tech/html5.svg",      cat: "languages" },
  { name: "CSS",       src: "/tech/css3.svg",       cat: "languages" },
  { name: "JavaScript", src: "/tech/javascript.svg", cat: "languages" },
  { name: "PHP",        src: "/tech/php.svg",        cat: "languages" },
  { name: "Java",       src: "/tech/java.svg",       cat: "languages" },
  { name: "Kotlin",     src: "/tech/kotlin.svg",     cat: "languages" },
  { name: "Python",     src: "/tech/python.svg",     cat: "languages" },

  // Frameworks
  { name: "Laravel",    src: "/tech/laravel.svg",    cat: "frameworks" },
  { name: "React",      src: "/tech/react.svg",      cat: "frameworks" },
  { name: "Spring Boot",    src: "/tech/spring.svg",     cat: "frameworks" },
  { name: "Next.js",    src: "/tech/nextjs.svg",     cat: "frameworks" },
  { name: "JQuery",    src: "/tech/jquery.svg",     cat: "frameworks" },
  { name: "Bootstrap",  src: "/tech/bootstrap.svg",  cat: "frameworks" },
  { name: "Tailwind CSS", src: "/tech/tailwind_css.svg", cat: "frameworks" },
  { name: "Selenium",    src: "/tech/selenium.svg",     cat: "frameworks" },

  // DevOps
  { name: "GitLab",     src: "/tech/gitlab.svg",     cat: "devops" },
  { name: "Docker",     src: "/tech/docker.svg",     cat: "devops" },
  { name: "NGINX",      src: "/tech/nginx.svg",      cat: "devops" },
  { name: "MinIO",      src: "/tech/minio.svg",      cat: "devops" },
  { name: "Harbor",      src: "/tech/harbor.webp",      cat: "devops" },
  { name: "Jenkins",      src: "/tech/jenkins.svg",      cat: "devops" },
  
  // Logo
  { name: "GitLab",     src: "/tech/gitlab-logo.svg",     cat: "" },
  { name: "Docker",     src: "/tech/docker-logo.svg",     cat: "" },
  { name: "NGINX",      src: "/tech/nginx-logo.svg",      cat: "" },
  { name: "MinIO",      src: "/tech/minio-logo.svg",      cat: "" },
  { name: "Snipe-IT",   src: "/tech/snipe-it-logo.webp",   cat: "" },
  { name: "MySQL",      src: "/tech/mysql-logo.svg",      cat: "" },
  { name: "PostgreSQL",      src: "/tech/postgresql-logo.svg",      cat: "" },
  { name: "TypeScript",      src: "/tech/typescript.svg",      cat: "" },
  { name: "Harbor",      src: "/tech/harbor-logo.svg",      cat: "" },
  { name: "Jenkins",      src: "/tech/jenkins-logo.svg",      cat: "" },
  { name: "Figma",      src: "/tech/figma-logo.svg",      cat: "" },
  { name: "Livewire",      src: "/tech/livewire-logo.svg",      cat: "" },
  { name: "Android Studio",      src: "/tech/android-studio-logo.svg",      cat: "" },
  { name: "XML",      src: "/tech/xml-logo.svg",      cat: "" },
  { name: "Marp",      src: "/tech/marp.svg",      cat: "" },
  { name: "MkDocs",      src: "/tech/mkdocs.png",      cat: "" },
];

export const TABS: { key: Category; label: string }[] = [
  { key: "languages",  label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "devops",     label: "DevOps" },
];
