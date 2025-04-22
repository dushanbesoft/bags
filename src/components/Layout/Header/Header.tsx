import { ArrowIcon, Logo, PlusIcon, SearchIcon } from 'app/assets/images';
import { memo } from 'react';

export const Header = memo(() => {
    return (
        <div className="w-full flex justify-between items-center py-[11px] px-[16px]  bg-[#141016] h-[64px] rounded-[16px]">
            <div className="flex justify-start items-center  gap-[24px]">
                <div className="w-[154px] h-[33px]">
                    <Logo />
                </div>
                <div className="w-[242px] h-[42px] p-[10px] flex items-center bg-[#1B1A1F] border-[1px] border-[#2C2637] gap-[10px] rounded-[16px]">
                    <SearchIcon />
                    <input
                        className="bg-transparent text-[14px] font-sora outline-none text-[#E5E3F2]"
                        placeholder="Search bags,agents..."
                    />
                </div>
                <div className="text-[#E5E3F2] text-[14px] hover:text-[#7752FF] cursor-pointer">
                    Bags
                </div>
                <div className="text-[#E5E3F2] text-[14px] hover:text-[#7752FF] cursor-pointer">
                    Craetors
                </div>
                <div className="text-[#E5E3F2] text-[14px] hover:text-[#7752FF] cursor-pointer">
                    Ranks
                </div>
            </div>

            <div className="flex items-center gap-[8px]">
                <button className="flex gap-[6px] justify-center items-center rounded-[12px] bg-[#7752FF] w-[127px] h-[40px] px-[12px] py-[11px]">
                    <span className="text-[14px] font-medium text-[#FFF]">
                        Create Bag
                    </span>
                    <span>
                        <PlusIcon />
                    </span>
                </button>
                <button className="flex gap-[6px] justify-center items-center rounded-[12px] border-[1px] border-[#7752FF] w-[131px] h-[40px] px-[12px] py-[11px]">
                    <span className="text-[14px] font-medium text-[#7752FF]">
                        Connect wallet
                    </span>
                </button>

                <ArrowIcon />
            </div>
        </div>
    );
});
