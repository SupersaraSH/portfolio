type BadgeProps = {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
};

export function Badge({ children, variant = 'light', className = '' }: BadgeProps) {
  const variants = {
    light: 'border-navy/30 text-navy-muted',
    dark: 'border-arcade-green/50 text-arcade-green',
  };
  return (
    <span
      className={`inline-block border px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
