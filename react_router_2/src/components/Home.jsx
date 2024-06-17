import Pikachu from '../assets/Pikachu.png'

function Home(){
    return(
        <>
        <h1>Bienvenido maestro pokemon</h1>
        <img src={Pikachu} className='pikachu' />
        </>
    )
}
export default Home;