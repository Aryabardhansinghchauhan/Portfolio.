import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        
        // Safely extract h-captcha text token to avoid crashes if script hasn't rendered it yet
        const hCaptcha = event.target.querySelector('textarea[name="h-captcha-response"]')?.value;
        if (!hCaptcha) {
            setResult("Please fill out captcha field");
            return;
        }
        
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below ---------
        formData.append("access_key", "60aaf832-b3bf-46f0-9066-795ff54a2fe7");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                setResult(res.message);
                event.target.reset();
            } else {
                console.log("Error", res);
                setResult(res.message);
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("Something went wrong. Please try again.");
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) scriptSrc += `&hl=${lang}`;
            if (onload) scriptSrc += `&onload=${onload}`;
            if (render) scriptSrc += `&render=${render}`;

            // Prevent duplicate script attachments
            if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.defer = true;
                script.src = scriptSrc;
                document.body.appendChild(script);
            }
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <h4 className="mb-2 text-lg text-center font-Ovo">Connect with me</h4>
            <h2 className="text-5xl text-center font-Ovo">Get in touch</h2>
            <p className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo">
                I&apos;d love to hear from you! If you have any questions, project ideas, or networking inquiries, please drop a message below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                {/* Updated hidden tracking subject with your professional identity */}
                <input type="hidden" name="subject" value="Arya Bardhan - Portfolio Contact Submission" />

                <div className="grid gap-6 mt-10 mb-8 grid-cols-auto">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md outline-none focus:ring-1 dark:border-white/30 dark:bg-darkHover/30" required name="name" />
                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md outline-none focus:ring-1 dark:border-white/30 dark:bg-darkHover/30" required name="email" />
                </div>
                
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 mb-6 bg-white border border-gray-300 rounded-md outline-none focus:ring-1 dark:border-white/30 dark:bg-darkHover/30" required name="message"></textarea>
                <div className="max-w-full mb-6 h-captcha" data-captcha="true"></div>
                
                <button type='submit' className="flex items-center justify-between gap-2 px-8 py-2 mx-auto text-white transition-all duration-500 transform rounded-full w-max bg-black/80 hover:bg-black dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover hover:scale-105">
                    Submit now
                    <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                
                <p className={`mt-4 text-center text-sm font-Ovo ${result.includes('Success') || result.includes('thank') ? 'text-green-600' : 'text-gray-600 dark:text-gray-300'}`}>
                    {result}
                </p>
            </form>
        </div>
    )
}
