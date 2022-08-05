import {Paper, Typography, Button, TextField, Link} from '@mui/material'
import Form from '../../../utils/form.png'
import Yang from '../../../utils/yang.jpg'

function Contact(){

    const styles={
        outerContainer:{
            marginTop:'2%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        mainContainer:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            width:'100%',
            marginTop:'1%'
        },
        contactForm:{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            marginBottom:'15px',
            padding:'50px'
        },
        contactFormImage:{
            width:'75px',
            alignSelf: 'center',
            marginBottom:'25px',
        },
        contactFormLabel:{
            alignSelf:'start',
            marginTop:'6%'
        },
        contactUs:{
            paddingTop:'5%',
            paddingBottom:'5%',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        contactUsImg:{
            width:'300px',
            boxShadow: '5px 5px 8px black',
            margin:'15px'
        }
    }
    return(
        <div style={styles.outerContainer}>
            <Typography variant="h4">Contact Us</Typography>
            <Paper sx={styles.mainContainer} square>
                <form name="contact" method="POST" data-netlify="true" >
                    <Paper sx={styles.contactForm} elevation={5}>
                        <img src={Form} alt="clipboard" style={styles.contactFormImage}/>
                        <Typography variant='h5'>Request a Free Quote</Typography>
                        <input type="hidden" name="form-name" value="contact" />
                        <Typography variant="p" sx={styles.contactFormLabel}>Name</Typography>
                        <TextField fullWidth type="text" name="name" required ></TextField>
                        <Typography variant="p" sx={styles.contactFormLabel}>Email</Typography>
                        <TextField fullWidth type="email" name="email" required ></TextField>
                        <Typography variant="p" sx={styles.contactFormLabel}>Phone Number</Typography>
                        <TextField fullWidth type="text" name="phoneNumber" ></TextField>
                        <Typography variant="p" sx={styles.contactFormLabel}>What Products/Services are you interested in?</Typography>
                        <TextField fullWidth multiline rows="4" cols="50" required name="message" ></TextField>
                        <br></br>
                        <Button type="submit" variant="contained" id="submitForm">Send</Button>
                    </Paper>
                </form>
                <div style={styles.contactUs}>
                    <h2>Contact Us Directly</h2>
                    <img src={Yang} alt="owner and founder" style={styles.contactUsImg}/>
                    <Typography variant="p">10600 Bellaire Blvd. Ste 140</Typography>
                    <Typography variant="p">Houston</Typography>
                    <Typography variant="p">Texas</Typography>
                    <Typography variant="p">77072</Typography>
                    <Typography variant="p">Store: 281-888-1283</Typography>
                    <Typography variant="p">Cell: 832-867-9662</Typography>
                    <Link href = "mailto: aquatechHTX@gmail.com">aquatechHTX@gmail.com</Link>
                    <Typography variant="p">Ask for Joseph</Typography>
                </div>
            </Paper>
        </div>
    )
}
export default Contact;