export default function ContentAnimation() {
    return (
        <div className="w-full flex gap-[16px] justify-between no-scrollbar overflow-x-auto">
            {/* Item 1 */}
            <div className="cursor-pointer group relative min-w-[298px] min-h-[136px] md:min-w-[442px] flex md:min-h-[156px] shadow-content_animation overflow-hidden bg-[radial-gradient(ellipse_89.74%_89.74%_at_50.00%_89.74%,_#3F3074_0%,_#302443_100%)] rounded-[16px] transition-all ease-linear delay-75 will-change-transform hover:translate-y-[-2px]  ">
                <div className="flex flex-col gap-[4px] pl-[16px] pb-[16px] h-full justify-end w-[180px] md:w-[200px]">
                    <h6 className="text-[#FFF] text-[20px] font-semibold leading-[24px]">
                        Run your Idea
                    </h6>
                    <span className="text-[#A597D6] text-[14px] leading-[18px] ">
                        Personalized bag setup in seconds
                    </span>
                </div>
                <div className="">
                    <img
                        className="w-[190px] h-[190px] md:w-[251px] md:h-[251px] right-[-50px] bottom-[-55px] md:right-0 md:bottom-[-95px] absolute transition-all group:ease-linear delay-74 will-change-transform group-hover:translate-y-[-8px]"
                        src="/content_animation/img1.png"
                    />

                    <div className="w-[442px] h-[251px] right-0 bottom-[10px] absolute mix-blend-soft-light  bg-[#7752FF] bg-opacity-20 " />
                </div>
                <div className="w-full h-[1px] absolute bg-shadow_white shadow-content_animation2 bottom-[-50px] group-hover:bottom-[-30px] transition-all ease-linear"></div>
            </div>

            {/* Item 2 */}
            <div className="cursor-pointer group relative min-w-[298px] min-h-[136px] md:min-w-[442px] flex md:min-h-[156px] shadow-content_animation overflow-hidden bg-[radial-gradient(ellipse_89.74%_89.74%_at_50.00%_89.74%,_#3F3074_0%,_#302443_100%)] rounded-[16px] transition-all ease-linear delay-75 will-change-transform hover:translate-y-[-2px]  ">
                <div className="flex flex-col gap-[4px] pl-[16px] pb-[16px] h-full justify-end w-[170px] md:w-[200px]">
                    <h6 className="text-[#FFF] text-[20px] font-semibold leading-[24px]">
                        Leaderboard
                    </h6>
                    <span className="text-[#A597D6] text-[14px] leading-[18px]">
                        Track top performers & climb the ranks
                    </span>
                </div>
                <div className="">
                    <img
                        className="absolute top-[10px] md:top-[10px] w-[260px] h-[140px] md:w-auto md:h-auto right-[-40px]   md:right-[1px]  transition-all group:ease-linear delay-74 will-change-transform group-hover:translate-y-[-8px]"
                        src="/content_animation/img2.png"
                    />

                    <div className=" w-[442px] h-[251px] right-0 bottom-[10px] absolute mix-blend-soft-light  bg-[#7752FF] bg-opacity-20 " />
                </div>
                <div className="w-full h-[1px] absolute bg-shadow_white shadow-content_animation2 bottom-[-50px] group-hover:bottom-[-30px] transition-all ease-linear"></div>
            </div>

            {/* Item 3 */}
            <div className="cursor-pointer group relative min-w-[298px] min-h-[136px] md:min-w-[442px] flex md:min-h-[156px] shadow-content_animation overflow-hidden bg-[radial-gradient(ellipse_89.74%_89.74%_at_50.00%_89.74%,_#3F3074_0%,_#302443_100%)] rounded-[16px] transition-all ease-linear delay-75 will-change-transform hover:translate-y-[-2px]  ">
                <div className="flex flex-col gap-[4px] pl-[16px] pb-[16px] h-full justify-end w-[170px] md:w-[200px]">
                    <h6 className="text-[#FFF] text-[20px] font-semibold leading-[24px]">
                        Invite a Friend
                    </h6>
                    <span className="text-[#A597D6] text-[14px] leading-[18px]">
                        Earn rewards by growing the network
                    </span>
                </div>
                <div className="">
                    <img
                        className="rotate-[6deg] w-[190px] h-[190px] md:w-[275px] md:h-auto top-[-20px] md:top-[-40px]  absolute right-[-40px]  transition-all group:ease-linear delay-74 will-change-transform group-hover:translate-y-[-8px]"
                        src="/content_animation/img3.png"
                    />

                    <div className="w-[442px] h-[251px] right-0 bottom-[10px] absolute mix-blend-soft-light  bg-[#7752FF] bg-opacity-20 " />
                </div>
                <div className="w-full h-[1px] absolute bg-shadow_white shadow-content_animation2 bottom-[-50px] group-hover:bottom-[-30px] transition-all ease-linear"></div>
            </div>
        </div>
    );
}
