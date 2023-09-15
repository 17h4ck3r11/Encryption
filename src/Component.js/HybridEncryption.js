import React from "react";
import Fade from 'react-reveal/Fade';

class HybridEncryption extends React.Component {
  render(){
  return (
    <div className="asymmetric">
      <Fade bottom>
      <h1>
      <Fade left cascade>
        4. Hybrid Encryption
      </Fade>
      </h1>
      <p>
        Hybrid encryption is a cryptographic technique that combines the strengths of both symmetric and asymmetric encryption to secure data transmission and storage. It addresses the key management challenges of symmetric encryption and the computational overhead of asymmetric encryption, providing a more efficient and secure solution.
      </p>
      <ol>
        <span>Here's how hybrid encryption works:</span>

        <li>
          <span className="sub-heading mt-2">Key Exchange:</span>
          In a hybrid encryption system, two parties, often referred to as Alice and Bob, want to securely exchange data. Initially, they perform a key exchange process using asymmetric encryption (public-key encryption) to establish a shared secret key.
            <br />
            
            - {' '}Alice generates a random symmetric encryption key (symmetric key) for encrypting the actual data.
            <br />

            - {' '}Alice encrypts this symmetric key with Bob's public key (asymmetric encryption).
            <br />
            - {' '}Alice sends the encrypted symmetric key to Bob.
        </li>

        <li>
        <span className="sub-heading mt-2">Data Encryption:</span>
            <br />
            
            - {' '}Alice uses the shared symmetric key to encrypt the actual data using a symmetric encryption algorithm (e.g., AES). This symmetric encryption is much faster and more efficient than asymmetric encryption.
            <br />

            - {' '}Alice sends the encrypted data to Bob.
        </li>

        <li>
        <span className="sub-heading mt-2">Data Transmission/Storage:</span>
          
            <br />
            
            - {' '}The encrypted data and the encrypted symmetric key are transmitted to Bob or stored as needed. Since the symmetric key is encrypted with Bob's public key, even if intercepted by an attacker, they cannot determine the symmetric key without Bob's private key.
        </li>

        <li>
        <span className="sub-heading mt-2">Decryption:</span>
            <br />
            
            - {' '}Bob receives the encrypted data and the encrypted symmetric key.
            <br />

            - {' '}Bob uses his private key to decrypt the symmetric key, obtaining the original symmetric key.
            <br />
            - {' '}Bob uses the symmetric key to decrypt the encrypted data, recovering the plaintext data.
        </li>
      </ol>
      <ul>
        <span>Key points to note about hybrid encryption:</span>

        <li className="mt-2">
          {" "}
          Hybrid encryption combines the security benefits of asymmetric encryption (secure key exchange) with the efficiency of symmetric encryption (fast data encryption and decryption).
        </li>

        <li>
          {" "}
          It addresses the primary challenge of asymmetric encryption, which is relatively slow when compared to symmetric encryption.
        </li>

        <li>
          {" "}
          Hybrid encryption is commonly used in secure communication protocols like HTTPS (secure web browsing), secure email (S/MIME, PGP), and secure messaging apps. It's also used in various secure file storage and transmission applications.
        </li>

        <li>
          {" "}
          The security of hybrid encryption relies on the security of both the asymmetric encryption for key exchange and the symmetric encryption for data protection.
        </li>

        <li>
          {" "}
          In practice, hybrid encryption is a widely accepted and secure approach for securing sensitive data in transit or at rest. It offers a practical solution to the challenges of key management and computational efficiency in encryption.
        </li>
      </ul>
      </Fade>
    </div>
  );
}
}

export default HybridEncryption;
