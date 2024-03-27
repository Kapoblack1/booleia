// components/LoginPage.js
import React from 'react';
import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import forbidden from '../../../assets/forbidden.webp'
import OTPInputView from '@twotalltotems/react-native-otp-input'
/*



 */
const OTPScreen = () => {

    return (


        <View style={styles.container}>

            <View style={styles.container2} >

                <View style={{marginTop: '10%',justifyContent:'center'}}>


                    <Image source={forbidden}></Image>

                    <Text style={styles.title}>Verificação</Text>

                    <Text style={styles.subtitle}>Um OTP foi enviado para o seu número de telefone</Text>


                    <OTPInputView
                        style={{ width: '100%', height: 50 }}
                        pinCount={4}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />


                </View>

                <View >
                    <TouchableOpacity style={styles.skipButton}>
                        <Text style={styles.skipText}>Reenviar código</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Verificar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "7%",
        backgroundColor: '#ffffff', // Ajuste conforme a cor de fundo da imagem

    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
        color: '#414141',
        fontFamily: 'Poppins_500Medium',

    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#B9C3CD',
        fontFamily: 'Poppins_400Regular',

    },
    location: {
        color: '#B9C3CD',
        fontFamily: 'Poppins_400Regular',

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#B9C3CD', // Ajuste conforme a cor da linha do input na imagem
        marginBottom: 20,
        fontSize: 16,
        paddingVertical: 10,
        fontFamily: 'Poppins_400Regular',
        color: '414141',
    },
    loginButton: {
        backgroundColor: '#007AFF', // A cor do botão de login na imagem
        borderRadius: 50,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    skipButton: {
        backgroundColor: 'white', // A cor do botão de login na imagem
        borderRadius: 50,
        borderColor: '#B8B8B8',
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
        borderWidth: 1,
    },
    skipText: {
        color: '#B8B8B8',
        fontSize: 18,
        fontFamily: 'Poppins_500Medium',
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    },
    borderStyleBase: {
        width: 50,
        height: 45,

    },
    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    underlineStyleBase: {
        width: 50,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#414141',
        fontFamily: 'Poppins_400Regular',
        fontSize: 40,

    },
    underlineStyleHighLighted: {
        borderColor: "#007AFF",
    },
});

export default OTPScreen;
