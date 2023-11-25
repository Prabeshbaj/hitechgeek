import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white font-bold text-xl">HitechGeek</div>
      <div class="space-x-4">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <a href="#" class="text-white">Services</a>
        <a href="#" class="text-white"><Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300" onClick={signOut}>Sign Out</Button></a>
      </div>
    </div>
  </nav>
     
       <h1 className="text-3xl font-bold underline">Welcome to my app</h1>
        <Heading level={1}>We now have Auth!</Heading>
    
    </View>
  );
}

export default withAuthenticator(App);