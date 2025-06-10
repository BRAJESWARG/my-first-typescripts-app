import BlueButton from "./Button/BlueButton";
import GreenButton from "./Button/GreenButton";
import PurpleButton from "./Button/PurpleButton";
import RedButton from "./Button/RedButton";
import YellowButton from "./Button/YellowButton";



function ColorButton() {
    return (
        <div className="ColorButton">

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <RedButton />
                <BlueButton />
                <GreenButton />
                <PurpleButton />
                <YellowButton />
            </div>

        </div>
    );
}

export default ColorButton;
