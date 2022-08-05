import {Paper,Typography, Card} from '@mui/material';

function Product({picture,name,description,price}){

    const styles={
        divContainer:{
            paddingTop:'10%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center'
        },
        productContainer:{
            width:'50%',
            minWidth:'400px',
            display:'flex',
            flexDirection:'row',
            alignItems:'flex-start',
            justifyContent:'center',
        },
        productImageContainer:{
            width:'50%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
        },
        productInfo:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            width:'40%',
        },
        productImage:{
            width:'200px'
        }
    }

    return(
        <div style={styles.divContainer}>
            <Paper sx={styles.productContainer} elevation={3}>
                <div style={styles.productImageContainer}>
                    <img style={styles.productImage} src={picture} alt='Product'></img>
                </div>
                
                <div style={styles.productInfo}>
                    <Typography variant="h4" sx={{marginBottom:'5px', marginTop:'20px'}}>{name}</Typography>
                    <Typography variant="h5" sx={{marginBottom:'40px'}}>{price}</Typography>
                    <Typography variant="p">{description}</Typography>
                </div>
            </Paper>
        </div>
    )
}
export default Product