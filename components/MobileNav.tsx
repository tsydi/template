import { useState } from 'react'
import { NavLinks } from './Links';
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="toggle w-56 br-10 relative z-20"
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        <span></span>
      </div>

      <motion.div
        className="mobile flex flex-col z-10 trs"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <NavLinks />
      </motion.div>
    </>
  )
}