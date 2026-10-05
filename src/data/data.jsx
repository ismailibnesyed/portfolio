import { FiLayers, FiMonitor, FiServer, FiTerminal } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaPinterestP, FaThreads } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const profile = {
  name: "Ismail Hossain",
  role: "Python & Full Stack Web Developer",
  intro: "I build fast, secure APIs with FastAPI and PostgreSQL, and clean React interfaces on top — from idea to deployment.",
  about: "I'm Ismail Hossain, a Python & Full Stack Web Developer and a B.Sc. student in Electronics and Telecommunication Engineering at CUET. I love building complete products, from a fast FastAPI backend with PostgreSQL and JWT authentication to a clean, responsive React interface. My projects include PowerCare, a deployed load-shedding and outage management system, and GigHive, a freelance marketplace API. My engineering background gives me a problem-solving mindset, and I'm comfortable with C, C++, and MATLAB too. I care about readable code, secure APIs, and products that people actually use. I'm currently exploring AI/ML with NumPy, Pandas, and PyTorch, and I'm looking for opportunities where I can learn, contribute, and grow as a developer.",
  email: "ismailibnesyed@gmail.com",
  phone: "+880 1608 591562",
  whatsapp: "8801608591562",
  photo: "/images/profile.png",
  resumeUrl: "https://drive.google.com/file/d/1Dmo0lAp8sWkIvUSO0NBk3fSWqa87_Y1S/view?usp=drive_link",
};

export const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/ismailibnesyed", icon: FaLinkedinIn, color: "#0a66c2", handle: "ismailibnesyed", external: true },
  { name: "GitHub", url: "https://github.com/ismailibnesyed", icon: FaGithub, color: "#333", external: true },
  { name: "Telegram", url: "https://t.me/ismailibnesyed", icon: FaTelegramPlane, color: "#229ED9", handle: "@ismailibnesyed", external: true },
  { name: "Facebook", url: "https://facebook.com/ismailibnesyed", icon: FaFacebookF, color: "#1877F2", handle: "ismailibnesyed", external: true },
  { name: "X", url: "https://x.com/ismailibnesyed", icon: FaTwitter, color: "#111827", handle: "@ismailibnesyed", external: true },
  { name: "Threads", url: "https://www.threads.com/@ismailibnesyed", icon: FaThreads, color: "#111827", handle: "@ismailibnesyed", external: true },
  { name: "Instagram", url: "https://www.instagram.com/ismailibnesyed/", icon: FaInstagram, color: "#e1306c", handle: "@ismailibnesyed", external: true },
  { name: "Pinterest", url: "https://www.pinterest.com/ismailibnesyed/", icon: FaPinterestP, color: "#e60023", handle: "ismailibnesyed", external: true },
  { name: "WhatsApp", url: "https://wa.me/8801608591562", icon: FaWhatsapp, color: "#16a34a", handle: "+880 1608 591562", external: true },
  { name: "Gmail", url: "mailto:ismailibnesyed@gmail.com", icon: SiGmail, color: "#b91c1c", handle: "ismailibnesyed@gmail.com", external: false },
];
export const contactCards = [
  { ...socials.find((social) => social.name === "Gmail"), title: "EMAIL", action: "Write me →" },
  { ...socials.find((social) => social.name === "LinkedIn"), title: "LINKEDIN", action: "Write me →" },
  { ...socials.find((social) => social.name === "WhatsApp"), title: "WHATSAPP", action: "Chat now →" },
  { ...socials.find((social) => social.name === "GitHub"), title: "GITHUB", action: "View profile →" },
];

export const heroStats = [["2+", "Major Projects"], ["20+", "Technologies"], ["100%", "Commitment"]];

export const technologies = ["Python","FastAPI","Pydantic","NumPy","Pandas","Matplotlib","Docker","Redis","Nginx","React",
  "PostgreSQL","MySQL","Git","JavaScript","C++","C","HTML","CSS","Bootstrap","Problem Solving"];

export const skills = {
  Backend: [["Python", 85], ["FastAPI", 80], ["PostgreSQL", 70], ["Docker", 65], ["Redis", 60]],
  Frontend: [["React", 75], ["JavaScript", 75], ["HTML/CSS", 85], ["Bootstrap", 70]],
};
export const exploring = ["NumPy", "Pandas", "scikit-learn", "PyTorch"];

