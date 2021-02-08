import styles from '../../styles/Lists.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {lists: data}
    }
}

const Lists = ({lists}) => {
    return ( 
        <div>
            <h1>All lists</h1>
            {lists.map(list => (
                <div key={list.id} >
                    <a className={styles.single}>
                        <h3>{list.name}</h3>
                    </a>
                </div>
            ))}
        </div>
     );
}
 
export default Lists;