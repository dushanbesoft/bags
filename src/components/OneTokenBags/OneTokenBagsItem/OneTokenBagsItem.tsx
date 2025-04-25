import { XIcon, UserIcon, LineIcon, EnergyIcon } from 'app/assets/images';

export default function OneTokenBagsItem() {
    return (
        <div className="w-full md:w-[442px] h-[248px] md:h-[266px] p-[16px] rounded-[16px] bg-[#141016] flex flex-col gap-[12px] md:min-h-[156px] shadow-content_animation overflow-hidden transition-all  ease-linear  will-change-transform md:hover:translate-y-[-4px] cursor-pointer">
            {/* Header Bag */}
            <div className="flex justify-between items-center h-[50px]">
                <div className="flex gap-[8px]">
                    <img
                        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]  rounded-[12px]"
                        src="/avatar.png"
                    />
                    <div className="flex gap-[4px] items-center">
                        <div className="text-[16px] font-semibold text-[#E5E3F2] leading-[20px]">
                            @KUTRAAR23
                        </div>
                        <div className="w-[24px] h-[24px] border-[1px] border-[#E5E3F2] rounded-[5px] flex justify-center items-center">
                            <XIcon />
                        </div>
                    </div>
                </div>

                <button className="w-[96px] h-[32px] px-[12px] py-[10px] flex gap-[4px] justify-center items-center border-[1px] border-[#393847] hover:bg-[#26262B] hover:border-none transition-all ease-linear rounded-[8px]">
                    <span className="font-medium text-[14px] text-[#E5E3F2] leading-[17px] ">
                        Follow
                    </span>
                    <div className="w-[20px] h-[20px] ">
                        <UserIcon />
                    </div>
                </button>
            </div>

            {/* Perfomance */}
            <div className="flex items-center rounded-[12px] border-[1px] border-[#2C2637] h-[48px]">
                <div className="flex flex-col justify-center items-center gap-[2px] w-1/2">
                    <div className="text-[#6B6682] text-[12px] leading-[14px]">
                        Performance
                    </div>
                    <div className="text-[#38D07E] font-medium text-[16px] leading-[18px]">
                        999
                    </div>
                </div>
                <div className="h-[48px]">
                    <LineIcon />
                </div>
                <div className="flex flex-col justify-center items-center gap-[2px] w-1/2">
                    <div className="text-[#6B6682] text-[12px] leading-[14px] ">
                        Creators Rank
                    </div>
                    <div className="text-[#FFF] font-medium text-[16px] leading-[18px]">
                        1570
                    </div>
                </div>
            </div>

            {/* Operating Part */}
            <div className="bg-[#1C172B] border-[1px] border-[#2C2637] rounded-[16px] md:rounded-[12px] p-[8px] md:p-[12px] items-center h-[52px] md:h-[108px] flex flex-col gap-[8px] md:gap-[12px] ">
                <div className="flex justify-between w-full items-center ">
                    <div className="flex gap-[8px] justify-center items-center">
                        <img
                            src="company.png"
                            className="w-[36px] h-[36px] rounded-[8px]"
                        />
                        <div className="flex flex-col gap-[4px] ">
                            <div className="text-[14px] font-semibold text-[#E5E3F2] leading-[16px] flex gap-[6px] items-center ">
                                <div className="">$LIOS</div>
                                <div className="flex items-center gap-[4px]">
                                    <img
                                        className="w-[16px] h-[16px]"
                                        src={'/icons/DrugIcon.png'}
                                    />
                                    <img
                                        className="w-[16px] h-[16px]"
                                        src={'/icons/RIcon.png'}
                                    />
                                    <img
                                        className="w-[16px] h-[16px]"
                                        src={'/icons/DangerIcon.png'}
                                    />
                                </div>
                            </div>
                            <div className="text-[#6B6682] text-[12px] leading-[14px]">
                                Universal Operating System
                            </div>
                        </div>
                    </div>

                    <div className="text-[24px] font-medium text-[#38D07E] leading-[28px]">
                        +330%
                    </div>
                </div>
            </div>

            {/* Follow Container */}
            <div className="flex justify-between items-center h-[40px]">
                <div className="text-[#6B6682] flex flex-col gap-[2px] ">
                    <div className="text-[12px] leading-[14px]">Created</div>
                    <div className="text-[14px] leading-[16px]">4 min ago</div>
                </div>

                <button className="w-[120px] md:w-[141px] h-[40px] rounded-[12px] bg-[#7752FF] hover:bg-[#5F41CC] transition-all ease-linear px-[12px] py-[11px] md:px-[10px] md:py-[2px] flex justify-center items-center gap-[6px]">
                    <EnergyIcon />
                    <span className="text-[#FFF] font-semibold text-[14px] whitespace-nowrap">
                        Quick Buy
                    </span>
                </button>
            </div>
        </div>
    );
}
