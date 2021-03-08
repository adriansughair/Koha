import {StyleSheet,Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Sizing} from '.';
import colors from './colors';

const height = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    fullScreen: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexColumn: {
        flexDirection: 'column',
    },
    log:{
        width:'50%',
        height:100,
    },
    logContainer:{
        paddingTop:20,
        width:'50%',
        height:50,
        alignItems:'center'
    },
    logHeadar:{
        width:'50%',
        height:100,
        alignItems:'center'
    },
    textHedar:{
        color:colors.default,
        fontSize:26,
        fontWeight: 'bold',
    },
    LoginContainer:{
        // padding:Sizing.large,
        alignItems:'center'
        
    },
    textInput: {
        height: 60,
        backgroundColor: '#fff',
        borderColor:colors.default,
        borderRadius:15,
        borderWidth: 1,
        marginTop: 10,
        width:'85%'
    },
    textInput2: {
        height: 60,
        backgroundColor:colors.white,
        borderRadius:15,
        marginTop: 10,
        elevation:10,
    },
    textInput3: {
        height: 60,
        borderRadius:15,
        marginTop: 10,
        elevation:10,
        width:"30%"
    },
    textInput4: {
        height: 160,
        backgroundColor:colors.white,
        borderRadius:15,
        marginTop: 10,
        elevation:40,
    },
    textInput5: {
        height: 60,
        width:'80%',
        // backgroundColor:'red',
        borderRadius:15,
    },
    searchInput: {
        flexDirection: 'row',
        height: 60,
        width:'90%',
        backgroundColor:colors.white,
        borderRadius:15,
        marginTop: 10,
        elevation:25,
        justifyContent:'space-between'
    },
    FinishBidHeader: {
        flexDirection: 'row',
        padding: 10,
        width:'90%',
        borderRadius:15,
        marginTop: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    FinishBidText:{
        fontSize:26,
        fontFamily: 'Montserrat-Bold',
        color:colors.default
    },
    Loginbutton:{
        backgroundColor:colors.default,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderRadius:10,
        width:'85%'
    },
    login:{
        color:colors.white,
        fontSize:18
    },
    RegisterLink:{
        marginTop:100,
        color:colors.default,
        fontSize:12,
    },
    RegisterText:{
        color:colors.default,
        fontWeight: 'bold',
    },
    HeadarText:{
        width:'100%',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingStart:30,
        paddingTop:'25%'
    },
    ForgetText:{
        width:'100%',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingStart:30,
        paddingTop:'5%',
        paddingBottom:'25%'
    },
    loginInfo:{
        color:colors.default,
        fontSize:12,
        paddingTop:15,
    },
    Forget_password:{
        color:colors.default,
        fontSize:12,
    },
    Forget_password_View:{
        width:'100%',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingEnd:35,
        paddingTop:15
    },
    ToPrivacyPolice:{
        width:'85%',
        flexDirection: 'row',
        marginTop:28,
    },
    PrivacyPoliceLink:{
        color:colors.default,
        fontSize:12,
        width:'70%',
        },
    LoginLink:{
        marginTop:15,
        color:colors.default,
        fontSize:12,
    },
    headerContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HomeScreen:{
        // justifyContent:'center',
        alignItems:'center',
    },
    ads:{
        backgroundColor:colors.default,
        borderRadius:25,
        width:'90%',
        height:114,
        flexDirection: 'row',
        marginTop:25,
        // justifyContent:'center',
        // alignItems:'center',

    },
    adsItem:{
        width:'50%',
        color:colors.white,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
    },
    adsText:{
        fontSize:12,
        color:colors.white,
    },
    adsImage:{
        width:'50%',
        height:114,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
    },
    category:{
        flexDirection: 'row',
        justifyContent:'center',
        width:'90%',
        alignItems:'center',
    },
    Maincategory:{
        padding:15,
        justifyContent:'center',
        alignItems:'center',
    },
    Subcategory:{
        width:'50%',
        height:120,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    Itemcategory:{
        padding:10,
        justifyContent:'flex-start',
        alignItems:'flex-start',

    },
    Textcategory:{
        fontSize:12,
        color:colors.default,
    },
    Imgcategory:{
        width:'100%',
        height:80,
        borderRadius:15,
        borderColor:colors.default,
        borderWidth:2
    },
    profileImage:{
        width:'40%',
        height:'100%',
        borderRadius:15,
        // borderColor:colors.default,
        borderWidth:2
    },
    profileImageView:{
        width:'90%',
        height:150,
        justifyContent:'center',
        alignItems:'center',
    },
    profileImageView2:{
        width:'90%',
        height:120,
        justifyContent:'center',
        alignItems:'center',
    },
    Info:{
        marginTop:23,
        width:"90%",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        borderWidth:0.5,
        paddingBottom:10,
        paddingTop:10,
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity:  0.4,
        // shadowRadius: 3,
        // elevation: 0.5,
    },
    TextName:{
        fontSize:26,
        fontFamily: 'Montserrat-Bold',
        color:colors.default
    },
    InfoLoc:{
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    InfoLoc2:{
        flexDirection: 'row',
        marginTop:5,
        width:'100%',
    },
    InfoLoc3:{
        flexDirection: 'row',
        margin:10,
    },
    TextLoc3:{
        margin:5,
        fontSize:15,
        color:colors.default,
        
    },
    TextLoc:{
        fontSize:11,
        color:colors.default,
        
    },
    TextLoc2:{
        fontSize:12,
        color:colors.default,
        
    },
    AboutView:{ 
        marginTop:23,
        width:"90%",
        height:220,
        borderRadius:25,
        borderWidth:0.5,
        padding:20,
    },
    About:{

    },
    AboutHeadText:{
        fontSize:14,
        fontFamily: 'Montserrat-Bold',
        color:colors.default,
    },
    AboutHead:{
        flexDirection: 'row',
        justifyContent:"space-between"
    },
    AboutText:{
        marginTop: 10,
        color:colors.grayLink,
        width:'100%'
    },
    StartImageView:{
        width:"100%",
        height:"80%",
        borderBottomLeftRadius:150,
    },
    StartImage:{
        width:"100%",
        height:"100%",
        borderTopRightRadius:200,
        borderBottomLeftRadius:250,
        // borderBottomEndRadius:50,
    },
    Startbutton:{
        backgroundColor:colors.default,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderRadius:10,
        width:'85%',
        top:"74%",
    },
    PopupButtom:{
        width:"30%",
        backgroundColor:colors.default,
        height:30,
        borderRadius:15,
        alignItems:"center",
        paddingTop:5,
        marginTop:40,
    },
    PopupTitel:{
        flexDirection: 'row',
        justifyContent:"space-between",
        width:"95%",
        padding:10,
    },
    PopupTitel2:{
        flexDirection: 'row',
        width:"80%",
        padding:10,
    },
    PopupTitelText:{
        fontSize:14,
        fontFamily: 'Montserrat-Bold',
        color:colors.default,
    },
    PopupText:{
        color:colors.white,
        fontSize:13,
        fontFamily: 'Montserrat-Bold',

    },
    PopupInput:{
        backgroundColor: '#fff',
        marginTop: 10,
        color:colors.grayLink,
        width:'90%',
        alignItems:"center",
        paddingTop:15,
    },
    PopupInput2:{
        backgroundColor: '#fff',
        marginTop: 5,
        color:colors.grayLink,
        width:'90%',
        alignItems:"center",
        paddingTop:15,
    },
    PopupInputText:{
        height: 120,
        color:colors.grayLink,
        backgroundColor:colors.white,
        width:'100%',
        elevation:5,
        borderRadius:15
    },
    PopupInputText2:{
        height: 50,
        color:colors.grayLink,
        backgroundColor:colors.white,
        width:'100%',
        elevation:5,
        borderRadius:10
    },
    HeaderPage:{
        height:90,
        width:'90%',
        marginTop:20,
        borderRadius:10,
        backgroundColor:colors.white,
        alignItems:"center",
        justifyContent:"center",
        elevation: 24,
    },
    HeaderText:{
        fontSize:27,
        fontFamily: 'Montserrat-Bold',
        // fontFamily: Platform.OS === "ios" ? 'AsCalledByFontBook' : 'Montserrat-Bold.ttf',
        color:colors.default,
    },
    AdminMessage:{
        height:330,
        width:'90%',
        padding:20,
        marginTop: 27,
        color:colors.grayLink,
        backgroundColor:colors.white,
        borderRadius:15,
        elevation: 20,
    },
    Show:{
        height:'70%',
        width:'90%',
        padding:20,
        marginTop: 27,
        color:colors.grayLink,
        backgroundColor:colors.white,
        borderRadius:15,
        elevation: 20,
    },
    ContactForm:{
        width:'90%',
        padding:10,
        marginTop: 20,
        color:colors.grayLink,
        backgroundColor:colors.white,
        borderRadius:15,
        elevation: 20,
    },
    AdminMessageText:{
        height:200,
        width:'90%',
        fontFamily: 'Montserrat-Light',
    },
    AlertButtom:{
        width:"30%",
        backgroundColor:colors.default,
        height:30,
        borderRadius:15,
        alignItems:"center",
        fontFamily:"Montserrat-Light",
        paddingTop:5,
        marginTop:40,
    },
    AlertText:{
        marginBottom: 28,
        fontSize:17,
        textAlign: 'center',
        color:colors.default,
    },
    AlertMessage:{
        backgroundColor: '#fff',
        marginTop: 15,
        margin: 10,
        color:colors.grayLink,
        width:'90%',
        alignItems:"center",
        justifyContent:"center",
        paddingTop:26,
    },
    UploadPage:{
        width:"100%",
        // paddingBottom:50
    },
    UploadImage:{
        alignItems:'center',
        padding:30,
        elevation:24,
        borderRadius:15,
        backgroundColor:"#fff"
    },
    UploadImageText:{
        paddingTop:20,
        fontSize:20,
        fontFamily:"Montserrat-Light",
        color:colors.default
    },
    AddNameText:{
        paddingTop:20,
        fontSize:15,
        fontFamily:"Montserrat-Light",
        color:colors.default,
    },
    checkBoxRow:{
        flexDirection: 'row',
        width:"100%",
        justifyContent:'space-between'
    },
    checkBoxItme:{
        width:"30%",
        flexDirection: 'row',
        marginTop:10
    },
    RadioItme:{
        width:"60%",
        flexDirection: 'row',
        marginTop:10
    },
    RadioText:{
        fontSize:17,
        fontFamily:"Montserrat-Bold",
        color:colors.default
    },
    checkBox:{
        height: 20, 
        width: 20, 
        marginRight:10
    },
    checkBoxText:{
        fontSize:10,
        color:colors.default
    },
    offers:{
        height:height*0.3,
        width:'95%',
        margin:10,
        borderRadius:20,
        backgroundColor:colors.white,
        alignItems:"center",
        flexDirection: 'row',
        elevation: 10,
    },
    offers2:{
        height:height*0.2,
        width:'95%',
        margin:10,
        borderRadius:20,
        backgroundColor:colors.white,
        alignItems:"center",
        flexDirection: 'row',
        elevation: 10,
    },
    offerContinar:{
        width:'90%',
        marginTop:20,
        paddingBottom:100,
    },

    offerContinarNew:{
        width:'90%',
        height:"73%",
        marginTop:20,
        paddingBottom:100,
    },

    offerProprty:{
        padding:17,
        paddingBottom:5,
        paddingTop:5,
        borderRadius:15,
        fontSize:13,
        margin:5,
    },

    offerProprty_Adver:{
        padding:10,
        paddingBottom:5,
        paddingTop:5,
        borderRadius:15,
        fontSize:13,
        margin:5,
    },

    offerProprty2:{
        padding:5,
        width:'26%',
        borderRadius:10,
        fontSize:12,
        margin:0.5,
        backgroundColor:colors.default,
        color:'#F8C055'
    },

    offerProprty3:{
        padding:5,
        width:'26%',
        borderRadius:10,
        fontSize:12,
        margin:0.5,
        backgroundColor:colors.default,
        color:colors.white,
        fontFamily: 'Montserrat-Bold',
    },

    HeaderOffer:{
        margin:5,
        marginBottom:10,
        fontSize:20,
        fontFamily: 'Montserrat-Bold',
        // fontFamily: Platform.OS === "ios" ? 'AsCalledByFontBook' : 'Montserrat-Bold.ttf',
        color:colors.default,
    },
    price:{
        color:'#F6AC3D',
        fontSize:18,
        margin:5,
        fontFamily: 'Montserrat-Bold',
    },
    price2:{
        color:'#F6AC3D',
        fontSize:18,
        fontFamily: 'Montserrat-Bold',
    },
    Detail:{
        fontSize:18,
        marginTop:5,
        marginBottom:5,
        fontFamily: 'Montserrat-Bold',
        color:colors.default,
    },
    DetailHead:{
        fontSize:14,
        color:colors.default,
        marginBottom:10,
    },
    DetailVal:{
        fontSize:13,
        fontFamily: 'Montserrat-Bold',
        color:colors.default,
        marginBottom:10,
    },
    OfferView:{
        marginTop:10,
        backgroundColor:colors.white,
        width:"90%",
        // height:height*0.7,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        padding:20,
        paddingTop:10,
        elevation:10,
    },
    ContactImage:{
        width:30,
        height:30,
    },
    OfferHeadText:{
        fontSize:24,
        margin:5,
        fontFamily: 'Montserrat-Bold',
        color:colors.default,
    },
    Contact:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'45%',
        margin:10,
    },
    Bidding:{
        margin:10
    },
    BiddingText:{
        fontSize:20,
        color:colors.default,
    },
    owner:{
        margin:5
    },
    ownerText:{
        fontSize:14,
        color:colors.default,
    },
    ownerVal:{
        fontSize:20,
        color:'#F8C055',
    },
    AddBid:{
        marginTop:20,
        fontSize:18,
        color:colors.default,
    },
    BidButtoun:{
        alignItems:'center',
        justifyContent:'center',
        paddingRight:45,
        paddingLeft:45,
        paddingBottom:5,
        paddingTop:5,
        borderRadius:50,
        backgroundColor:colors.default,
        marginRight:5,
        marginLeft:5,
    },
    textInput6: {
        height: 40,
        width:'60%',
        borderColor:colors.default,
        borderWidth:1,
    },
    Bid:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'90%',
        margin:10
    },
    BidButtounText:{
        color:colors.white,
        fontSize:9,
        fontFamily: 'Montserrat-Bold'
    },
    dropdown:{
        height: 100, 
        // width: '80%',
        // backgroundColor:colors.white,
    },
    logout:{
        width: '60%',
        paddingTop: 5,
        paddingBottom: 30,
        paddingRight:20,
        paddingLeft:20,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
});
