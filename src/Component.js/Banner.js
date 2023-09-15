import React from 'react'
import { Cursor } from 'react-simple-typewriter'
import { Fade } from 'react-reveal'


class Banner extends React.Component  {
  render(){
  return (
        <div className="banner">
          <Fade left cascade>
            <div className="content">
                <h1 className='display-3 text-center text-white font-weight-bold mb-3'>~/ Encryption<Cursor /></h1>   
                <div style={{width:"80%"}}>
                <p >Encryption is a process of converting information or data into a code to prevent unauthorized access. It is a fundamental technique used in computer security and information protection. The primary purpose of encryption is to ensure the confidentiality and privacy of data, making it unreadable to anyone who doesn't have the appropriate decryption key. Encryption is used extensively in various applications, including secure communication over the internet (e.g., HTTPS for web browsing, end-to-end encryption in messaging apps), data protection in storage and backups, and safeguarding sensitive information in databases and financial transactions. It plays a crucial role in maintaining the confidentiality and integrity of data in today's digital world.</p>
                </div>
            </div>
            </Fade>
        </div>
      )
  }
  }
  

export default Banner
