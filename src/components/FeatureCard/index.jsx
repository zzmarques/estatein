import { ArrowUpRightIcon } from "@heroicons/react/24/outline";


const FeatureCard = ({ children, title }) => {
    return (
        <div className="w-[10.25rem] h-[9rem] py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-[0.625rem] relative">
            <ArrowUpRightIcon className="w-[1.625rem] h-[1.625rem] text-grey-30 absolute top-[1.24rem] left-[7.375rem]"/>
            <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[url('assets/images/illustration/bg-icon-feature-card.png'))]">
                    {children}
                </div>
                <h4 className="font-urbanist font-semibold text-[0.875rem] text-center text-white leading-[1.5]">{ title }</h4>
            </div>
        </div>
    );
};

export default FeatureCard;