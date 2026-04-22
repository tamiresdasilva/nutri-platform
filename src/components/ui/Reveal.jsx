import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Component = "div",
  ...props
}) {
  const distance = 12; // 👈 antes devia estar alto (tipo 40)

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : 0,
      x:
        direction === "left"
          ? distance
          : direction === "right"
          ? -distance
          : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.45, // 👈 um pouco mais suave
        ease: [0.22, 1, 0.36, 1], // 👈 easing premium (easeOutExpo feel)
        delay,
      },
    },
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }} // 👈 começa antes de entrar 100%
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}