/**
 * Portfolio Projects Data
 * This array acts as the data source for the Open Source Projects section.
 * The script dynamically generates the grid layout from these objects.
 */

const portfolioProjects = [
    {
        title: "Inventory & Billing System",
        description: "Full-stack billing platform with role-based access, real-time stock control, document export, and dark mode. Designed async invoice workflows with LINQ stock validation, atomic EF Core transactions, and auto-calculation. Features JWT RBAC, Chart.js dashboard, and robust xUnit test coverage.",
        techStack: ["ASP.NET Core 8", "Angular", "MySQL", "EF Core", "JWT", "LINQ", "Swagger"],
        image: "https://github.com/user-attachments/assets/ce58c0ca-e765-4e4f-a8c1-09a297e6a10c",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/Inventory_Management_System",
        featured: true
    },
    {
        title: "AES Encryption Tool",
        description: "Browser-based AES-256 encryption/decryption tool built with System.Security.Cryptography. Utilizes SHA-256 key derivation for secure, fixed-length keys regardless of input length. Structured securely with an independent Services layer, adhering strictly to SOLID single-responsibility principles.",
        techStack: ["ASP.NET Core MVC", "C#", "SHA-256", "Bootstrap 5"],
        image: "https://github.com/user-attachments/assets/8a9edbc0-5efe-4c74-84e9-2a9ca34623dd",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/AesCryptoTool",
        featured: true
    },
    {
        title: "One Tech — E-Commerce",
        description: "Database-driven online store with complex product management, secure user authentication, and multi-tier order processing workflows. Built using raw ADO.NET to directly query SQL Server utilizing heavily optimized stored procedures and parameterised queries.",
        techStack: ["ASP.NET WebForms", "ADO.NET", "SQL Server", "C#"],
        image: "",
        demoLink: "",
        githubLink: "https://github.com/moaadil10/OneTech-ECommerce",
        featured: true
    },
    {
        title: "Football Blog",
        description: "A responsive sports blog focusing on modern UI design, semantic HTML, and cross-browser visual consistency.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://github.com/user-attachments/assets/d8e1119a-2b99-491b-be82-897fa4937fda",
        demoLink: "https://coding-samurai-task3-footy-blog.vercel.app/",
        githubLink: "https://github.com/moaadil10/Coding-Samurai-Task3-Footy-Blog",
        featured: false
    },
    {
        title: "Classic Calculator",
        description: "An interactive, fully functional web-based calculator demonstrating JavaScript logic, state control, and DOM manipulation.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://github.com/user-attachments/assets/12927803-f477-4948-888e-b5a90d632596",
        demoLink: "https://coding-samurai-task1-classic-calcul.vercel.app/",
        githubLink: "https://github.com/moaadil10/Coding-Samurai-Task1-Classic-Calculator",
        featured: false
    },
    {
        title: "To-Do List Manager",
        description: "A sleek task manager application allowing users to add, complete, and organize daily tasks efficiently with DOM persistence.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://github.com/user-attachments/assets/f4eb6904-4998-42db-ac3f-ed5462aa6f71",
        demoLink: "https://coding-samurai-task2-to-do-list.vercel.app/",
        githubLink: "https://github.com/moaadil10/Coding-Samurai-Task2-To-Do-List",
        featured: false
    }
];
