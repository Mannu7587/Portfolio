"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

/* ===========================
   CREATIVE GLASS CARD
=========================== */
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      className="
        relative p-8 rounded-3xl 
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-2xl
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        overflow-hidden
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-purple-500/5 pointer-events-none" />
      {children}
    </motion.div>
  )
}

/* ===========================
   FINTECH CARD HEADING
=========================== */
const CardHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        text-2xl font-extrabold
        bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400
        text-transparent bg-clip-text
        drop-shadow-[0_6px_20px_rgba(16,185,129,0.6)]
      "
      style={{
        WebkitTextStroke: "0.5px rgba(255,255,255,0.3)",
        textShadow: `
          0px 4px 15px rgba(16,185,129,0.5),
          0px 8px 25px rgba(20,184,166,0.4)
        `,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.h3>
  )
}

/* ===========================
   AURORA SECTION HEADING
=========================== */
const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        text-5xl md:text-6xl font-black mb-14
        bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400
        text-transparent bg-clip-text
        drop-shadow-[0_8px_30px_rgba(0,255,200,0.4)]
      "
      style={{
        WebkitTextStroke: "1px rgba(255,255,255,0.15)",
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
      }}
    >
      {children}
    </motion.h2>
  )
}

const GradientListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.li
      whileHover={{ 
        x: 8, 
        scale: 1.02 
      }}
      animate={{ backgroundPosition: ["0% center", "100% center"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}

      className="
        relative leading-relaxed text-[16px] 
        list-disc ml-2
        bg-gradient-to-r 
        from-emerald-300 
        via-cyan-300 
        via-sky-300 
        to-fuchsia-300
        text-transparent bg-clip-text
        marker:text-emerald-400
        transition-all duration-500
        hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]
      "
      style={{
        backgroundSize: "200% auto",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.li>
  )
}

const SkillBadge = ({ children, color }: { children: React.ReactNode, color: string }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        px-4 py-2 rounded-full text-sm font-semibold
        border backdrop-blur-md
        ${color}
        shadow-lg transition-all duration-300
      `}
    >
      {children}
    </motion.span>
  )
}




export default function Component() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute w-[700px] h-[700px] bg-emerald-500 rounded-full blur-[220px] opacity-20 top-[-250px] left-[-250px]" />
      <div className="absolute w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[220px] opacity-20 bottom-[-250px] right-[-250px]" />
      <div className="absolute w-[500px] h-[500px] bg-fuchsia-500 rounded-full blur-[200px] opacity-10 top-[30%] left-[40%]" />

      {/* HEADER */}
      <header className="relative z-10 px-6 h-16 flex items-center backdrop-blur-md bg-white/5 border-b border-white/10">
        <img
          src="/profile-pic.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400"
        />

        <nav className="ml-auto flex gap-6">

  {/* GitHub */}
  <motion.div whileHover={{ scale: 1.15, y: -3 }}>
    <Link href="https://github.com/Mannu7587">
      <div className="
        p-2 rounded-full 
        bg-white/90
        backdrop-blur-md
        border-2 border-emerald-400
        shadow-[0_0_25px_rgba(16,185,129,0.6)]
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(16,185,129,0.9)]
      ">
        <img src="/github.png" className="w-8 h-8 rounded-full" />
      </div>
    </Link>
  </motion.div>

  {/* LeetCode */}
  <motion.div whileHover={{ scale: 1.15, y: -3 }}>
    <Link href="https://leetcode.com/Mannu7587/">
      <div className="
        p-2 rounded-full 
        bg-white/90
        border-2 border-emerald-400
        shadow-[0_0_25px_rgba(16,185,129,0.6)]
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(16,185,129,0.9)]
      ">
        <img src="/leetcode.jpg" className="w-8 h-8 rounded-full" />
      </div>
    </Link>
  </motion.div>

  {/* Codeforces */}
  <motion.div whileHover={{ scale: 1.15, y: -3 }}>
    <Link href="https://codeforces.com/profile/arora.apoorv">
      <div className="
        p-2 rounded-full 
        bg-white/90
        border-2 border-emerald-400
        shadow-[0_0_25px_rgba(16,185,129,0.6)]
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(16,185,129,0.9)]
      ">
        <img src="/codeforces.jpg" className="w-8 h-8 rounded-full" />
      </div>
    </Link>
  </motion.div>

</nav>

      </header>

      <main className="relative z-10 space-y-36 px-6 py-24 max-w-6xl mx-auto">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="/about-pic.png"
            alt="Profile"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-80 h-80 rounded-full border-4 border-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.5)]"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400 text-transparent bg-clip-text">
              Apoorv Arora
            </h1>

            <p className="text-2xl bg-gradient-to-r from-cyan-300 to-emerald-300 text-transparent bg-clip-text font-semibold">
              Senior Software Engineer (SDE-2)
            </p>

            <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    text-lg leading-relaxed
    bg-gradient-to-r 
    from-slate-200 
    via-cyan-200 
    to-emerald-200
    text-transparent bg-clip-text
    drop-shadow-[0_2px_10px_rgba(16,185,129,0.4)]
  "
>
  Senior Software Engineer with 3+ years of experience designing scalable backend systems across 
  <span className="text-emerald-300 font-semibold"> SaaS</span>, 
  <span className="text-cyan-300 font-semibold"> FinTech</span>, and 
  <span className="text-fuchsia-300 font-semibold"> AI-driven enterprise platforms</span>. 
  Specialized in 
  <span className="text-emerald-300 font-semibold"> Java</span> and 
  <span className="text-cyan-300 font-semibold"> Spring Boot microservices</span>, 
  infrastructure automation using 
  <span className="text-indigo-300 font-semibold"> Terraform</span>, and production-grade AI systems including 
  <span className="text-fuchsia-300 font-semibold"> Retrieval-Augmented Generation (RAG)</span>. 
  Strong focus on reliability, performance optimization, and end-to-end feature ownership.
</motion.p>

            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-105 transition text-white font-semibold shadow-lg">
              <Link
                href="https://drive.google.com/file/d/19A6XmWKGwAId-WaVWtIrmV14iUnWqmml/view?usp=sharing"
                target="_blank"
              >
                Download CV
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* EDUCATION */}
        <section>
          <SectionHeading>Education</SectionHeading>
          <Card>
            <div className="flex gap-6 mb-6">
              <img
                src="/project-1.png"
                alt="NIT Uttarakhand Logo"
                className="w-16 h-16 bg-white rounded-xl p-2 object-contain"
              />
              <div>
                <CardHeading>
                  National Institute of Technology (NIT), Uttarakhand
                </CardHeading>
                <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">
                  Bachelor of Technology – Electrical & Electronics Engineering
                </p>
                <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">
                  August 2019 – June 2023
                </p>
                <p className="mt-2 inline-block px-4 py-1 rounded-full 
              bg-emerald-500/10 border border-emerald-400/30
              text-emerald-300 font-semibold
              shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  CGPA: 7.32 / 10
                </p>
              </div>
            </div>
            <ul className="list-disc ml-6 space-y-3 text-gray-300 leading-relaxed">
              <GradientListItem>Served as Student Placement Representative, coordinating campus recruitment activities between companies and students.</GradientListItem>
              <GradientListItem>General Secretary – Adventure Club, leading institute-level events and managing cross-functional teams.</GradientListItem>
              <GradientListItem>Vice President – Newton School Coding Club, mentoring students in Data Structures and Competitive Programming.</GradientListItem>
              <GradientListItem>Active participation in technical competitions, leadership roles, and collaborative initiatives.</GradientListItem>
            </ul>
          </Card>
        </section>

        {/* SKILLS */}
<section>
  <SectionHeading>Skills</SectionHeading>

  <div className="grid md:grid-cols-2 gap-10">

    {/* Languages */}
    <Card>
      <CardHeading>Languages</CardHeading>
      <div className="flex flex-wrap gap-3 mt-6">
        <SkillBadge color="bg-emerald-500/10 text-emerald-300 border-emerald-400/30 hover:shadow-emerald-500/40">
          Java
        </SkillBadge>
        <SkillBadge color="bg-cyan-500/10 text-cyan-300 border-cyan-400/30 hover:shadow-cyan-500/40">
          Python
        </SkillBadge>
        <SkillBadge color="bg-sky-500/10 text-sky-300 border-sky-400/30 hover:shadow-sky-500/40">
          SQL
        </SkillBadge>
      </div>
    </Card>

    {/* Frontend */}
    <Card>
      <CardHeading>Frontend</CardHeading>
      <div className="flex flex-wrap gap-3 mt-6">
        {["CSS", "HTML", "Javascript", "Bootstrap", "Tailwind CSS", "React.js"].map((skill) => (
          <SkillBadge
            key={skill}
            color="bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-400/30 hover:shadow-fuchsia-500/40"
          >
            {skill}
          </SkillBadge>
        ))}
      </div>
    </Card>

    {/* Backend */}
    <Card>
      <CardHeading>Backend</CardHeading>
      <div className="flex flex-wrap gap-3 mt-6">
        {["SpringBoot", "Django", "Flask"].map((skill) => (
          <SkillBadge
            key={skill}
            color="bg-emerald-500/10 text-emerald-300 border-emerald-400/30 hover:shadow-emerald-500/40"
          >
            {skill}
          </SkillBadge>
        ))}
      </div>
    </Card>

    {/* AI & Data Science */}
    <Card>
      <CardHeading>AI & Data Science</CardHeading>
      <div className="flex flex-wrap gap-3 mt-6">
        {[
          "DeepLearning",
          "Pytorch",
          "TensorFlow",
          "YOLOv8",
          "DeepFace",
          "Hugging Face",
          "LLM",
          "Computer Vision Models"
        ].map((skill) => (
          <SkillBadge
            key={skill}
            color="bg-cyan-500/10 text-cyan-300 border-cyan-400/30 hover:shadow-cyan-500/40"
          >
            {skill}
          </SkillBadge>
        ))}
      </div>
    </Card>

    {/* Tools & Technologies */}
    <Card>
      <CardHeading>Tools & Technologies</CardHeading>
      <div className="flex flex-wrap gap-3 mt-6">
        {[
          "CI/CD",
          "Jenkins",
          "Docker",
          "GitHub",
          "Terraform",
          "AWS",
          "MySQL",
          "Rest Assured",
          "Cypress",
          "n8n",
          "PowerBI"
        ].map((skill) => (
          <SkillBadge
            key={skill}
            color="bg-indigo-500/10 text-indigo-300 border-indigo-400/30 hover:shadow-indigo-500/40"
          >
            {skill}
          </SkillBadge>
        ))}
      </div>
    </Card>

    {/* Soft Skills */}
    <Card>
      <CardHeading>Soft Skills</CardHeading>
      <div className="flex flex-wrap gap-3 mt-6">
        {[
          "Leadership",
          "Collaboration",
          "Negotiation",
          "Strategic Thinking",
          "Problem Solving"
        ].map((skill) => (
          <SkillBadge
            key={skill}
            color="bg-rose-500/10 text-rose-300 border-rose-400/30 hover:shadow-rose-500/40"
          >
            {skill}
          </SkillBadge>
        ))}
      </div>
    </Card>

  </div>
</section>


        

        {/* EXPERIENCE */}
<section>
  <SectionHeading>Professional Experience</SectionHeading>

  <div className="space-y-12">

    {/* UKG */}
    <Card>
      <div className="flex gap-6 mb-6">
        <img src="/ukg.png" className="w-16 h-16 bg-white rounded-xl p-2 object-contain" />
        <div>
          <CardHeading>Ultimate Kronos Group (UKG)</CardHeading>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">Senior Software Engineer (SDE-2)</p>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">April 2025 – Present | Noida, India</p>
        </div>
      </div>

      <ul className="list-disc ml-6 space-y-4 text-gray-400 leading-relaxed">

        <GradientListItem>
          Led enterprise-wide migration of multiple production services from Java 8 to Java 17, 
          refactoring legacy modules, resolving deep dependency conflicts, upgrading deprecated APIs, 
          and improving overall runtime performance, memory efficiency, and long-term maintainability.
        </GradientListItem>

        <GradientListItem>
          Owned the Employment Term feature end-to-end across backend services, 
          optimizing REST APIs, improving database query performance, debugging high-impact production issues, 
          and reducing customer-reported defects by 60% through systematic root-cause analysis and automation improvements.
        </GradientListItem>

        <GradientListItem>
          Designed and implemented automated ETL pipelines to aggregate and transform usage analytics data, 
          feeding Power BI dashboards and eliminating manual reporting workflows, 
          improving analytics delivery speed by 80% and increasing data reliability.
        </GradientListItem>

        <GradientListItem>
          Developed a Retrieval-Augmented Generation (RAG) based Jira assistant that leverages embeddings and contextual retrieval 
          to summarize issue discussions and surface historically similar tickets, significantly reducing issue triage time and accelerating customer resolution cycles.
        </GradientListItem>

        <GradientListItem>
          Spearheaded CI/CD stabilization initiatives by enhancing automation frameworks, 
          fixing flaky test pipelines, improving build reliability, and enabling smoother release cycles across environments.
        </GradientListItem>

      </ul>
    </Card>

    {/* EDUVANZ */}
    <Card>
      <div className="flex gap-6 mb-6">
        <img src="/Eduvanz-logo.jpg" className="w-16 h-16 bg-white rounded-xl p-2 object-contain" />
        <div>
          <CardHeading>Eduvanz Finance</CardHeading>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">Software Engineer (SDE-1)</p>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">June 2024 – February 2025 | Mumbai, India</p>
        </div>
      </div>

      <ul className="list-disc ml-6 space-y-4 text-gray-400 leading-relaxed">

        <GradientListItem>
          Automated AWS infrastructure provisioning using Terraform (Infrastructure as Code), 
          eliminating manual configuration steps and reducing deployment time from 3 hours to 30 minutes (83% improvement).
        </GradientListItem>

        <GradientListItem>
          Implemented real-time observability and monitoring dashboards using Grafana, 
          enabling proactive issue detection, performance tracking, and improved system reliability across services.
        </GradientListItem>

        <GradientListItem>
          Designed and maintained Jenkins-based CI/CD pipelines for Salesforce deployments, 
          automating pull requests, validation tests, code reviews, and seamless sandbox-to-production releases.
        </GradientListItem>

        <GradientListItem>
          Led migration of over 1 million records from legacy monolithic systems to third-party platforms 
          using optimized SQL queries and Redshift transformations, ensuring zero data loss and data consistency.
        </GradientListItem>

        <GradientListItem>
          Strengthened system security by implementing secure authentication mechanisms 
          and integrating with Identity Providers (IDPs), enhancing compliance and access management.
        </GradientListItem>

      </ul>
    </Card>

    {/* HARNESS */}
    <Card>
      <div className="flex gap-6 mb-6">
        <img src="/Harness-logo.jpeg" className="w-16 h-16 bg-white rounded-xl p-2 object-contain" />
        <div>
          <CardHeading>Harness.io</CardHeading>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">Software Engineer (SDE-1)</p>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">July 2023 – May 2024 | Bengaluru, India</p>
        </div>
      </div>

      <ul className="list-disc ml-6 space-y-4 text-gray-400 leading-relaxed">

        <GradientListItem>
          Contributed to end-to-end feature development within the Harness Next Gen platform, 
          including backend implementation, test plan creation, execution validation, and release readiness.
        </GradientListItem>

        <GradientListItem>
          Improved unit and integration test coverage from 60% to 90% across multiple modules 
          by introducing structured test cases, automation workflows, and debugging production defects.
        </GradientListItem>

        <GradientListItem>
          Participated in on-call rotations handling production incidents, 
          identifying root causes, implementing hotfixes, and ensuring system stability in customer-facing environments.
        </GradientListItem>

        <GradientListItem>
          Authored detailed technical documentation and knowledge base articles 
          for the Harness Developer Hub, improving user onboarding and developer experience.
        </GradientListItem>

      </ul>
    </Card>

    {/* EVIGWAY */}
    <Card>
      <div className="flex gap-6 mb-6">
        <img src="/evigway-logo.jpeg" className="w-16 h-16 bg-white rounded-xl p-2 object-contain" />
        <div>
          <CardHeading>Evigway Technologies Pvt. Ltd.</CardHeading>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">Software Engineer Intern</p>
          <p className="text-lg font-semibold bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">January 2023 – June 2023 | Gurugram, India</p>
        </div>
      </div>

      <ul className="  list-disc ml-6 space-y-3  text-slate-300 leading-relaxed text-[16px]  marker:text-emerald-400">

        <GradientListItem>
          Developed an AI-powered border surveillance system integrating YOLOv8, DeepFace, and OpenCV 
          for real-time object detection, facial recognition, and threat identification.
        </GradientListItem>

        <GradientListItem>
          Built an automated VVIP convoy route planning system leveraging geospatial intelligence, 
          threat detection algorithms, and dynamic routing strategies to enhance security operations.
        </GradientListItem>

        <GradientListItem>
          Implemented drone-based monitoring pipelines utilizing thermal and optical camera feeds, 
          enabling enhanced situational awareness and real-time surveillance capabilities.
        </GradientListItem>

      </ul>
    </Card>

  </div>
</section>

{/* ACHIEVEMENTS */}
        <section>
          <SectionHeading>Achievements</SectionHeading>
          <Card>
            <ul className="list-disc ml-6 space-y-3 text-gray-300 leading-relaxed">
              <GradientListItem>Finalist – Valorant E-Sports Championship, Rendezvous IIT Delhi (2023).</GradientListItem>
              <GradientListItem>1st Place – Intra NIT Valorant Championship (2022).</GradientListItem>
              <GradientListItem>2nd Place – Intra NIT Volleyball Tournament (2022).</GradientListItem>
              <GradientListItem>Participant – Inter NIT Football Tournament, NIT Uttarakhand (2020).</GradientListItem>
              <GradientListItem>Runner-Up – Photography Contest, NIT Uttarakhand (2019).</GradientListItem>
            </ul>
          </Card>
        </section>


        

        {/* CONTACT */}
        <section>
          <SectionHeading>Contact</SectionHeading>
          <Card>
  <div className="space-y-8">

    {/* LinkedIn */}
    <motion.div 
      whileHover={{ x: 6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex items-center gap-4 group"
    >
      <img 
        src="/social.png" 
        className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
      />
      <Link 
        href="https://www.linkedin.com/in/apoorv-arora-0903681a1/"
        className="
          bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300
          text-transparent bg-clip-text
          font-semibold
          hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
          transition-all duration-300
        "
      >
        linkedin.com/in/apoorv-arora
      </Link>
    </motion.div>

    {/* Email */}
    <motion.div 
      whileHover={{ x: 6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex items-center gap-4 group"
    >
      <img 
        src="/gmail.png" 
        className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" 
      />
      <p className="
        bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300
        text-transparent bg-clip-text
        font-semibold
        hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.8)]
        transition-all duration-300
      ">
        apoorvarora3110@gmail.com
      </p>
    </motion.div>

    {/* Phone */}
    <motion.div 
      whileHover={{ x: 6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex items-center gap-4 group"
    >
      <img 
        src="/call.png" 
        className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" 
      />
      <p className="
        bg-gradient-to-r from-fuchsia-300 via-purple-300 to-indigo-300
        text-transparent bg-clip-text
        font-semibold
        hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]
        transition-all duration-300
      ">
        +91-7300823494
      </p>
    </motion.div>

  </div>
</Card>

        </section>

        
        

      </main>
    </div>
  )
}
