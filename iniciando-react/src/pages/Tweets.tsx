import { useState } from "react";
import { Tweet } from "../components/Tweet";

export function Tweets() {
    const [tweets, setTweets] = useState<string[]>([
        "Tweet 1",
        "Tweet 2",
        "Tweet 3",
        "Tweet 4",
    ]);
    const [valor, setValor] = useState<string>("");

    function createTweet() {
        setTweets([valor, ...tweets]);
    }

    return (
        <div>
            <h1>Tweets</h1>
            <input
                type="text"
                id="tweetNovo"
                onChange={(e) => setValor(e.target.value)}
            />
            <button
                onClick={createTweet}
                style={{
                    backgroundColor: "#8257e6",
                    border: 0,
                    padding: "6px 12px",
                    color: "#FFF",
                }}
            >
                Adicionar tweet
            </button>
            {tweets.map((tweet, index) => {
                return <Tweet key={index} text={tweet} />;
            })}
        </div>
    );
}
