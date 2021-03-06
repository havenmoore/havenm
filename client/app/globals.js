var skills = [
    {
        skillset: "Languages",
        skills: [
            { skill: "Python", proficiency: "Experienced" },
            { skill: "Javascript", proficiency: "Experienced" },
            { skill: "HTML", proficiency: "Experienced" },
            { skill: "Scala", proficiency: "Proficient" },
            { skill: "C", proficiency: "Proficient" },
            { skill: "C++", proficiency: "Proficient" },
            { skill: "CSS", proficiency: "Proficient" },
            { skill: "Sass", proficiency: "Familiar" },
            { skill: "Assembly (MIPS, ARM)", proficiency: "Familiar" }
        ]
    }, {
        skillset: "Web Development",
        skills: [
            { skill: "AngularJS", proficiency: "Experienced" },
            { skill: "Flask", proficiency: "Experienced" },
            { skill: "Twitter Bootstrap", proficiency: "Experienced" },
            { skill: "Nginx", proficiency: "Experienced" },
            { skill: "React", proficiency: "Proficient" },
            { skill: "Finatra", proficiency: "Proficient" },
            { skill: "Finagle", proficiency: "Proficient" },
            { skill: "jQuery", proficiency: "Proficient" },
            { skill: "Backbone.js", proficiency: "Proficient" },
            { skill: "Django", proficiency: "Proficient" },
            { skill: "D3.js", proficiency: "Familiar" },
            { skill: "Node.js", proficiency: "Familiar" },
            { skill: "hapi.js", proficiency: "Familiar" }
        ]
    }, {
        skillset: "Database and ORMs",
        skills: [
            { skill: "MongoDB", proficiency: "Experienced" },
            { skill: "PostgreSQL", proficiency: "Experienced" },
            { skill: "PyMongo", proficiency: "Experienced" },
            { skill: "Peewee", proficiency: "Experienced" },
            { skill: "SQLite", proficiency: "Proficient" },
            { skill: "SQLAlchemy", proficiency: "Proficient" },
            { skill: "Django ORM", proficiency: "Proficient" },
            { skill: "MySQL", proficiency: "Familiar" },
            { skill: "mongoose", proficiency: "Familiar" }
        ]
    }, {
        skillset: "Environments / DevOps",
        skills: [
            { skill: "Unix & Linux", proficiency: "Experienced" },
            { skill: "Amazon Web Services", proficiency: "Experienced" },
            { skill: "Gulp", proficiency: "Experienced" },
            { skill: "Git", proficiency: "Experienced" },
            { skill: "DigitalOcean", proficiency: "Proficient" },
            { skill: "Vagrant", proficiency: "Proficient" },
            { skill: "SVN", proficiency: "Proficient" },
            { skill: "Ansible", proficiency: "Familiar" }
        ]
    }, {
        skillset: "Miscellaneous",
        skills: [
            { skill: "gcc", proficiency: "Experienced" },
            { skill: "vim", proficiency: "Experienced" },
            { skill: "thrift", proficiency: "Proficient" },
            { skill: "LLVM", proficiency: "Proficient" },
            { skill: "ARM toolchains", proficiency: "Proficient" },
            { skill: "IntelliJ", proficiency: "Proficient" },
            { skill: "MATLAB", proficiency: "Proficient" },
            { skill: "Microsoft Excel", proficiency: "Proficient" },
            { skill: "Kafka / Zookeeper", proficiency: "Familiar" },
            { skill: "Biopython", proficiency: "Familiar" },
            { skill: "Verilog", proficiency: "Familiar" },
            { skill: "Libero IDE", proficiency: "Familiar" },
            { skill: "Actel SoftConsole", proficiency: "Familiar" },
            { skill: "Actel SmartFusion", proficiency: "Familiar" },
            { skill: "Maple", proficiency: "Familiar" }
        ]
    }
];

