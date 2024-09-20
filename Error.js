import React from 'react';
import LottieView from 'lottie-react-native';
import errorAnimation from '../../assest/error.json';

function Error() {
    return <LottieView source={errorAnimation} autoPlay loop />;
}

export default Error;