export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  credential?: string;
  description: string;
  status: "Completed" | "In Progress" | "Planned";
}

export const certificates: Certificate[] = [
  {
    title: "Cybersecurity Certificate",
    issuer: "ALX Africa",
    year: "2025",
    image: "https://drive.google.com/file/d/16kAv_slVv8AsFCnjnjgO69HIMMZKy-Ui/view?usp=sharing",
    credential: "",
    description:
      "Completed practical training in cybersecurity fundamentals, networking, Linux, risk management, and security best practices.",
    status: "Completed",
  },

  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2026",
    image: "/certificates/google.png",
    description: "Currently pursuing.",
    status: "In Progress",
  },

  {
    title: "Professional Foundation Certificate",
    issuer: "ALX Africa",
    year: "2025",
    image: "https://drive.google.com/file/d/12-GOdnRP5ZYrMXPm9K39mVeN8gCjf3C6/view?usp=sharing",
    description: "Completed practical training in professional skills, communication, and workplace readiness.",
    status: "Completed",
  },
];