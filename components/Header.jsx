"use client";

import { useStoreUser } from "@/hooks/use-store-user";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { BarLoader } from "react-spinners";
import { usePathname } from "next/navigation";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

export default function Header() {
  const { isLoading } = useStoreUser();
  const path = usePathname();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 border-b">
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            width={160}
            height={50}
            alt="Spliter Logo"
            className="cursor-pointer"
          />
        </Link>

        {path === "/" && (
          <div className="flex gap-6 text-sm text-gray-700 font-medium">
            <Link
              href="#feature"
              className="hover:text-black transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-black transition-colors duration-200"
            >
              How it Works
            </Link>
          </div>
        )}

        <div className="flex items-center gap-4 auth">
          <Authenticated>
            <Link href="/dashboard" className="hidden sm:block">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard size={18} />
                Dashboard
              </Button>
            </Link>

            {/* Icon-only dashboard button (on small screens) */}
            <Link href="/dashboard" className="sm:hidden">
              <Button variant="ghost" size="icon">
                <LayoutDashboard size={20} />
              </Button>
            </Link>

            <SignedIn>
              <UserButton/>
            </SignedIn>
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-900 transition-colors duration-200">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-gray-100 text-black rounded-full px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                Sign Up
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>

      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full">
         <BarLoader
            color="green"             
            height={5}                  
            width="100%"               
            speedMultiplier={1}         
            className="mx-auto"
            />
        </div>
      )}
    </header>
  );
}

    {/* 
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
     */}