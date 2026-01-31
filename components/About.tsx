'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Projects Completed', value: '7+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Dedication', value: '100%' },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get to know more about what I do
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a dedicated developer-in-training with a keen interest in modern web 
              technologies and mobile development. My journey in tech is driven by a 
              passion for problem-solving and creating intuitive user experiences.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Currently pursuing a BSc in ICT Engineering, I specialize in building 
              full-stack web applications and mobile apps. I thrive in collaborative 
              environments and am always eager to learn new technologies and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center hover-lift"
              >
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
