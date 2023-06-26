import { defineStore } from "pinia";

export const useMySecretStore = defineStore('mySecretStore', {
    state: () => ({
        firebaseConfig: "xxx",
        count: 0
    }),
    getters: {
        getCount: (state) => { return state.count },
    },
    actions: {
        increment(){
            this.count++;
            console.log(this.count);
        },
        decrement(){
            this.count--;
        }
    }
});