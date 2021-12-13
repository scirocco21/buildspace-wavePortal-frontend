import React, {useState} from "react";

const MessageForm = (props) => {
  const [message, setMessage] = useState("");
  
  const handleChange = (evt) => {
    setMessage(evt.target.value)
    console.log(message)
  };

  const handleSubmit = (evt) => {
      evt.preventDefault();
      props.wave(message);
      console.log("form submitted")
  };

  
  return (
      <form className="formContainer" onSubmit={handleSubmit}>
        <h4>
          Your Message
        </h4>
        <textarea placeholder="What's up?" id="waveInput" value={message} onChange={handleChange} />  
        <button className="waveButton" onSubmit={handleSubmit}>
          Wave at me
        </button>
      </form>
  );
}

export default MessageForm;