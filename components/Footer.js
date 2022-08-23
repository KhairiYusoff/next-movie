import Image from "next/image"
import mypic from "../public/phone.png"

const Footer = (props) => {
    return (
        <div>
            <p>ddd111</p>
            <Image
                src={mypic}
                alt="phone"
                width="150px"
                height="150px"
                {...props}
                style={{ color: "black" }}
            />
        </div>
    )
}

export default Footer