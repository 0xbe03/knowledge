import {useState} from 'react'

const Home = () => {
    // let name = 'mario'
    const [name,setName] = useState(0)

    const handleClick = () => {
        setName(name + 1)
    }



    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p> {name} </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;