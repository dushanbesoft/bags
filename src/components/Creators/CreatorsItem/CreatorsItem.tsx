import {
    XIcon,
    LineIcon,
    UserIcon,
    BronzeIcon,
    GoldIcon,
    SilverIcon,
} from 'app/assets/images';

export default function CreatorItem() {
    return (
        <div className="group relative w-full h-[126px]  md:w-[259px] md:h-[335px] rounded-[16px] flex flex-row md:flex-col items-center gap-[0px] md:gap-[12px] bg-[#141016] transition-all  ease-linear  will-change-transform hover:translate-y-[-4px] cursor-pointer ">
            <div className="">
                <img
                    className="hidden md:flex w-[126px] h-[126px] md:w-[259px] md:h-[197px] rounded-t-[16px]"
                    src="/icons/CreatorIcon1.png"
                />
                <img
                    className="flex md:hidden  min-w-[126px] min-h-[126px] md:w-[259px] md:h-[197px] rounded-l-[16px]"
                    src="/icons/CreatorMobileIcon1.png"
                />

                <div className="flex flex-col gap-[2px] absolute top-[8px] left-[8px]">
                    <div className="flex gap-[2px] items-center bg-[#000] bg-opacity-25 rounded-[16px] px-[6px] py-[4px]">
                        <GoldIcon />
                        <span className="hidden md:flex text-[#FFD800] text-[12px] font-semibold">
                            PNL x1
                        </span>
                    </div>
                    <div className="flex gap-[2px] items-center bg-[#000] bg-opacity-25 rounded-[16px] px-[6px] py-[4px]">
                        <SilverIcon />
                        <span className="hidden md:flex text-[#FFAC8E] text-[12px] font-semibold">
                            Creator x3
                        </span>
                    </div>
                    <div className="flex gap-[2px] items-center bg-[#000] bg-opacity-25 rounded-[16px] px-[6px] py-[4px]">
                        <BronzeIcon />
                        <span className=" hidden md:flex text-[#CFD3D9] text-[12px] font-semibold">
                            Volume x2
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[6px] md:gap-[8px] py-[12px] md:py-[0px] px-[12px] pb-[12px] w-full   ">
                <div className="flex justify-between items-center h-[24px]">
                    <div className="text-[16px] font-semibold text-[#E5E3F2] leading-[18px]">
                        @KUTRAAR23
                    </div>
                    <div className="w-[24px] h-[24px] border-[1px] border-[#E5E3F2] rounded-[5px] flex justify-center items-center">
                        <XIcon />
                    </div>
                </div>

                <div className="flex flex-col gap-[4px]  md:h-auto">
                    {/* Perfomance */}
                    <div className="flex items-center rounded-[12px] border-[1px] border-[#2C2637] h-[38px] md:h-[52px]">
                        <div className="flex flex-col justify-center items-center gap-[2px] w-1/2">
                            <div className="text-[#6B6682] text-[9px] md:text-[12px] leading-[11px] md:leading-[14px]">
                                Performance
                            </div>
                            <div className="text-[#38D07E] font-medium text-[14px] md:text-[16px] leading-[16px] md:leading-[18px]">
                                999
                            </div>
                        </div>
                        <div className="h-[38px] md:h-[48px]">
                            <LineIcon />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[2px] w-1/2">
                            <div className="text-[#6B6682] text-[9px] md:text-[12px] leading-[11px] md:leading-[14px] ">
                                Creators Rank
                            </div>
                            <div className="text-[#FFF] font-medium text-[14px] md:text-[16px] leading-[16px] md:leading-[18px]">
                                1570
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-[6px]">
                        <div className="min-w-[78px] md:w-full rounded-[10px] flex flex-col md:flex-row justify-between items-center md:items-center border-[1px] border-[#2C2637] h-[36px] md:h-[26px] px-[7px] py-[4px] md:py-[6px]">
                            <span className="text-[9px] md:text-[12px] text-[#6B6682]">
                                Created bags
                            </span>
                            <span className="text-[12px] md:text-[14px] font-medium leading-[16px] text-[#E5E3F2] t ">
                                6
                            </span>
                        </div>
                        <button className="flex md:hidden z-1 w-full md:w-[90px] bg-[#7752FF] hover:bg-[#5F41CC] h-[36px]  md:h-[32px] px-[12px] py-[10px]  gap-[4px] justify-center items-center hover:border-none transition-all ease-linear rounded-[8px]">
                            <span className="font-medium text-[12px] md:text-[14px] text-[#E5E3F2] leading-[14px] ">
                                Follow
                            </span>
                            <div className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] ">
                                <UserIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <button className="hidden md:group-hover:flex absolute left-1/3 top-[150px] z-1 w-[90px] bg-[#7752FF] hover:bg-[#5F41CC]  h-[32px] px-[12px] py-[10px]  gap-[4px] justify-center items-center hover:border-none transition-all ease-linear rounded-[8px]">
                <span className="font-medium text-[14px] text-[#E5E3F2] leading-[17px] ">
                    Follow
                </span>
                <div className="w-[20px] h-[20px] ">
                    <UserIcon />
                </div>
            </button>
        </div>
    );
}
