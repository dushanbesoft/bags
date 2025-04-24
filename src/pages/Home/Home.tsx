import Bags from 'app/components/Bags/Bags';
import ContentAnimation from 'app/components/ContentAnimation/ContentAnimation';
import FilterComponent from 'app/components/FilterComponent/FilterComponent';
import MenuComponent from 'app/components/MenuComponent/MenuComponent';
import { useState } from 'react';

export default function Home() { 
    const menus = [ 
        {
            id:1,
            name: "Vaults"
        },
        {
            id:2,
            name: "Multitoken Bags"
        },
        {
            id:3,
            name: "One token Bags"
        },
        {
            id:4,
            name: "Creators"
        }
    ];

    const [activeMenu, setActiveMenu] = useState(menus[0]);


    return (
        <div className="flex flex-col gap-[16px] ">
            <div className="flex flex-col gap-[24px] md:gap-[32px]">
                {/* Content Animaton */}
                <ContentAnimation />
                {/* Menu Navigation  */}
                <MenuComponent menus={menus} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>

            {/* Filter Container */}
            <FilterComponent />

            {/* Bags */}
            <Bags />
        </div>
    );
}
