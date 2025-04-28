import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCustomFonts } from '../src/fonts/fonts';
import Logo from '../assets/images/icon.svg'
import { router } from 'expo-router';

const AboutScreen = () => {

    const [fontsLoaded]= useCustomFonts();
   
    if (!fontsLoaded){
       return null
    }
    const openSocialMedia = (url) => {
    Linking.openURL(url).catch(err => console.error("Gagal Membuka URL:", err));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>

        <Logo width={55}/>
        <Text style={styles.appName}>Teman Ngobrol</Text>
        <Text style={styles.version}>Versi 1.0.0</Text>
      </View>

      {/* Tentang Aplikasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
        <Text style={styles.sectionText}>
          Teman Ngobrol adalah aplikasi chatbot sederhana yang dibuat untuk menjadi teman berbincang kapan saja. 
          Aplikasi ini bisa membantu menjawab pertanyaan, memberikan informasi, atau sekedar menemani ngobrol.
        </Text>
      </View>

      {/* Tentang Pembuat */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pembuat</Text>
        <Text style={styles.namaPembuat}>Muhammad Farhan Amien</Text>
        <Text style={styles.sectionText}>
        Mahasiswa biasa yang lagi belajar bikin aplikasi mobile sederhana buat tugas UTS. Aplikasi ini cuma prototype sederhana yang dikembangkan dalam waktu singkat. Kalau ada bug atau kurang menarik, mohon maaf yang sebesar besarnya
        </Text>
      </View>

      {/* Sosial Media */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sosial Media</Text>
        <View style={styles.socialContainer}>
          <Ionicons 
            name="logo-instagram" 
            size={32} 
            color="#E1306C" 
            onPress={() => openSocialMedia('https://www.instagram.com/mhmmdfrhnamn/')}
            style={styles.socialIcon}
          />
          <Ionicons 
            name="logo-github" 
            size={32} 
            color="#333" 
            onPress={() => openSocialMedia('https://github.com/mhmmdfrhnamn')}
            style={styles.socialIcon}
          />
          <Ionicons 
            name="logo-linkedin" 
            size={32} 
            color="#0077B5" 
            onPress={() => openSocialMedia('https://linkedin.com/in/mhmmdfrhnamn')}
            style={styles.socialIcon}
          />
        </View>
      </View>

      {/* Versi Aplikasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Versi Aplikasi</Text>
        <Text style={styles.sectionText}>Teman Ngobrol v1.0.0</Text>
        <Text style={styles.sectionText}>© 2025 Muhammad Farhan Amien</Text>
      </View>

      <TouchableOpacity style={styles.goback} onPress={()=>router.push('/chat')}>
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e68c',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 30,
    fontFamily:'Fira-Bold',
    color: '#333',
},
version: {
    fontSize: 14,
    fontFamily:'Fira-Regular',
    color: '#666',
    marginTop: 4,
},
section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    elevation: 2,

  },
  sectionTitle: {
    fontSize: 20,
    fontFamily:'Fira-Bold',
    color: '#333',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  namaPembuat: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  socialIcon: {
    marginHorizontal: 12,
  },
  goback:{
    marginHorizontal:150,
    padding:15,
    backgroundColor:'#ffff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  back:{
    fontSize:20,
    fontFamily:'Fira-Medium'
  }
});

export default AboutScreen;