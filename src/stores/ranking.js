import { defineStore } from "pinia";
import { ref } from "vue";


export const useRankingStore  = defineStore('ranking', () =>{
    const saved = localStorage.getItem('ranking')
    const scores = ref(saved ? JSON.parse(saved) : []) // si saved es null array vacio


    function addScore(score){
        scores.value.push(score)
        //ordenar segun puntos, empate por tiempo
        scores.value.sort((a,b) =>{
            
            if (a.points !== b.points) return b.points - a.points
            //si sus puntos son iguales miramos tiempo
            return a.time - b.time
        })
localStorage.setItem('ranking', JSON.stringify(scores.value))

    }
    


return { scores, addScore }

})