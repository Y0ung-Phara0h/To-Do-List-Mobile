import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import Styles from '../styles/styles';
import Auth from '../services/auth';
import { useRouter } from 'expo-router';


const Login = () => {

  
  // if (auth.load) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return Alert.alert("Failure", `Error fetching data: ${error.message}`);
  // }
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <StatusBar style="auto" />
        <Text style={Styles.heading}>Login</Text>
        <View>
          <TextInput
            style={[Styles.inputField, {marginBottom:36}]}
            name='username'
            value={username}
            onChangeText={(user)=>{
              setUserName(user);
            }}
            placeholder={"Username"}></TextInput>
          {/* <Text style={{ margin: 10, marginBottom:16, marginTop:0,color:'red' }}>{mailError}</Text> */}

          <TextInput style={Styles.inputField}
            name='password'
            value={password}
            onChangeText={(pass)=>{
              setPassword(pass);
            }}
            placeholder={"Password"}
            secureTextEntry></TextInput>
          {/* <Text style={{ margin: 1, marginBottom:6, marginTop:0,color:'red' }}>{passError}</Text> */}

        </View>
        <View>
          <TouchableHighlight activeOpacity={0.5} underlayColor="lightgray" style={Styles.btn} onPress={()=>{
            if (Auth()) {
              router.navigate('/src/screens/profile');
            }else{
              Alert.alert("Failure", "We couldn't find your data, please try again or register if you don't have an account.");
            }
          }}>
            <LinearGradient start={{ x: 0, y: 0 }} colors={['#1B94DA', '#18BDBA']} style={Styles.btn}>
              <Text style={Styles.btnText}>Sign in</Text>
            </LinearGradient>
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={0.5} underlayColor="lightgray" style={[Styles.btn, {marginTop:10}]} onPress={()=>{
            router.navigate('/src/screens/signUp')
          }}>
            <LinearGradient start={{ x: 0, y: 0 }} colors={['#1B94DA', '#18BDBA']} style={Styles.btn}>
              <Text style={Styles.btnText}>Register</Text>
            </LinearGradient>
          </TouchableHighlight>
          <Text style={{color:'#1B94DA', marginTop:10, textAlign:'center'}}>Read User License Agreement</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

export default Login