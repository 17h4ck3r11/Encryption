import React from "react";
import Fade from 'react-reveal/Fade';
class Asymmetric extends React.Component  {
  render() {
  return (
    <div className="asymmetric">
      <Fade bottom>
      <h1>
      <Fade left cascade>
        2. Asymmetric Encryption
      </Fade>  
      </h1>
      <p>
        Asymmetric encryption, also known as public-key encryption, is a
        cryptographic technique that uses a pair of mathematically related, but
        distinct, keys for encryption and decryption: a public key and a private
        key. Unlike symmetric encryption, where the same key is used for both
        encryption and decryption, asymmetric encryption provides a more secure
        way to exchange encrypted information over insecure channels without the
        need for pre-shared secret keys.
      </p>
      <ol>
        <span>Here's how asymmetric encryption works:</span>

        <li>
          <span className="sub-heading mt-2">Key Pair Generation:</span>
            <br />
            
              - {' '}Public Key: The public key is made available to anyone who wants
              to send an encrypted message to the owner of the key. It's used
              for encrypting data but cannot decrypt data.
            <br />

            - {' '}Private Key: The private key is kept secret and known only to the
              key owner. It's used for decrypting data that has been encrypted
              with the corresponding public key.
        </li>

        <li>
          <span className="sub-heading">Encryption:</span> If Alice wants to send an encrypted message to Bob, she obtains Bob's public key (which is openly available). Using Bob's public key and an encryption algorithm (e.g., RSA), Alice encrypts the plaintext message.
        </li>

        <li>
          <span className="sub-heading">Transmission:</span> Alice sends the encrypted message to Bob over an insecure channel (e.g., the internet). Even if an attacker intercepts the ciphertext, they cannot decrypt it without Bob's private key.
        </li>

        <li>
          <span className="sub-heading">Decryption:</span> Bob, the intended recipient, uses his private key to decrypt the message. Only Bob's private key can successfully decrypt data encrypted with his public key.
        </li>
      </ol>
      <ul>
        <span>Key points to note about asymmetric encryption:</span>

        <li className="mt-2">
          {" "}
          Asymmetric encryption is slower and computationally more intensive than symmetric encryption. Thus, it's typically used for securing communications (e.g., email, web browsing) and key exchange rather than encrypting large volumes of data.
        </li>

        <li>
          {" "}
          Asymmetric encryption provides a secure way for two parties to communicate without the need to share a secret key in advance. This is particularly useful for secure communication over the internet, where parties may not have previously established trust.
        </li>

        <li>
          {" "}
          Public keys can be openly distributed and are used for encryption, while private keys must be kept secret and are used for decryption. The security of asymmetric encryption relies on the mathematical difficulty of deriving the private key from the public key.
        </li>

        <li>
          {" "}
          Common asymmetric encryption algorithms include RSA, DSA (Digital Signature Algorithm), and ECC (Elliptic Curve Cryptography). These algorithms are widely used for securing online communication, digital signatures, and secure key exchange protocols (e.g., Diffie-Hellman).
        </li>

        <li>
          {" "}
          Hybrid encryption is a common approach where asymmetric encryption is used to securely exchange a shared symmetric key. Once the symmetric key is established, it is used for efficient encryption and decryption of the actual data, combining the efficiency of symmetric encryption with the security of asymmetric encryption.
        </li>
      </ul>

      <div className="cards container">
        <div className="maincontainer">
          <div className="back">
            <h2>RSA Encryption</h2>
            <p>
            RSA is a widely-used asymmetric encryption algorithm that relies on the mathematical properties of large prime numbers. It's used for secure key exchange and digital signatures.
            </p>
          </div>
          <div className="front">
            <div className="image">
              <h2>RSA Encryption</h2>
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="back">
            <h2>ECC</h2>
            <p>
            ECC is another asymmetric encryption technique known for its strong security with relatively short key lengths compared to RSA.
            </p>
          </div>
          <div className="front">
            <div className="image p-1">
              <h2 className="text-center">Elliptic Curve Cryptography (ECC)</h2>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
  }
}

export default Asymmetric;
