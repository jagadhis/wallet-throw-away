import {DarkModeToggleComponent} from "@/components/dark-mode-toggle.component";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full px-4 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700 z-10">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold text-gray-800 dark:text-white">Wallet GTM</h1>
                <div>
                    <DarkModeToggleComponent />
                </div>
            </div>
        </header>
    );
};