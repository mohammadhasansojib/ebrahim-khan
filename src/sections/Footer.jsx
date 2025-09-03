

export default function Footer() {
    return (
        <>      
            <footer className="flex flex-col items-center justify-center w-full py-10 px-6 bg-gradient-to-b from-[#5524B7] to-[#380B60] text-white/70">
                {/* <h4>Md Ebrahim Hossen Khan</h4> */}
                
                <div className="flex items-center gap-4 mt-5">
                    <a href="https://www.facebook.com/mdebrahimofficial00?mibextid=ZbWKwL" target="_blank" className="hover:-translate-y-0.5 transition-all duration-300">
                        <i className="fa-brands fa-square-facebook text-3xl text-white"></i>
                    </a>
                    <a href="https://www.instagram.com/ebrahim_khan_anik?igsh=Z2Q0aWxiMDIxbHUy" target="_blank" className="hover:-translate-y-0.5 transition-all duration-300">
                        <i className="fa-brands fa-square-instagram text-3xl text-white"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/md-ebrahim-hossen-khan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:-translate-y-0.5 transition-all duration-300">
                        <i className="fa-brands fa-linkedin text-3xl text-white"></i>
                    </a>
                </div>

                <p className="mt-4 text-center">Copyright © 2025 - <a href="#">Md Ebrahim Hossen Khan</a>. All rights reservered.</p>
            </footer>
        </>
    );
};