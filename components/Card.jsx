import album_art from "../images/lord_willin.jpeg"
import phone_icon from "../images/phone-icon.png"
import mail_icon from "../images/mail-icon.png"

const Card = () => {
    return (
        <div className="album-card">
            <img src={album_art} />
            <h3>Lord Willing</h3>
            <div>
                <img src={phone_icon} />
                <p>(971) 050 149 4823</p>
            </div>
            <div>
                <img src={mail_icon} />
                <p>clipse@interscoperecords.com</p>
            </div>
        </div>
    )
}

export default Card; 