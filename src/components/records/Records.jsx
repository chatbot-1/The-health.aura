import React from 'react'
import "./records.css"

const Records = () => {
  return (
    <div className="record section">
      <div className="record-container container">
        </div>
        <div className="title title1">
          <h1>Upload your important health records</h1>

          <form action='#' className="record-data">
            <input type="text" className='input' placeholder='Full name of the patient'/>
            <input type="text" className='input' placeholder='Disease name'/>
            <input type="text" className='input' placeholder='Symptoms'/>
            <input type="text" className='input' placeholder='Enter the Hospital Name'/>
            <input type="text" className='input' placeholder='Assigned Doctor name'/>
            <div className="issue-date">
              <label for="date">Certificate issued date : </label>
              <input type="date" className="input" name="birthday"/>
            </div>

            <div className="upload">
            <label for="file">Upload the document (pdf only) : </label>
            <input type="file" />
            </div>

          </form>

          <button>Submit</button>

      </div>
    </div>
  )
}

export default Records