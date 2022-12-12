


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
m.innerHTML = <Welcome name="Sara" />
const m = ReactDOM.createRoot(document.getElementById('testjs'));
const element = <Welcome name="Sara" />;
m.render(element);