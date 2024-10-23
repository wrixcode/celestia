import communityimage from "../assets/images/Community.svg";

const Community = () => {
    return (
        <>
            <div className="relative w-full h-full">
                <img src={communityimage} className="w-full h-full" alt="communityimage" />
                {/* button */}
                <a href="https://whatsapp.com/channel/0029VaszsPx3GJP1Da46XB3u" target="_blank">
                    <div className="cursor-pointer absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-[7px] bg-orange-500 px-1 py-2 rounded-lg font-semibold lg:text-3xl lg:p-4">Join Community</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Community;