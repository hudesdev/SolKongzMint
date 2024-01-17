import { default as ReactCountdown } from "react-countdown";
import { useEffect, useState } from "react";

const Countdown = ({ nextTime, mintState, refresh }) => {
    const [mintText, setMintText] = useState("")

    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <>
                {nextTime == null ? (
                    <div className="mt-5 text-2xl font-extrabold text-white md:text-3xl animate-bounce">
                        Mint Ended
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-xl text-white mt-8">{mintText}</h1>
                        <div className="mt-5 text-2xl font-extrabold text-white md:text-3xl animate-bounce">
                            <span>{days} D</span>: <span>{hours} H</span>: <span>{minutes} M</span>: {seconds}<span className="text-amber-900"> S</span>
                        </div>
                    </div>
                )}
            </>
        );
    };

    useEffect(() => {
        if (mintState === "OG") setMintText("OG mint ends in :");
        else if (mintState === "NOT_STARTED") setMintText("OG mint starts in :");
        else if (mintState === "WL") setMintText("WL mint ends in:");
        else if (mintState === "PUBLIC") setMintText("Public mint");

    }, [mintState])

    const update = () => {
        refresh();

        console.log("complete: ", nextTime);
    };

    return (
        <ReactCountdown
            key={nextTime}
            date={nextTime}
            renderer={renderer}
            onComplete={update}
        />
    );
};

export default Countdown;
