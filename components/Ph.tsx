import type { CSSProperties, ReactNode } from 'react';

interface PhProps {
  label?: string;
  className?: string;
  style?: CSSProperties;
  withTarget?: boolean;
  children?: ReactNode;
}

export default function Ph({ label, className = '', style, withTarget = true, children }: PhProps) {
  return (
    <div className={'ph ' + className} data-label={label ?? ''} style={style}>
      {withTarget && <div className="ph__target" />}
      {children}
    </div>
  );
}
