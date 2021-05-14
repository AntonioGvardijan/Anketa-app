import React, {Component} from 'react'
import Firebase from './Firebase'

class QuestionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: []
        }
        this.firebaseApp = Firebase.apps[0];
    }

    componentDidMount(){
        console.log(this.state.questions)
        Firebase.firestore().collection("Anketa").doc("GE037xmt4oE0mGzPKR62").collection("Odgovori").doc("pzNxhSmplnZsBGTm67gS").get().then(doc =>{
            this.setState({
                questions:doc.data().question
            })
        })
    }

    componentDidUpdate(){
        console.log(this.state.questions)
    }

    render(){
        return(
            <div>
                <button type="submit" onClick={console.log(this.state.questions)}>Click me</button>
            </div>
        )
    }
    
}

export default QuestionList
