import {
    FaJava,
    FaReact,
    FaDatabase,
    FaTools,
    FaCloud,
    FaAws,        // ✅ AWS icon is HERE
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql,
    SiJavascript,
    SiJenkins,
    SiGithub,
} from "react-icons/si";


const skills = [
    {
        title: "Backend Development",
        icon: FaJava,
        items: [
            "Java",
            "Spring Boot",
            "Spring MVC",
            "Microservices",
            "REST APIs",
            "JPA / Hibernate",
        ],
    },
    {
        title: "Frontend Development",
        icon: FaReact,
        items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    },
    {
        title: "Databases",
        icon: FaDatabase,
        items: ["MySQL", "MSSQL"],
    },
    {
        title: "DevOps",
        icon: SiJenkins,
        items: ["Jenkins", "Git", "GitHub", "Linux"],
    },
    {
        title: "Tools",
        icon: FaTools,
        items: ["Postman", "SOAP UI", "Jira", "SQLyog", "TablePlus"],
    },
    {
        title: "Cloud",
        icon: FaCloud,
        items: ["AWS (EC2, S3, IAM)"],
    },
];

export default skills;
