const Vision = () => {
    const vision = [{ "title": "Technical Excellence", "dec": "Celestia aligns with the department's vision of becoming a leader in technical education, fostering a research driven and innovative environment for students to excel" },
    { "title": "Future Leaders", "dec": "We focus on developing self-motivated problem-solvers equipped with advanced tools, leadership qualities, and practical experience to excel in their careers" },
    { "title": "Industry  Integration", "dec": "Through robust industry connections and cutting-edge research, Celestia fosters entrepreneurship and prepares students to become skilled, ethical engineers ready for future challenges." }];
    return (
        <>
            <div className="vision-head text-center text-5xl my-20">
                Our Vision
            </div>

            <div className="vision-content w-full  grid grid-cols-1  grid-rows-3  md:flex ">
                {
                    vision.map((item, index) => (
                        <div className={`cards bg-[#D9D9D9] text-black rounded-xl mx-20 my-10 md:my-0 md:mx-16 ${index === 1 && 'md:scale-125'}`} key={index}>
                            <h1 className="font-bold text-3xl py-10 text-center">{item.title}</h1>
                            <p className="pb-16 px-10 text-center ">{item.dec}</p>
                        </div>
                    ))
                }
            </div>
        
        </>
    );
}

export default Vision;

