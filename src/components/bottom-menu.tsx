import {Telescope, User, Wallet} from "lucide-react";
import Link from "next/link";

export const BottomMenu = () => {
    return (
        <nav
            className="sticky bottom-0 left-0 w-full px-4 py-2 bg-background/70 backdrop-blur-sm rounded-t-lg border-t z-10">
            <div className="flex justify-between items-center text-center">

                <Link href="/explore" className="flex flex-col items-center group">
                    <div
                        className="p-2 rounded-full group-hover:bg-primary/10 transition-colors duration-200 ease-in-out">
                        <Telescope
                            className="h-6 w-6 group-hover:text-primary transition-transform transform group-hover:scale-110 duration-200 ease-in-out"/>
                    </div>
                    <span
                        className="text-sm font-semibold group-hover:text-primary transition-colors duration-200 ease-in-out">
                        Explore
                    </span>
                </Link>

                <Link href="/wallet" className="flex flex-col items-center group">
                    <div
                        className="p-2 rounded-full group-hover:bg-primary/10 transition-colors duration-200 ease-in-out">
                        <Wallet
                            className="h-6 w-6 group-hover:text-primary transition-transform transform group-hover:scale-110 duration-200 ease-in-out"/>
                    </div>
                    <span
                        className="text-sm font-semibold group-hover:text-primary transition-colors duration-200 ease-in-out">
                        Wallet
                    </span>
                </Link>

                <Link href="/profile" className="flex flex-col items-center group">
                    <div
                        className="p-2 rounded-full group-hover:bg-primary/10 transition-colors duration-200 ease-in-out">
                        <User
                            className="h-6 w-6 group-hover:text-primary transition-transform transform group-hover:scale-110 duration-200 ease-in-out"/>
                    </div>
                    <span
                        className="text-sm font-semibold group-hover:text-primary transition-colors duration-200 ease-in-out">
                        Profile
                    </span>
                </Link>
            </div>
        </nav>
    );
};