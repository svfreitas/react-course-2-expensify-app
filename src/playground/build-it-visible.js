class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        };
        this.toogleHidden = this.toogleHidden.bind(this);
    }

    toogleHidden() {
        this.setState((prevState) => {
            return ({
                visible : !prevState.visible
            })
            

        })
    }
    render(){
        return (
            <div>
             <h1>Visibility Toogle</h1>
             <button onClick={this.toogleHidden}>
                {this.state.visible? 'Hide details' : 'Show details'}
             </button>
             {this.state.visible && <p>Hey these are some details you can now see</p>}
         </div>    
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visible = false;

// const toogleHidden = () =>{
//     visible = !visible;
//     render();
// }


// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toogle</h1>
//             <button onClick={toogleHidden}>
//                 {visible? 'Hide details' : 'Show details'}
//             </button>
//             {visible && <p>Hey these are some details you can now see</p>}
//         </div>
//     )

//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();



