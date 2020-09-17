import React, {useRef, useEffect} from 'react';
import {View, Text, Pressable, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/action/authAction';
import {API_URL} from '../utils/environment';
import FastImage from 'react-native-fast-image';
import t from 'tcomb-form-native';
import nextIcon from '../assets/img/next_bg.png';

const {Form} = t.form;

function mysubtype(type, getValidationErrorMessage, name) {
  const Subtype = t.refinement(
    type,
    (x) => {
      return !t.String.is(getValidationErrorMessage(x));
    },
    name
  );
  Subtype.getValidationErrorMessage = getValidationErrorMessage;
  return Subtype;
}

const emailType = mysubtype(t.String, (s) => {
  const regExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!s) {
    return 'Required';
  }
  if (!regExp.test(s)) {
    return 'Invalid email address';
  }
});

const stringRequired = mysubtype(t.String, (s) => {
  if (!s) {
    return 'Required';
  }
});

// here we are: define your domain model
const User = t.struct({
  email: emailType, // a required string
  password: stringRequired, // an optional string
});

const {textbox, textboxView} = t.form.Form.stylesheet;
//custom stylesheet
const newStyle = {
  ...t.form.Form.stylesheet,
  textbox: {
    ...textbox,
    normal: {...textbox.normal, borderWidth: 0, marginBottom: 0},
    error: {...textbox.error, borderWidth: 0, marginBottom: 0},
  },
  textboxView: {
    ...textboxView,
    normal: {
      ...textboxView.normal,
      borderWidth: 0,
      borderRadius: 3,
      borderBottomWidth: 1,
      marginBottom: 5,
      borderColor: '#959593',
    },
    error: {
      ...textboxView.error,
      borderWidth: 0,
      borderRadius: 3,
      borderBottomWidth: 1,
      marginBottom: 5,
      borderColor: '#959593',
    },
  },
};

const options = {
  stylesheet: newStyle,
  auto: 'none', // do not generate automatic labels nor automatic placeholders
  fields: {
    email: {
      placeholder: 'Email',
    },
    password: {
      placeholder: 'Password',
      password: true,
      secureTextEntry: true,
    },
  },
};

const LoginScreen = ({navigation}) => {
  const {isValid} = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const formRef = useRef();
  if (isValid) {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'AllMenu',
        },
      ],
    });
  }
  return (
    <View
      style={{
        padding: 0.1 * Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: Dimensions.get('window').height,
      }}>
      <Text style={{fontSize: 48, fontWeight: 'bold'}}>Welcome Back</Text>
      <Form type={User} ref={formRef} options={options} />
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 32, fontWeight: 'bold', paddingTop: 10}}>Sign in</Text>
        <Pressable
          onPress={() => {
            const formValue = formRef.current.getValue();
            if (formValue) {
              //dispatch action
              dispatch(login(`${API_URL}/auth/login`, formValue));
            }
          }}>
          <FastImage style={{width: 64, height: 64}} source={nextIcon} {...{resizeMode: 'cover'}} />
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text
          style={{fontSize: 20, paddingTop: 10, textDecorationLine: 'underline', color: '#AB84C8'}}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