var jobs = [
    {
        company: "Clara",
        website: "https://www.clara.com",
        role: "Software Engineer",
        start_date: "September 2016",
        end_date: "Present",
        details: [
            "Work as part of a constantly growing team to create a rules engine and support tool for the sales and loan operations division of the company.  Responsibilities involved understanding and complex business logic, integrating with vendors as well as other teams withing the company and implementing a novel workflow application to make the various parts of the mortgage creation process, smooth fast and efficient."
        ]
    },
    {
        company: "Bizzy",
        website: "http://bizzy.io",
        role: "Software Engineer",
        start_date: "June 2016",
        end_date: "August 2016",
        details: [
            "Worked as part of a four person development team to design and implement code that allowed small businesses to integrate with commerce platforms to create and manage email marketing campaigns targeting hundreds of thousands of customers."
        ]
    },
    {
        company: "Rex Animal Health",
        website: "http://www.rexanimalhealth.com",
        role: "Cofounder, Software Engineer",
        start_date: "March 2014",
        end_date: "April 2016",
        details: [
            "Cofounded company in March of 2014. Grew from 2 founders to 6 employees",
            "Responsible for variety of technical tasks included data analysis, data modeling, ETL, DevOps, design work, architecture and implementation of frontend and backend code for web application.",
            "Manage a team of 3 developers (including self) and one designer to analyze available data and resources, implement, and iterate on multiple platforms.",
            "Techstars Alumni (Sprint Accelerator, 2015)"
        ]
    },
    {
        company: "Osha Liang LLP",
        website: "http://www.oshaliang.com",
        role: "Patent Engineer",
        start_date: "June 2012",
        end_date: "August 2013",
        details: [
            "Worked with inventors and in-house counsel at various software and computer technology companies to draft patent applications.",
            "Worked with the USPTO to advance the prosecution of patent applications.",
            "Heavy emphasis on technical writing and communication, as well as the ability to understand and concisely explain complex software and technology concepts."
        ]
    }
];

var education = {
        college: "University of Michigan",
        degree: "BSE Computer Engineering",
        start_date: "September 2007",
        end_date: "December 2011"
};

var bio = {
    header: "Hi, I'm Haven",
    body: [
        "I am a software developer residing in the San Francisco, California. I am interested in (cliché alert) unlocking the power of big data, using it in new and interesting ways and creating novel, valuable and engaging data interaction and visualization. I currently work for Clara Lending, a home financing start-up, working on making the mortgage process faster, more efficient and more transparent.",
        "In 2014 I cofounded Rex Animal Health with Amado Guloy in Houston, Texas. In March of 2015 the company was accepted into the 2015 Sprint Accelerator (Techstars) in Kansas City, Missouri. While at the accelerator, the company pivoted to the current model of aggregating, standardizing and making easy to access information in the highly fragmented and Animal Health space. The company's primary customer segments are animal producers and the pharmaceutical industry. Later we built out a suite of tools for doing direct genomic analysis of animals to complement this platform.",
        "I also have experience in the intellectual property industry, writing software patents for major technology companies. I attended the University of Michigan, majoring in Computer Engineering. My primary focus in school was low-level systems including compilers, operating systems and computer architecture. While in college I was a four-year member of the Men's Rowing Team.",
        "I am interested in working on projects, software and otherwise, that expose me to challenging problems, give me the opportunity to create cool stuff, and learn from intelligent, experienced and creative people. In my somewhat limited free time I mostly read genre fiction (of varying quality) and occasionally teach myself useless skills. I can juggle (poorly), solve a Rubik's Cube (slowly), and whistle five different ways. I'm also extremely good at bar trivia (references available on request)."
    ]
};

