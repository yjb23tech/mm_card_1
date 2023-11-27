import album_art from "../images/mbdtf_king_cover.jpeg"
import phone_icon from "../images/phone-icon.png"
import mail_icon from "../images/mail-icon.png"

const Card = () => {
    return (
        <div className="album-card">
            <img src={album_art} />
            <h3>Lord Willing</h3>
            <div className="info-group">
                <img src={phone_icon} />
                <p>(971) 050 149 4823</p>
            </div>
            <div className="info-group">
                <img src={mail_icon} />
                <p>clipse@interscoperecords.com</p>
            </div>
        </div>
    )
}

export default Card; 