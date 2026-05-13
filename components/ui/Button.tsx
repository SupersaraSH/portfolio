type ButtonProps = {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
  };
  const variants = {
    primary: 'bg-navy text-white hover:bg-navy-muted',
    ghost: 'border border-stroke text-navy hover:bg-surface',
  };
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-colors ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
