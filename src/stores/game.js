//pinia: db temporal que guarda datos que pueden usar los componentes
//al recargar los datos de pinia se borran y vuelven a su estado inicial


import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { songs } from "@/data/songs";


export const useGameStore = defineStore('game', () =>{
    const username = ref('')
    const points = ref(0)
    const currentRound = ref(1)
    const totalRounds = ref(10)

    function nextRound(){
        if (currentRound.value < totalRounds.value){
            currentRound.value++
        }
    }

    function resetRounds() {
        currentRound.value = 1
    }

    //
    const questions =  ref([])
    const selectedOption = ref(null)
    const finished = ref(false)

    //ronda actual 
    const currentQuestion = computed(() =>{
        return questions.value[currentRound.value - 1]
    })

    function shuffle(list){
        const copy = [...list]
        return copy.sort(() => Math.random() - 0.5)

    }


    function startGame(name){
        username.value = name
        points.value = 0
        resetRounds()
        selectedOption.value = null
        finished.value = false

        //mezclar y escoger 10
        const picked = shuffle(songs).slice(0,10)

        //mezclar respuestas o opciones

        for(let i = 0; i < picked.length; i++){
            picked[i].options = shuffle(picked[i].options)
        }
        questions.value = picked

    }

    function answer(option){
        if (selectedOption.value !== null) return

        selectedOption.value = option

        if (option === currentQuestion.value.correct){
            points.value += 10
        }
    }

    //pasa a la siguiente pregunta, o termina el juego si era la última
    function advance(){
        selectedOption.value = null

        if (currentRound.value < totalRounds.value){
            nextRound()
        } else {
            finished.value = true
        }
    }


    return {username, points, currentRound, totalRounds, nextRound, resetRounds, questions, selectedOption, finished, currentQuestion, startGame, answer, advance}

})