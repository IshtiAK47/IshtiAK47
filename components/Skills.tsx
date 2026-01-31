'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Layout, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Dart', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layout,
    skills: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Framer Motion', 'Material UI'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git & GitHub', 'Firebase', 'Vercel', 'Gemini API', 'VS Code', 'Figma'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My technical expertise and proficiencies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glass-effect rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                      }}
                      className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-primary-500 hover:text-primary-400 transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Responsive Design',
              'API Integration',
              'State Management',
              'Performance Optimization',
              'Version Control',
              'Agile Methodology',
              'Problem Solving',
              'Team Collaboration',
            ].map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                className="flex items-center gap-2 text-slate-300"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-lime-500" />
                <span className="text-sm">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
