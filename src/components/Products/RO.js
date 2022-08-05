import Header from '../Header/Header'
import Product from './Product/Product'
import {Paper} from '@mui/material';
import ProductImage from '../../utils/productImage.png'

function RO(){
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
                picture={ProductImage}
                name={'RO'}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper efficitur tempor. Ut molestie, sem nec consectetur consequat, libero dolor lobortis leo, et ultrices dolor tellus vel metus.'}
                price={'$6'}
            />
        </Paper>
    )
}

export default RO