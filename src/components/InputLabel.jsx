import React from "react";

const InputLabel = (props) => {
  return (
    <div>
      <label className="title-sm" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        className="block w-full px-4 py-2 mt-2 primary-border rounded-md  "
        value={props.value || " "}
        onChange={(event) => props.on_change(event)}
      />
    </div>
  );
};

export default InputLabel;
