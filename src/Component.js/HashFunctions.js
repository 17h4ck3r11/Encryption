import React from "react";
import Fade from 'react-reveal/Fade';

class HashFunctions extends React.Component {
render(){
  return (
    <div className="symmetric">
    <Fade bottom>
      <h1>
      <Fade left cascade>
        3. Hash Functions
      </Fade>
      </h1>
      <p>
        A hash function is a mathematical function that takes an input (or
        "message") and produces a fixed-size string of characters, which is
        typically a hexadecimal number or a sequence of bytes. The output, often
        referred to as a "hash value" or "digest," is unique to the input data,
        and even a small change in the input should produce a significantly
        different hash value. Hash functions are used in various applications
        across computer science and cryptography for a wide range of purposes.
      </p>
      <ol>
        <span>
          Here are some key characteristics and uses of hash functions:
        </span>

        <li>
          <span className="sub-heading mt-2">Deterministic:</span> A hash
          function always produces the same hash value for the same input. This
          property is crucial for consistency and data integrity verification.
        </li>

        <li>
          <span className="sub-heading">Fixed Output Size:</span> Hash functions
          produce a hash value of a fixed length, regardless of the size or
          length of the input data. Common hash lengths include 128, 160, 256,
          and 512 bits.
        </li>

        <li>
          <span className="sub-heading">Fast Computation:</span> Hash functions
          are designed to be computationally efficient and fast to compute.
        </li>

        <li>
          <span className="sub-heading">Avalanche Effect:</span>A minor change
          in the input data should result in a significantly different hash
          value. This property ensures that similar inputs do not produce
          similar hash values.
        </li>
        <li>
          <span className="sub-heading">Pre-image Resistance:</span>Given a hash
          value, it should be computationally infeasible to determine the
          original input data (pre-image) that produced that hash value.
        </li>
        <li>
          <span className="sub-heading">Collision Resistance:</span>It should be
          computationally infeasible to find two different inputs that produce
          the same hash value. Hash collisions are considered undesirable and
          can have security implications.
        </li>
      </ol>
      <ul>
        <span>Uses of Hash Functions:</span>

        <li className="mt-2">
          {" "}
          <span className="sub-heading">Data Integrity:</span> Hash functions
          are commonly used to verify the integrity of data during transmission
          or storage. By comparing the hash value of received data with a
          precomputed hash value, you can check if the data has been tampered
          with or corrupted.
        </li>

        <li>
          {" "}
          <span className="sub-heading">Cryptographic Applications:</span> Hash
          functions are essential components of many cryptographic algorithms
          and protocols. They are used in digital signatures, password storage
          (hashing passwords instead of storing them in plaintext), and creating
          secure message digests.
        </li>

        <li>
          {" "}
          <span className="sub-heading">Data Structures:</span> Hash functions
          are used in data structures like hash tables and hash maps to
          efficiently store and retrieve data. These structures allow for rapid
          data retrieval based on a key.
        </li>

        <li>
          {" "}
          <span className="sub-heading">File and Data Deduplication:</span> Hash
          functions are used to identify duplicate files or data blocks
          efficiently. If two files have the same hash value, they are likely
          identical.
        </li>

        <li>
          {" "}
          <span className="sub-heading">
            {" "}
            Blockchain and Cryptocurrencies:
          </span>{" "}
          Hash functions play a central role in blockchain technology, ensuring
          the immutability of transaction records and blocks.
        </li>
      </ul>
      <p>
        Common hash functions include SHA-256 (part of the SHA-2 family), SHA-3,
        MD5, and more. It's important to choose an appropriate hash function for
        a given application, considering factors such as security requirements,
        speed, and the size of the hash value. Cryptographically secure hash
        functions are designed to resist various attacks and are typically used
        in security-sensitive applications.
      </p>

      <div className="cards container bg-black">
        <div className="maincontainer">
          <div className="back">
            <h2 style={{ marginBottom: "3%", textAlign: "center" }}>
              Cryptographic Hash Functions
            </h2>
            <p>
              These one-way functions take an input and produce a fixed-length
              hash value. Examples include SHA-256 and SHA-3. Hash functions are
              used for data integrity verification, password storage, and
              digital signatures.
            </p>
          </div>
          <div className="front">
            <div className="image">
              <h2 style={{ textAlign: "center" }}>
                Cryptographic Hash Functions
              </h2>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
  }
}

export default HashFunctions;
