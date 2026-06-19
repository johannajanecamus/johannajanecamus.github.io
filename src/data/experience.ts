interface Experience {
  company: string;
  position: string;
  date: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "JCES PTA & Project Management System",
    position: "Web Developer",
    date: "2024",
    responsibilities: [
      "Designed and developed a web-based management system that streamlines parent-student records, PTA project tracking, and financial transactions for school administrators and officials.",
      "Implemented secure role-based authentication granting tailored access to admins, parents, and school staff — ensuring data integrity and accountability across all operations.",
      "Collaborated with the team to deliver a full-stack solution aligned with the school's administrative workflows and reporting needs.",
    ],
  },
  {
    company: "Freelance Projects",
    position: "Web Developer",
    date: "2023 - Present",
    responsibilities: [
      "Built multiple client websites including business landing pages, resort websites, car rental systems, and pharmaceutical pages using React and Tailwind CSS.",
      "Developed responsive, accessible designs with modern JavaScript frameworks tailored to each client's branding and business goals.",
      "Managed end-to-end delivery from wireframing and UI/UX design to deployment on platforms like Netlify.",
    ],
  },
];

export default experiences;
