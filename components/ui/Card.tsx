type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border border-stroke bg-surface p-6 ${className}`}>
      {children}
    </div>
  );
}
