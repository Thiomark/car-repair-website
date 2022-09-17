import React from 'react'

const Testimonials = () => {
    return (
        <section className="relative flex bg-white dark:bg-gray-800 border-y-0 border-opacity-20 border-gray-600">
            <div className="absolute hidden xl:block w-1/4 top-0 bottom-0 right-0 bg-blue-500 md:w-2/5"></div>
            <div className="flex flex-col z-10 justify-center w-full px-4 py-10 container mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl xl:text-5xl dark:text-white">
                    What our <span className="text-blue-500">customers</span> <br/> are saying
                </h1>

                <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(4)].map((item, index) => (<div key={index} className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-900">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
                            odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
                        </p>

                        <div className="flex items-center mt-6 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Robbert</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                            </div>
                        </div>
                    </div>))}
                </div>

                <div className="items-center hidden mt-12 2xl:flex">
                    <button className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials