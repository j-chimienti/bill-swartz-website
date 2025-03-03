import {Button} from "react-bootstrap";
import YoutubeList from "./YoutubeList";

function Home() {

    const handleButtonClick = () => {
        window.open(`mailto:${process.env.REACT_APP_SUPPORT_EMAIL}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <div className="text-center py-5 bg-dark">
                <h1 className="display-4 text-light">Revolutionize Your Golf Game</h1>
                <p className="lead text-light mx-auto" style={{maxWidth: "600px"}}>
                    It's not just about the swing—it's about how you think. Unlock your potential
                    by mastering the mental game of golf. Let us show you how.
                </p>
                <Button
                    variant="light"
                    size="lg"
                    className="mt-4"
                    onClick={handleButtonClick}>
                    Start Transforming Today
                </Button>
            </div>
            <YoutubeList/>
        </div>
    )
}

export default Home