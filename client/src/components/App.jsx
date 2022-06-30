import React from 'react';
import MovieList from './MovieList.jsx';
import Form from './Form.jsx';
import axios from 'axios';

//pass in this initial configuration and object
const api=axios.create({
  baseURL:'http://localhost:5000'
});


class App extends React.Component {
  constructor(props) {
    super(props);
    api.get('/aaa').then(res=>{
     console.log(res.data);
    })
    this.state = {
      selectedText: '',
      // addedText:'',
      showAll: true,
      showWatched: false,
      showToWatch: false,
      // showAdded:false;
      movies: [
        { title: 'Mean Girls', isWatched: false },
        { title: 'Hackers', isWatched: false },
        { title: 'The Grey', isWatched: false },
        { title: 'Sunshine', isWatched: false },
        { title: 'Ex Machina', isWatched: false },
      ]
    };
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickGoInput = this.handleClickGoInput.bind(this);
    this.filterMovieData = this.filterMovieData.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.filterToWatch = this.filterToWatch.bind(this);
    this.filterWatched = this.filterWatched.bind(this);
  }


  handleClickAdd(movieName) {
    if (movieName === '') return;
    let duplicated = false;
    this.state.movies.forEach(ele => {
      if (ele.title === movieName) {
        duplicated = true;
      }
    })
    if (!duplicated) {
      this.setState({
        movies: [...this.state.movies, { title: movieName }],
        selectedText: ''
      })
    }
  }

  handleToggleClick(index) {
    let newMovies = [...this.state.movies];
    newMovies[index].isWatched = !newMovies[index].isWatched;
    this.setState({
      movies: newMovies
    });
  }

  filterMovieData() {
    if (this.state.showAll) {
      return this.state.movies.filter(ele =>
        ele.title.toLowerCase().includes(this.state.selectedText));
    }

    if (this.state.showWatched) {
      return this.state.movies.filter(ele => ele.isWatched == true);
    }

    if (this.state.showToWatch) {
      return this.state.movies.filter(ele => ele.isWatched == false);
    }
  }
  handleClickGoInput(text) {
    this.setState({
      selectedText: text,
      showAll: true,
      showToWatch: false,
      showWatched: false
    });
  }

  filterWatched() {
    this.setState({
      selectedText: '',
      showAll: false,
      showToWatch: false,
      showWatched: true
    });
  }
  filterToWatch() {
    this.setState({
      selectedText:'',
      showAll:false,
      showToWatch:true,
      showWatched:false
    });
  }

  render() {
    return (
      <div>
        <div>{"MovieList"}</div>
        <br></br>
        <Form
          handleClickGoInput={this.handleClickGoInput}
          filterMovieData={this.filterMovieData}
          filterToWatch={this.filterToWatch}
          filterWatched={this.filterWatched}
          handleClickAdd={this.handleClickAdd}
        />
        <div>
          <MovieList
            movieslist={this.filterMovieData()}
            handleToggleClick={this.handleToggleClick}
          />
        </div>
      </div>
    );
  }
}


export default App;