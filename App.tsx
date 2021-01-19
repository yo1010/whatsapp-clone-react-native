import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from 'aws-amplify-react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
import { getUser } from './graphql/queries';
import { createUser } from './graphql/mutations';

Amplify.configure(config);

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchUser = async () => {
      //get auth user from auth 
      const user = await Auth.currentAuthenticatedUser({ bypassCache: true });

      const userId = user.attributes.sub;

      if (user) {
        console.log(userId);
        const userData = API.graphql(graphqlOperation(getUser,
          { variables: { id: userId } }));

        if (userData.data && userData.data.getUser) {
          console.log('user is in database');
          return;
        } else {
          console.log(userId);
          const newUser = {
            id: userId,
            name: user.username,
            imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
            status: 'Hey, I am using whatsapp',
          };
          console.log(newUser)

          await API.graphql(graphqlOperation(createUser,
            { variables: { input: newUser } }));
        }
      }
      //get user from BE with id from auth

      //if no user in db --> create one
    };

    fetchUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};

export default withAuthenticator(App);
