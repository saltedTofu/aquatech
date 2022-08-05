import {Paper} from '@mui/material'
import Header from '../Header/Header'
import Title from './Title/Title'
import Main1 from './Main1/Main1'
import Main2 from './Main2/Main2'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function Home(){
    const styles={
        home:{
            width:'100vw',
            minHeight:'100vh',
            height:'100%',
        }
    }
    return(
        <Paper square className="Home" sx={styles.home}>
            <Header />
            <Title />
            <Main1 />
            <Main2 />
            <Contact />
            <Footer />
        </Paper>
    )
}

export default Home;