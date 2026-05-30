export default function Work() {
    const work = [
        {
            name: 'Thumblify',
            icon: './assets/work-1.png',
            description: 'AI Thumbnail Generator (Gemini Flash API)',
            link: 'https://github.com/Aryabardhansinghchauhan', 
        },
        {
            name: 'RooMantra',
            icon: './assets/work-2.png',
            description: 'Full-Stack Hotel Booking Platform',
            link: 'https://github.com/Aryabardhansinghchauhan',
        },
        {
            name: 'Medical Waste Detector',
            icon: './assets/work-3.png',
            description: 'Computer Vision & AI (YOLOv8 & CNN)',
            link: 'https://github.com/Aryabardhansinghchauhan',
        },
        {
            name: 'Food Delivery Site',
            icon: './assets/work-4.png',
            description: 'MERN Stack Application',
            link: 'https://github.com/Aryabardhansinghchauhan',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="mb-2 text-lg text-center font-Ovo">My portfolio</h4>
            <h2 className="text-5xl text-center font-Ovo">My latest work</h2>
            
            {/* Updated intro to emphasize full-stack and AI expertise */}
            <p className="max-w-2xl mx-auto mt-5 mb-12 text-center text-gray-600 font-Ovo dark:text-gray-300">
                Welcome to my development portfolio! Explore a collection of applications showcasing my expertise in full-stack MERN engineering, intelligent API integrations, and computer vision pipelines.
            </p>

            <div className="grid gap-5 my-10 grid-cols-auto dark:text-black">
                {work.map((project) => (
                    <a 
                        key={project.name} 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="relative block bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer aspect-square group" 
                        style={{ backgroundImage: `url(${project.icon})` }}
                    >
                        <div className="absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 -translate-x-1/2 bg-white rounded-md shadow-md bottom-5 left-1/2 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold text-gray-900">{project.name}</h2>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-colors duration-300">
                                <img src="./assets/send-icon.png" alt="View project" className="w-5" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            
            {/* Link to your main GitHub account profile to explore the rest of your repositories */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-2 mx-auto my-20 text-gray-700 duration-300 border border-gray-300 rounded-full w-max dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="hidden w-4 dark:block" />
            </a>
        </div>
    )
}