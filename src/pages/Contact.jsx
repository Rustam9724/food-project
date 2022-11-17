const mailImage = require('../assets/mail.png');
const githubImage = require('../assets/Github.png');
const telegramImage = require('../assets/Telegram.png');
const phoneImage = require('../assets/Phone.png');

function Contact() {
    return (
        <div className="contacts">
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={mailImage} alt="" className="circle" />
                <span className="title">Email</span>
                <p>Rustam_9724@mail.ru<br />
                </p>
                <a href="https://mail.ru/" className="secondary-content"><i className="material-icons">Go</i></a>
            </li>
            <li className="collection-item avatar">
                <img src={githubImage} alt="" className="circle" />
                <span className="title">Github</span>
                <p>Rustam_9724<br />
                </p>
                <a href="https://github.com/" className="secondary-content"><i className="material-icons">Go</i></a>
            </li>
            <li className="collection-item avatar">
                <img src={telegramImage} alt="" className="circle" />
                <span className="title">Telegram</span>
                <p>@ZhumaevR<br />
                </p>
                <a href="https://web.telegram.org/?legacy=1#/login" className="secondary-content"><i className="material-icons">Go</i></a>
            </li>
            <li className="collection-item avatar">
                <img src={phoneImage} alt="" className="circle" />
                <span className="title">Phone number</span>
                <p>+998 94 121-78-21<br />
                </p>
                <a href="tel:+13 674 567 75 54" className="secondary-content"><i className="material-icons">Go</i></a>
            </li>
        </ul>
        </div>
    )
}

export { Contact };