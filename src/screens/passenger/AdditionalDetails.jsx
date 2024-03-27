// components/LoginPage.js
import React from 'react';
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Check } from "phosphor-react-native";
import Header from '../../components/Header';
import { MapPin } from "phosphor-react-native";

const AdditionalDetails = () => {

  return (

    <>
      <Header page={"Detalhes Adicionais"}></Header>

      <View style={styles.container}>

        <Text style={styles.subtitle}>Digite a localização da sua casa e trabalho para salvar como padrão</Text>

        <View style={styles.container2} >
          <View>

            <View>
              <Text style={styles.location}>Casa</Text>
              <View>
                <TextInput
                  placeholder="Condomínio Vila Nova"
                  style={styles.input}
                  placeholderTextColor={"#000"}
                />
              </View>

            </View>

            <View>
              <Text style={styles.location}>Trabalho</Text>
              <View>
                <TextInput
                  placeholder="Unitel, S.A, Bellas"
                  style={styles.input}
                  placeholderTextColor={"#000"}
                />
              </View>

            </View>

          </View>


          <View >
            <TouchableOpacity style={styles.skipButton}>
              <Text style={styles.skipText}>Saltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "7%",
    backgroundColor: '#ffffff', // Ajuste conforme a cor de fundo da imagem

  },
  container2:{
    display:'flex',
    flexDirection:'column',
    height:'90%',
    justifyContent:'space-between',
  },
  title: {
    fontSize: 16,
    color: '#B9C3CD', // Ajuste conforme a cor do subtítulo da imagem
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#B9C3CD',
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
    fontFamily: 'Poppins_400Regular',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
  },

});

export default AdditionalDetails;
