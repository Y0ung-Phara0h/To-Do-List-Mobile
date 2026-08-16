import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:72,
    paddingBottom:72,
  },
  heading: {
    color: '#3EC9B8',
    fontSize: 64,
    fontWeight: '900',
    marginBottom:48,
    textAlign: 'center'
  },
  inputField: {
    boxShadow: '0px 3px 12px lightblue',
    width:260,
    height:55,
    borderRadius:16,
    paddingLeft:15,
    paddingRight:15,
    marginBottom:24,
  },
  btn: {
    paddingTop:4,
    width:260,
    height:50,
    borderRadius:24,
    textAlign: 'center'
  },
  btnText: {
    fontSize:24,
    fontWeight:'600',
    textAlign:'center',
    color:'white',
  }
})

export default Styles;