const Home = () => {

    const handleClick = (e) => {
        console.log('hello')
    }

    const handleclickAgain = (name) => {
        console.log('hello ' + name)
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {handleclickAgain('reza')}}>Click Me Again</button>
        </div>
     );
}
 
export default Home;