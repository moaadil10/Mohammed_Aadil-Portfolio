/**
 * Portfolio Projects Data
 * This array acts as the data source for the Open Source Projects section.
 * The script dynamically generates the grid layout from these objects.
 */

const portfolioProjects = [
    {
        title: "Inventory & Billing System",
        description: "Full-stack inventory and invoicing platform with role-based access, real-time stock control, JWT authentication, and document export (PDF/CSV). Integrated a dashboard displaying real-time revenue and low-stock alerts.",
        techStack: ["ASP.NET Core 8", "Angular", "SQL Server", "EF Core", "JWT", "Swagger"],
        image: "https://github.com/user-attachments/assets/ce58c0ca-e765-4e4f-a8c1-09a297e6a10c",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/Inventory_Management_System",
        featured: true
    },
    {
        title: "AES Encryption Tool",
        description: "Secure data-handling utility that encrypts sensitive inputs before database storage using an AES-256 encryption and decryption module in C#. Applied SOLID principles and Clean MVC Architecture.",
        techStack: ["ASP.NET MVC", "C#", "SOLID", "Data Protection"],
        image: "https://github.com/user-attachments/assets/8a9edbc0-5efe-4c74-84e9-2a9ca34623dd",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/AesCryptoTool",
        featured: true
    },
    {
        title: "Football Blog",
        description: "A responsive sports blog focusing on modern UI design, semantic HTML, and cross-browser visual consistency.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://github.com/user-attachments/assets/d8e1119a-2b99-491b-be82-897fa4937fda",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/Coding-Samurai-Task3-Footy-Blog",
        featured: false
    },
    {
        title: "Classic Calculator",
        description: "An interactive, fully functional web-based calculator demonstrating JavaScript logic, state control, and DOM manipulation.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://github.com/user-attachments/assets/12927803-f477-4948-888e-b5a90d632596",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/Coding-Samurai-Task1-Classic-Calculator",
        featured: false
    },
    {
        title: "To-Do List Manager",
        description: "A sleek task manager application allowing users to add, complete, and organize daily tasks efficiently with DOM persistence.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://github.com/user-attachments/assets/f4eb6904-4998-42db-ac3f-ed5462aa6f71",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/Coding-Samurai-Task2-To-Do-List",
        featured: false
    }
];
