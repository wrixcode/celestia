const Vision = () => {
    const vision = [
        { "title": "Technical Excellence", "dec": "Celestia aligns with the department's vision of becoming a leader in technical education, fostering a research driven and innovative environment for students to excel" },
        { "title": "Future Leaders", "dec": "We focus on developing self-motivated problem-solvers equipped with advanced tools, leadership qualities, and practical experience to excel in their careers" },
        { "title": "Industry Integration", "dec": "Through robust industry connections and cutting-edge research, Celestia fosters entrepreneurship and prepares students to become skilled, ethical engineers ready for future challenges." }
    ];

    return (
        <>
            <div className="vision-head text-center text-5xl my-20">
                Our Vision
            </div>

            <div className="vision-content w-full flex flex-wrap justify-center items-center md:gap-16">
                {
                    vision.map((item, index) => (
                        <div className={`cards bg-[#D9D9D9] text-black h-80 w-80 rounded-xl m-4  ${index === 1 && 'lg:scale-125'}`} key={index}>
                            <h1 className="font-bold text-3xl py-10 text-center">{item.title}</h1>
                            <p className="pb-16 px-10 text-center">{item.dec}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Vision;