

const MetricCard = ({ number, label, custom }) => {
    return (
        <div className={`${custom} h-[91px] flex flex-col items-center justify-center gap-0.5 p-4 bg-grey-10 border border-grey-15 rounded-[0.5rem] lg:w-[12.041875rem] lg:h-[6.1875rem] lg:rounded-[0.625rem] lg:px-5 lg:py-2.5`}>
            <h3 className="font-urbanist font-bold text-2xl leading-[1.5] text-white lg:text-3xl">{number}</h3>
            <p className="font-urbanist font-medium text-[0.875rem] leading-[1.5] text-grey-60 lg:text-[1rem]">{label}</p>
        </div>
    );
};

export default MetricCard;