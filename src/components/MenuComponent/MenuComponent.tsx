export default function MenuComponent({
    menus,
    activeMenu,
    setActiveMenu,
}: any) {
    return (
        <div className="flex gap-[16px] md:gap-[32px] text-[20px] md:text-[24px] font-semibold text-[#6B6682] items-center no-scrollbar overflow-x-auto">
            {menus?.length > 0 &&
                menus?.map((value: any, index: number) => {
                    return (
                        <div
                            onClick={() => setActiveMenu(value)}
                            key={index}
                            className={
                                ` hover:text-[#FFF] transition-all ease-linear cursor-pointer whitespace-nowrap select-none ` +
                                (activeMenu?.id == value?.id
                                    ? 'text-[#FFF]'
                                    : '')
                            }
                        >
                            {value?.name}
                        </div>
                    );
                })}
        </div>
    );
}
