'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'SimpliFile',
    description: 'A Flutter open-source file manager app based on Material 3 Expressive design system.',
    image: 'https://raw.githubusercontent.com/IshtiAK47/simplifile/refs/heads/main/pngegg(4).png',
    tags: ['Flutter', 'Dart', 'Android'],
    demo: 'https://github.com/IshtiAK47/simplifile/releases/tag/flutter',
    github: 'https://github.com/IshtiAK47/simplifile',
  },
  {
    title: 'Project IPP',
    description: 'Web application featuring MBTI personality test and JoJo Stand reveal quiz, powered by Gemini API.',
    image: 'https://raw.githubusercontent.com/IshtiAK47/FlappyDoggoGame/refs/heads/main/icon/ipp.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Gemini API'],
    demo: 'https://ipp-blue.vercel.app/',
    github: 'https://github.com/IshtiAK47/IPP',
  },
  {
    title: 'FlappyDoggo (Web)',
    description: 'Flappy Bird-inspired browser game with day/night cycle, custom music, and hidden "Pookie" mode.',
    image: 'https://raw.githubusercontent.com/IshtiAK47/FlappyDoggo/refs/heads/main/assets/images/bg-pookiee.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    demo: 'https://ishtiak47.github.io/FlappyDoggo/',
    github: 'https://github.com/IshtiAK47/FlappyDoggo',
  },
  {
    title: 'FlappyDoggo (Mobile)',
    description: 'Mobile game built with Flutter featuring smooth controls, immersive audio, and dynamic visuals.',
    image: 'https://raw.githubusercontent.com/IshtiAK47/FlappyDoggoGame/refs/heads/main/icon/fl.png',
    tags: ['Flutter', 'Dart', 'Mobile'],
    demo: 'https://github.com/IshtiAK47/FlappyDoggoGame/releases/tag/Android',
    github: 'https://github.com/IshtiAK47/FlappyDoggoGame',
  },
  {
    title: 'AniMerit',
    description: 'Modern anime discovery app displaying top 10 airing series and movies using Jikan API.',
    image: 'https://raw.githubusercontent.com/IshtiAK47/FlappyDoggoGame/refs/heads/main/icon/anim.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://ani-merit.vercel.app/',
    github: 'https://github.com/IshtiAK47/AniMerit',
  },
  {
    title: 'UnSin',
    description: 'Quiz-based app revealing which of the seven deadly sins users align with, powered by Gemini AI.',
    image: 'https://raw.githubusercontent.com/IshtiAK47/FlappyDoggoGame/refs/heads/main/icon/unsin.png',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Gemini API'],
    demo: 'https://un-sin.vercel.app/',
    github: 'https://github.com/IshtiAK47/UnSin',
  },
  {
    title: 'Sligga',
    description: 'AI-powered presentation generator that automatically creates formatted PowerPoints with intelligent content.',
    image: 'https://raw.githubusercontent.com/IshtiAK47/FlappyDoggoGame/refs/heads/main/icon/Screenshot%202025-08-21%20171422.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Gemini API'],
    demo: 'https://sligga.vercel.app/',
    github: 'https://github.com/IshtiAK47/Sligga',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-effect rounded-2xl overflow-hidden hover-lift"
            >
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
