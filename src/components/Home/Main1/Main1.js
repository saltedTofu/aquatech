import {Paper, Typography} from '@mui/material'
function Main1(){

    const styles={
        main1Container:{
            display:'flex',
            flexDirection:'row',
        },
        leftContainer:{
            paddingBottom:'50px',
            paddingTop:'50px',
            paddingLeft:'15px',
            paddingRight:'15px',
            width:'40%',
            textAlign:'center'
        },
        rightContainer:{
            paddingBottom:'50px',
            paddingTop:'50px',
            paddingLeft:'15px',
            paddingRight:'15px',
            width:'60%',
            backgroundColor:'#1F2833',
            textAlign:'center'
        }
    }
    return(
        <div style={styles.main1Container}>
            <Paper square sx={styles.leftContainer}>
                <Typography variant="h4">OUR VISION</Typography>
                <Typography variant="p">Phasellus eu risus est. In nulla neque, vestibulum sed aliquet a, gravida ac augue. Mauris vehicula lacus lorem, non consectetur lorem placerat interdum. Morbi lacus lectus, vulputate nec molestie sit amet, pretium sit amet diam. Vestibulum est nisl, ornare id nibh sit amet, imperdiet auctor dui. Donec lorem erat, euismod elementum leo quis, bibendum commodo tortor. Pellentesque sollicitudin dictum lorem, non aliquet augue fermentum eu. Mauris dolor massa, condimentum ut ultricies vitae, rhoncus nec nisl. Aliquam erat volutpat. Aliquam erat volutpat. Maecenas lacinia cursus venenatis. Fusce at malesuada risus. Duis venenatis est eget urna eleifend varius. Suspendisse aliquam accumsan lacinia. Mauris vitae blandit sapien. Nunc fermentum pellentesque est sed blandit.</Typography>
            </Paper>
            <Paper square sx={styles.rightContainer}>
                <Typography variant="h4" >Why Do You Need A Water Softener?</Typography>
                <Typography variant="p">water hard ooga boogaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue tellus quis varius tempor. Nulla porta malesuada mi ac imperdiet. Ut blandit erat accumsan ligula finibus rutrum. Morbi vel massa vel nulla tincidunt accumsan et sed lectus. Cras ullamcorper ante mauris, et sodales nisl porta id. Integer sapien ante, gravida id faucibus nec, lacinia sed turpis. In hac habitasse platea dictumst. Quisque pellentesque orci nec mi placerat, sit amet ornare erat tincidunt. Curabitur vulputate eros quam, a venenatis dui ultrices vel. Fusce molestie eleifend nisl, id blandit nisl. Aliquam a fringilla sapien. Ut in congue mi. Duis ultrices sapien suscipit nisl tempus, eget volutpat nunc tempor. Nam ultricies egestas dolor vitae accumsan. Fusce consequat metus augue, eu laoreet turpis eleifend eu. Vestibulum sed auctor urna. Morbi tincidunt nibh nec vulputate bibendum. Vestibulum euismod dignissim erat, id porta nunc commodo in. Cras aliquet velit in odio aliquet posuere. Pellentesque vulputate eu turpis a bibendum. Duis quis tempor elit. Donec et lorem at nulla accumsan pulvinar sodales imperdiet erat. Etiam mollis mi eget nibh auctor, ut eleifend risus tempus.</Typography>
            </Paper>
        </div>
    )
}
export default Main1