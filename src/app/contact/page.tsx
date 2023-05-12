import React from "react"

const page = () => {
  return(
    <div className="flex justify-center items-center h-screen ">
      <div className="sm:w-2/5 md:h-auto h-fit md:border-solid sm:border-slate-950 sm:border-2 sm:shadow-lg rounded-lg">
        <div className="pl-3">
          <h1 className="text-2xl">Contactez-nous</h1>
          <span className="">Un probleme, une question, envie de nous envoyer un message?</span>
        </div>
        <div className="p-6">
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text font-bold">Your Name</span>
            </label>
            <input type="text" 
              placeholder="Type here" 
              className="input input-sm w-full" 
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text font-bold">Your Adress E-mail</span>
            </label>
            <input type="text" 
              placeholder="Type here" 
              className="input input-sm w-full" 
            />
          </div>
          <div className="form-control w-2/4">
            <label className="label">
              <span className="label-text font-bold">What is your message type?</span>
            </label>
            <div className="form-control">
              <select className="select input select-sm select-bordered text-slate-600">
                <option disabled selected>dsdsdsds</option>
                <option>T-shirts</option>
                <option>Mugs</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your message</span>
            </label>
            <textarea placeholder="Bio" className="textarea textarea-md w-full max-w-xs rounded-lg p-2" ></textarea>
          </div>
        </div>
        <div className="grid sm:place-content-end p-6">
          <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md">Send my message</button>
        </div>
      </div>
    </div>
  );
};

export default page;
