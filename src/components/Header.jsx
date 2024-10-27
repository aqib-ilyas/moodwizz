import React from "react";
import { Sparkles } from "lucide-react";

const Header = () => {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm z-50">
            <div className="max-w-md mx-auto px-4 py-3">
                <div className="flex items-center justify-center gap-2">
                    <Sparkles
                        className="w-6 h-6 text-purple-500 animate-pulse"
                        aria-hidden="true"
                    />
                    <h1 className="text-2xl font-bold text-gray-800">
                        Mood<span className="text-purple-500">Wizz</span>
                    </h1>
                    <div className="relative">
                        <span className="absolute -top-1 -right-1 text-xl animate-bounce">
                            ✨
                        </span>
                        <span className="text-2xl">🪄</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
