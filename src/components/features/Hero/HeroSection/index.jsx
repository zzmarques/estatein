import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ImgIlus from "../../../../assets/images/illustration/ilustracao.png";
import TxtCicle from "../../../../assets/images/random/txt-circle.png";

const HeroSection = () => {
    return (
        <section className="max-w-[390px] h-dvh px-4 mt-10 mx-auto relative">
        
            <div className="max-w-[358px] w-full h-[302px] rounded-xl border  border-grey-10 bg-url bg-[url('assets/images/illustration/hero-abstract.png')] bg-cotain bg-center">
                <img src={ImgIlus} alt="imagem ilustrativa" className="w-full h-full"/>
            </div>

            <div className="absolute top-[221px]">
                <div className="flex flex-col gap-4">
                    <div className="w-[117px] h-[117px] flex items-center justify-center relative bg-grey-08 rounded-full border-[1.08px] border-grey-15">

                        <div className="w-[53.18px] h-[53.18px] flex items-center justify-center rounded-full bg-grey-10 border border-grey-15">
                            <ArrowUpRightIcon className="w-[21.77px] h-[21.77px] text-white lg:w-[24px] lg:h-[24px] 2xl:w-[34px] 2xl:h-[34px]" />
                        </div>

                        <img src={TxtCicle} alt="texto circular" className="w-[96.12px] h-[96.05px] absolute"/>
                    </div>

                    <h1 className="font-urbanist font-semibold text-[1.75rem] leading-[1.2] text-white">Discover Your Dream Property with Estatein</h1>

                    <p className="font-urbanist font-medium text-[0.875rem] leading-[1.5] text-grey-60">
                        Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                    </p>
                </div>
            </div>
            
    </section>
    );
};

export default HeroSection;