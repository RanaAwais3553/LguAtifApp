// ******************************* Company Detail Screen Start **********************************//////////

import {Dimensions} from 'react-native'
import {StyleSheet} from 'react-native'

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

const LOGO_WIDTH = 120;
const LOGO_HEIGHT = 20;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = screenWidth * 0.5;

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    itemStyle: {
    //   width ,
    //   height ,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer:{
        flex:1,
        resizeMode:'stretch',
        width: screenWidth * 1,
    },
    imageStyle: {
      width: screenWidth * 1,
     
      resizeMode:'stretch',
     flex: 1,
    
    //    backgroundColor:'rgba(18,18,18,0.9)',
  
    },
    backImageOverlayText:{
        width:screenWidth,
        height:screenHeight/3.3,
        justifyContent:'center',
        backgroundColor:'rgba(18,18,18,0.6)',
         position:'absolute',
         
        alignItems:'center',
        
        
    },
    backImageOverlayTextStyle:{
      textAlign:'center',
        color:'hsla(360, 100%, 100%, 1.0)',
        fontSize:11,
        fontFamily:'open-sans',
    },
    textContainer: {
      // alignItems: 'flex-start',
      // alignSelf: 'flex-end',
      //justifyContent:'center',
      alignItems:'center',
      flex: 2,
      
    },
    heading: {
      color: '#444',
      textTransform: 'uppercase',
      fontSize: 24,
      
      fontWeight: '800',
      textAlign:'center',
      letterSpacing: 2,
      marginBottom: 5,
      fontFamily:'open-sans-bold',

    },
    description: {
      color: '#808080',
      fontWeight: '600',
      textAlign: 'left',
      width: screenWidth * 0.93,
      height:screenHeight*1,
      marginRight: 10,
      fontSize: 16,
      lineHeight: 16 * 1.5,
      //paddingBottom:30,
    },
    logo: {
      opacity: 0.9,
      height: LOGO_HEIGHT,
      width: LOGO_WIDTH,
      resizeMode: 'contain',
      position: 'absolute',
      left: 10,
      
      bottom: 20,
      transform: [
        { translateX: -LOGO_WIDTH / 2 },
        { translateY: -LOGO_HEIGHT / 2 },
        { rotateZ: '-90deg' },
        { translateX: LOGO_WIDTH / 2 },
        { translateY: LOGO_HEIGHT / 2 },
      ],
    },
    pagination: {
      position: 'absolute',
      alignSelf:'center',
      bottom: screenHeight/1.6,
      flexDirection: 'row',
      height: DOT_SIZE,
    },
    paginationDot: {
      width: DOT_SIZE * 0.3,
      height: DOT_SIZE * 0.3,
      borderRadius: DOT_SIZE * 0.15,
    },
    paginationDotContainer: {
      width: DOT_SIZE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    paginationIndicator: {
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: DOT_SIZE / 2,
      borderWidth: 2,
      borderColor: '#10d300',
    },
    tickerContainer: {
      position: 'absolute',
      top: 20,
      left: 10,
      overflow: 'hidden',
      height: TICKER_HEIGHT,
    },
    tickerText: {
      fontSize: 16,
      lineHeight: TICKER_HEIGHT,
      textTransform: 'uppercase',
      fontWeight: '500',
    },
  
    circleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      position: 'absolute',
      top: '15%',
    },

// 
 
// *****************************Swiper Styling Start *******************************


slide1: {
flex:1,

justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},
slide2: {
  flex:1,


justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},
slide3: {
  flex:1,

justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
},
imagess:{
  flex:1,
resizeMode:'stretch',
width:'100%',

},

// **************************** About page Start *******************************
aboutSwiper:{
  resizeMode:'stretch',
  height:screenHeight/3,
  width:screenWidth,
},
Aboutdetail:{
  
  
    color: '#808080',
    fontWeight: '600',
    textAlign: 'justify',
    width: screenWidth * 0.93,
  marginLeft:8,  
    
    fontSize: 16,
    lineHeight: 16 * 1.5,
  
},
Aboutheading: {
  marginTop:15,
  color: '#444',
  marginLeft:8,  

  textTransform: 'uppercase',
 // fontSize: 24,
  
  fontWeight: '800',
 // textAlign:'center',
  letterSpacing: 2,
  
  fontFamily:'open-sans-bold',

},

// ********************************************** About Page End *********************************

// *********************************************** Contact Us Page Start **************************
//************************************Contact Us Page Start  ******************************/

mainContactForm:{
  flex:1,
  paddingHorizontal:30,

},
contactUsImagesView:{
  flex:0.6,
  width:screenWidth,
  //height:screenHeight/3.5,
},
contactUsImages:{
  flex:1,
  width:screenWidth, 
  resizeMode:'stretch'
},
contactUsformMainHeading:{
  flex:0.2,
  justifyContent:'center',
  alignItems:'center',
},
contactUsformMainHeadingOuter:{
  fontSize:26,
  fontFamily:'open-sans-bold',
  color:'#cea058',
  letterSpacing:2,
  textTransform: 'uppercase',

},
contactUsformMainHeadingInner:{
  fontSize:26,
  fontFamily:'open-sans-bold',
  color:'#0f385a',
  letterSpacing:2,
  textTransform: 'uppercase',

},
TextinputfieldcontactUs:{
  paddingTop:8,
  borderBottomColor: '#0f385a',
  borderBottomWidth:2,
  color:'#0f385a',
  borderRadius:40,
  fontSize:16,
  fontFamily:'open-sans',
  letterSpacing:2,
  
},

  });
  