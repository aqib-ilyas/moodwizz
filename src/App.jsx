import React from "react";
import MoodWizz from "./components/MoodWizz";
import Header from "./components/Header";

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-4">
                <MoodWizz />
            </main>
        </div>
    );
}

export default App;
