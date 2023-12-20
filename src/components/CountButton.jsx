export default function CountButton({children, callback, locked}) {

    return (<button disabled={locked} className="count-btn" onClick={callback}>
        {children}
    </button>);
}