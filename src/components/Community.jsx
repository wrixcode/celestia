import communitydesktop from "../assets/images/Communitydesktop.svg";
import communitymobile from "../assets/images/Communitymobile.svg";

const Community = () => {
    return (
        <>
            <div className="relative w-full h-full">
                <img src={communitydesktop} className="w-full h-full hidden md:block" alt="communityimage" />
                <img src={communitymobile} className="w-full h-full block md:hidden" alt="communityimage" />
                {/* button */}
                <a href="https://whatsapp.com/channel/0029VaszsPx3GJP1Da46XB3u" target="_blank">
                    <div className="cursor-pointer absolute top-2/4 mt-3 md:top-2/3 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
                        <span className="text-[11px] md:text-lg bg-orange-500 px-1 py-2 rounded-lg font-semibold lg:text-3xl lg:p-4">Join Community</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Community;