import { ArrowUpRightIcon } from "@heroicons/react/24/outline";


const FeatureCard = ({ children, title }) => {
    return (
        <div className="w-[10.25rem] h-[9rem] py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-[0.625rem] relative lg:w-full lg:h-[10rem] lg:py-[1.875rem] lg:px-4">

            <ArrowUpRightIcon className="w-[1.625rem] h-[1.625rem] text-grey-30 absolute top-[1.24rem] left-[7.375rem] lg:left-[195px]"/>

            <div className="flex flex-col items-center justify-center lg:gap-4">

                <div className="w-12 h-12 flex items-center justify-center bg-[url('assets/images/illustration/bg-icon-feature-card.png'))] bg-no-repeat bg-center lg:w-[3.75rem] lg:h-[3.75rem]"> 
                    {children}
                </div>

                <h4 className="font-urbanist font-semibold text-[0.875rem] text-center text-white leading-[1.5] lg:text-[1rem]">{ title }</h4>
            </div>
        </div>
    );
};

export default FeatureCard;