var projects = [
    {
        type: "Professional",
        projects: [
            {
                name: "Animal Health Data Platform",
                tools: "Javascript, AngularJS, Python, Flask, MongoDB, Bootstrap, NVD3.js",
                dates: "April 2015 - April 2016",
                details: [
                            "Architected and implemented data ETL, modeling and visualization of a wide variety of animal health data points from numerous sources, as well as UI/UX, and both client- and server-side code",
                            "A powerful geospatial visualization tool capable of granular visualization of hundreds of thousands of animal health data points worldwide spanning dozens of distinct parameters",
                            "Decision support tool processing tens of thousands of data points to facilitate better decisions made faster based on historical observations and outcomes",
                            "A disease tracking tool, granular to farm level, with visualization of the spread and change of disease both temporally and geographically"
                ]
            },{
                name: "Bioinformatics Suite",
                tools: "Javascript, AngularJS, Python, Flask, Biopython, Bootstrap",
                dates: "January 2016 - April 2016",
                details: [
                            "Architected and implemented suite of bioinformatics and genomics analysis tools, roles includes project and data management, initial UI/UX work",
                            "Implemented a variety of tools to aid with drug development and animal husbandry",
                            "Include visualization and convenient exploration of genomes, metabolic pathways and geospatial information",
                            "Managed team of four people (three developers, one designer)"
                ]
            },{
                name: "Veterinary Practice Tools Suite",
                tools: "Javascript, Backbone.js, Python, Django, PostgreSQL, Sass, Handlebars",
                dates: "March 2014 - April 2015",
                details: [
                            "Search for Veterinary Clinics by price, distance and services offered",
                            "Easy scheduling for customers and easy management of calendars",
                            "Comparison of pricing schedules nationally and by region"
                ]
            }
        ]
    },{
        type: "Personal",
        projects: [
            {
                name: "Personal",
                tools: "AngularJS, Bootstrap",
                dates: "April 2016 - Present",
                details: [
                    "A quick personal website thrown together with angular and bootstrap.  Angular is probably overkill for the current iteration but I have plans to implement some more interesting features moving forward and it gives me a good platform to play around with angular concepts and tools."
                ]
            }, {
                name: "Wikiracer",
                tools: "Python",
                dates: "August 2016",
                details: [
                    "Simple python script finding the shortest path between two wikipedia articles via links in the main body of pages."
                ]
            }

        ]
    },{
        type: "Academic Coursework",
        projects: [
            {
                name: "Advanced Compilers",
                tools: "EECS 583 (Major Design Experience)",
                dates: "Fall 2011",
                details: [
                    "Operations, Branching and Memory Analysis Pass (C++, LLVM)",
                    "Loop-Invariant Code Motion (C++, LLVM)",
                    "Power Optimization for ARM Cortex M3 Architecture (C++, LLVM, ARM)"
                ]
            },{
                name: "Compiler Construction",
                tools: "EECS 483 (Major Design Experience)",
                dates: "Spring 2010",
                details: [
                    "Parsing (C++, Decaf, Lex, Flex)",
                    "Semantics Analysis (C++, Decaf, Yacc, Bison)",
                    "Abstract Syntax Tree (AST) Generation (C++, Decaf)",
                    "Code Generation (C++, Decaf, MIPS)",
                    "Optimization (Dead Code Elimination, Constant Folding & Propagation, Register Allocation) (C++)"
                ]
            },{
                name: "Operating Systems",
                tools: "EECS 482",
                dates: "Fall 2010",
                details: [
                    "Thread Library and Disk Scheduler(C++)",
                    "Memory Pager (C++)",
                    "Concurrent File Server (C++, Posix Threads, Berkeley Sockets APIs)"
                ]
            },{
                name: "Networks",
                tools: "EECS 489",
                dates: "Spring 2011",
                details: [
                    "Instant Messenger (C++, Berkeley Sockets API)",
                    "HTTP Proxy (C++, Berkeley Sockets API, Stanford VNS, HTTP)",
                    "Internet Router (C++, Berkeley Sockets API, Stanford VNS, IP, ICMP, ARP)"
                ]
            },{
                name: "User Interface",
                tools: "EECS 493",
                dates: "Spring 2011",
                details: [
                    "Rudimentary Web Browser (C++, Qt4, XML)",
                    "Connect 4, with competitive AI (C++, Qt4)"
                ]
            },{
                name: "Cryptography",
                tools: "EECS 475",
                dates: "Fall 2010",
                details: [
                    "Elliptical Curve Cryptosystem (C++)"
                ]
            },{
                name: "Microprocessor Based Systems",
                tools: "EECS 373",
                dates: "Fall 2011",
                details: [
                    "ARM Cortex M3 Simulator (Class Collaboration) (C, GCC ARM toolchains)",
                    "Positionally Aware Autonomous/RC Vehicles (ARM, I2C, UART, SPI)"
                ]
            }
        ]
    }
];
