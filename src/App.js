import React, { useState } from "react";
import "./styles.css";

var bookDb = {
  fiction: [
    { name: "The Unconquerable Sun", author: "Kate Elliott", rating: "4.9/5" },
    { name: "Axiom’s End", author: "Lindsay Ellis", rating: "5/5" },
    {
      name: "The Relentless Moon",
      author: "Mary Robinette Kowal",
      rating: "4.5/5"
    }
  ],
  romance: [
    { name: "What's Left of Me", author: "Amanda Maxlyn", rating: "4.8/5" },
    { name: "Forgotten Secrets", author: "Robin Perini", rating: "4.7/5" },
    { name: "The witness", author: "Nora Roberts", rating: "4.6" }
  ],
  mystery: [
    { name: "Magpie Lane", author: "lucy atkins", rating: "4.8/5" },
    { name: "The Searcher: A Novel", author: "Tana French", rating: "4.7/5" },
    {
      name: "The Thursday Murder CLub",
      author: "Richard Osman",
      rating: "4.6/5"
    }
  ],
  horror: [
    { name: "The Deep", author: "Alma Katsu", rating: "4.8/5" },
    {
      name: "The Southern Book Club's Guide to Slaying Vampires",
      author: "Grady Hendrix",
      rating: "4.7/5"
    },
    {
      name: "The Only Good Indians",
      author: "Stephen Graham Jones",
      rating: "4.6/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("fiction");
  function ClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <>
        <nav className="Nav">
          <h1>Book Recomendations</h1>
        </nav>
        <main>
          <div>
            <ul className="ul-inline">
              {Object.keys(bookDb).map((genre) => (
                <li className="li-inline" onClick={() => ClickHandler(genre)}>
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <hr style={{ marginTop: "3rem", width: "100%" }}></hr>

          <div>
            <ul className="ul-inline">
              {bookDb[selectedGenre].map((book) => (
                <li className="li-book" key={book.name}>
                  <div style={{ fontSize: "larger" }}>{book.name}</div>
                  <div style={{ fontSize: "large" }}>{book.author}</div>
                  <div style={{ fontSize: "smaller" }}>{book.rating}</div>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <footer>
          <div>About</div>
          <p>
            "This Book Recomendations App is made in ReactJS as part of my first
            project, I hope you like it and will find it useful"
          </p>
        </footer>
      </>
    </div>
  );
}
