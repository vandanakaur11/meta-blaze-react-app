import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import classes from "./Section8.module.css";
import image11 from "./../../images/image11.png";
import image12 from "./../../images/image12.png";
import image15 from "./../../images/image15.png";
import image16 from "./../../images/image16.png";
import instaIcon from "../../images/Group81.png";
import swal from "sweetalert";

// email: xaceroy195@dnitem.com
// lib_version: 3.2.0
// service_id: service_3daamtk
// template_id: template_bq1syrl
// user_id: i2kGvYenYjBFjYkX5

function Section8() {
  const form = useRef();
  const [Value, setValue] = useState("");

  const sendEmail = (e) => {
    // const body = {
    //     email: Value,
    //     lib_version: "3.2.0",
    //     service_id: "service_3daamtk",
    //     template_id: "template_bq1syrl",
    //     user_id: "i2kGvYenYjBFjYkX5",
    // }
    // let res = axios.post("https://api.emailjs.com/api/v1.0/email/send-form", body)
    // console.log(res)
    // setValue("")
    e.preventDefault();

    if (!Value) {
      alert("Please Enter your email to subscribe!");
      return;
    }

    emailjs
      .sendForm(
        "service_quijoft",
        "template_hqb0bm7",
        form.current,
        "CVfciwn7HVlj7bn1G"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            swal("Thank You", "Subscribed Successfully!", "success");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setValue("");
  };

  return (
    <div className={classes.container}>
      {/* <div className={classes.heading}>
        THE JOURNEY CONTINUES, FOLLOW US FOR ACCESS TO ALL THAT LIVES WITHIN
        GALAXIA BLUE{" "}
      </div> */}

      <div className={classes.innerContainer}>
        <div className={classes.heading}>
          THE JOURNEY CONTINUES,<br/> SUBSCRIBE OR FOLLOW BELOW FOR ACCESS<br/> TO ALL THAT LIVES WITHIN GALAXIA BLUE
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.subscribeHeading}>
            Subscribe to Meta Blaze
          </div>
          <form ref={form} className={classes.emailWrap} onSubmit={sendEmail}>
            <input
              type="email"
              name="email"
              value={Value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button input type="submit" placeholder="Enter your email">
              Subscribe
            </button>
            {/* <div></div> */}
          </form>
        </div>
        {/* <div className={classes.emailWrap2}>
                    <input placeholder='Enter your email' />
                    <div>Subscribe</div>
                </div> */}
        <div className={classes.socialWrap}>
          <a
            rel="noreferrer"
            href="https://twitter.com/meta_blaze"
            target="_blank"
          >
            <img alt="" src={image11} />
          </a>
          <a rel="noreferrer" href="https://t.me/meta_blaze" target="_blank">
            <img alt="" src={image12} />
          </a>
          <a
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCpnw9vYHVlN9O5crdZXX_iQ"
            target="_blank"
          >
            <img alt="" src={image16} />
          </a>

          <a
            rel="noreferrer"
            href="https://www.instagram.com/meta.blaze/"
            target="_blank"
          >
            <img alt="" src={instaIcon} />
          </a>
          <a
            rel="noreferrer"
            href="https://discord.com/invite/wTZc9yCYRA"
            target="_blank"
          >
            <img alt="" src={image15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section8;
