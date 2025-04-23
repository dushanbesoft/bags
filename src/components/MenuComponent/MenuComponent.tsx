export default function MenuComponent() {
    return (
        <div className="flex gap-[16px] md:gap-[32px] text-[20px] md:text-[24px] font-semibold text-[#6B6682] items-center overflow-x-auto">
            <div className="text-[#FFF] hover:text-[#FFF] transition-all ease-linear cursor-pointer whitespace-nowrap">
                Vaults
            </div>
            <div className=" hover:text-[#FFF] transition-all ease-linear cursor-pointer whitespace-nowrap">
                Multitoken Bags
            </div>
            <div className=" hover:text-[#FFF] transition-all ease-linear cursor-pointer whitespace-nowrap">
                One token Bags
            </div>
            <div className=" hover:text-[#FFF] transition-all ease-linear cursor-pointer whitespace-nowrap">
                Creators
            </div>
        </div>
    );
}
