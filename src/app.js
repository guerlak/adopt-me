const App = () =>{

    return React.createElement(
        "div",
        {id: "home"},
        [React.createElement("h1", {}, "Adopt-me") ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));