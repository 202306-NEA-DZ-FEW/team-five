const ImpactCard = ({ title, description, icon }) => {
    return (
        <section>
            <div className='flex gap-1'>
                <span className='lg:text-6xl text-3xl text-[#1A8FE3]'>
                    {icon}
                </span>
                <h1 className=' text-start text-xl lg:text-4xl font-bold text-gray-800'>
                    {title}
                </h1>
            </div>
            <div className='mt-5'>
                <p className='text-[#9A9A9A] text-sm leading-6'>
                    {description}
                </p>
            </div>
        </section>
    );
};

export default ImpactCard;
