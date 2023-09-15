import React from "react";
import Fade from 'react-reveal/Fade';

class EndtoEndEncryption extends React.Component  {
  render() {
  return (
    <div className="asymmetric">
      <Fade bottom>
      <h1>
      <Fade left cascade>
        8. End-to-End Encryption (E2EE)
      </Fade>
      </h1>
      <p>
        End-to-end encryption (E2EE) is a secure communication method that ensures only the communicating parties can read the messages or data exchanged, and no intermediaries, including service providers or hackers, can access the plaintext content. In E2EE, the data is encrypted on the sender's side and decrypted on the recipient's side, with the encryption and decryption keys solely in the hands of the communicating parties.
      </p>
      <ol>
        <span>Here's how end-to-end encryption works:</span>

        <li>
          <span className="sub-heading mt-2">Key Generation:</span>
            <br />
            
              - {' '}Public Key: This key is shared openly and is used by others to encrypt messages or data intended for the key's owner. Anyone can encrypt data with a public key, but only the owner of the corresponding private key can decrypt it.
            <br />

            - {' '}Private Key: This key is kept secret and securely stored by the key owner. It is used to decrypt messages or data encrypted with the corresponding public key.
        </li>

        <li>
          <span className="sub-heading">Message Encryption:</span> 
          <br />
            
              - {' '}When User A wants to send an encrypted message to User B, User A obtains User B's public key.
            <br />

            - {' '}User A uses User B's public key to encrypt the message.
            <br />
            - {' '}The encrypted message, now in ciphertext form, is sent to User B.
        </li>

        <li>
          <span className="sub-heading">Message Decryption:</span> 
          <br />
            
              - {' '}User B receives the encrypted message.
            <br />

            - {' '}User B uses their private key to decrypt the ciphertext, revealing the original plaintext message.
        </li>
      </ol>
      <ul>
        <span>Key points to note about end-to-end encryption:</span>

        <li className="mt-2">
          {" "}
          E2EE ensures that the data is secure and confidential during transit, as even if intercepted, the ciphertext cannot be deciphered without the recipient's private key.
        </li>

        <li>
          {" "}
          The encryption and decryption occur on the user's device, not on servers or at any intermediary point. This means that service providers, including email providers or messaging apps, do not have access to the plaintext content of messages.
        </li>

        <li>
          {" "}
          E2EE is commonly used in secure messaging apps, email services, and communication tools to protect user privacy and data security.
        </li>

        <li>
          {" "}
          It provides a strong level of security, but it also comes with the responsibility of securely managing and protecting the private keys, as losing access to the private key can result in permanent data loss.
        </li>

        <li>
          {" "}
          End-to-end encryption can be applied to various forms of communication, including text messages, voice calls, video calls, and file sharing.
        </li>

        <li>
          {" "}
          While E2EE ensures the confidentiality of data, it does not provide protection against other types of attacks, such as malware or social engineering.
        </li>

        <li>
          {" "}
          Popular E2EE messaging apps include Signal, WhatsApp (when E2EE is enabled), and Telegram (when using secret chats).
        </li>
      </ul>

      <p>End-to-end encryption is a critical technology for safeguarding sensitive information and ensuring secure, private communication in an era where digital privacy is increasingly important.</p>
      </Fade>
    </div>
  );
  }
}

export default EndtoEndEncryption;
