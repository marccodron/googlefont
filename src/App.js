import './App.css';
import ReactDOM from 'react-dom'
import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Fonts from './components/Fonts'
import Footer from './components/Footer'

function App(){
    return (
        <section className="container">
            <Header />
            <Sidebar />
            <Fonts />
            <Footer />
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App;