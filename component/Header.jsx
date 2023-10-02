import React from 'react'

function Header() {
  return (
    
    <nav className="bg-black text-white flex justify-between">
    <img src="tra logo.jpeg" class="h-11 pt-1 px-3" alt="logo" srcset=""></img>
    <ul className= " px-28 py-4 flex space-x-11 justify-end ">
<li><i className="fa-solid fa-house" style="color: #33dee1;"></i>Home</li>
<li>About</li>
<li>Services</li>
<li>Samples</li>
<li>Contact</li>

    </ul>
</nav>

  )
}

export default Header