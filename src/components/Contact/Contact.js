import React from "react";
import { ContactContainer, ContactContent, Button } from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <p className="sub-title">What's Next?</p>
        <h2 className="title">Get In Touch</h2>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quae
          dolores tenetur maxime molestiae cumque magnam nihil odio repellat
          nostrum, voluptatum ipsum quisquam atque
        </p>
        <Button>Say Hello</Button>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
