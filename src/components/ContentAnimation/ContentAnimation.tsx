export default function ContentAnimation() {
    return (
        <div className="w-full flex gap-[16px] justify-between">
            {/* Item 1 */}
            <div className="cursor-pointer group relative w-[442px] flex h-[156px] shadow-content_animation overflow-hidden bg-[radial-gradient(ellipse_89.74%_89.74%_at_50.00%_89.74%,_#3F3074_0%,_#302443_100%)] rounded-[16px] transition-all ease-linear delay-75 will-change-transform hover:translate-y-[-2px]  ">
                <div className="flex flex-col gap-[4px] pl-[16px] pb-[16px] w-[200px] h-full justify-end">
                    <h6 className="text-[#FFF] text-[20px] font-semibold leading-normal">
                        Run your Idea
                    </h6>
                    <span className="text-[#A597D6] text-[14px] leading-[18px]">
                        Personalized bag setup in seconds
                    </span>
                </div>
                <div className="">
                    <img
                        className="w-[251px] h-[251px]  transition-all group:ease-linear delay-74 will-change-transform group-hover:translate-y-[-8px]"
                        src="/content_animation/img1.png"
                    />

                    <div className="w-[442px] h-[251px] right-0 bottom-[10px] absolute mix-blend-soft-light  bg-[#7752FF] bg-opacity-20 " />
                </div>
            </div>

            {/* Item 2 */}
            <div className="cursor-pointer group relative w-[442px] flex h-[156px] shadow-content_animation overflow-hidden bg-[radial-gradient(ellipse_89.74%_89.74%_at_50.00%_89.74%,_#3F3074_0%,_#302443_100%)] rounded-[16px] transition-all ease-linear delay-75 will-change-transform hover:translate-y-[-2px]  ">
                <div className="flex flex-col gap-[4px] pl-[16px] pb-[16px] w-[200px] h-full justify-end">
                    <h6 className="text-[#FFF] text-[20px] font-semibold leading-normal">
                        Leaderboard
                    </h6>
                    <span className="text-[#A597D6] text-[14px] leading-[18px]">
                        Track top performers & climb the ranks
                    </span>
                </div>
                <div className="">
                    <img
                        className="absolute  top-[10px] right-[1px]  transition-all group:ease-linear delay-74 will-change-transform group-hover:translate-y-[-8px]"
                        src="/content_animation/img2.png"
                    />

                    <div className="w-[442px] h-[251px] right-0 bottom-[10px] absolute mix-blend-soft-light  bg-[#7752FF] bg-opacity-20 " />
                </div>
            </div>

            {/* Item 3 */}
            <div className="cursor-pointer group relative w-[442px] flex h-[156px] shadow-content_animation overflow-hidden bg-[radial-gradient(ellipse_89.74%_89.74%_at_50.00%_89.74%,_#3F3074_0%,_#302443_100%)] rounded-[16px] transition-all ease-linear delay-75 will-change-transform hover:translate-y-[-2px]  ">
                <div className="flex flex-col gap-[4px] pl-[16px] pb-[16px] w-[200px] h-full justify-end">
                    <h6 className="text-[#FFF] text-[20px] font-semibold leading-normal">
                        Invite a Friend
                    </h6>
                    <span className="text-[#A597D6] text-[14px] leading-[18px]">
                        Earn rewards by growing the network
                    </span>
                </div>
                <div className="">
                    <img
                        className=" rotate-[6deg] w-[275px] top-[-40px]  absolute right-[-13px]  transition-all group:ease-linear delay-74 will-change-transform group-hover:translate-y-[-8px]"
                        src="/content_animation/img3.png"
                    />

                    <div className="w-[442px] h-[251px] right-0 bottom-[10px] absolute mix-blend-soft-light  bg-[#7752FF] bg-opacity-20 " />
                </div>
            </div>
        </div>
    );
}
