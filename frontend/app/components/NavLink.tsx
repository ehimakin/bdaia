"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        "relative py-1 text-sm font-medium transition-colors",
        "text-ink-700 hover:text-brand-700",
        "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-brand-700 after:transition-transform after:duration-300 after:ease-out",
        isActive
          ? "text-brand-800 after:scale-x-100"
          : "after:origin-center after:scale-x-0 hover:after:scale-x-100"
      )}
    >
      {children}
    </Link>
  );
}

