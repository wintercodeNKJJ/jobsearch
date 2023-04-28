import React from "react";
import image1 from "../../assets/Desktop - 2job derciptio .jpg";

const DitailAboutcompany = ({info}) => {
  return (
    <div>
      <div className=" text-left text-sm">
        <h1>About company:</h1>
        <p>{info.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-8">
        <div>
          <img
            src={image1}
            alt=""
            className="border h-ful w-full object-cover rounded-xl"
          />
        </div>
        <div className="text-sm flex flex-col gap-3 text-left">
          <h1>Address</h1>
          <p>{info.location}</p>
          <h1>Phone number</h1>
          {info.contact && <p>{info.contact.tel1}, {info.contact.tel2}</p>}
          <h1>Website</h1>
          <p>{info.website}</p>
        </div>
      </div>
    </div>
  );
};

export default DitailAboutcompany;
