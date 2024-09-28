import React from 'react'

export default function Footer() {
  let FooterStyle = {
    
    position: "relative",
    width: "100%",
    top: "40vh"

  }
  return (
  <footer className='bg-dark text-light py-3' style={FooterStyle}>
    <p className='text-center'>
      Copy Right &copy; MyOwnAPP.com
    </p>
  </footer>
  )
}