export const services = [
  { title: "Frontend Development", icon: FiMonitor, image: "/images/service-frontend.svg", desc: "Responsive, fast React interfaces with HTML, CSS, Bootstrap and JavaScript.",
    points: ["Responsive layouts for all devices", "Reusable React components", "Fast loading pages", "Clean, maintainable code"] },
  { title: "Backend Development", icon: FiServer, image: "/images/service-backend.svg", desc: "FastAPI REST APIs, JWT auth, PostgreSQL/MySQL, Redis, Docker and Nginx.",
    points: ["REST APIs with FastAPI", "JWT authentication", "PostgreSQL / MySQL design", "Docker & Nginx deployment"] },
  { title: "Full Stack Development", icon: FiLayers, image: "/images/service-full-stack.svg", desc: "Complete web applications that connect polished React interfaces to reliable APIs and databases.",
    points: ["End-to-end React and FastAPI applications", "Frontend and backend integration", "Database-backed user experiences", "Responsive, maintainable delivery"] },
  { title: "Python Development", icon: FiTerminal, image: "/images/service-python.svg", desc: "Practical Python tools, automation, data workflows and API development tailored to your needs.",
    points: ["Python scripts and automation", "FastAPI service development", "Data processing workflows", "Readable, testable code"] },
];

export const education = [
  { title: "Secondary School Certificate (SSC)", place: "RSF Model School & College", date: "Secondary education", gpa: "5.00" },
  { title: "Higher Secondary Certificate (HSC)", place: "Government Shah Sultan College", date: "Higher secondary education", gpa: "5.00" },
  { title: "B.Sc. in Electronics & Telecommunication Engineering (ETE)", place: "Chittagong University of Engineering and Technology (CUET)", date: "2024 – Present" },
];
export const experience = [
  { title: "Full Stack Developer", place: "PowerCare (Bidyut Bondhu)", date: "FastAPI · React · Deployed" },
  { title: "Backend Developer", place: "GigHive — practice project", date: "JWT · PostgreSQL · MongoDB" },
  { title: "Self-learning", place: "Python · C/C++ · MATLAB", date: "2026 – Present" },
];

export const projects = [
  { title: "PowerCare (Bidyut Bondhu)", desc: "Load-shedding & power outage management system with complaints, technicians and admin dashboard.", image: "/images/powercare.jpg",
    tags: ["FastAPI", "React", "PostgreSQL"], github: "", live: "https://bidyut-bondhu.netlify.app/", apiDocs: "https://bidyut-bondhu.onrender.com/docs", gradient: "from-amber-500 to-amber-800" },
  { title: "GigHive", desc: "Freelance marketplace API with JWT authentication and role-based access.",
    tags: ["FastAPI", "JWT", "MongoDB"], github: "", live: "", gradient: "from-indigo-500 to-sky-500" },
];

export const reviews = [
  { id: "sample-1", name: "Sample Client 01", role: "Small Business Owner", rating: 5, text: "The project was delivered with a clean interface and thoughtful attention to the details we discussed.", sample: true },
  { id: "sample-2", name: "Sample Client 02", role: "Startup Founder", rating: 5, text: "Communication was clear throughout, and the final experience feels fast, polished, and easy to use.", sample: true },
  { id: "sample-3", name: "Sample Client 03", role: "Product Manager", rating: 5, text: "The API and frontend worked together smoothly. The implementation was organized and easy for our team to follow.", sample: true },
  { id: "sample-4", name: "Sample Client 04", role: "Independent Consultant", rating: 5, text: "I appreciated the reliable updates and practical suggestions that made the finished site better.", sample: true },
  { id: "sample-5", name: "Sample Client 05", role: "Project Collaborator", rating: 5, text: "A responsive, well-structured result delivered with care. It was a great experience working together.", sample: true },
];

export const certificates = [
  { id: "programming-recognition", title: "Certificate of Recognition", issuer: "Phitron", date: "Fall 2025–2026 · CGPA 4.0", description: "C, C++, Data Structures, and Algorithms", image: "/images/certificate03.jpg" },
  { id: "basic-web-design", title: "Basic Web Design", issuer: "Pentanik IT", date: "30 hours · August 25, 2021", image: "/images/certificate02.webp" },
  { id: "basic-graphics-design", title: "Basic Graphics Design", issuer: "Pentanik IT", date: "30 hours · August 4, 2021", image: "/images/certificate01.webp" },
];
