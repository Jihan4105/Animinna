"use client"

import Link from "next/link"
import Image from "next/image"

import { SidebarStatus } from "@/types"

import Sidebar from "@/components/Sidebar"
import { ModeToggle } from "@/components/ModeToggle"
import { IconButton } from "@/components/IconButton"

import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [sidebarStatus, setSidebarStatus] = useState<SidebarStatus>("hidden")

  return (
    <>
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center gap-5">
          <Link href="/landing">
            <Image 
              src={"/images/logo.png"}
              alt="Logo"
              className="lg:w-[200px]"
              width={100}
              height={100}
            />
          </Link>
          <Link className="hidden sm:flex" href="/library">Library</Link>
          <Link className="hidden sm:flex" href="/news">News</Link>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <IconButton 
            icon={Menu}
            label="menu"
            variant="outline"
            onClick={() => {
              setSidebarStatus(prev => prev === "open" ? "close" : "open")
            }}
            className="sm:hidden"
          />
        </div>
      </nav>
      <Sidebar status={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
    </>
  )
}