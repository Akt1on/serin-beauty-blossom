import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  onClick,
  className = "",
  strength = 0.35,
  as = "button",
  href,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const style = { x: sx, y: sy };
  const common = {
    ref: ref as never,
    onMouseMove: move,
    onMouseLeave: reset,
    className,
    style,
  };

  if (as === "a" && href) {
    return (
      <motion.a href={href} aria-label={ariaLabel} {...common}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type="button" onClick={onClick} aria-label={ariaLabel} {...common}>
      {children}
    </motion.button>
  );
}
