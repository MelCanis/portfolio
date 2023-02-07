import "./index.sass"
import { MdEmail, MdLocalPhone } from "react-icons/md"

const Contact = () => {

    return (
        <div className="Contact">
            {/* <ul> */}
                <li className="email">
                    <MdEmail />
                    <a 
                    // href=""
                    >
                    {/* Email:  */}
                    mel.canis353@gmail.com
                    </a> 
                </li>
                <li className="phone">
                    <MdLocalPhone />
                    <a 
                    // href=""
                    >
                    {/* Phone:  */}
                    (404)839-9892
                    </a>
                </li>
            {/* </ul> */}
        </div>
    )
};

export default Contact;