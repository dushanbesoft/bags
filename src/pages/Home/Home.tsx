import Bags from 'app/components/Bags/Bags';
import ContentAnimation from 'app/components/ContentAnimation/ContentAnimation';
import Creators from 'app/components/Creators/Creators';
import FilterComponent from 'app/components/FilterComponent/FilterComponent';
import MenuComponent from 'app/components/MenuComponent/MenuComponent';
import MultitokenBags from 'app/components/MultitokenBags/MultitokenBags';
import OneTokenBags from 'app/components/OneTokenBags/OneTokenBags';
import { useState } from 'react';

export default function Home() {
    const menus = [
        {
            id: 1,
            name: 'Vaults',
        },
        {
            id: 2,
            name: 'Multitoken Bags',
        },
        {
            id: 3,
            name: 'One token Bags',
        },
        {
            id: 4,
            name: 'Creators',
        },
    ];

    const [activeMenu, setActiveMenu] = useState(menus[0]);

    return (
        <div className="flex flex-col gap-[16px] ">
            <div className="flex flex-col gap-[24px] md:gap-[32px]">
                {/* Content Animaton */}
                <ContentAnimation />
                {/* Menu Navigation  */}
                <MenuComponent
                    menus={menus}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            </div>

            {/* Filter Container */}
            <FilterComponent />

            {/* Bags */}
            {activeMenu?.id == 1 ? <Bags /> : null}

            {/* MultiToken Bags */}
            {activeMenu?.id == 2 ? <MultitokenBags /> : null}

            {/* One token Bags */}
            {activeMenu?.id == 3 ? <OneTokenBags /> : null}

            {/* Creator */}
            {activeMenu?.id == 4 ? <Creators /> : null}
        </div>
    );
}
