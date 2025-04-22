import { ArrowLineIcon, SearchIcon, StartIcon, ZIcon } from 'app/assets/images';
import Bags from 'app/components/Bags/Bags';

export default function Home() {
    return (
        <div className="">
            {/* Menu Navigation  */}
            <div className="flex gap-[32px] text-[24px] font-semibold text-[#6B6682] items-center">
                <div className="text-[#FFF]">Vaults</div>
                <div className="">Multitoken Bags</div>
                <div className="">One token Bags</div>
                <div className="">Creators</div>
            </div>

            {/* Filter Container */}
            <div className="flex justify-between items-center">
                <div className="flex gap-[12px]">
                    <div className="w-[480px] h-[42px] p-[10px] flex items-center bg-[#1B1A1F] border-[1px] border-[#2C2637] gap-[10px] rounded-[16px]">
                        <SearchIcon />
                        <input
                            className="bg-transparent text-[14px] font-sora outline-none text-[#E5E3F2]"
                            placeholder="Search bags,agents..."
                        />
                    </div>

                    {/* Status */}
                    <div className=" h-[42px] rounded-[12px] p-[4px] bg-[#26203D] flex justify-between items-center ">
                        <div className=" px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer bg-[#141016] rounded-[8px] ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                Top
                            </div>
                            <ArrowLineIcon />
                        </div>
                        <div className="px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                New
                            </div>
                            <StartIcon />
                        </div>
                        <div className="px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                Paused
                            </div>
                            <ZIcon />
                        </div>
                    </div>

                    {/* Times */}
                    <div className=" h-[42px] rounded-[12px] p-[4px] bg-[#26203D] flex justify-between items-center ">
                        <div className="w-[58px] px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer bg-[#141016] rounded-[8px] ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                15m
                            </div>
                        </div>
                        <div className="w-[58px] px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                1h
                            </div>
                        </div>
                        <div className="w-[58px] px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                24h
                            </div>
                        </div>
                        <div className="w-[58px] px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                7d
                            </div>
                        </div>
                        <div className="w-[58px] px-[12px] py-[8px] flex gap-[4px] justify-center items-center group cursor-pointer ">
                            <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                                All
                            </div>
                        </div>
                    </div>
                </div>

                <div className=""></div>
            </div>

            {/* Bags */}
            <Bags />
        </div>
    );
}
