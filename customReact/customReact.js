// how react works??
// it accepts objects

// we are trying to mimic the working of the react



// created a custom html element, added some attribute and then referenced it to the html page
function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */


    // another approch
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue // for skipping
        domElement.setAttribute = (prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


// creating an object
const reactElement={
    type: 'a',
    props: {
        href: "https//google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}

// taking reference to id=root from index.html file
const Container = document.querySelector('#root')

// lets create a method to render the created object.
customRender(reactElement, Container)