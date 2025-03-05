// Sessões de Q&A, workshops e eventos adicionais.
// Inscrições para palestras, eventos e webinars.


type Mentor = {
    certifications: Certification[]
    id: string;
    name: string;
    username:string
    birthdate: Date;
    expertise: string[];
    // experience: number; // anos de experiência
    location: {
        city: string;
        state: string;
        country: string;
        region?: string;
    };
    languages: Languages;
    // availability: {
    //     days: string[];
    //     time: {
    //         start: string; 
    //         end: string;  
    //     };
    // };
    contact: {
        defaultEmail: string;
        alternateEmail: string;
        phone: string;
        linkedin?: string;
    };
    bio: string;
    // ratings: {
    //     average: number; // média de avaliações
    //     reviews: number; // total de avaliações
    // };
    skills: Array<string>
    isActive: boolean;
    photoURL?: string;

};


type Languages = {
    primary: string;
    secondary?: string[];
};


type receivingMethod = {
    methodType: string
    accountDetails: {
        bankName: string
        accountHolderName: string
        accountNumber: string
        agencyNumber: string
        accountType: string // checking | savings
        country: string,
    },
    pixKey: string,
    paypalEmail: string, 
    defaultCurrency: string // "BRL"
    isPrimary: boolean, // Define se este é o método principal de recebimento
    createdAt: Date
    lastUsed: Date
};


// type Certification = {
//     certificationId: string;
//     title: string;
//     institution: string;
//     issueDate: string; 
//     expirationDate?: string; 
//     credentialId?: string; 
//     credentialUrl?: string; 
//     description?: string; 
//     isVerified: boolean;
// };

type MentorshipProgram = {
    programId: string;
    title: string;
    description: string;
    issueCertificateOfCompletion: boolean
    type: MentorshipType;
    mentor: {
        id: string;
        name: string;
        expertise: string[];
    };
    mentees: Array<{
        id: string;
        name: string;
        goals: string;
    }>;
    startDate: string; 
    endDate: string; 
    duration: number; 
    numberOfSessions: number;
    sessions: Array<{
        sessionId: string;
        datatime: {
            start: string; 
            end: string;  
        }; 
        topic: string;
        // duration: number; // minutos, horas, dias e meses
        faceToFaceMentoring: boolean
    }>;
    sessionFrequency: "weekly" | "bi-weekly" | "monthly";
    topicsCovered: string[];
    goals: string[];
    resources: Array<{
        type: "link" | "book" | "article" | "video";
        title: string;
        author?: string;
        url?: string;
    }>;
    status: "active" | "completed" | "upcoming";
    feedback: Array<{
        menteeId: string;
        comments: string;
        rating: number; // de 1 a 5
    }>;
};

