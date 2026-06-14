import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  as?: 'button' | 'a';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, href, as = 'button', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-all";
  
  const variants = {
    primary: "text-white bg-gradient-to-br from-[#0a3d4a] via-[#006d7a] to-[#00a8b8] shadow-[0_0_0_1px_rgba(0,245,255,0.25),0_8px_32px_rgba(0,245,255,0.15)] hover:shadow-[0_0_0_1px_rgba(0,245,255,0.45),0_12px_40px_rgba(0,245,255,0.22)]",
    secondary: "text-[#D7E2EA] border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 backdrop-blur-sm"
  };

  const Component = as === 'a' ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </Component>
  );
};

export default Button;
