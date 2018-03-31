import React,{Component} from "react";
import Pic from "./components/PicsFolder";
import Wrapper from "./components/Wrapper";
import pics from "./friends.json";
import "./App.css";

class App extends Component{
	state = {
		pics
	};

	removePic =id =>{
		const pics = this.state.pics.filter(pic => pic.id !== id);

		this.setState({pics});
	};



render(){

	return(
  <Wrapper>
    <h1 className="title">Click the Pictures to remove them!</h1>
    <h3 className="title">Eventually we will implement scoring.</h3>
    

    {this.state.pics.map(picsInfo => (
    	
		<Pic
		  removePic = {this.removePic}
	      name={picsInfo.name}
	      id={picsInfo.id}
	      key={picsInfo.key}
	      image={picsInfo.image}
	      job={picsInfo.job}
	     
	    />
	    
    ))}
    
  </Wrapper>
);
}
}

export default App;
