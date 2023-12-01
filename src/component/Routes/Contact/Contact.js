import React, { useState } from 'react';
import axios from 'axios';
import styles from './contact.module.css';
// import Image from '../../assets/keno.png';
import servicebg  from '../../../assets/packages.jpg'
import Image1  from '../../../assets/images/img1.jpg'
import Footer from '../Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
// import Emma  from '../../../assets/images/emma.jpg'

const Contact = () => {
    const [emailSender , setEmailSender]= useState("")
    const [message , setMessage]= useState("")
    const [name , setName]= useState("")


    const YOURMAIL = 'ezechukwuchibuikemoses@gmail.com'
console.log(emailSender)

async function SendMail(e){
    e.preventDefault()
    if(!emailSender||!message||!name){toast.error("One or more field required"); return;}

const options = {
  method: 'POST',
  url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'a96bd059eamshcf24a85b9978e25p1abb39jsn4b943bb8ef08',
    'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
  },
  data: {
    personalizations: [
      {
        to: [
          {
            email: YOURMAIL
          }
        ],
        subject: `A message from ${name}`
      }
    ],
    from: {
      email: emailSender
    },
    content: [
      {
        type: 'text/plain',
        value: message
      }
    ]
  }
};

try {
	const response = await axios.request(options);
    if(response?.status===200){toast.success("Message sent sucessfully")}
	console.log(response.data);
} catch (error) {
	console.error(error);
    toast.error(error?.message)
}
}
    return (
        <div 
        
        className={styles["contact"]} id="contact" >
            <Toaster/>
            
       

            <div className={styles["contact-content"]} >

            <div className='about'>
            
            <section className="section1">

            
        
                <div className='service-image'>
                    <img src={servicebg} alt={servicebg} />
                    <div className='service-overlay'></div>
                </div>
                    
                <div className="text" >
                <h1> Our Contact </h1>                  
                                            
                    <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="block">
                    </div>
                </div>
    

            </section>

            <section className="section2">

            <div className="text" >

                

                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='text-story'>
                        <h1> Contact details </h1>

                        <p>  Our headquarter is located at 2175 N. Orange Avenue.</p>
                        
                        <p> Suite 202 Sarasota, Florida 34236 </p>

                        <p> 831-824-4517 </p>

                       
                    </div>

                    <div 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className={styles["form-content"]} >
                    
                    <h1> Drop a message </h1>
                  

                    
                    <form >
                        <input type="text"
                        placeholder="Your Name"
                        name="Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                        <input type="text"
                        placeholder="Your Email"
                        email="Email"
                        value={emailSender}
                        onChange={(e)=>setEmailSender(e.target.value)}
                        />
                       <textarea name="Message" id="" cols="30" rows="10" 
                       placeholder="Your message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>


                        <div className={styles["box"]} >
                       <p onClick={SendMail}> Send Message </p>  
                  </div>
         
                    </form>
                </div>

                </div>
        
                <div className='service-image'>
                    <img src={Image1} alt={servicebg} />
                    <div className='service-overlay'></div>
                </div>
                    
    
            </section>

             
           
            </div>
            </div>

            <Footer />
        
    </div>
    )
}

export default Contact
