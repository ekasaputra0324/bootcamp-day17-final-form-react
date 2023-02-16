import React, { useState } from "react";
import "./App.css";

function App() {
  /*
  mengunakan state agar mudah
  untuk mengeset data yang akan di parse ke bagian frontend
  */
  const [formValues, setFormValues] = useState({});
  /*
  function handleChange digunakan untuk 
  menghendel data yang telah di kirim kan lewat input dan di parse ke object
  */ 
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };
  /*
  function handleSubmit digunakan untuk 
  melalkukan event ketikan tombol submit di tekan
  */ 
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("Resname").textContent = formValues.name;
    document.getElementById("Resjobs").textContent = formValues.jobs;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="mb-3 mt-5">
          <label htmlFor="name" class="form-label">Nama</label>
          <input type="name" className="form-control" id="name" value={formValues.name || ""} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor="name" class="form-label">Jobs</label>
          <input type="jobs" className="form-control" id="jobs" value={formValues.jobs || ""} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width:"100%" }}>
          Submit
        </button>
      </form>
      <div className="output mt-5" style={{ textAlign: "center"  }}>  
      <h3> Name : <span id="Resname"></span> </h3>
      <h3> Jobs :  <span id="Resjobs"></span> </h3>
      </div>
    </div>
  );
}

export default App;
