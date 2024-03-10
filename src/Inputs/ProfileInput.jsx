import React from "react";

const ProfileInput = ({ label, placeholder,name,setFormData }) => {

    const handleInputChange = (e)=>{
        setFormData((prev)=>(
            {...prev,
            [name]:e.target.value}
        ))
    }

  return (
    <label htmlFor="" className="flex flex-col text-blue-600 font-semibold">
      {label}
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="border-2
       border-gray-200
        w-96 
        mb-2
        py-1
         outline-none
          rounded-md
           text-gray-700 
           px-2"
           onChange={(e)=>handleInputChange(e)}
      />
    </label>
  );
};

export default ProfileInput;
