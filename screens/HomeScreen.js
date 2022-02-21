import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavorites from '../components/NavFavorites'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const HomeScreen = () => {
  const dispatch = useDispatch();
{/*
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      origin = {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
      dispatch(
        setOrigin({
          location: origin,
        })
      );
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }*/}

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <View>
          <Text style={tw`text-4xl pt-3 pb-5 font-semibold text-black`}>App</Text>

          <TouchableOpacity 
            style={tw`bg-blue-300 absolute right-2 z-50 p-3 rounded-full shadow-lg`}>
            <Icon name="person" color={"white"}/>
          </TouchableOpacity>
        </View>
         
        <GooglePlacesAutocomplete
          styles = {{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          onPress = {(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            );

            dispatch(setDestination(null))
          }}
          returnKeyType = {"search"}
          fetchDetails = {true}
          enablePoweredByContainer = {false}
          minLength = {2}
          query = {{
            key: GOOGLE_MAPS_APIKEY,
            language: "en"
          }}
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen