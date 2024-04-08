import React from "react";
import { useState } from "react";
function App(){
  return(
    <div className="App">
    <form>
      <h3>Firstname</h3>
      <input type="text"
      placeholder="firstname"
      name="firstname"
      />
      <h3>Lastname</h3>
      <input type="text"
      placeholder="lastname"
      name="lastname"
      />
      <h3>Email address</h3>
      <input type="text"
      placeholder="xyz123@gmail.com"
      name="email"
      />
      <h3>Country</h3>
      <input type="text"
      placeholder="India"
      name="country"
      />
      <h3>Street address</h3>
      <input type="text"
      placeholder="Main street 123"
      name="street address"
      />
      <h3>City</h3>
      <input type="text"
      placeholder="Varanasi"
      name="city"
      />
      <h3>State/Province</h3>
      <input type="text"
      placeholder="Uttar Pradesh"
      name="state/province"
      />
      <h3>ZIP/Postal Code</h3>
      <input type="text"
      placeholder="221001"
      name="postal Code"
      />
      <h3>By Email</h3>
      <input type="checkbox"
      id="comments"
      />
      <label htmlFor="comments">Comments<p>Get notified when someones posts a comments on a posting</p></label>
      <input type="checkbox"
      id="candidates"
      />
      <label htmlFor="Candidates">Candidates<p>Get notified when someones posts a comments on a posting</p></label>
      <input type="checkbox"
      id="Offers"
      />
      <label htmlFor="Offers">Offers<p>Get notified when someones posts a comments on a posting</p></label>
      <h3>Push Notifications</h3>
      <p>These are delivered via SMS to your mobile phone</p>
      <input type="radio"
      id="everything"
      name="myname"
      />
      <label htmlFor="everything">Everything</label>
      <input type="radio"
      id="Same as email"
      name="myname"
      />
      <label htmlFor="Same as Email">Same as Email</label>
      <input type="radio"
      id="no such notifications"
      name="myname"
      />
      <label htmlFor="no such notifications">No such Notifications</label>

    </form>
    </div>
  );
}

export default App;
