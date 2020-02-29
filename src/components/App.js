import React, { Component } from "react";
import "./App.css";
import BookItem from "./BookItem";
import Header from "./Header";
import SectionsBottom from "./SectionsBottom";
import Nav from "./Navigation";
import SectionBooks from "./SectionBooks";

class App extends Component {

  constructor(props){
    super(props)
    this.handleUsersFilter = this.handleUsersFilter.bind(this)
    this.listBooks = this.listBooks.bind(this)
    this.state = {
      users: [],
      select: "normal"
    };
  }

  componentDidMount() {
    fetch("data/jsonTab.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data.users
        });
      });
  }

  handleUsersFilter(option) {
    console.log(this.state.select);

    this.setState({
      select: option
    });
  }

  listBooks() {
    let users = this.state.users;
    switch (this.state.select) {
      case "normal":
        return users.map(user => <BookItem key={user.id} user={user} />);
      case "pagesNumbers":
        users = users.filter(user => user.pages > 200);
        console.log(users)
        return users.map(user => <BookItem key={user.id} user={user} />).sort((a,b)=>a.pages > b.pages);
      case "dateRelease":
        return users.map(user => <BookItem key={user.id} user={user} />).sort((a,b)=>a.releaseDate > b.releaseDate );
      case "surnameAuthor":
        return users.map(user => <BookItem key={user.id} user={user} />);
      case "randomOrder":
        return users.map(user => <BookItem key={user.id} user={user} />);
      default:
        return "Something goes wrong";
    }
    // users = users.map(user => <BookItem key={user.id} user={user} />);
    // return users;
  }

  render() {
    return (
      <>
        <div className="grid">
          <Header />
          <SectionsBottom />
          <Nav
            onChange={ (option) => this.handleUsersFilter(option)}   //TOOD: TU
          />
          <SectionBooks equivalentUsers={this.listBooks()} />
        </div>
      </>
    );
  }
}

export default App;
