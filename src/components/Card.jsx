import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import {useEffect, useState} from "react";
import ButtonContainer from "./ButtonContainer.jsx";
import CountButton from "./CountButton.jsx";
import {MinusIcon, PlusIcon} from "@radix-ui/react-icons";

export default function Card() {
    const [count, setCount] = useState(0);
    const maxCount = 10;
    const locked = count === maxCount;

    useEffect(() => {
        const handleKeydown = (e) => {
            if (locked) return;
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                const delta = e.key === "ArrowUp" ? 1 : -1;
                setCount(prevCount => Math.max(0, Math.min(prevCount + delta, maxCount)));
            }
        };
        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    }, [count, locked]);

    const resetCount = (e) => {
        setCount(0)
        e.currentTarget.blur();
    }
    const decreaseCount = (e) => {
        setCount(prev => Math.max(prev - 1, 0))
        e.currentTarget.blur();
    };
    const increaseCount = (e) => {
        setCount(prev => Math.min(prev + 1, maxCount))
        e.currentTarget.blur();
    };

    return (
        <div className={`card ${locked && "card--limit"}`}>
            <Title locked={locked} maxCount={maxCount}/>
            <Count count={count}/>
            <ResetButton locked={locked} handleClick={resetCount}/>
            <ButtonContainer>
                <CountButton callback={decreaseCount} setCount={setCount} locked={locked}>
                    <MinusIcon className="count-btn-icon"/>
                </CountButton>
                <CountButton callback={increaseCount} setCount={setCount} locked={locked}>
                    <PlusIcon className="count-btn-icon"/>
                </CountButton>
            </ButtonContainer>
        </div>);
}