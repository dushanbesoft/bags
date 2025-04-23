import { SearchIcon, ArrowLineIcon, StartIcon, ZIcon } from 'app/assets/images';
import UpdateIcon from 'app/assets/images/UpdateIcon';

export default function FilterComponent() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-[12px]">
                <div className="w-[144px] md:w-[480px] h-[42px] p-[10px] flex items-center bg-[#1B1A1F] border-[1px] border-[#2C2637] gap-[10px] rounded-[16px] overflow-hidden">
                    <div className="w-[22px] h-[22px]">
                        <SearchIcon />
                    </div>
                    <input
                        className="bg-transparent text-[14px] font-sora outline-none text-[#E5E3F2] overflow-hidden w-[50px] md:w-auto"
                        placeholder="Search bags,agents..."
                    />
                </div>

                {/* Status */}
                <div className=" h-[42px] rounded-[12px] p-[4px] bg-[#26203D] justify-between items-center hidden md:flex ">
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
                    <div className="w-[58px] px-[12px] py-[8px]  gap-[4px] justify-center items-center group cursor-pointer hidden md:flex ">
                        <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                            1h
                        </div>
                    </div>
                    <div className="w-[58px] px-[12px] py-[8px] gap-[4px] justify-center items-center group cursor-pointer hidden md:flex ">
                        <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                            24h
                        </div>
                    </div>
                    <div className="w-[58px] px-[12px] py-[8px] gap-[4px] justify-center items-center group cursor-pointer hidden md:flex ">
                        <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                            7d
                        </div>
                    </div>
                    <div className="w-[58px] px-[12px] py-[8px] gap-[4px] justify-center items-center group cursor-pointer hidden md:flex ">
                        <div className="text-[#6B6682] group-hover:text-[#E5E3F2] text-[14px] font-medium transition-all easy-lenear">
                            All
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="w-fit md:w-[138px] h-[42px] rounded-[12px] px-[12px] py-[13px] bg-[#30284F] flex gap-[8px]">
                    <div className="flex gap-[4px] items-center">
                        <UpdateIcon />
                        <span className="font-medium text-[14px] text-[#E5E3F2] hidden md:flex">
                            Update
                        </span>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                        />
                        <div className="relative w-[32px] h-[19px] bg-[#7752FF] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-[white] after:border-gray-300 after:border after:rounded-full after:h-[15px] after:w-[15px] after:transition-all dark:border-gray-600 peer-checked:bg-[#7752FF] dark:peer-checked:bg-[#7752FF]"></div>
                    </label>
                </div>
            </div>
        </div>
    );
}
