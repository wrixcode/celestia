import desktop from "../assets/images/community.svg";
const Community = () => {
    return (
        <>
             <div className="relative w-full h-full">
            <img src={desktop} className="w-full h-full hidden lg:block" alt="communityimage" />
            <img src={desktop} className="w-full h-full block lg:hidden" alt="communityimage" />
            {/* button */}
            <div className=" cursor-pointer  absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-[8px] bg-orange-500 px-1 py-2 rounded-lg font-semibold lg:text-3xl lg:p-4">Join Community</span>
            </div>
        </div>
        </>
    )
}

export default Community;