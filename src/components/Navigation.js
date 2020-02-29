import React from "react";
import "./Navigation.js";

const Nav = props => (
  <>
    <nav className="menu">
      <h2>Sortuj po</h2>
      <form action="/action_page.php">
        <input type="radio" name="sort" onChange={props.onChange} />
        ilości stron
        <br />
        <input type="radio" name="sort" onChange={props.onChange} />
        dacie wydania
        <br />
        <input type="radio" name="sort" onChange={props.onChange} />
        nazwisku autora
        <br />
        <input type="radio" name="sort" onChange={props.onChange} />
        różnej kolejności
        <br />
      </form>
      <hr className="new4" />
      <h2>Pokaż tylko</h2>
      <div className="form_text">
        <form>
          <label>Powyżej</label>
          <input
            type="text"
            // onFocus="this.value=''"
            id="fname"
            // onKeyPress="isInputNumber(event)"
            placeholder=" Liczba"
            name="fname"
            title="Type in a name"
          ></input>
          <label>stron</label>
        </form>
        <br />
      </div>
      <hr className="new4" />
      <div className="centerize">
        <button className="button">Wyczyść</button>
      </div>
    </nav>
  </>
);

export default Nav;
