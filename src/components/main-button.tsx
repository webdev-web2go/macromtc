import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface Props {
  text?: string;
  bg?: string;
}

export default function MainButton({
  children,
  className,
  href,
  text = "white",
  bg = "blue",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  Props) {
  if (href) {
    return (
      <a
        href={href}
        className={`bg-${bg} inline-block px-9 py-3 rounded-full font-bold text-${text} hover:bg-${bg}/90 transition ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`bg-${bg} inline-block px-9 py-3 rounded-full font-bold text-${text} hover:bg-${bg}/90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
