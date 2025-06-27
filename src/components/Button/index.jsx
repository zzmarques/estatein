

const Button = ({ children, version }) => {
    
    if (version === 'sec') {
        return (
            <button className="cursor-pointer w-full px-3.5 py-5 bg-purple-60 border border-grey-15 rounded-[0.5rem] font-urbanist font-medium text-[0.875rem] text-white leading-[1.5]">
                { children }
            </button>
        );
    };

    return (
        <button className="cursor-pointer w-full px-3.5 py-5 border border-grey-15 rounded-[0.5rem] font-urbanist font-medium text-[0.875rem] text-white leading-[1.5]">
            { children }
        </button>
    )
};

export default Button;