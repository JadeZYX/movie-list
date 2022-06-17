import React from 'react';
import MovieList from './MovieList.jsx';
import Form from './Form.jsx';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedText:'',
      showSearched: true,
      showWatched: false,
      showToWatch: true,
      movies:[
        {title: 'Mean Girls', isWatched: false},
        {title: 'Hackers', isWatched: false},
        {title: 'The Grey', isWatched: false},
        {title: 'Sunshine', isWatched: false},
        {title: 'Ex Machina', isWatched: false},
      ]
   };
   this.handleClickAdd=this.handleClickAdd.bind(this);
   this.handleClickGoInput=this.handleClickGoInput.bind(this);
   this.filterMovieData=this.filterMovieData.bind(this);
   this.handleToggleClick=this.handleToggleClick.bind(this);
   this.filterToWatch=this.filterToWatch.bind(this);
   this.filterWatched=this.filterWatched.bind(this);

  }


  handleClickAdd(movieName){
   let duplicated = false;
   this.state.movies.forEach(ele=>{
     if(ele.title===movieName){
       duplicated=true;
     }
   })
   if(!duplicated){
    this.setState({
      movies:[...this.state.movies, {title: movieName}],
      selectedText: ''
    })
   }
  }

  handleToggleClick(index){
    let newMovies = [...this.state.movies];
     newMovies[index].isWatched = !newMovies[index].isWatched;
    this.setState({
      movies:newMovies
    });
  }

  filterMovieData(){
    /*const filteredList =
    this.state.movies.filter(ele=>{
      if(this.state.selectedText===''){
        return true;
      }
      else{
        if(ele.title.toLowerCase().includes(this.state.selectedText)){
          return true;
        }

        return false;
      }
    })*/

    if (this.state.showSearched) {
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
  handleClickGoInput(text){
    this.setState({selectedText:text, showSearched:true});
  }

  filterWatched(){
    this.setState({showWatched: true, showSearched: false});
  }
  filterToWatch(){
    this.setState({showWatched: false, showSearched: false});
  }

  render(){
    return (
      <div>
        <div>{"MovieList"}</div>
        <br></br>
        <Form
        handleClickGoInput={this.handleClickGoInput}
        handleClickAdd={this.handleClickAdd}
        filterMovieData={this.filterMovieData}
        filterToWatch={this.filterToWatch}
        filterWatched={this.filterWatched}
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