import {ResetIcon} from "@radix-ui/react-icons";

export default function ResetButton({handleClick, locked}) {
    return (
        <button className="reset-btn" onClick={handleClick}>
            <ResetIcon className={`reset-btn-icon ${locked && "reset-btn-icon--limit"}`}/>
        </button>
    );
}