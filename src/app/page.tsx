import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginPage() {
  return (
    <div className={`grid place-items-center w-screen h-screen bg-[url('/images/login-background.jpg')] bg-cover bg-center`}>
      <div className="flex flex-col items-center gap-2 bg-white/50 p-6 sm:p-10 rounded-lg backdrop-blur-xs">
        <Image 
          src={"/images/logo.png"}
          alt="Logo"
          width={300}
          height={300}
        />
        <p className="font-bold text-gray-500 mb-12 text-lg">Anime For Everyone. World of Otaku</p>
        <div className="w-full flex items-center justify-around">
          <LoginLink className="px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-300">SIGN IN</LoginLink>
          <RegisterLink className="px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-300">SIGN UP</RegisterLink>
        </div>
      </div>
    </div>
  );
}
