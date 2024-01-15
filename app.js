const heading=React.createElement("div",{id:"container"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"red"},"This is heading inside div and child"),
React.createElement("h2",{id:"red"},"This is heading2 inside div and child")]))   
console.log(heading)

const root=ReactDOM.createRoot(document.querySelector(".root"))

console.log(root)

root.render(heading)