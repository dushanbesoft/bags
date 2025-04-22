import Bags from 'app/components/Bags/Bags';
import ContentAnimation from 'app/components/ContentAnimation/ContentAnimation';
import FilterComponent from 'app/components/FilterComponent/FilterComponent';
import MenuComponent from 'app/components/MenuComponent/MenuComponent';

export default function Home() {
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[32px]">
                {/* Content Animaton */}
                <ContentAnimation />
                {/* Menu Navigation  */}
                <MenuComponent />
            </div>

            {/* Filter Container */}
            <FilterComponent />

            {/* Bags */}
            <Bags />
        </div>
    );
}
