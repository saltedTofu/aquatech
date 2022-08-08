import {Paper,Typography, Card} from '@mui/material';
import {useState} from 'react'
import './Product.css'

function Product({picture1,picture2,picture3,name,description,price}){

    const [primaryImage,setPrimaryImage] = useState(picture1)

    return(
        <div className="divContainer">
            <Paper elevation={3} className="productContainer">
                <Card raised className="productImageContainer">
                    <img src={primaryImage} alt='Product' className="productImage"></img>
                    <Card raised className="lowerImages">
                        <img  src={picture1} className="lowerProductImage" alt='Product' onMouseEnter={()=>{setPrimaryImage(picture1)}}></img>
                        <img  src={picture2} className="lowerProductImage" alt='Product' onMouseEnter={()=>{setPrimaryImage(picture2)}}></img>
                        <img  src={picture3} className="lowerProductImage" alt='Product' onMouseEnter={()=>{setPrimaryImage(picture3)}}></img>
                    </Card>
                </Card>
                
                <div className="productInfo">
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="h5">{price}</Typography>
                    <Typography variant="p">{description}</Typography>
                </div>
            </Paper>
        </div>
    )
}
export default Product