import { ref } from "vue";

const useCountet = (initValue = 5) => {

    const number = ref(initValue);

    return {
        number,
        increase: () => number.value++,
        decrease: () => number.value--,
    };

}


export default useCountet