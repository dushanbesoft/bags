import { XIcon, UserIcon, LineIcon, EnergyIcon } from 'app/assets/images';

export default function BagItem() {
    return (
        <div className="w-full md:w-[442px] h-[266px] p-[16px] rounded-[16px] bg-[#141016] flex flex-col gap-[12px]">
            {/* Header Bag */}
            <div className="flex justify-between items-center">
                <div className="flex gap-[8px]">
                    <img
                        className="w-[50px] h-[50px] rounded-[12px]"
                        src="/avatar.png"
                    />
                    <div className="flex gap-[4px] items-center">
                        <div className="text-[16px] font-semibold text-[#E5E3F2]">
                            @KUTRAAR23
                        </div>
                        <div className="w-[24px] h-[24px] border-[1px] border-[#E5E3F2] rounded-[5px] flex justify-center items-center">
                            <XIcon />
                        </div>
                    </div>
                </div>

                <button className="w-[96px] h-[32px] px-[12px] py-[10px] flex gap-[4px] justify-center items-center border-[1px] border-[#393847] rounded-[8px]">
                    <span className="font-medium text-[14px] text-[#E5E3F2]">
                        Follow
                    </span>
                    <UserIcon />
                </button>
            </div>

            {/* Perfomance */}
            <div className="flex items-center rounded-[12px] border-[1px] border-[#2C2637]">
                <div className="flex flex-col justify-center items-center gap-[2px] w-1/2">
                    <div className="text-[#6B6682] text-[12px] ">
                        Performance
                    </div>
                    <div className="text-[#38D07E] font-medium text-[16px]">
                        +330%
                    </div>
                </div>
                <div className="">
                    <LineIcon />
                </div>
                <div className="flex flex-col justify-center items-center gap-[2px] w-1/2">
                    <div className="text-[#6B6682] text-[12px] ">
                        Performance
                    </div>
                    <div className="text-[#E5E3F2] font-medium text-[16px]">
                        +330%
                    </div>
                </div>
            </div>

            {/* Operating Part */}
            <div className="bg-[#1C172B] border-[1px] border-[#2C2637] rounded-[12px] p-[12px] flex justify-between items-center ">
                <div className="flex gap-[8px] justify-center items-center">
                    <img
                        src="company.png"
                        className="w-[36px] h-[36px] rounded-[8px]"
                    />
                    <div className="text-[14px] font-semibold text-[#E5E3F2] w-[232px]">
                        Universal Operating System
                    </div>
                </div>

                <div className="text-[24px] font-medium text-[#38D07E]">
                    +330%
                </div>
            </div>

            {/* Follow Container */}
            <div className="flex justify-between items-center">
                <div className="text-[#6B6682] flex flex-col gap-[2px]">
                    <div className="text-[12px]">Created</div>
                    <div className="text-[14px]">4 min ago</div>
                </div>

                <button className="w-[141px] h-[40px] rounded-[12px] bg-[#7752FF] px-[10px] py-[2px] flex justify-center items-center gap-[6px]">
                    <EnergyIcon />
                    <span className="text-[#FFF] font-semibold text-[14px]">
                        Quick Follow
                    </span>
                </button>
            </div>
        </div>
    );
}
