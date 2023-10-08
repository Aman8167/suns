import React from 'react'
import './Payment2.css';
function Payment2() {
  return (
    <div className="container-fluid ">
   
  <div class="form-body" >
<div className="card-1">
<div className="row justify-content-center">
<div className="col-md-10">
<div className="card-body mt-5">
<form>

<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Company Name</label>
      <input type="text" class="form-control" placeholder="Enter your Company name" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Duty Slip No</label>
      <input type="text" class="form-control"  placeholder="Enter your Duty slip" />
      
    </div>
  </div>
</div>

<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Reporting Address</label>
      <input type="text" class="form-control" placeholder="Enter your Reporting Address" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Date</label>
      <input type="date" class="form-control"  placeholder="Enter your Date" />
      
    </div>
  </div>
</div>
<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Name</label>
      <input type="text" class="form-control" placeholder="Enter your Name" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Vehicle Number</label>
      <input type="number" class="form-control"  placeholder="Enter your Vehicle Number" />
      
    </div>
  </div>
</div>





<div className="form-group">
<label> Vehicle Type :</label>
<select  class="form-control  "id="SelectOption">
                <option value="1">Send To</option>
                <option value="1">Send To</option>
                <option value="1">Send To</option>
            </select>

</div>

<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >From</label>
      <input type="text" class="form-control" placeholder="Enter your From" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >To</label>
      <input type="text" class="form-control"  placeholder="Enter your To" />
      
    </div>
  </div>
</div>


<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Closing Kms</label>
      <input type="text" class="form-control" placeholder="Enter your Closing Kms" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Closing Time</label>
      <input type="Time" class="form-control"  placeholder="Enter your Closing Time" />
      
    </div>
  </div>
</div>


<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Starting Kms</label>
      <input type="text" class="form-control" placeholder="Enter your Starting Kms" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Reporting Kms</label>
      <input type="Text" class="form-control"  placeholder="Enter your Reporting Kms" />
      
    </div>
  </div>
</div>


<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Total Kms</label>
      <input type="text" class="form-control" placeholder="Enter your Total Kms" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Total Hours</label>
      <input type="Text" class="form-control"  placeholder="Enter your Total Hours" />
      
    </div>
  </div>
</div>


<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >8 Hrs.  80Kms.@</label>
      <input type="text" class="form-control" placeholder="Enter your 8 Hrs.  80Kms.@" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Amount</label>
      <input type="number" class="form-control"  placeholder="Enter your Amount" />
      
    </div>
  </div>
</div>


<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Extra Kms</label>
      <input type="text" class="form-control" placeholder="Enter your Extra Kms" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Amount</label>
      <input type="number" class="form-control"  placeholder="Enter your Amount" />
      
    </div>
  </div>
</div>


<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Extra Hours</label>
      <input type="text" class="form-control" placeholder="Enter your Extra Kms" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Amount</label>
      <input type="number" class="form-control"  placeholder="Enter your Amount" />
      
    </div>
  </div>
</div>




<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >1 Day 300 kms</label>
      <input type="text" class="form-control" placeholder="Enter your 1 Day 300 kms" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Amount</label>
      <input type="number" class="form-control"  placeholder="Enter your Amount" />
      
    </div>
  </div>
</div>



<div class="row g-2">
  <div class="col-md">
    <div class="form-group">
    <label >Total Amount</label>
      <input type="text" class="form-control" placeholder="Enter your Total Amount" />
      
    </div>
  </div>
  <div class="col-md">
    <div class="form-group">
    <label >Advance Payment</label>
      <input type="number" class="form-control"  placeholder="Enter your Advance Payment" />
      
    </div>
  </div>
</div>

















<br></br>
<button id="btn1" className="btn btn-danger " >
Edit
</button>
<button id="btn2" className="btn btn-danger " >
Save
</button>

</form>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Payment2