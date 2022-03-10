import React from "react";
// import { ButtonInput } from 'react-bootstrap'
// import { Form } from 'react-bootstrap-validation'
// import { Button } from 'react-bootstrap';
// import { Input } from 'react-input-component';

function Button(props){
  function handleSubmit(){
    console.log("");
  }
  return(
    <input id={props.ID} type="submit" value="Submit" onClick={handleSubmit} />
  );
}
function Input(props){
  function Checker(event){
    let value = event.target.value;
    // console.log(value);
    let i = props.ID.toString();
    if(i === "name"){
      var re =  /^[A-Za-z]+$/;
      let check =  re.test(value);
      if(check === false)
        document.getElementById(i).style = "border-bottom : 1px solid red";
      else
        document.getElementById(i).style = "border-bottom : 0.1rem solid #00e600";
    }
    // else if(i === "phone"){
    //   var number =  /^[0-9]+$/;
    //   let check =  number.test(value);
    //   if(value.length < 10 || value.length >10 || check === false)
    //     document.getElementById(i).style = "border-bottom : 1px solid red";
    //   else
    //     document.getElementById(i).style = "border-bottom: 0.1rem solid #00e600";
    // }
    else if(i === "email"){
      var email =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let check =  email.test(value);
      if (check === false)
        document.getElementById(i).style = "border-bottom : 1px solid red";
      else
        document.getElementById(i).style = "border-bottom: 0.1rem solid #00e600";
    }
  }
  return(
    <input autoComplete="off" type={props.type} placeholder={props.hint} id={props.ID} onChange={Checker}/>
  );
}



function Contact() {

  return(
    <div className="formmain">
      <div className="leftcontact">
      <img src="./images/form.png" alt="form"></img>
      </div>
      <form className="main-form" onSubmit = "#">
        <h1>Contact Us</h1>     <br/>
        
        <div>
          <label>Name</label>     <br/>
          <Input hint="Enter your name" type="text" ID="name"/> 
        </div>
        
        <div className="form-element">
          <label>Email</label>  <br/>
          <Input hint="Enter your Email ID" type="email" ID="email"/> 
        </div>
        
        {/* <div className="form-element">
          <label>Phone</label> <br/>
          <Input hint="Phone Number" type="text" ID="phone"/>
        </div>
         */}
        <div className="form-element">
          <label>Message</label> <br/>
          <textarea id="msg" rows="5" placeholder="Questions/comments...">
            </textarea> 
        </div>
        
        <Button ID="submit">Submit</Button>
        </form>
    </div>
  );
}
  
  export default Contact;
  