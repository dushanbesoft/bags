import CreatorItem from "./CreatorsItem/CreatorsItem";

export default function Creators() {
    return (
        <div className="flex gap-[16px] flex-wrap">
            <CreatorItem />
            <CreatorItem />
        </div>
    );
}
