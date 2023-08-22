'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export function Slide({
  id,
  contents,
}: {
  id: number;
  contents?: React.ReactNode;
}) {
  const [isInView, setIsInView] = useState(false);

  const sectionStyle = {
    height: id === 1 ? '200vh' : '100vh',
    scrollSnapAlign: id === 1 ? 'start' : 'center',
  };

  return (
    <section style={sectionStyle}>
      <motion.div
        initial={false}
        animate={
          isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <div key={id} className="overflow-y-scroll">
          {contents}
        </div>
      </motion.div>
    </section>
  );
}
