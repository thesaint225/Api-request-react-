import { Card } from "primereact/card";
import React, { useState } from "react";
import { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const Greet = () => {
  const toast = useRef(null);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("message submitted:", message);

    // Display toast message
    toast.current.show({
      // severity: "info",
      // summary: "Info Message",
      detail: "Your message has been submitted!",
      // detail: "Great!",
      life: 1000000,
    });
    setMessage("");
  };

  return (
    <div className="grid">
      <div className="col-4">
        <Card className="bg-black-alpha-20 m-4">
          <form onSubmit={handleSubmit}>
            <InputText
              placeholder="Message"
              value={message}
              onChange={handleInputChange}
            />

            <Button type="submit" label="Submit" className="p-button-info" />
          </form>
        </Card>
        <Toast ref={toast} />
      </div>
    </div>
  );
};

export default Greet;
