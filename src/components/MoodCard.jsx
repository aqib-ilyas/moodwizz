import React from "react";

const MoodCard = ({ mood, onSelect }) => {
    return (
        <button
            onClick={onSelect}
            className={`${mood.color} rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center 
        transition-all duration-200 hover:shadow-lg active:scale-95 focus:outline-none 
        focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
            {mood.icon}
            <span className="mt-2 text-sm sm:text-base font-medium">
                {mood.label}
            </span>
        </button>
    );
};

export default MoodCard;
