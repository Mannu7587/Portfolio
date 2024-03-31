/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KG9mZwLBNlb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link2Icon } from "@radix-ui/react-icons"

export default function Component() {
  return (
    <div
      className="flex flex-col min-h-[100dvh] dark"
      style={{
        fontFamily: "Times New Roman",
      }}
    >
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#4e1285] from-gray-800 to-gray-900">
        <Link className="flex items-center justify-center" href="#">
        <img
          alt="User"
          className="aspect-[1/1] object-cover object-center rounded-full"
          height="50"
          src="/profile-pic.png"
          width="50"
        />
          <span className="sr-only text-white">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 lg:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="https://github.com/Mannu7587">
          <img
          alt="User"
          className="aspect-[1/1] object-cover object-center rounded-full"
          height="50"
          src="/github.png"
          width="50"
        />
          <span className="sr-only text-white">Acme Inc</span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="https://leetcode.com/Mannu7587/">
          <img
          alt="User"
          className="aspect-[1/1] object-cover object-center rounded-full"
          height="50"
          src="/leetcode.jpg"
          width="50"
        />
          <span className="sr-only text-white">Acme Inc</span>
          </Link>

          <Link className="text-sm font-medium hover:underline underline-offset-4 text-white" href="https://codeforces.com/profile/arora.apoorv">
          <img
          alt="User"
          className="aspect-[1/1] object-cover object-center rounded-full"
          height="50"
          src="/codeforces.jpg"
          width="50"
        />
          <span className="sr-only text-white">Acme Inc</span>
          </Link>
        </nav>
      </header>
      <main className="grid gap-12 lg:gap-24 flex-1 bg-[#051622] from-gray-700 to-gray-800">
        <section className="grid gap-4 px-4 md:px-6 mt-5">
          <div className="flex flex-col min-[400px]:grid md:min-[600px] md:grid-cols-3 md:items-center md:gap-8 lg:gap-12">
            <div className="mx-auto overflow-hidden rounded-full border-4 border-yellow-500 md:aspect-[1/1] lg:aspect-[1/1]">
              <img
                alt="User"
                className="aspect-[1/1] object-cover object-center rounded-full"
                height="400"
                src="/about-pic.png"
                width="400"
              />
            </div>
            <div className="space-y-4 md:col-span-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Apoorv Arora
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-white">Software Engineer</p>
              </div>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400 text-white">
              Driven job seeker with a diverse skill set and experience and a passion 
              for continuous learning, seeking new opportunities to grow and contribute 
              to a dynamic team. I bring 1+ year of Experience working in AI and SaaS domain.
              </p>
              <Button className="w-36 bg-blue-500 text-white" size="sm">
                <Link className="underline-none" href="https://drive.google.com/file/d/1OHze8h2XXpOLVrh6xnQewYxB4imCaoy5/view?pli=1">
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </section>
        


        <section className="grid gap-4 px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Educational Qualifications</h1>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400 text-white">
            Showcasing my academic accomplishments and educational qualifications:
            </p>
          </div>
          <div className="grid gap-6">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <div className="flex items-center gap-2">
                <img
                  alt="Company Logo"
                  className="2rem"
                  height="100"
                  src="/project-1.png"
                  width="100"
                />
                <div className="left">
                <h1 className="text-2xl font-bold sm:text-2xl md:text-2xl text-white" >National Institute of Technology (NIT), Uttarakhand</h1>
                <h2 className="text-xl font-bold sm:text-xl md:text-xl text-white">Bachelor of Technology</h2>
                <p>Electrical and Electronics Engineering</p>
                <p>CGPA: 7.32/10 from August, 2019 to July, 2023</p>
              </div>
              
              </div>

              <div>
                <h1 className="text-xl font-bold">Clubs and Societies:</h1>
                <p>~ Student Placement Representative      (August, 2022 to December, 2022)</p>
                <p>~ General Secretary Adventure Club NIT- Uttarakhand      (August, 2022 to July, 2023)</p>
                <p>~ Vice President Newton School Coding Club NIT- Uttarakhand      (August, 2022 to July, 2023)</p>
                <p>~ Team Lead SAE Club NIT- Uttarakhand      (August, 2021 to July, 2022)</p>
                <p>~ Associate Member Sports Club NIT- Uttarakhand      (August, 2019 to July, 2020)</p>
                <h1 className="text-xl font-bold">Awards and Achievements:</h1>
                <p>~ Finalist at Valorant E-Sports Championship Organized by Rendezvous IIT Delhi      (March, 2023)</p>
                <p>~ 1st Place Intra-NIT Valorant E-Sports Championship     (November, 2022)</p>
                <p>~ 2nd Place Intra-NIT Volleyball Tournament      (October, 2022)</p>
                <p>~ Runner Up Photography Contest NIT- Uttarakhand      (November, 2019)</p>


              </div>
            </div>
          </div>
        </section>




        <section className="grid gap-4 px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Skill Set</h1>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-white">
            Demonstrating proficiency in essential skills and competencies.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Languages</h3>
              <div />
              <p className="text-xl text-gray-500 dark:text-gray-400 text-white">Java, Python, C++, JavaScript, SQL</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Frontend</h3>
              <div />
              <p className="text-xl text-gray-500 dark:text-gray-400 text-white">CSS, HTML, React.js, Bootstrap, Tailwind CSS, GUI tkinter, Streamlite</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Backend</h3>
              <div />
              <p className="text-xl text-gray-500 dark:text-gray-400 text-white">SpringBoot, Django, Flask, Node.js</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Data Science</h3>
              <div />
              <p className="text-xl text-gray-500 dark:text-gray-400 text-white">Artificial Intelligence, Machine Learning, Neural Networks, Tensorflow, Pytorch, Keras, Anaconda, YOLOv8, Hugging Face</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Tools & Technologies</h3>
              <div />
              <p className="text-xl text-gray-500 dark:text-gray-400 text-white">Git, Docker, Kubernetes, CI/CD, Rest Assured, Cypress, Jira, MySQL, CVAT, MakeSense.ai</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Coursework</h3>
              <div />
              <p className="text-xl text-gray-500 dark:text-gray-400 text-white">Data Structures, Algorithms, Operating Systems, Object Oriented Design, C-programming, Database Management Systems</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Soft Skills</h3>
              <div />
              <p className="text-xl text-gray-500 dark:text-gray-400 text-white">Leadership, Team Mangement, Collaboration, Negotiation, Strategic Thinking, Problem Solving</p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">My Experience</h1>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400 text-white">
            Reflecting on a year of impactful contributions in the realm of software engineering.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <div className="flex items-center gap-2">
                <img
                  alt="Company Logo"
                  className="aspect-[1/1] object-cover object-center rounded-full "
                  height="60"
                  src="/Harness-logo.jpeg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="60"
                />
                <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl text-white">Harness.io</h3>
              </div>
              <p className="text-xl font-bold">Software Engineer Intern </p>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-l">July, 2023 - January, 2024 || Bengaluru, Karnataka, India</p>
                  <p className="text-m">~ Played a key role in end-to-end feature development at Harness Next Gen, focusing on test plan creation, execution, and automation for critical test cases.</p>
                  <p className="text-m">~ Actively contributed to comprehensive feature release validations in Harness Next Gen by participating in bug fixes and fulfilling oncallresponsibilities. Additionally, successfully boosted code coverage for multiple features from 60% to 90%, enhancing the overallrobustness and reliability of the software</p>
                  <p className="text-m">~ Revamped Harness documentation and authored knowledge based articles forinclusion in the Harness Developer hub, enhancing user understanding and community engagement</p>
                  <p className="text-m">~ Languages and technologies being used Java, Spring Boot, Junit, Mockito, Docker, Microservices, Selenium, Rest Assured, Testim, Cypress, Jira, GitHub</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <div className="flex items-center gap-2">
                <img
                  alt="Company Logo"
                  className="rounded-full"
                  height="60"
                  src="/evigway-logo.jpeg"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="60"
                />
                <h3 className="text-2xl font-bold sm:text-2xl md:text-2xl text-white">Evigway Technologies Pvt. Ltd.</h3>
              </div>
              <p className="text-xl font-bold">Software Engineer Intern</p>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-l">January, 2023 - June, 2023 || Gurugram, Hrayana, India</p>
                  <p className="text-m">~ Developed and implemented an automated route planning model for VVIP convoys, integrating geospatial data, threat object detection, crowd management, and lane segmentation. Enhanced security through real-time System updates, secure communication, and continuous improvement measures.</p>
                  <p className="text-m">~ Developed an AI Border Surveillance system forthe Indian Army, integrating object detection, people counting, and face recognition. The system operates on drones, thermal, and optical cameras, bolstering security measures in border areas through advanced monitoring and threat detection capabilities.</p>
                  <p className="text-m">~ Languages and technologies being used Python, Machine Learning, Deep Learning, Tensorflow, Pytorch, LLMs, Yolov8, DeepFace, RetinaFace, ArcFace, OpenCV, Docker, GitHub</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-4 px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white ">Contact Me</h2>
            <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-white">
              Reach out to me via:
            </p>
          </div>
          <div className="flex items-center gap-2">
                <img
                  alt="Company Logo"
                  className="rounded-full"
                  height="60"
                  src="/social.png"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="60"
                />
                <Link className="text-2xl font-bold sm:text-2xl md:text-2xl text-white" href="https://www.linkedin.com/in/apoorv-arora-0903681a1/">apoorv-arora</Link>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="Company Logo"
                  className="rounded-full"
                  height="60"
                  src="/gmail.png"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="60"
                />
                <div className="text-2xl font-bold sm:text-2xl md:text-2xl text-white">apoorvarora3110@gmail.com</div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="Company Logo"
                  className="rounded-full"
                  height="60"
                  src="/call.png"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="60"
                />
                <div className="text-2xl font-bold sm:text-2xl md:text-2xl text-white">+91-7300823494</div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="Company Logo"
                  className="rounded-full"
                  height="60"
                  src="/instagram.png"
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="60"
                />
                <Link className="text-2xl font-bold sm:text-2xl md:text-2xl text-white" href="https://www.instagram.com/ig.arora_?igsh=Y25qa3Z3bm5tYWFn&utm_source=qr">ig.arora_</Link>
              </div>
        </section>
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-t from-gray-700 to-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-white">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  )
}

