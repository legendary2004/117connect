const AccordionItem = () => {
    return (
        <div className="w-full">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" className="flex items-center justify-between w-full bg-gradient-to-r from-sky-600 to-90% to-sky-500 rounded-full px-10 py-4 font-medium text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <div className="text-start text-white">
                    <p className="text-xl font-bold">Kristi Mihali</p>
                    <p className="text-md">Drejtor mafie / Tifoz interi me certifikat</p>
                </div>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem