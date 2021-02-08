export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(list => {
        return {
            params: { id: list.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id 
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: { list: data }
    }
}

const Details = ({list}) => {
    return ( 
        <>
            <h1> { list.name } </h1>

            <p> { list.email } </p>

            <p> { list.address.city } </p>
            
            <p> { list.website } </p>
        </>
     )
}
 
export default Details;