type MentorshipType = 
    | "career_development" 
    | "academic" 
    | "entrepreneurship" 
    | "technology" 
    | "leadership" 
    | "life_coaching" 
    | "health_and_wellbeing" 
    | "digital_marketing" 
    | "personal_finance";


    type Session = {
        topic: string; // Tópico da sessão
        date: string; // Data em formato AAAA-MM-DD
        duration: number; // Duração em horas
        description: string; // Descrição da sessão
    };
    
    type GuestMentor = {
        id: string; // Identificador único do mentor convidado
        name: string; // Nome do mentor convidado
        expertise: string[]; // Lista de áreas de especialização
        bio: string; // Biografia do mentor convidado
        sessions: Session[]; // Lista de sessões que o mentor convidado irá conduzir
    };








    type Certification = {
        title: string;
        issuedBy: string;
        year: number;
    };








    const mentors: Mentor[] = [
        {
            certifications: [
                { title: "Data Science", issuedBy: "Coursera", year: 2020 },
                { title: "Machine Learning", issuedBy: "Stanford University", year: 2021 }
            ],
            id: "1",
            name: "Carlos Mendes",
            username: "carlosm",
            birthdate: new Date(1985, 3, 15),
            expertise: ["Data Science", "Machine Learning", "AI"],
            location: {
                city: "São Paulo",
                state: "SP",
                country: "Brazil",
                region: "Southeast"
            },
            languages: { primary: "Portuguese", secondary: ["English", "Spanish"] },
            contact: {
                defaultEmail: "carlos.mendes@gmail.com",
                alternateEmail: "c.mendes@protonmail.com",
                phone: "+55 11 91234-5678",
                linkedin: "linkedin.com/in/carlosm"
            },
            bio: "Data scientist with over 10 years of experience in machine learning and AI.",
            skills: ["Python", "TensorFlow", "R", "Data Analysis"],
            isActive: true,
            photoURL: "https://example.com/photos/carlosm.jpg"
        },
        {
            certifications: [
                { title: "Web Development", issuedBy: "Udacity", year: 2019 },
                { title: "React Specialist", issuedBy: "Pluralsight", year: 2022 }
            ],
            id: "2",
            name: "Maria Santos",
            username: "mariasan",
            birthdate: new Date(1992, 6, 23),
            expertise: ["Web Development", "React", "UI/UX"],
            location: {
                city: "Rio de Janeiro",
                state: "RJ",
                country: "Brazil",
                region: "Southeast"
            },
            languages: { primary: "Portuguese", secondary: ["English"] },
            contact: {
                defaultEmail: "maria.santos@outlook.com",
                alternateEmail: "maria.dev@protonmail.com",
                phone: "+55 21 92345-6789",
                linkedin: "linkedin.com/in/mariasantos"
            },
            bio: "Frontend developer specialized in React and user interface design.",
            skills: ["JavaScript", "React", "CSS", "Figma"],
            isActive: true
        },
        {
            certifications: [
                { title: "Project Management", issuedBy: "PMI", year: 2018 },
                { title: "Agile Methodologies", issuedBy: "Scrum Alliance", year: 2021 }
            ],
            id: "3",
            name: "Bruno Oliveira",
            username: "brunooliv",
            birthdate: new Date(1980, 10, 10),
            expertise: ["Project Management", "Agile", "Scrum"],
            location: {
                city: "Lisbon",
                country: "Portugal",
                state: "Portugal",
                region: "Southeast"
            },
            languages: { primary: "Portuguese", secondary: ["English", "French"] },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "Certified project manager with a strong background in agile methodologies.",
            skills: ["Project Management", "Scrum", "Kanban", "Leadership"],
            isActive: false
        },
        {
            certifications: [
                { title: "Cybersecurity", issuedBy: "MIT", year: 2019 }
            ],
            id: "4",
            name: "Ana Pereira",
            username: "anap",
            birthdate: new Date(1990, 8, 20),
            expertise: ["Cybersecurity", "Network Security"],
            location: {
                city: "Belo Horizonte",
                state: "MG",
                country: "Brazil",
                region: "Southeast"

            },
            languages: { primary: "Portuguese", secondary: ["English"] },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "Experienced cybersecurity professional focused on network protection.",
            skills: ["Network Security", "Firewalls", "Risk Assessment"],
            isActive: true
        },
        {
            certifications: [
                { title: "Digital Marketing", issuedBy: "HubSpot", year: 2020 }
            ],
            id: "5",
            name: "Lucas Almeida",
            username: "lucasal",
            birthdate: new Date(1987, 11, 5),
            expertise: ["Digital Marketing", "SEO", "Content Strategy"],
            location: {
                city: "Curitiba",
                state: "PR",
                country: "Brazil",
                region: "South"

            },
            languages: { primary: "Portuguese", secondary: ["Spanish"] },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "Digital marketing strategist with a focus on SEO and content.",
            skills: ["SEO", "Content Writing", "Google Analytics"],
            isActive: true
        },
        {
            certifications: [
                { title: "Cloud Architect", issuedBy: "AWS", year: 2021 }
            ],
            id: "6",
            name: "João Silva",
            username: "joaos",
            birthdate: new Date(1993, 2, 14),
            expertise: ["Cloud Architecture", "AWS"],
            location: {
                city: "Porto Alegre",
                state: "RS",
                country: "Brazil",
                region: "South"
            },
            languages: { primary: "Portuguese", secondary: ["English"] },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "Certified AWS Cloud Architect with experience in cloud solutions.",
            skills: ["AWS", "Cloud Migration", "DevOps"],
            isActive: true
        },
        {
            certifications: [
                { title: "Python Developer", issuedBy: "Udemy", year: 2018 }
            ],
            id: "7",
            name: "Rafael Lima",
            username: "rafalima",
            birthdate: new Date(1984, 5, 29),
            expertise: ["Python Development", "APIs", "Backend"],
            location: {
                city: "Recife",
                state: "PE",
                country: "Brazil",
                region: "North"
            },
            languages: { primary: "Portuguese" },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "Backend developer with a passion for Python and APIs.",
            skills: ["Python", "Flask", "SQL", "RESTful APIs"],
            isActive: false
        },
        {
            certifications: [
                { title: "UX/UI Design", issuedBy: "Interaction Design Foundation", year: 2017 }
            ],
            id: "8",
            name: "Sofia Costa",
            username: "sofiac",
            birthdate: new Date(1991, 10, 17),
            expertise: ["UX/UI Design", "User Research"],
            location: {
                city: "Recife",
                state: "PE",
                country: "Brazil",
                region: "North"
            },
            languages: { primary: "Spanish", secondary: ["English", "Portuguese"] },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "User experience designer with a focus on user-centered design.",
            skills: ["User Research", "Wireframing", "Prototyping", "Adobe XD"],
            isActive: true
        },
        {
            certifications: [
                { title: "JavaScript Developer", issuedBy: "Codecademy", year: 2019 }
            ],
            id: "9",
            name: "Pedro Gómez",
            username: "pedrog",
            birthdate: new Date(1989, 4, 2),
            expertise: ["JavaScript", "Node.js", "Full Stack"],
            location: {
                city: "Recife",
                state: "PE",
                country: "Brazil",
                region: "North"
            },
            languages: { primary: "Spanish", secondary: ["English"] },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "Full stack developer specialized in JavaScript and Node.js.",
            skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
            isActive: true
        },
        {
            certifications: [
                { title: "AI Fundamentals", issuedBy: "Microsoft", year: 2022 }
            ],
            id: "10",
            name: "Isabel Cruz",
            username: "isac",
            birthdate: new Date(1995, 9, 10),
            expertise: ["Artificial Intelligence", "Deep Learning"],
            location: {
                city: "Recife",
                state: "PE",
                country: "Brazil",
                region: "North"
            },
            languages: { primary: "Portuguese", secondary: ["English"] },
            contact: {
                defaultEmail: "bruno.oliveira@gmail.com",
                alternateEmail: "brunooliv@pmail.com",
                phone: "+351 912345678",
                linkedin: "linkedin.com/in/brunooliveira"
            },
            bio: "AI enthusiast with a focus on deep learning applications.",
            skills: ["Python", "TensorFlow", "Computer Vision"],
            isActive: true
        }
    ];
    