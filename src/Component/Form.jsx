import React from 'react'

export const Form = () => {
  return (
    <div>
        <form>
    <span>Name</span> <input type="text" />
    <br/>
    <label>Age</label> <input type='number' /><br />
    <lable>Gender</lable> <select>
        <option>male</option>
        <option>female</option>
        <option>other</option>
    </select>
    <br />
   <input type='submit' />
        </form>
    </div>
  )
}
