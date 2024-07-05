import React from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'







const Contact = () => {
  const [fromEmail,setFromEmail]=useState("")
const [fromName,setFromName]=useState("")
const [message,setMessage]=useState("")

const handleChangeName = (event) => {
  setFromName(event.target.value);
};

const handleChangeEmail = (event) => {
  setFromEmail(event.target.value);
};

const handleChangeMessage = (event) => {
  setMessage(event.target.value);
};

const sendEmail=()=>{

    let obj = {'name':fromName,'from_email':fromEmail,'message':message}
    emailjs.send('service_xbppor5','template_w2emkbu',obj,'zJvWaeJll6zqps-vo')
    setFromName("")
    setFromEmail("")
    setMessage("")
    alert("Message sent")
}
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' onChange={handleChangeName} value={fromName}/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' onChange={handleChangeEmail} value={fromEmail}/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' onChange={handleChangeMessage} value={message}></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' onClick={sendEmail}>Let's Collaborate</button>
            
        </div>
    </div>
  )
}
export default Contact