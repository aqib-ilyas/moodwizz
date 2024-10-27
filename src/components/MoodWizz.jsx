import React, { useState } from "react";
import { Smile, Frown, Meh, Heart, Cloud, Battery, Flame } from "lucide-react";
import MoodCard from "./MoodCard";
import DetailView from "./DetailView";

const MoodWizz = () => {
    const [selectedMood, setSelectedMood] = useState(null);

    const moods = [
        {
            icon: <Smile className="w-6 h-6 sm:w-8 sm:h-8" />,
            label: "Happy",
            color: "bg-yellow-100",
            quote: "Happiness is not something ready made. It comes from your own actions.",
            image: "/api/placeholder/400/300",
            suggestions: [
                "Share your joy with others",
                "Write down what made you happy",
                "Use this energy for a creative project",
            ],
        },
        {
            icon: <Frown className="w-6 h-6 sm:w-8 sm:h-8" />,
            label: "Sad",
            color: "bg-blue-100",
            quote: "Even the darkest night will end and the sun will rise.",
            image: "/api/placeholder/400/300",
            suggestions: [
                "Talk to a friend or family member",
                "Take a relaxing walk outside",
                "Practice self-care activities",
            ],
        },
        {
            icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8" />,
            label: "Angry",
            color: "bg-red-100",
            quote: "Speak when you are angry and you will make the best speech you will ever regret.",
            image: "/api/placeholder/400/300",
            suggestions: [
                "Take deep breaths (count to 10)",
                "Do physical exercise",
                "Write down your feelings",
            ],
        },
        {
            icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
            label: "Loved",
            color: "bg-pink-100",
            quote: "Love yourself first and everything else falls into line.",
            image: "/api/placeholder/400/300",
            suggestions: [
                "Express gratitude to loved ones",
                "Do something kind for others",
                "Create a gratitude journal",
            ],
        },
        {
            icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
            label: "Anxious",
            color: "bg-purple-100",
            quote: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
            image: "/api/placeholder/400/300",
            suggestions: [
                "Practice deep breathing exercises",
                "Try a 5-minute meditation",
                "Write down your worries",
            ],
        },
        {
            icon: <Battery className="w-6 h-6 sm:w-8 sm:h-8" />,
            label: "Tired",
            color: "bg-gray-100",
            quote: "Rest is not idleness, and sometimes lying on the grass under trees on a summer's day is the best medicine.",
            image: "/api/placeholder/400/300",
            suggestions: [
                "Take a power nap",
                "Do some light stretching",
                "Have a healthy snack",
            ],
        },
        {
            icon: <Meh className="w-6 h-6 sm:w-8 sm:h-8" />,
            label: "Neutral",
            color: "bg-green-100",
            quote: "In the middle of every difficulty lies opportunity.",
            image: "/api/placeholder/400/300",
            suggestions: [
                "Try something new today",
                "Set a small goal for yourself",
                "Connect with nature",
            ],
        },
    ];

    return (
        <div className="w-full min-h-[calc(100vh-64px)] bg-gray-50">
            {!selectedMood ? (
                <div className="max-w-md mx-auto p-4 sm:p-6">
                    <div className="max-w-md mx-auto p-4 sm:p-6">
                        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
                            How are you feeling today?
                        </h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                            {moods.map((mood) => (
                                <MoodCard
                                    key={mood.label}
                                    mood={mood}
                                    onSelect={() => setSelectedMood(mood)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <DetailView
                    mood={selectedMood}
                    onBack={() => setSelectedMood(null)}
                />
            )}
        </div>
    );
};

export default MoodWizz;
