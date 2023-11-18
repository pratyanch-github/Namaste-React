1. we will create a basic hello world program using plain html.
2. now use js to create a element , and put it into root named div. i.e hello world with js
   <script>
    const heading = document.createElement('h1'); // 'h1' should be in quotes
    heading.innerHTML = "hello world";
    let root = document.querySelector("#root");
    root.appendChild(heading);
    </script>
3. browser and our project don't now react, we have to add it to our project
4. ways to add react to your project
   via cdn- from react documentation
   we have to add these cdn links inside body of html  .
   now we can check react is present for use and we can check it in console by writing react.

   Why we imported react and react-dom 
   what is react dom 
   ans- actually react can be used with various thing like , reactdom , reactnative, react 3d
   and react is core react and react-dom is for dom manipulations.
   
   CREATEELEMENT IS A CORE REACT THING , so we use react, but
   CREATEROOT IN DOM IS BROWSER THING , so we use react-dom 

    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script>
        let heading= React.createElement("h1",{}, "hello from react");
        let root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>

    basically every framework is trying to optimize the cost of most costly operation on browser i.e dom nodes manipulation.

    in createElement props consists of attributes and children both . and createElement return a simple js object.

    job of react render function - take element and convert to browser understandable representation and put it inside root element.

    ![Alt text](image-1.png)

    

    imp-What is happening is that don't trees getting changed isn't it that is the most costly thing that putting some notes inside the down and removing some notes from the down this is a costly operation right and all these frameworks in libraries are trying to optimize this react also comes with a philosophy that whenever you need to do anything on a web page do it using Javascript right and that is why react gives you these helper functions to make these things work in a very performant way right so in this whole course you know this was all html that we does everything that we do we will do inside JavaScript from now on so this is all html is required you know this is what the html was now what we'll do whatever we will do even if we are writing some piece of Xpm or something if we are creating some element we will do everything inside react okay so react comes with a philosophy of writing or manipulating that down using Javascript or using react so at the end of the day which is Javascript right so we will be modifying all that using Javascript and we hope to be creating a lot of Html in the html file we won't be touching a lot of html file nowso what will happen is this is our react code let me tell you a few more things few more interesting things right just missing object what is this what is this object let me tell it to you right so this object basically is the place where you will give attributes to your tabs this object is the place where you will give attributes to your tabs what is the attribute to attach suppose if my H1 if my H1 tab needs to have AID heading right so this is how I will give it right sometimes when you create a when you create a html you you have to get some ID some classes or something like that right so this is how this object is used to give these attributes to a plus right so if I if I save this file if I refresh my page go back to my elements do you see we got this ideayou see right we got this ID heading this is how we give attributes to our tab OK so we can basically give more attributes I can even give some experience like XYZ XYZ is ABC I can give it like this also right if we refresh the page if I reference the