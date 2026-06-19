import dmsSurvey from "@/assets/Projects/dms_survey.png";
import velocityRental from "@/assets/Projects/velocity_rental.png";
import jlmLights from "@/assets/Projects/jlm_lights.png";
import acgPharma from "@/assets/Projects/acg_pharma.png";
import villaRosal from "@/assets/Projects/villa_rosal.png";
import jcesPta from "@/assets/Projects/jces_pta.png";

export interface ProjectProps {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  demoLink?: string;
  ghLink?: string;
  order: number;
  skills?: string[];
  images?: string[];
}

export const projects: ProjectProps[] = [
  {
    imgPath: jcesPta,
    isBlog: false,
    title: "JCES PTA & Project Management System",
    description:
      "Built a web-based system that streamlines parent-student records, PTA project tracking, and financial transactions for school administrators and officials. Features secure role-based authentication granting tailored access to admins, parents, and school staff — ensuring data integrity and accountability across all operations.",
    demoLink: "",
    ghLink: "https://github.com/ItzRenzo/JCES-PTA-and-Project-Management-System",
    order: 1,
    skills: ["Web Development", "System Design", "Authentication", "Database"],
  },
  {
    imgPath: dmsSurvey,
    isBlog: false,
    title: "D-M-S Survey Company Website",
    description:
      "Professional website for Digital Mapping & Surveying LLC providing expert surveying services across Indiana. Features precision surveying services including topographic surveys, boundary surveys, easements, and subdivision plats.",
    demoLink: "https://d-m-s.biz/",
    ghLink: "",
    order: 1,
    skills: ["Web Development", "Business Website", "Client Project"],
  },
  {
    imgPath: velocityRental,
    isBlog: false,
    title: "Velocity Car Rental System",
    description:
      "Premium car rental platform with real-time GPS tracking and 24/7 support. Features live fleet management, transparent availability, and seamless booking system. Drive the extraordinary with hand-picked machines.",
    demoLink: "https://rentalsamples.netlify.app/",
    ghLink: "",
    order: 2,
    skills: ["React", "Booking System", "Web Application"],
  },
  {
    imgPath: villaRosal,
    isBlog: false,
    title: "Villa Rosal Beach Resort Website",
    description:
      "Luxury beach resort website in Samal featuring pristine beaches, stunning pools, and world-class amenities. Experience tropical luxury with Villa Rosal Beach Resort. Created to maximize customer satisfaction and showcase resort services.",
    demoLink: "https://thevillarosal.com/",
    ghLink: "",
    order: 3,
    skills: ["Tourism", "Web Design", "Client Project", "React"],
  },
  {
    imgPath: acgPharma,
    isBlog: false,
    title: "ACG Pharma Landing Page",
    description:
      "FDA-approved pharmaceutical partner delivering quality medicines and medical equipment. Features clean, safe, and compliant design for resellers, clinics, pharmacies, and hospitals. Professional landing page created for bidding purposes.",
    demoLink: "https://acgpharma.netlify.app/",
    ghLink: "",
    order: 4,
    skills: ["Landing Page", "Healthcare", "Business", "React"],
  },
  {
    imgPath: jlmLights,
    isBlog: false,
    title: "JLM Lights & Sounds Business Website",
    description:
      "Premium sound systems, professional stage lighting, and stunning LED walls for weddings, concerts, parties, and corporate events. Light up your event with JLM Lights & Sounds. 500+ events powered with 10+ years experience.",
    demoLink: "https://jlmlights.netlify.app/",
    ghLink: "",
    order: 5,
    skills: ["Business Website", "Portfolio", "Event Services", "React"],
  },
];
