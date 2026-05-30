export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center">
            {/* Profile Image */}
            <img src="./assets/image1.png" alt="Arya Bardhan Singh Chauhan" className="object-cover w-32 rounded-full aspect-square" />
            
            {/* Introduction greeting */}
            <h3 className="flex items-end gap-2 mb-3 text-xl md:text-2xl font-Ovo">
                Hi! I&apos;m Arya Bardhan Singh Chauhan
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            
            {/* Core headline */}
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight">
                Full-Stack Web Developer & AI/ML Enthusiast.
            </h1>
            
            {/* Short professional summary */}
            <p className="max-w-2xl mx-auto text-gray-600 font-Ovo dark:text-gray-300">
                I am a Computer Science student at VIT Bhopal University specializing in the MERN stack, Tailwind CSS, and building intelligent web applications powered by Machine Learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent transition-transform hover:scale-105">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                {/* Pointed href to a standard resume PDF name instead of a dev-icon image */}
                <a href="./assets/resume.pdf" download="Arya_Chauhan_Resume.pdf"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white transition-transform hover:scale-105">
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}