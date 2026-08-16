import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import { useEffect, useState, React } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from '../styles/styles';
import Auth from '../services/auth';


const Profile = () => {
  const [userData, setUserData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    Auth()
    .then(data => setUserData(data))
    .finally(()=>{setIsLoading(false)})
  }, [])

  if (isLoading) {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar style="auto" />
        <ActivityIndicator size="large"/>
      </SafeAreaView>
    )
  }
  
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <StatusBar style="auto" />
        <Text>Username: {userData.name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile