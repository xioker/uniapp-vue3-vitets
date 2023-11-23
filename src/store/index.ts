// eg
export const useDemoPinia = defineStore('demo', () => {
	// state
	const count = ref<number>(0);
	
	// getters 
	
	// actions
	function increment():void {
		count.value++;
	}

	return { count, increment };
});
