import Header from "@/components/custom/Header.tsx";

function App() {
    return (
        <>
            <Header/>
            <main className="flex-grow">
                <div className="px-4 py-10 sm:py-20 @container">
                    <div className="flex flex-col gap-8 text-center items-center">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                                Create Stunning Presentations in Seconds with AI
                            </h1>
                            <h2 className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal sm:text-base">
                                Simply enter your topic, and let our AI do the rest.
                            </h2>
                        </div>
                        <label className="flex flex-col w-full max-w-[640px] h-14 @[480px]:h-16">
                            <div
                                className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-lg">
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-xl text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-full placeholder:text-gray-400 dark:placeholder-gray-500 px-4 text-sm font-normal leading-normal @[480px]:text-base"
                                    placeholder="e.g., A marketing plan for a new tech startup"
                                    value=""/>
                                <button
                                    className="flex min-w-[100px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-r-xl h-full px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors @[480px]:text-base">
                                    <span className="truncate">Generate</span>
                                </button>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="px-4 py-5">
                    <h2 className="text-gray-800 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">My
                        Projects</h2>
                    <div className="py-3 @container">
                        <div
                            className="flex overflow-hidden rounded-xl border border-gray-200 dark:border-[#3c3c53] bg-white dark:bg-[#1C1C26]">
                            <table className="flex-1">
                                <thead className="hidden sm:table-header-group">
                                <tr className="bg-gray-50 dark:bg-[#2a2a38]">
                                    <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-300 w-[40%] text-xs font-medium uppercase tracking-wider">Project
                                        Title
                                    </th>
                                    <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-300 w-[30%] text-xs font-medium uppercase tracking-wider">Creation
                                        Date
                                    </th>
                                    <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-300 w-[30%] text-xs font-medium uppercase tracking-wider">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="flex flex-col sm:table-row border-t border-gray-200 dark:border-t-[#3c3c53] hover:bg-gray-50 dark:hover:bg-[#2f2f3f] transition-colors">
                                    <td className="px-6 py-4 w-full sm:w-auto text-gray-900 dark:text-white text-sm font-medium">Q3
                                        Sales Report
                                    </td>
                                    <td className="px-6 py-2 sm:py-4 w-full sm:w-auto text-gray-500 dark:text-[#9d9db8] text-sm">August
                                        15, 2023
                                    </td>
                                    <td className="px-6 py-4 w-full sm:w-auto text-gray-500 dark:text-[#9d9db8] text-sm font-medium">
                                        <div className="flex items-center gap-4">
                                            <button
                                                className="flex items-center gap-1 text-primary hover:underline">
                                                                <span
                                                                    className="material-symbols-outlined text-lg">edit</span> Edit
                                            </button>
                                            <button
                                                className="flex items-center gap-1 text-teal-500 hover:underline">
                                                                <span
                                                                    className="material-symbols-outlined text-lg">visibility</span> View
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="flex flex-col sm:table-row border-t border-gray-200 dark:border-t-[#3c3c53] hover:bg-gray-50 dark:hover:bg-[#2f2f3f] transition-colors">
                                    <td className="px-6 py-4 w-full sm:w-auto text-gray-900 dark:text-white text-sm font-medium">History
                                        of Ancient Rome
                                    </td>
                                    <td className="px-6 py-2 sm:py-4 w-full sm:w-auto text-gray-500 dark:text-[#9d9db8] text-sm">July
                                        28, 2023
                                    </td>
                                    <td className="px-6 py-4 w-full sm:w-auto text-gray-500 dark:text-[#9d9db8] text-sm font-medium">
                                        <div className="flex items-center gap-4">
                                            <button
                                                className="flex items-center gap-1 text-primary hover:underline">
                                                                <span
                                                                    className="material-symbols-outlined text-lg">edit</span> Edit
                                            </button>
                                            <button
                                                className="flex items-center gap-1 text-teal-500 hover:underline">
                                                                <span
                                                                    className="material-symbols-outlined text-lg">visibility</span> View
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="flex flex-col sm:table-row border-t border-gray-200 dark:border-t-[#3c3c53] hover:bg-gray-50 dark:hover:bg-[#2f2f3f] transition-colors">
                                    <td className="px-6 py-4 w-full sm:w-auto text-gray-900 dark:text-white text-sm font-medium">New
                                        Product Launch
                                    </td>
                                    <td className="px-6 py-2 sm:py-4 w-full sm:w-auto text-gray-500 dark:text-[#9d9db8] text-sm">June
                                        05, 2023
                                    </td>
                                    <td className="px-6 py-4 w-full sm:w-auto text-gray-500 dark:text-[#9d9db8] text-sm font-medium">
                                        <div className="flex items-center gap-4">
                                            <button
                                                className="flex items-center gap-1 text-primary hover:underline">
                                                                <span
                                                                    className="material-symbols-outlined text-lg">edit</span> Edit
                                            </button>
                                            <button
                                                className="flex items-center gap-1 text-teal-500 hover:underline">
                                                                <span
                                                                    className="material-symbols-outlined text-lg">visibility</span> View
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
