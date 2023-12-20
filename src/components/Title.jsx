export default function Title({locked, maxCount}) {
    return (
        <h1 className={`title ${locked && "title--limit"}`}>{locked ? `Limit of ${maxCount} reached` : "Simple Counter"}</h1>
    );
}