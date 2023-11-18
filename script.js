// example of nested elements
//  <div id="parent"> 
//      <div id="child1"> <h1>heading1</h1>  </div>
//      <div id="child2"> <h1>heading2</h1>  </div>
//  </div>   
//     

let root = ReactDOM.createRoot(document.getElementById("root"));
let parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        React.createElement("h1", {}, "heading 1")
    ), React.createElement("div", { id: "child2" },
        React.createElement("h1", {}, "heading 2")
    )]);

root.render(parent);  