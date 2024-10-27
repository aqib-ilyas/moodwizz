import React from "react";

const MoodImage = ({ mood }) => {
    const svgContent = {
        happy: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#FFE082" />
                <circle cx="70" cy="80" r="10" fill="#424242" />
                <circle cx="130" cy="80" r="10" fill="#424242" />
                <path
                    d="M60,120 Q100,160 140,120"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M40,40 L80,30 M120,30 L160,40"
                    fill="none"
                    stroke="#FFA000"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
            </svg>
        ),
        sad: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#90CAF9" />
                <circle cx="70" cy="80" r="10" fill="#424242" />
                <circle cx="130" cy="80" r="10" fill="#424242" />
                <path
                    d="M60,140 Q100,100 140,140"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M70,50 L90,60 M110,60 L130,50"
                    fill="none"
                    stroke="#1976D2"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M60,110 L50,140 M140,110 L150,140"
                    fill="none"
                    stroke="#64B5F6"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        ),
        angry: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#EF9A9A" />
                <circle cx="70" cy="90" r="10" fill="#424242" />
                <circle cx="130" cy="90" r="10" fill="#424242" />
                <path
                    d="M70,140 L130,140"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M50,60 L90,70 M110,70 L150,60"
                    fill="none"
                    stroke="#C62828"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path
                    d="M40,30 Q50,20 60,30 M140,30 Q150,20 160,30"
                    fill="none"
                    stroke="#C62828"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        ),
        loved: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#F48FB1" />
                <circle cx="70" cy="90" r="8" fill="#424242" />
                <circle cx="130" cy="90" r="8" fill="#424242" />
                <path
                    d="M70,110 Q100,140 130,110"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M60,50 C50,40 30,40 30,60 C30,80 60,90 60,90 C60,90 90,80 90,60 C90,40 70,40 60,50"
                    fill="#E91E63"
                />
                <path
                    d="M140,50 C130,40 110,40 110,60 C110,80 140,90 140,90 C140,90 170,80 170,60 C170,40 150,40 140,50"
                    fill="#E91E63"
                />
            </svg>
        ),
        anxious: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#CE93D8" />
                <circle cx="70" cy="80" r="12" fill="#424242" />
                <circle cx="130" cy="80" r="12" fill="#424242" />
                <path
                    d="M70,120 Q100,110 130,120"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M40,70 L30,90 M160,70 L170,90"
                    fill="none"
                    stroke="#9C27B0"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M50,40 L60,50 M140,40 L150,50"
                    fill="none"
                    stroke="#9C27B0"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        ),
        tired: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#BDBDBD" />
                <path
                    d="M60,80 L80,80 M120,80 L140,80"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M80,120 L120,120"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <text
                    x="140"
                    y="60"
                    fontFamily="Arial"
                    fontSize="24"
                    fill="#616161"
                >
                    z
                </text>
                <text
                    x="160"
                    y="40"
                    fontFamily="Arial"
                    fontSize="32"
                    fill="#616161"
                >
                    Z
                </text>
            </svg>
        ),
        neutral: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#A5D6A7" />
                <circle cx="70" cy="80" r="10" fill="#424242" />
                <circle cx="130" cy="80" r="10" fill="#424242" />
                <path
                    d="M70,120 L130,120"
                    fill="none"
                    stroke="#424242"
                    strokeWidth="6"
                    strokeLinecap="round"
                />
                <path
                    d="M40,40 L60,40 M140,40 L160,40"
                    fill="none"
                    stroke="#2E7D32"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        ),
    };

    return (
        <div className="w-full aspect-square">
            {svgContent[mood.toLowerCase()] || null}
        </div>
    );
};

export default MoodImage;
