import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink 
                text="Don't have an account? Sign up instead" 
                routeName="Signup"
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: () => false
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
});

export default SigninScreen;