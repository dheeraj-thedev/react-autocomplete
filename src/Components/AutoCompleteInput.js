
import {useState} from 'react'

const AutoCompleteInput=({ suggestions,className })=>{
//const [suggestions, setSuggestions] = useState(suggestions)
const [input, setInput] = useState("");  // String type state for input
const [showSuggestions, setShowSuggestions] = useState(false) // boolean type state
const [filteredSuggestions, setFilteredSuggestions] = useState([]) // array state
const [ativeSuggestionsIndex, setAtiveSuggestionsIndex] = useState(0) // active index state


const onChange= (e)=>{
    console.log(suggestions)
    const userInput= e.target.value;
// ["dheeraj","dsads","dsdsd","dsdsd","ddsdadsa"]
    // filter the suggestions 
    const unLinked = suggestions.filter(
        (suggestion)=>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) >-1
    );


    setInput(e.target.value)
    setFilteredSuggestions(unLinked);
    setAtiveSuggestionsIndex(0)
    setShowSuggestions(true);
};


const onClick=(e)=>{
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setAtiveSuggestionsIndex(0);
    setShowSuggestions(false);
}

const SuggestionsListComponent=()=>{
    return filteredSuggestions.length?(
        <ul className="suggestions">
            {filteredSuggestions.map((suggestion,index)=>{
                let className;
                if(index===ativeSuggestionsIndex){
                    className="suggestion-index";
                }
                return(
                    <li>{suggestion}</li>
                )
            })}
        </ul>
    ):
    (
        <div className="no-suggesrtions">
            <em>No suggestions, Noting matched </em>
        </div>
    );
}



    return (
        <>
            <input 
            className="no-suggestions" 
            value={input}    
            onChange={onChange}
            onKeyDown={onclick}
            type="text"></input>

            {showSuggestions && input && <SuggestionsListComponent></SuggestionsListComponent>}
        </>
    )
}




export default AutoCompleteInput