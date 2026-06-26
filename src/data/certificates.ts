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
    image: "/certificates/alx-cybersecurity.png",
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
    title: "CompTIA Security+",
    issuer: "CompTIA",
    year: "Future",
    image: "/certificates/securityplus.png",
    description: "Planned certification.",
    status: "Planned",
  },
];