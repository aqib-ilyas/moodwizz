import React from "react";
import { ArrowLeft } from "lucide-react";
import MoodImage from "./MoodImage";

const DetailView = ({ mood, onBack }) => {
    return (
        <div className="max-w-md mx-auto p-4 sm:p-6">
            <button
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-4 focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-1"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Back</span>
            </button>

            <div className={`rounded-lg p-4 sm:p-6 ${mood.color}`}>
                <div className="flex items-center justify-center mb-4">
                    {mood.icon}
                    <h2 className="text-lg sm:text-xl font-bold ml-2">
                        {mood.label}
                    </h2>
                </div>

                <div className="w-full max-w-xs mx-auto mb-4">
                    <MoodImage mood={mood.label} />
                </div>

                <blockquote className="text-base sm:text-lg italic text-center mb-6 px-2 sm:px-4">
                    "{mood.quote}"
                </blockquote>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold mb-3">Suggested Actions:</h3>
                    <ul className="space-y-2">
                        {mood.suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="flex items-center text-sm sm:text-base"
                            >
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailView;
