// NOTE: The interactive API terminal was removed in the Light Clean redesign.
// This file is kept only so old imports do not break. It contains no phone
// number and the corrected LinkedIn URL.
export const mockApiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/profile",
    shortEndpoint: "/profile",
    title: "Profile Data",
    status: "200 OK",
    response: {
      name: "Ajay Maulana",
      education: {
        university: "Universitas Teknologi Yogyakarta",
        major: "Sistem Informasi",
        gpa: 3.74,
        status: "Lulus (Graduated)"
      },
      location: "Jakarta, Indonesia"
    }
  },
  {
    method: "GET",
    endpoint: "/api/v1/skills",
    shortEndpoint: "/skills",
    title: "Tech Stack",
    status: "200 OK",
    response: {
      backend: ["FastAPI (Python)", "Express.js (Node.js)", "Laravel (PHP)", "Kotlin"],
      frontend: ["React.js", "Vue.js", "Next.js", "HTML / CSS"],
      database: ["PostgreSQL", "MySQL", "Relational Modeling"],
      ai_and_tools: ["Google Gemini AI API", "Docker", "Git/GitLab", "Postman"]
    }
  },
  {
    method: "GET",
    endpoint: "/api/v1/projects",
    shortEndpoint: "/projects",
    title: "Key Projects",
    status: "200 OK",
    response: [
      { name: "Cek Review", stack: "Gemini AI + React + Node.js", category: "AI E-Commerce" },
      { name: "Fintrack", stack: "Node.js + Express + Next.js", category: "Microservices Financial System" },
      { name: "CleanVid", stack: "Android Kotlin + Google OAuth", category: "Rule-Based Anti-Spam Guard" },
      { name: "Simulasi Jaringan Kantor", stack: "Cisco Packet Tracer", category: "Network Simulation" }
    ]
  },
  {
    method: "POST",
    endpoint: "/api/v1/hire-ajay",
    shortEndpoint: "/hire-me",
    title: "Contact",
    status: "201 Created",
    payload: { candidate: "Ajay Maulana", intent: "Interview / Collaboration", channels: ["Email", "WhatsApp"] },
    response: {
      message: "Direct communication line opened.",
      email: "ajaymaulana2224@gmail.com",
      linkedIn: "https://www.linkedin.com/in/ajay-maulana-b036612a7/",
      responseExpected: "Within 24 hours"
    }
  }
];
