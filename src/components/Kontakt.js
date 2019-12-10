import React from "react";


const Kontakt=()=> (
      <React.Fragment>
        <section className="contact puff-in-center" id="contact">
            <div className="textbox2">
            <h2 className="emailclick">Schreibt uns!</h2>
            <article className="text2">Wir sind immer offen für neue Ideen und Anregungen für zukünftige Projecte.</article>
            </div>
          <form
            action="https://formspree.io/katrinsalac@gmail.com"
            method="POST"
          >
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  size="15"
                  maxlength="30"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  size="15"
                  maxlength="30"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  name="message"
                  cols="20"
                  rows="10"
                  placeholder="message"
                  required
                ></textarea>
              </li>
              <input type="submit" value="send"></input>
            </ul>
          </form>
        </section>
      </React.Fragment>
    );

export default Kontakt;
