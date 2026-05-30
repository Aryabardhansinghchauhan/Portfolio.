export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                {/* Logo Section */}
                <a href="#about">
                    <img src="./assets/img.png" alt="Logo" className="mx-auto mb-2 w-36 dark:hidden" />
                    <img src="./assets/image.jpg" alt="Logo" className="hidden mx-auto mb-2 w-36 dark:block" />
                </a>

                {/* Email Section */}
                <div className="flex items-center gap-2 mx-auto w-max">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="hidden w-5 dark:block" />

                    <a href="mailto:aryachauhan515@gmail.com" className="hover:underline">
                        aryachauhan515@gmail.com
                    </a>
                </div>
            </div>

            {/* Bottom Copyright & Social Links */}
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} Arya Bardhan Singh Chauhan. All rights reserved.</p>
                <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                    <li>
                        {/* Replace with your specific repository profile URL */}
                        <a target='_blank' rel="noreferrer" href="https://github.com" className="hover:underline">
                            GitHub
                        </a>
                    </li>
                    <li>
                        {/* Replace with your updated LinkedIn profile URL */}
                        <a target='_blank' rel="noreferrer" href="https://linkedin.com" className="hover:underline">
                            LinkedIn
                        </a>
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}