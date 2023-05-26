"use client"
import React, { useState } from "react";
import { sendEmail } from "@/server/contact";
import HeaderContact from "@/components/HeaderContact";
import Footer from "@/components/Footer";

const formatEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Page = () => {
  const [obj, setObj] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [isloading, setIsLoading] = useState(false);
  
  const handleSend = async () => {
    setIsLoading(true)
    const Obj = await sendEmail({
      name,
      email,
      obj,
      message,
    });
    
    if(Obj){
      setSuccess(true), setIsLoading(false)
    }
    else{setError("error")}
    
  };
  
  return (
    <div>
      <HeaderContact />
      <div className="flex justify-center w-fit absolute">
        {success && 
          <div className="alert alert-success shadow-lg w-fit">
            <div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>Votre message a été envoyé avec succès !</p>
            </div>
          </div>
        }
      </div>
      {error && 
        <div className="alert alert-error shadow-lg w-fit absolute">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p>{error}</p>
        </div>
      }
      <div className="flex justify-center items-center flex-col h-screen">
        <b className="flex justify-center pb-10">
          <span id="txtContact" className="font-bold sm:text-4xl text-xl">Contact</span>
        </b>
        <div className="sm:w-96 md:h-auto h-fit shadow-md shadow-slate-400 rounded-lg bg-white">
          <div className="p-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Nom</span>
              </label>
              <input type="text"
                placeholder="Type here"
                className="input input-sm w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Adress E-mail
                </span>
              </label>
              <input type="text"
                placeholder="Type here"
                className="input input-sm w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Objets</span>
              </label>
              <input type="text"
                placeholder="Type here"
                className="input input-sm w-full"
                value={obj}
                onChange={(e) => setObj(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Votre message</span>
              </label>
              <textarea placeholder="Bio"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea textarea-md w-full max-w-xs rounded-lg p-2">
              </textarea>
            </div>
          </div>
          <div className="grid sm:place-content-end p-6">
            <button type="submit" className="btn btn-outline btn-xs sm:btn-sm md:btn-md"
              disabled={!formatEmail.test(email) || !name || !obj || !message || isloading}
              onClick={ handleSend }
            >
              { isloading? "Loading...": "Envoyer mon message"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
