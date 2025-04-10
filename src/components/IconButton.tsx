import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  icon: LucideIcon,
  label: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
  href?: string,
  className?: string,
  onClick?: () => void,
}

export function IconButton({
  icon: Icon,
  label,
  variant = "outline",
  href,
  className,
  onClick,
}: Props) {
  return(
    <Button
      variant={variant}
      size="icon"
      aria-label={label}
      title={label}
      className={className ? `${className} cursor-pointer` : "cursor-pointer"}
      onClick={() => onClick && onClick()}
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon size={1}/>
        </Link>
      ) : (
        <div className="p-4">
          <Icon className="h-[1.2rem] w-[1.2rem]"/>
        </div>
      )}
    </Button>
  )
}