

const MetricCard = ({ number, label, custom }) => {
    return (
        <div className={`${custom} h-[91px] flex flex-col items-center justify-center gap-0.5 p-4 bg-grey-10 border border-grey-15 rounded-[0.5rem]`}>
            <h3 className="font-urbanist font-bold text-2xl leading-[1.5] text-white">{number}</h3>
            <p className="font-urbanist font-medium text-[0.875rem] leading-[1.5] text-grey-60">{label}</p>
        </div>
    );
};

export default MetricCard;