import Link from "next/link"

type Props = {
  label: string,
  variant?: "default" | "outline"
  href?: string,
}

export default function CustomButton({
  label,
  variant = "default",
  href,
}: Props) {
  if(href) {
    return (
      <Link href={href}>
        <button 
          className={`cursor-pointer px-6 py-2 rounded-full 
            ${variant === "default" ? "bg-[#9293DC] text-white" : "bg-transparent border border-[#9293DC] dark:border-[#FFFFFF] text-[#9293DC]"}  
          `}
        >
          <p className="text-[25px] font-bold">{label.toLocaleUpperCase()}</p>
        </button>
      </Link>
    )
  }
  return (
    <button 
      className={`cursor-pointer px-6 py-2 rounded-full 
        ${variant === "default" ? "bg-[#9293DC] text-white" : "bg-transparent border border-[#9293DC] dark:border-[#FFFFFF]"}  
      `}
    >
      <p className="text-[25px] font-bold">{label.toLocaleUpperCase()}</p>
    </button>
  )
}