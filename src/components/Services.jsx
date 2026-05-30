export default function Services() {
    const services = [
        {
            name: 'Full-Stack MERN Dev',
            icon: './assets/web-icon.png',
            description: 'Building scalable, fast web applications using MongoDB, Express, React, and Node.js paired with robust TypeScript and Tailwind CSS clean architectures.',
            link: '#project',
        },
        
        {
            name: 'AI & ML Integration',
            icon: './assets/ui-icon.png',
            description: 'Integrating intelligent features into applications, ranging from YOLO computer vision object detection systems to tailored Large Language Model (LLM) API solutions.',
            link: '#project',
        },
        {
            name: 'Backend & API Design',
            icon: './assets/graphics-icon.png',
            description: 'Crafting secure RESTful APIs, managing database schemas, handling background file streams, and deploying cost-effective cloud server controllers.',
            link: '#project',
        }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="mb-2 text-lg text-center font-Ovo">What i offer</h4>
            <h2 className="text-5xl text-center font-Ovo">My services</h2>
            
            <p className="max-w-2xl mx-auto mt-5 mb-12 text-center text-gray-600 font-Ovo dark:text-gray-300">
                Leveraging my background in Computer Science at VIT Bhopal, I design and develop high-performance web platforms, optimized frontend architectures, and custom machine learning pipelines.
            </p>

            <div className="grid gap-6 my-10 grid-cols-auto">
                {services.map((service) => (
                    <div key={service.name} className="px-8 py-12 transition-all duration-500 border border-gray-300 rounded-lg cursor-pointer dark:border-white/30 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt={service.name} className="w-10" />
                        <h3 className="my-4 text-lg font-semibold text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm leading-5 text-gray-600 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 mt-5 text-sm text-gray-700 dark:text-white hover:underline">
                            View projects <img src="./assets/right-arrow.png" alt="" className="w-4 dark:invert" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}