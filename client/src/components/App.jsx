import React from 'react';
import MovieList from './MovieList.jsx';
import Form from './Form.jsx';

// const App = (props) => (
//   <div>MovieList</div>

// );

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedText:'',
      movies:[
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
  };
  }
  handleClickGo(text){
    this.setState({selectedText:text});
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
      //selectedText: ''
    })
   }
  }



  render(){
    return (
      <div>
        <div>{"MovieList"}</div>
        <br></br>
        <Form
        handleClickGo={this.handleClickGo.bind(this)}
        handleClickAdd={this.handleClickAdd.bind(this)}
        />
        <div>
          <MovieList
          movieslist={this.state.movies.filter(m => m.title.includes(this.state.selectedText))}
         />
        </div>
      </div>
    );
  }
}


export default App;