
import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(){
    super();

    this.state={
      CLIENT_ID:'371805',
      CLIENT_SECRET:'2753c706-1502-4c22-a1be-41349c49ab38',
      search:null,
      firstname: undefined,
      lastname: undefined,
      province: undefined,
      email: undefined,
    };
  }

  assignRegion = (province) => {
    switch(province) {
      case 'BC':
        return "Pacific";
      case 'AB':
      case 'SK':
      case 'MB':
        return "Prairie";
      case 'ON':
      case 'QC':
        return "Eastern";
      case 'NB':
      case 'NS':
      case 'PE':
      case 'NL':
        return "Atlantic";
      default:
        return "NA";
    }
}     

  onSubmitForm = (event) => {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.hsforms.com/submissions/v3/integration/submit/20536262/d27d5d10-68a0-48de-a97c-8405f407221b';

    const data = {

      fields: [
    
        {
          name: "firstname",
          value: "this.state.firstname"
        },
        {
          name: "lastname",
          value: "this.state.lastname"
        },
        {
          name: "state",
          value: "this.state.province"
        },
        {
          name: "country",
          value: "this.assignRegion(this.state.province)",
        }
      ],
      "legalConsentOptions":{ // Include this object when GDPR options are enabled
        "consent":{
          "consentToProcess":true,
          "text":"I agree to allow Example Company to store and process my personal data.",
          "communications":[
            {
              "value":true,
              "subscriptionTypeId":999,
              "text":"I agree to receive marketing communications from Example Company."
            }
          ]
        }
      }
    };

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) { 
            alert(xhr.responseText); // Returns a 200 response if the submission is successful.
        } else if (xhr.readyState === 4 && xhr.status === 400){ 
            alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
        } else if (xhr.readyState === 4 && xhr.status === 403){ 
            alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
        } else if (xhr.readyState === 4 && xhr.status === 404){ 
            alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
        }
       }


    // Sends the request 
    
    xhr.send(JSON.stringify(data))
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
        <label>
            Email:
            <input type="text" name="email" onChange={(e) => { this.setState({name: e.target.value})}} />
          </label>
          <label>
            First Name:
            <input type="text" name="firstname" onChange={(e) => { this.setState({name: e.target.value})}} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" onChange={(e) => { this.setState({name: e.target.value})}} />
          </label>
          <label>
            Province:
            <input type="text" name="province" onChange={(e) => { this.setState({province: e.target.value})}} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}




export default App;
