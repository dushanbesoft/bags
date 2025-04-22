export default function MenuComponent() {
    return (
        <div className="flex gap-[32px] text-[24px] font-semibold text-[#6B6682] items-center">
            <div className="text-[#FFF] hover:text-[#FFF] transition-all ease-linear cursor-pointer">
                Vaults
            </div>
            <div className=" hover:text-[#FFF] transition-all ease-linear cursor-pointer">
                Multitoken Bags
            </div>
            <div className=" hover:text-[#FFF] transition-all ease-linear cursor-pointer">
                One token Bags
            </div>
            <div className=" hover:text-[#FFF] transition-all ease-linear cursor-pointer">
                Creators
            </div>
        </div>
    );
}
