import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <input  value={this.state.secondScreen} />
                </div>
                <input  value={this.state.screen} />
                <div className="row">
                    <button onClick={() => this.delAllWord()}>CE</button>
                    <button onClick={() => this.delWord()}>C</button>
                    <button onClick={() => this.delLastWord()}>←</button>
                    <button onClick={() => this.inFourRuleCalc('/')} >÷</button>
                </div>
                <div className="row">
                    <button onClick={() => this.inNum(7)}>7</button>
                    <button onClick={() => this.inNum(8)}>8</button>
                    <button onClick={() => this.inNum(9)}>9</button>
                    <button onClick={() => this.inFourRuleCalc('*')} >*</button>
                </div>
                <div className="row">
                    <button onClick={() => this.inNum(4)}>4</button>
                    <button onClick={() => this.inNum(5)}>5</button>
                    <button onClick={() => this.inNum(6)}>6</button>
                    <button onClick={() => this.inFourRuleCalc('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => this.inNum(1)}>1</button>
                    <button onClick={() => this.inNum(2)}>2</button>
                    <button onClick={() => this.inNum(3)}>3</button>
                    <button onClick={() => this.inFourRuleCalc('+')}>+</button>
                </div>
                <div className="row">
                    <button onClick={() => this.inComma()} >.</button>
                    <button style={{width: "80px"}} onClick={() => this.inNum(0)}>0</button>
                    <button onClick={() => this.result()}>=</button>
                </div>


            </div>
        );
    }
    state = {
        screen: "0",
        secondScreen:"",
        numCheck:0, resultCheck:"0"
    };



    inNum = num => {
        this.setState({numCheck: 1});
        if(this.state.screen==="0")
        {
            this.setState({ screen: this.state.screen.slice(0,-1) + num});
        }
        else
        {
            this.setState({ screen: this.state.screen + num });
        }
        if(this.state.resultCheck==="1")
        {
            this.setState({ secondScreen: this.state.screen });
            this.setState({ screen: ""+num });
            this.setState({ resultCheck: "0"});
        }
    };
    inFourRuleCalc = Calc => {
        let lastWord=this.state.screen.charAt(this.state.screen.length-1);
        if(lastWord !== "*" && lastWord !== "-" && lastWord !== "+" && lastWord !== "/"){
            this.setState({screen: this.state.screen + Calc });
            this.setState({ numCheck: 0});
            this.setState({ resultCheck: "0"});
        }
    };
    inComma = () =>{
        let lastWord=this.state.screen.charAt(this.state.screen.length-1);
        let splitarr=this.state.screen.split(/\+|-|\/|\*/);
        if(lastWord !== "*" && lastWord !== "-" && lastWord !== "+" && lastWord !== "/") {
            if (splitarr[splitarr.length-1].indexOf('.') === -1){
                this.setState({screen: this.state.screen + '.'});
                this.setState({ resultCheck: "0"});
            }
        }
    };

    result = () => {
        let lastWord=this.state.screen.charAt(this.state.screen.length-1);
        if(lastWord !== "*" && lastWord !== "-" && lastWord !== "+" && lastWord !== "/") {
            this.setState({secondScreen: this.state.screen + "="});
            try {
                // eslint-disable-next-line no-eval
                this.setState({screen: String(eval(this.state.screen))});
                this.setState({resultCheck: "1"});
            } catch (e) {
                alert("계산기의 성능을 초과했습니다 CE버튼을 눌러주세요");
            }
        }else{
            alert("잘못된 계산식입니다");
        }

    };
    delLastWord = () =>{
        if(this.state.screen.length>1)
            this.setState({ screen: this.state.screen.slice(0,-1)});
        else
            this.setState({ screen: "0"});
    };
    delWord =() =>{
        if(this.state.resultCheck==="0")
            this.setState({ screen: "0"});
    };
    delAllWord =()=>{
        this.setState({ screen: "0"});
        this.setState({ secondScreen: ""});
        this.setState({ numCheck: 0});
        this.setState({ resultCheck: "0"});
    }

}


export default App;
