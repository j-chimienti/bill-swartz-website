import {Button} from "react-bootstrap";
import YoutubeList from "./YoutubeList";

function Home() {

    const supportEmail = process.env.REACT_APP_SUPPORT_EMAIL;
    const websiteName = "Bill Swartz Golf School";

    const handleButtonClick = () => {
        window.open(`mailto:${supportEmail}?subject=Golf Lessons Inquiry`, '_blank', 'width=600,height=400,noopener,noreferrer');
    };


    return (
        <div>
            <div className="text-center py-5 bg-dark">
                <div style={{height: '99vh'}}>
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
                    <YoutubeList/>
                </div>
                <div className="text-center py-3">
                    <p className="mb-1">© 2024 {websiteName}. All rights reserved.</p>
                    <p className="mb-0">Email us at: <a
                        href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
                    <p>Follow us: <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a></p>
                </div>
            </div>

        </div>
    )
}

export default Home