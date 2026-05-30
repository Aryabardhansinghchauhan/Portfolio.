export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png', },
        { name: 'firebase', icon: './assets/firebase.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },
        { name: 'figma', icon: './assets/figma.png', },
        { name: 'git', icon: './assets/git.png', },
    ];

    const data = [
        {
            name: 'Languages & Tech',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'JavaScript, TypeScript, React.js, Node.js, Express, MongoDB, Tailwind CSS',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'B.Tech in Computer Science - VIT Bhopal University',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built multiple full-stack platforms & AI/ML implementations',
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="mb-2 text-lg text-center font-Ovo">Introduction</h4>
            <h2 className="text-5xl text-center font-Ovo">About me</h2>

            <div className="flex flex-col items-center w-full gap-20 my-20 lg:flex-row">
                <div className="relative mx-auto max-w-max">
                    <img src='./assets/image.png' alt="Arya" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="./assets/cg.jpeg" alt="" className="absolute w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="max-w-2xl mb-10 text-gray-700 font-Ovo dark:text-gray-300">
                        I am a full-stack web developer and AI/ML enthusiast pursuing my B.Tech in Computer Science at VIT Bhopal University. I specialize in crafting scalable web architectures using the MERN stack and integrating intelligent computer vision solutions or language models to build highly practical, production-ready software.
                    </p>

                    <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
                        {data.map((item) => (
                            <li key={item.name} className="p-6 duration-500 border border-gray-300 cursor-pointer dark:border-white/30 rounded-xl hover:bg-lightHover hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={item.icon1} alt="" className="mt-3 w-7 dark:hidden" />
                                <img src={item.icon2} alt="" className="hidden mt-3 w-7 dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 duration-500 border border-gray-300 rounded-lg cursor-pointer sm:w-14 aspect-square dark:border-white/30 hover:-translate-y-1">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}