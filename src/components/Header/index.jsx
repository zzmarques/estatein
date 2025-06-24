import Logo from "../../assets/images/logo/Logo.png"
import Close from "../../assets/images/icons/close.png"
import Menu from "../../assets/images/icons/hamburger.png"


const Header = () => {
    return (
        <header className="bg-grey-10 w-full min-w-[390px]">

            <div className="w-full h-[78px] pt-10 pb-5 px-4 bg-[url('assets/images/illustration/abstract-design.png')] bg-no-repeat bg-cover bg-bottom border-b border-grey-15">

                <div className="max-w-[390px] w-full flex items-center justify-between mx-auto">
                    
                    <div className="flex items-center gap-1.5">
                        <p className="font-urbanist text-[12px] font-medium text-white leading-relaxed">✨Discover Your Dream Property with Estatein</p>

                        <a href="#" className="font-urbanist text-[12px] font-medium text-white leading-relaxed underline">Learn More</a>
                    </div>

                    <button className="flex items-center justify-center w-[26px] h-[26px] rounded-full px-1 py-1 bg-white/10 cursor-pointer">
                        <img src={Close} alt="icon X" className="w-[9px] h-[9px]"  />
                    </button>
                </div>
            </div>

            <nav className="w-full h-[68px] px-4 py-5 border-b border-dark-blue-15">

                <div className="max-w-[390px] w-full flex items-center justify-between mx-auto">

                    <div className="w-[93.33px] h-[28px]">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div>
                        <div className="w-7 h-7 flex items-center justify-center">
                            <img src={Menu} alt="Icon Menu" className="w-[21px] h-3.5"/>
                        </div>

                        <ul className="hidden">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Properties</li>
                            <li>Services</li>
                        </ul>


                        <button className="hidden">Contact Us</button>
                    </div>
                </div>
                
            </nav>
        </header>
    );
};

export default Header;