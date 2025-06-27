import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ImgIlus from "../../../../assets/images/illustration/ilustracao.png";
import TxtCicle from "../../../../assets/images/random/txt-circle.png";
import Button from "../../../Button";
import MetricCard from "../../../MetricCard";

const HeroSection = () => {
    return (
        <section className="max-w-[390px] h-[1251px] px-4 mt-10 mx-auto">
        
            <div className="max-w-[358px] h-[505px] relative">

                <div className=" w-full h-[302px] rounded-xl border  border-grey-10 bg-url bg-[url('assets/images/illustration/hero-abstract.png')] bg-cotain bg-center">
                    <img src={ImgIlus} alt="imagem ilustrativa" className="w-full h-full"/>
                </div>

                <div className="flex flex-col gap-10 absolute top-[221px]">

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
                    
                    <div className="w-full h-[114px] flex flex-col gap-4">
                        <Button >
                            Learn More
                        </Button>
                        <Button version="sec">
                            Browse Properties
                        </Button>
                    </div>

                    <div className="flex flex-col gap-3">

                        <div className="flex gap-3">
                            <MetricCard 
                                number="200+" 
                                label="Happy Customers" 
                                custom="w-[10.8125rem]"
                            />
                            <MetricCard 
                                number="10k+" 
                                label="Properties For Clients" 
                                custom="w-[10.8125rem]"
                            />
                        </div>

                        <MetricCard 
                            number="16+" 
                            label="Years of Experience" 
                            custom="w-full"    
                        />
                    </div>
                </div>
            </div>

            
    </section>
    );
};

export default HeroSection;