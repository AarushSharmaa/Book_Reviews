import React from "react";
import "./styles.css";
import { useState } from "react";

// making our database containing genres and books
// we have an object with a key and an array of values
const bookDB = {
  academics: [
    {
      name: "Concepts of Physics - Part 1",
      rating: "4/5",
      author: "Author : HC Verma",
      description:
        "Comments : If you are from India and ever studied Physics in your high school, this is the Bible. Covers a wide array of concept based numericals that will teach you how to think in Physics."
    },
    {
      name: "Chemistry - NCERT - Part 1 and 2",
      rating: "5/5",
      author: "Author : Team at NCERT",
      description:
        "Comments : If you are a science student from India, you would probably encounter this book in your high school. With crystal clear explanations in as simple words as possible, this book teaches the concepts of Chemistry with a lot of ease while generating interest for the subject."
    },
    {
      name: "NeoG Level 0 : Web Dev Course",
      rating: "5/5",
      author: "Creator : Tanay Pratap",
      description:
        "Comments : A free online course that teaches the basics of web development by making students build projects."
    }
  ],

  fiction: [
    {
      name: "Sita",
      rating: "4/5",
      author: "Author : Amish Tripathi",
      description:
        "Comments : If you are interested in looking at mythology with a broad eye perspective on how it impacted social issues, this is a must read. The journey of Sita will surely set you up for an intense journey to read all Amish' books."
    },
    {
      name: "Kite Runner",
      rating: "5/5",
      author: "Author : Khaled Hosseini",
      description:
        "Comments : I do not think I can comment on this. My all time favourite book and my all time favourite lines are from this book."
    },
    {
      name: "The fault in our stars",
      rating: "3.5/5",
      author: "Author : John Green",
      description:
        "Comments : Must read if you are a teenager. If you are not, you may get bored by the overwhelming emotions thrown in the book."
    },
    {
      name: "Alchemist",
      rating: "4/5",
      author: "Author : Paul Coelho ",
      description:
        "Comments : If you are looking for something outside, you will probably end up always looking. A very deep story around discovering human potential."
    }
  ],
  finance: [
    {
      name: "Psychology of Money",
      rating: "4/5",
      author: "Author : Morgan Housel",
      description:
        "Comments : Teaches you about long term wealth management by narrating a story involving one boy and two fathers."
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "2/5",
      author: "Author : Robert T. Kiyosaki",
      description:
        "Comments : It will talk to you and teach you about your relationship with money. Covers a lot of observational traits. Would be a good read if you are willing to explore your relationship with money"
    },
    {
      name: "The One-Page Financial Plan",
      rating: "2.5/5",
      author: "Author : Carl Richards",
      description:
        "Comments : It gives an insight into how you can tackle all the complexities surrounding your money in a single page."
    }
  ]
};

export default function App() {
  // useState to initialise genre at Business
  // and setGenre is a function that will update the current genre
  // based on our click
  const [selectedGenre, setGenre] = useState("fiction");

  var profile = "https://about-aarush.netlify.app/";
  function genreClickHandler(genre) {
    var updatedGenre = genre;
    setGenre(updatedGenre);
  }
  return (
    <div className="App">
      <h1> 📚 GoodReads </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my reviews for books from a range of these genres
      </p>

      <div>
        {/* converting the object to an array and passing one genre at a time*/}
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <br />
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <br />
              <div style={{ fontSize: "smaller" }}> {book.author} </div>
              <br />
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <br />
      <br />
      <small>
        {" "}
        For more such recommendations and reviews, contact me by clicking{" "}
        <a href={profile} target="_blank">
          Here
        </a>
      </small>
    </div>
  );
}
