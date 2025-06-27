

const Button = ({ children, version }) => {
    
    if (version === 'sec') {
        return (
            <button className="cursor-pointer w-full h-[49px] py-3.5 bg-purple-60 border border-grey-15 rounded-[0.5rem] font-urbanist font-medium text-[0.875rem] text-white leading-[1.5]">
                { children }
            </button>
        );
    };

    return (
        <button className="cursor-pointer w-full h-[49px] px-5 py-3.5 border border-grey-15 rounded-[0.5rem] font-urbanist font-medium text-[0.875rem] text-white leading-[1.5]">
            { children }
        </button>
    )
};

export default Button;