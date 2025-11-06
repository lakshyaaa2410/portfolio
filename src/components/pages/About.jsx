import React from "react";

function About() {
	return (
		<div className="flex max-w-1xl">
			<div className="mt-4 pr-20">
				<h1 className="about text-4xl font-semibold">About</h1>
				<div
					className="mt-8 pb-10 space-y-10 leading-7.5"
					style={{ fontFamily: "Montserrat" }}
				>
					<p>
						I'm Lakshya Choudhary, a Full-Stack Developer and DevOps
						Engineer focused on creating scalable, high-performance
						systems. I build efficient backend architectures,
						automate deployments, and ensure seamless CI/CD
						workflows. My approach bridges development and
						operations — combining frontend precision with backend
						reliability to deliver secure, production-ready
						applications that perform consistently under real-world
						conditions.
					</p>

					<p>
						I completed my Bachelor of Technology in Computer
						Science from Lovely Professional University in 2024 with
						a CGPA of 7.7. My studies strengthened my fundamentals
						in data structures, algorithms, and system design while
						introducing me to backend frameworks, cloud computing,
						and automation — shaping my engineering philosophy
						around modularity, scalability, and performance-driven
						development.
					</p>

					<p>
						My stack spans both software development and DevOps. I
						work with React.js, Node.js, Spring Boot, and MongoDB,
						and automate deployments using Docker, Terraform, and
						GitHub Actions. I focus on API design, authentication,
						and performance optimization while monitoring systems
						via Grafana and Prometheus to maintain reliability,
						scalability, and continuous delivery across
						environments.
					</p>

					<p>
						I’ve solved over 1,000 DSA problems on LeetCode and
						GeeksforGeeks and ranked globally at 139 in CodeChef
						Starters 61. I hold a 3-Star CodeChef rating and have
						completed 400+ problems on Codeforces. As a Google Cloud
						Facilitator, I deepened my cloud and DevOps skills,
						strengthening my problem-solving and technical
						adaptability.
					</p>

					<p>
						My projects merge full-stack engineering with practical
						automation.{" "}
						<span class="font-semibold italic">The Yatri</span> is a
						secure tour booking platform using Node.js, Stripe, and
						Mapbox APIs. At E4Engineer, I led backend development
						for an EV Charging System using Spring Boot and Redis
						caching, cutting latency by 97%. I also build real-time
						dashboards and RAG-based AI systems on Azure OpenAI. 🚀
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
