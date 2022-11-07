import React, { useState } from "react";
import Select from "react-select";

const options = [
   { value: "Digital Marketing", label: "Digital Marketing" },
   { value: "Website Design", label: "Website Design" },
   { value: "Web Analytics", label: "Web Analytics" },
   { value: "Web Programming", label: "Web Programming" },
   { value: "Infographic Design", label: "Infographic Design" },
   { value: "Price", label: "Price" },
   { value: "Information", label: "Information" },
];

const customStyles = {
   control: (provided, state) => ({
      ...provided,
      border: "1px solid #339999",
      paddingLeft: "1.2rem",
      "&:hover": {
         borderColor: "none",
      },
      "&:select": {
         borderColor: "none",
      },
   }),
   option: (provided, state) => ({
      ...provided,
   }),
   input: (provided, state) => ({
      ...provided,
      color: "transparent",
   }),
   singleValue: (provided, state) => ({
      ...provided,
      color: "dark",
      fontSize: "1rem",
   }),
};

export const SelectCotactForm = () => {
   const [selectedOption, setSelectedOption] = useState({ value: "Information", label: "Information" });

   return (
      <div className="input-group-meta form-group mb-25 d-flex flex-column">
         <label>Select Service*</label>
         <Select
            theme={(theme) => ({
               ...theme,
               borderRadius: 0,
               spacing: {
                  menuGutter: 1,
               },
               colors: {
                  primary: "#339999",
                  primary50: "#ccc",
                  primary25: "#ccc",
                  danger: "#ccc",
                  dangerLight: "#ccc",
                  neutral5: "#ccc",
                  neutral10: "#ccc",
                  neutral20: "#ccc",
                  neutral30: "#ccc",
                  neutral40: "#ccc",
                  neutral50: "#ccc",
                  neutral60: "#ccc",
                  neutral70: "#ccc",
                  neutral80: "#ccc",
                  neutral90: "#ccc",

                  primary75: "#fff",
                  neutral0: "#fff",
               },
            })}
            classNamePrefix="reSel"
            styles={customStyles}
            className="reSelect"
            defaultValue={selectedOption}
            onChange={selectedOption}
            options={options}
            name="category"
            required="required"
         />
      </div>
   );
};
