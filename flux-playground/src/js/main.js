/** @jsx React.DOM */
var APP = require('./components/app');
var React = require('react');
/*---------------*/
var doorpeople = [
    {
        "name": "Mirko Alonso",
        "avatar": "https://uproxx.files.wordpress.com/2014/03/pun-dog-pun-husky-00.jpg?w=650",
        "id": 0
    },
    {
        "name": "VanDerCroix",
        "avatar": "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/315893_10150788010505593_8195626_n.jpg?oh=958a9e8f35e2ad031e3d4619934a858c&oe=560D73E9",
        "id": 2
    }
]

var Card = React.createClass({ //1 people card
    render: function() {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.avatar} alt=""/>
                <div></div>
                <button onClick={this.props.onClick}>AHORITA NO JOVEN</button>
            </div>
        )
    }
});

var App = React.createClass({
    deletePerson: function(person){
        this.state.doorpeople.splice(this.state.doorpeople.indexOf(person),1);
        this.setState({people:this.state.doorpeople});
    },
    getInitialState: function(){
        return {
            doorpeople: this.props.people.splice(0) //recorre array
        }
    },
    render: function() {
        var that=this;
        return(
            <div>
                {this.state.doorpeople.map(function (person){
                    return(    //show each card
                        <Card onClick={that.deletePerson.bind(null, person)} name={person.name} avatar={person.avatar} />
                    )
                })}
            </div>
                
        )
    }
});
//-----------------
var Tit = React.createClass({ //1 people card
    render: function() {
        return(
            <div>
                <h1>SO WHAT WE GET DRUNK, {this.props.name}</h1>
                <h2>we just having fun!</h2>
            </div>
        )
    }
});
 
React.render(<App people={doorpeople}></App>, document.getElementById('container'));
React.render(<Tit name="SO WHAT WE SMOKE WEED"></Tit>, document.getElementById('title'));
React.render(
	<APP />,
	document.getElementById('main'));
/*---------------*/