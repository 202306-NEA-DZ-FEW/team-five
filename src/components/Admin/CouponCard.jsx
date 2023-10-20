const CouponCard = ({ onClick, active, number, title }) => {
    const cardClassName = `p-4 shadow-md rounded-lg cursor-pointer w-60 text-center  h-50 ${
        active ? " border-2 border-[#20DC49] text-white bg-green-500" : ""
    }`;

    return (
        <div className={cardClassName} onClick={onClick}>
            <div className='font-bold text-xl'>{number}</div>
            <div className='font-bold text-sm'>{title}</div>
        </div>
    );
};

export default CouponCard;
