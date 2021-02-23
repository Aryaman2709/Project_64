import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import { Header } from 'react-native-elements';
  import dictionary from '../database'

  export default class HomeScreen extends React.Component{
      constructor(){
          super();
          this.state ={
              text: '',
              isSearchPressed: false,
              word: "",
              lexicalCategory :'',
              examples: [],
              definition :""
          }
      }

      getWord=(text)=>{
          var text = text.toLowerCase().trim()
          try{
              var word = dictionary[text]["word"]
              var lexicalCategory = dictionary[text]["lexicalCategory"]
              var definition = dictionary[text]["definition"]
              this.setState({
                  "word": word,
                  "lexicalCategory":lexicalCategory,
                  "definition":definition
              })
          }
          catch(err){
              alert("sorry this word is not available for now")
              this.setState({
                  'text':'',
                  'isSearchPressed' :false
              })
          }
      }

      render(){
          return(
              <View style = {styles.container}>
                   <Header
                      backgroundColor={'violet'}
                      centerComponent={{
                      text: 'Pocket Dictionary',
                      style: { color: '#fff', fontSize: 20 },
                      }}
                     />
                     <TextInput
                     style = {styles.inputBox}
                     onChangeText={text=>{
                         this.setState({
                             text:text,
                             isSearchPressed:false,
                             word: "",
                             lexicalCategory: '',
                             examples : [],
                             definition : ""
                         });
                     }}
                     value={this.state.text}
                     />
                     <TouchableOpacity
                     style={styles.searchButton}
                     onPress={() =>{
                         this.setState({isSearchPressed:true});
                         this.getWord(this.state.text)
                     }}
                     ><Text style={styles.buttonText}>Search</Text></TouchableOpacity>
                     <View style={styles.detailsContainer}>
                         <Text style={styles.detailsTitle}>
                             Word: {" "}
                         </Text>
                         <Text style={{fontSize:18}}>
                             {this.state.word}
                         </Text>
                     </View>
                     <View style={styles.detailsContainer}>
                         <Text style={styles.detailsTitle}>
                             Type:{" "}
                         </Text>
                         <Text style={{fontSize:18}}>
                             {this.state.lexicalCategory}
                         </Text>
                     </View>
                     <View style={styles.detailsContainer}>
                         <Text style={styles.detailsTitle}>
                             Definition:{" "}
                         </Text>
                         <Text style={{fontSize:18}}>
                             {this.state.definition}
                         </Text>
                     </View>
              </View>
          )
      }
  }

  const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox:{
     marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  searchButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    marginBottom:50,
    width: 200,
    height: 50,
    backgroundColor: 'yellow'
  },
  buttonText:{
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize:20
  },
  detailsContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'violet',
    padding:10
  },
  detailsTitle:{
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  }
  })