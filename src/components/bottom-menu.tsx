import {Telescope, User, Wallet} from "lucide-react";
import Link from "next/link";

export const BottomMenu = () => {
    return (
        <nav
            className="fixed bottom-0 left-0 w-full px-4 py-4 bg-background/70 backdrop-blur-sm border-t z-10">
            <div className="flex justify-between items-center text-center">

                <Link href="/explore"
                      className={`flex flex-col items-center`}>
                    <Telescope className="h-6 w-6"/>
                    <span className="text-sm font-semibold">Explore</span>
                </Link>

                <Link href="/wallet"
                      className={`flex flex-col items-center`}>
                    <Wallet className="h-6 w-6"/>
                    <span className="text-sm font-semibold">Wallet</span>
                </Link>

                <Link href="/profile"
                      className={`flex flex-col items-center`}>
                    <User className="h-6 w-6"/>
                    <span className="text-sm font-semibold">Profile</span>
                </Link>
            </div>
        </nav>
    );
};