import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const RegisterScreen = () => {

  // Handling Back navigation, if necessary
  const handleBack = () => {
    // navigate back
  };

  // Handling Sign Up submission
  const handleSignUp = () => {
    // sign up logic
  };

  // Handling navigation to the Login screen
  const handleGoToLogin = () => {
    // navigate to login screen
  };

  return (
    <View style={styles.container}>
        <View></View>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Registrar</Text>

      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Gênero</Text>
        {/* Icon component for the dropdown arrow should be added here */}
      </TouchableOpacity>
      <TextInput placeholder="Número de telefone" style={styles.input} />

      <Text style={styles.disclaimer}>
        Ao inscrever-se concorda com os nossos Termos de serviço & Política de Privacidade.
      </Text>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={handleGoToLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: "8%",
        backgroundColor: '#ffffff', // Ajuste conforme a cor de fundo da imagem
      },
    backButton: {
      marginLeft: 10,
      marginBottom: 20,
    },
    backButtonText: {
      fontSize: 18,
      color: '#000000',
    },
    title: {
        fontSize: 24,
      fontWeight: "bold",
      color: '#000000',
      marginBottom: 40,
    },
    input: {
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      padding: 15,
      fontSize: 18,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#E8E8E8',
    },
    dropdown: {
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E8E8E8',
    },
    dropdownText: {
      fontSize: 18,
      color: '#000000',
    },
    disclaimer: {
      fontSize: 14,
      color: '#707070',
      textAlign: 'center',
      marginBottom: 30,
    },
    signUpButton: {
      backgroundColor: '#007AFF',
      borderRadius: 20,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    signUpButtonText: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: '600',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    footerText: {
      fontSize: 16,
      color: '#000000',
      marginRight: 5,
    },
    loginText: {
      fontSize: 16,
      color: '#007AFF',
      fontWeight: '600',
    }
  });
  

export default RegisterScreen;
