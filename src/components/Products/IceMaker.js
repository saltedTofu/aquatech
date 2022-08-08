import Header from '../Header/Header'
import Product from './Product/Product'
import {Paper} from '@mui/material';
import ProductImage1 from '../../utils/product1.png'
import ProductImage2 from '../../utils/product2.png'
import ProductImage3 from '../../utils/product3.png'

function IceMaker(){
    const styles={
        home:{
            width:'100vw',
            minHeight:'100vh',
            height:'100%'
        }
    }
    
    return(
        <Paper square sx={styles.home}>
            <Header />
            <Product 
                picture1={ProductImage1}
                picture2={ProductImage2}
                picture3={ProductImage3}
                name={'Ice Maker'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper efficitur tempor. Ut molestie, sem nec consectetur consequat, libero dolor lobortis leo, et ultrices dolor tellus vel metus.'}
                price={'$420'}
            />
        </Paper>
    )
}

export default IceMaker