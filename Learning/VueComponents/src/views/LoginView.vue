<script>
    import InputComponent from '../components/InputComponent.vue';
    import {initializeApp} from 'firebase/app';
    import {getAuth} from 'firebase/auth';
    
    export default {
        components: {
            InputComponent
        },
        data(){
            return {
                login: '',
                pass: '',
                firebaseConfig: {
                    apiKey: "AIzaSyC7iHgYq7WbHkaF_8VlFEzPT5EZxZi6euY",
                    authDomain: "pspizk-my-app.firebaseapp.com",
                    projectId: "pspizk-my-app",
                    storageBucket: "pspizk-my-app.appspot.com",
                    messagingSenderId: "383308671313",
                    appId: "1:383308671313:web:e877f1efc7709eea958b70"
                }
            }
        },
        methods: {
            zalogujBtnClick(){
                //fetch('/login', { method: "POST", body: { login: this.login, pass: this.pass }}).then( res => res.json() ).then(data => {
                    // przekierowanie do innego widoku
                //});
                const app = initializeApp(this.firebaseConfig);
                
                const auth = getAuth(app);

                signInWithEmailAndPassword(auth, this.login, this.pass).then( () => {

                });

                console.log(this.login);
                console.log(this.pass);
            }
        }
    }
</script>

<template>
    <h1> Zaloguj się do aplikacji </h1>
    <div>
        <InputComponent name="Login" type="text" v-model="login" class="inputComponentClass"/>
        <InputComponent name="Hasło" type="password" v-model="pass" class="inputComponentClass" />
        <button @click="zalogujBtnClick()">Zaloguj</button>
    </div>
</template>
<style scoped>
    .inputComponentClass{
        display: block;
        width: 100%;
    }
</style>