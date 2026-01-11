import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'sm' | 'md' | 'lg';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  blur = 'lg',
  padding = 'md',
}) => {
  const variantClasses = {
    default: 'bg-white/10 border-white/20',
    dark: 'bg-black/40 border-white/10',
    light: 'bg-white/20 border-white/30',
  };

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        ${variantClasses[variant]}
        ${blurClasses[blur]}
        ${paddingClasses[padding]}
        border
        rounded-2xl
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
