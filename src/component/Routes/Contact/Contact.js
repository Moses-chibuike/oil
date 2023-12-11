import React, { useRef, useState } from "react";
import axios from "axios";
import styles from "./contact.module.css";
// import Image from '../../assets/keno.png';
import servicebg from "../../../assets/packages.jpg";
import Image1 from "../../../assets/images/img1.jpg";
import Footer from "../Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
// import Emma  from '../../../assets/images/emma.jpg'
import emailjs from "@emailjs/browser";
import env from "react-dotenv";

const Contact = () => {
  const [emailSender, setEmailSender] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  // const YOURMAIL = "ezechukwuchibuikemoses@gmail.com";
  // console.log(emailSender);

  // async function SendMail(e) {
  //   e.preventDefault();
  //   if (!emailSender || !message || !name) {
  //     toast.error("One or more field required");
  //     return;
  //   }

  //   const options = {
  //     method: "POST",
  //     url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "a96bd059eamshcf24a85b9978e25p1abb39jsn4b943bb8ef08",
  //       "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
  //     },
  //     data: {
  //       personalizations: [
  //         {
  //           to: [
  //             {
  //               email: YOURMAIL,
  //             },
  //           ],
  //           subject: `A message from ${name}`,
  //         },
  //       ],
  //       from: {
  //         email: emailSender,
  //       },
  //       content: [
  //         {
  //           type: "text/plain",
  //           value: message,
  //         },
  //       ],
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     if (response?.status === 200) {
  //       toast.success("Message sent sucessfully");
  //     }
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(error?.message);
  //   }
  // }
  const form = useRef();
  // const handleSendMessageClick = () => {
  //   if (form && form.current) {
  //     form.current.dispatchEvent(new Event("submit"));
  //   }
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading('sending message')
    if (!emailSender || !message || !name) {
      toast.error("One or more field required");
      return;
    }
    emailjs
      .sendForm(
        env.EMAIL_SERVICE_ID,
        env.EMAIL_TEMPLATE_ID,
        form.current,
        env.EMAIL_USER_ID
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.dismiss()
            toast.success("We have received your message");
            setEmailSender("");
            setName("");
            setMessage("");
          }
        },
        (error) => {
          console.log(error.text);
          toast.error(error.message);
        }
      );
  };

  return (
    <div className={styles["contact"]} id="contact">
      <Toaster />

      <div className={styles["contact-content"]}>
        <div className="about">
          <section className="section1">
            <div className="service-image">
              <img src={servicebg} alt={servicebg} />
              <div className="service-overlay"></div>
            </div>

            <div className="text">
              <h1> Our Contact </h1>

              <div
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="block"
              ></div>
            </div>
          </section>

          <section className="section2">
            <div className="text">
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="text-story"
              >
                <h1> Contact details </h1>

                <p> Irkutsk, st. Polyarnaya, 77.</p>

                <p>
                  <strong> Reception:</strong>  office@kraisNeft-llc.com{" "}
                </p>

                <p>
                  <strong>Phone:</strong> +7-966-075-5308{" "}
                </p>

                <p>
                  <strong>Opening hours (weekdays):</strong> from 8:00 to 17:00{" "}
                </p>

                <p>
                  <strong>Sale department</strong> @sales@kraisneft-llc.com{" "}
                </p>

                <p>
                  <strong>Retail department</strong> @kiv@kraisneft-llc.com{" "}
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className={styles["form-content"]}
              >
                <h1> Drop a message </h1>

                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    // name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="from_name"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    email="Email"
                    value={emailSender}
                    onChange={(e) => setEmailSender(e.target.value)}
                    name="email_id"
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {/* Hidden button to trigger form submission */}
                  <button
                    type="submit"
                    className={styles["box"]}
                    style={{
                      color: "white",
                    }}
                  >
                    {" "}
                    Send Message{" "}
                  </button>
                </form>
              </div>
            </div>

            <div className="service-image">
              <img src={Image1} alt={servicebg} />
              <div className="service-overlay"></div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
