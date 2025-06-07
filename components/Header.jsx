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
import { FadeLoader } from "react-spinners"; // 👈 nice, smooth animated loader
import { usePathname } from "next/navigation";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import { Ghost, LayoutDashboard } from "lucide-react";

export default function Header() {
  const { isLoading } = useStoreUser();
  const path=usePathname()

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center gap-4">

        <Link href={'/'}>
        <Image
            src={'/logo/logo.png'}
            width={200}
            height={60}
            alt="spliter logo"
        />
        </Link>
        {path==='/' && 
            <div>
                <Link href={'#feature'}>
                Feature
                </Link>

                <Link
                href={'#how-it-works'}>
                    how it works
                </Link>
            </div>
        }
         <div>
            <Authenticated>
                <Link href={'/dashbord'}>
                <Button variant={'outline'}>
                    <LayoutDashboard/> 
                    Dashbord
                </Button>

                {/* using this when the screen is samll */}
                <Button variant={'ghost'}>
                    <LayoutDashboard/> 
                </Button>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>       
                </Link>
                
            </Authenticated>
            <Unauthenticated>

                <SignInButton>
                    <Button variant={'ghost'} className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition">
                    Sign In
                    </Button>
                </SignInButton>
                
                <SignUpButton>
                    <Button variant={'ghost'} className="px-4 py-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition">
                    Sign Up
                    </Button>
                </SignUpButton>

            </Unauthenticated>
         </div>

      </nav>

      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full">
          <FadeLoader
            color="#1f2937" 
            width={2}
            radius={2}
            margin={-5}
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