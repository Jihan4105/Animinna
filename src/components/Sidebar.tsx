import { Dispatch, SetStateAction } from "react";
import type { SidebarStatus } from "@/types";

export default function Sidebar({ status, setSidebarStatus }: {
  status: SidebarStatus,
  setSidebarStatus: Dispatch<SetStateAction<SidebarStatus>>
}) {
  return (
    <div className={`fixed top-0 right-0 h-screen w-1/2 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ${status === "open" ? "translate-x-0" : "translate-x-full"} sm:hidden`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => {setSidebarStatus("close")}}>
          Close
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li><a href="/library" className="block text-gray-800 dark:text-gray-200">Library</a></li>
          <li><a href="/news" className="block text-gray-800 dark:text-gray-200">News</a></li>
        </ul>
      </nav>
    </div>
  )
}