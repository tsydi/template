import { useState } from 'react'
import { NavLinks } from './Links';
import { Above } from './Above';
import { motion } from "framer-motion";

const variants: any = {
  open: { x: '0' },
  closed: { x: '-100%', display: 'none' }
}

export const Overlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="toggle inset w-56 h-56 br-10 relative z-20"
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        <span></span>
      </div>

      <motion.div
        className="mobile h-full flex flex-col z-10 transition"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <Above />
        <div className="flex-col flex justify-center">
          <NavLinks />
        </div>
      </motion.div>
    </>
  )
}