import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import Styles from '../styles/styles';
import Auth from '../services/auth';
import { useRouter } from 'expo-router';


const SignUp = () => {

  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [mailError, setMailError] = useState('');
  const [passError, setPassError] = useState('');
  const [passConfError, setPassConfError] = useState('');

  const validateEmail = (mailSyntax) => {
    const emailTemp = /^[A-Za-z0-9._]+@[A-Za-z-]+\.[A-Za-z]+$/;
    if (!emailTemp.test(mailSyntax)) {
      setMailError('Invalid Email Address')
    }else{
      setMailError(null)
    }
  }

  const validatePassword = (pass)=>{
    if (pass.length<8) {
      setPassError('Password must be more than 8 characters!')
    }else{
      setPassError(null)
    }
  }

  const validateTwoPasswords = (conPass)=>{
    if (conPass === password) {
      setPassConfError(null)
    }else{
      setPassConfError('Passwords must be the same!')
    }
  }

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return Alert.alert("Failure", `Error fetching data: ${error.message}`);
  // }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text style={Styles.heading}>Sign Up</Text>
          <TextInput
            style={Styles.inputField}
            name='email'
            value={email}
            onChangeText={(mailSyntax)=>{
              setEmail(mailSyntax);
              validateEmail(mailSyntax);
            }}
            placeholder={"Email"}
            keyboardType={'email-address'}></TextInput>
          <Text style={{ margin: 10, marginBottom:16, marginTop:0,color:'red' }}>{mailError}</Text>

          <TextInput style={Styles.inputField}
            name='password'
            value={password}
            onChangeText={(pass)=>{
              setPassword(pass);
              validatePassword(pass);
            }}
            placeholder={"Password"}
            secureTextEntry></TextInput>
          <Text style={{ margin: 1, marginBottom:6, marginTop:0,color:'red' }}>{passError}</Text>

          <TextInput
            style={Styles.inputField}
            name='confirmPassword'
            value={passwordConfirm}
            onChangeText={(conPass)=>{
              setPasswordConfirm(conPass);
              validateTwoPasswords(conPass);
            }}
            placeholder={"Confirm Password"}
            secureTextEntry></TextInput>
          <Text style={{ margin: 1, marginTop:0,color:'red' }}>{passConfError}</Text>
        </View>
        <View>
          <TouchableHighlight activeOpacity={0.5} underlayColor="lightgray" style={Styles.btn} onPress={()=>{
            if (mailError === null && passError === null && passConfError === null) {
              Alert.alert("Success", "You have registered successfully")
            }else{
              Alert.alert("Failure", "Something went wrong. Please try again.")
            }
          }}>
            <View>
              <LinearGradient start={{ x: 0, y: 0 }} colors={['#1B94DA', '#18BDBA']} style={Styles.btn}>
                <Text style={Styles.btnText}>Sign up</Text>
              </LinearGradient>
            </View>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.5} underlayColor="lightgray" style={[Styles.btn, {marginTop:10}]} onPress={()=>{
            router.navigate('/src/screens/login');
          }}>
            <LinearGradient start={{ x: 0, y: 0 }} colors={['#1B94DA', '#18BDBA']} style={Styles.btn}>
              <Text style={Styles.btnText}>Login</Text>
            </LinearGradient>
          </TouchableHighlight>
          <Text style={{color:'#1B94DA', marginTop:10, textAlign:'center'}}>Read User License Agreement</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

export default SignUp