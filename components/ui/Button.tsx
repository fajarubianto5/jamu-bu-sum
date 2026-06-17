import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      primary: "bg-amber-700 text-white hover:bg-amber-800",
      outline: "border border-stone-300 bg-transparent hover:bg-stone-50 text-stone-700",
      ghost: "hover:bg-stone-100 text-stone-700"
    };
    const sizes = { sm: "h-9 px-3 text-sm", md: "h-10 px-4 py-2", lg: "h-11 px-6 text-lg" };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>{children}</button>
    );
  }
);
Button.displayName = "Button";