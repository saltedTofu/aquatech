import {Paper, Typography, Button, TextField, Link, Box} from '@mui/material'
import Form from '../../../utils/form.png'
import Yang from '../../../utils/yang.jpg'
import './Contact.css'

function Contact(){

    return(
        <Box className="outerContainer" id="contact" sx={{ bgcolor: 'primary.main' }}>
            <Typography variant="h4">Contact Us</Typography>
            <Box className="mainContainer">
                <form name="contact" method="POST" data-netlify="true" >
                    <Paper className="contactForm"elevation={5}>
                        <img src={Form} alt="clipboard" className="contactFormImage"/>
                        <Typography variant='h5'>Request a Free Quote</Typography>
                        <input type="hidden" name="form-name" value="contact" />
                        <Typography variant="p" className="contactFormLabel">Name</Typography>
                        <TextField fullWidth type="text" name="name" required ></TextField>
                        <Typography variant="p" className="contactFormLabel">Email</Typography>
                        <TextField fullWidth type="email" name="email" required ></TextField>
                        <Typography variant="p" className="contactFormLabel">Phone Number</Typography>
                        <TextField fullWidth type="text" name="phoneNumber" ></TextField>
                        <Typography variant="p" className="contactFormLabel">What Products/Services are you interested in?</Typography>
                        <TextField fullWidth multiline rows="4" cols="50" required name="message" ></TextField>
                        <br></br>
                        <Button type="submit" variant="contained" id="submitForm">Send</Button>
                    </Paper>
                </form>
                <Box className="contactUs">
                    <h2>Contact Us Directly</h2>
                    <img src={Yang} alt="owner and founder" className="contactUsImg"/>
                    <Typography variant="p">10600 Bellaire Blvd. Ste 140</Typography>
                    <Typography variant="p">Houston</Typography>
                    <Typography variant="p">Texas</Typography>
                    <Typography variant="p">77072</Typography>
                    <Typography variant="p">Store: 281-888-1283</Typography>
                    <Typography variant="p">Cell: 832-867-9662</Typography>
                    <Link href = "mailto: aquatechHTX@gmail.com">aquatechHTX@gmail.com</Link>
                    <Typography variant="p">Ask for Joseph</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Contact;