import React, { useState } from 'react';

function Pricing() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`}>
            <div className="container mx-auto p-6">
                <button
                    onClick={toggleDarkMode}
                    className="mb-6 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Toggle {darkMode ? 'Light' : 'Dark'} Mode
                </button>
                <section id="pricing" className="space-y-6">
                    <h2 className="text-3xl font-bold">API Pricing</h2>
                    <p className="text-lg">Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
                    <table className="w-full bg-[#1E293B] rounded-lg shadow-md border border-gray-200">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="p-4 text-left">API</th>
                                <th className="p-4 text-left">Model</th>
                                <th className="p-4 text-left">Price per 1K tokens</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="p-4">OpenAI</td>
                                <td className="p-4">GPT-3.5</td>
                                <td className="p-4">$0.002</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="p-4">OpenAI</td>
                                <td className="p-4">GPT-4</td>
                                <td className="p-4">$0.03</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="p-4">Together AI</td>
                                <td className="p-4">Llama-2-70b</td>
                                <td className="p-4">$0.0008</td>
                            </tr>
                            <tr>
                                <td className="p-4">Together AI</td>
                                <td className="p-4">Llama-2-13b</td>
                                <td className="p-4">$0.0006</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="text-2xl font-semibold">Token Estimation</h3>
                    <p className="text-lg">On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
                    <h3 className="text-2xl font-semibold">Billing</h3>
                    <p className="text-lg">You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
                </section>
            </div>
        </div>
    );
}

export default Pricing;
