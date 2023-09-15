import React from "react";
import Fade from 'react-reveal/Fade';

class HomomorphicEncryption extends React.Component {
  render() {
  return (
    <div className="asymmetric">
      <Fade bottom>
      <h1>
      <Fade left cascade>
        6. Homomorphic Encryption
      </Fade>  
      </h1>
      <p>
      Homomorphic encryption is a specialized cryptographic technique that enables computation on encrypted data without the need to decrypt it first. In other words, it allows data to remain encrypted while still performing operations on it. This is a highly advanced form of encryption with various practical applications, particularly in scenarios where data privacy and security are paramount.
      </p>
      <ol>
        <span>Homomorphic encryption has several valuable properties:</span>

        <li>
          <span className="sub-heading mt-2">Confidentiality: </span>
           The data remains encrypted at all times, even during computations. Only authorized parties with the appropriate decryption keys can access the final results.
        </li>

        <li>
        <span className="sub-heading mt-2">Privacy-Preserving Computation: </span>
         It enables secure and privacy-preserving data processing, which is important in situations where sensitive information needs to be processed by third parties without exposing the raw data.
        </li>

        <li>
        <span className="sub-heading mt-2">Data Security: </span>
         Since data remains encrypted throughout the computation, it is protected against unauthorized access and breaches.
        </li>
      </ol>

      <ul>
        <span>Homomorphic encryption is particularly useful in the following scenarios:</span>

        <li className="mt-2">
          <span className="sub-heading mt-2">Secure Cloud Computing: </span>
          Users can store their encrypted data in the cloud and perform computations on that data without revealing its contents to the cloud service provider. This is especially important in fields like healthcare and finance.
        </li>

        <li>
        <span className="sub-heading mt-2">Privacy-Preserving Data Analysis: </span>
          Researchers and organizations can analyze sensitive datasets without having to access or expose the raw data. This is beneficial for preserving individual privacy while still gaining insights from the data.
        </li>

        <li>
        <span className="sub-heading mt-2">Secure Outsourcing of Computations: </span>
          Organizations can outsource specific computations to third parties without exposing the data they are working with. For example, a financial institution could outsource risk assessments without revealing customer financial data.
        </li>
        
        <li>
        <span className="sub-heading mt-2">Secure Multi-Party Computation: </span>
          Multiple parties can jointly compute a function on their combined data without sharing the data itself. This is valuable in collaborative scenarios where data-sharing restrictions exist.
        </li>
      </ul>
      </Fade>
    </div>
  );
  }
}

export default HomomorphicEncryption;
