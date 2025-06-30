import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ImgIlus from "../../../../assets/images/illustration/ilustracao.png";
import TxtCicle from "../../../../assets/images/random/txt-circle.png";
import Button from "../../../Button";
import MetricCard from "../../../MetricCard";
import FeatureCard from "../../../FeatureCard";

const HeroSection = () => {
    return (
        <section className="max-w-[390px] h-[1251px] px-4 mt-10 mx-auto flex flex-col gap-10 lg:max-w-[90rem] lg:h-auto lg:gap-0 lg:px-0 lg:mt-0">
        
            <div className="max-w-[358px] h-[890px] relative lg:w-full lg:h-auto lg:flex lg:flex-row-reverse lg:gap-[3.75rem] lg:max-w-none">

                <div className=" w-full h-[302px] rounded-xl border  border-grey-10 bg-url bg-[url('assets/images/illustration/hero-abstract.png')] bg-cotain bg-center lg:w-[43.125rem] lg:h-[38.875rem] lg:bg-[url('assets/images/illustration/hero-abstract-lap.png')]">
                    <img src={ImgIlus} alt="imagem ilustrativa" className="w-full h-full rounded-xl object-cover"/>
                </div>

                <div className="flex flex-col gap-10 absolute top-[221px] lg:relative lg:w-[43.125rem] lg:h-[38.875rem] lg:justify-center lg:gap-[3.125rem] lg:top-auto lg:pl-20">

                    <div className="flex flex-col gap-4 lg:gap-5 lg:relative">
                        <div className="w-[117px] h-[117px] flex items-center justify-center relative bg-grey-08 rounded-full border-[1.08px] border-grey-15 lg:absolute lg:w-[8.0625rem] lg:h-[8.0625rem] lg:border-[0.073125rem] lg:top-[-0.1875rem] lg:left-[37.8125rem]">

                            <div className="w-[53.18px] h-[53.18px] flex items-center justify-center rounded-full bg-grey-10 border border-grey-15 lg:w-[3.665rem] lg:h-[3.665rem] lg:border-[0.073125rem]">
                                <ArrowUpRightIcon className="w-[21.77px] h-[21.77px] text-white lg:w-[24px] lg:h-[24px] 2xl:w-[34px] 2xl:h-[34px]" />
                            </div>

                            <img src={TxtCicle} alt="texto circular" className="w-[96.12px] h-[96.05px] absolute lg:w-[6.624375rem] lg:h-[6.62rem]"/>
                        </div>

                        <h1 className="font-urbanist font-semibold text-[1.75rem] leading-[1.2] text-white lg:text-[2.875rem]">Discover Your Dream Property with Estatein</h1>

                        <p className="font-urbanist font-medium text-[0.875rem] leading-[1.5] text-grey-60 lg:text-[1rem]">
                            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                        </p>
                    </div>
                    
                    <div className="w-full h-[114px] flex flex-col gap-4 lg:flex-row lg:h-auto">
                        <Button custom="lg:w-[6.9375rem]">
                            Learn More
                        </Button>
                        <Button 
                            version="sec"
                            custom="lg:w-[9.4375rem]"
                        >
                            Browse Properties
                        </Button>
                    </div>

                    <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">

                        <div className="flex gap-3 lg:gap-4">
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

            <div className="max-w-[22.375rem] h-[19.875rem] flex flex-col gap-2.5 p-2.5 border border-grey-15 rounded-[0.75rem] shadow-[0_0_0_4px_#191919] lg:max-w-none lg:h-[11.25rem] lg:flex-row lg:shadow-[0_0_0_6px_#191919]">
                <div className="flex gap-2.5 lg:w-2/4">
                    <FeatureCard title="Find Your Dream Home">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="w-5 h-5 text-purple-75 lg:w-[1.5rem] lg:h-[1.5rem]"
                        >
                            <path d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z" />
                        </svg>

                    </FeatureCard>
                    <FeatureCard title="Unlock Property Value">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-5 h-5 text-purple-75 lg:w-[1.5rem] lg:h-[1.5rem]"
                        >
                            <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                            <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                            <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                            </svg>

                    </FeatureCard>
                </div>

                <div className="flex gap-2.5 lg:w-2/4">
                    <FeatureCard title="Effortless Property Management">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="w-5 h-5 text-purple-75 lg:w-[1.5rem] lg:h-[1.5rem]"
                        >
                            <path fillRule="evenodd" d="M1 2.75A.75.75 0 0 1 1.75 2h10.5a.75.75 0 0 1 0 1.5H12v13.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H2v-13h-.25A.75.75 0 0 1 1 2.75ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM8 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM8.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM14.25 6a.75.75 0 0 0-.75.75V17a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5H18v-9h.25a.75.75 0 0 0 0-1.5h-4Zm.5 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" clipRule="evenodd" />
                        </svg>

                    </FeatureCard>
                    <FeatureCard title="Smart Investments, Informed Decisions">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="w-5 h-5 text-purple-75 lg:w-[1.5rem] lg:h-[1.5rem]" 
                        >
                            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                        </svg>

                    </FeatureCard>
                </div>
            </div>
            
    </section>
    );
};

export default HeroSection;