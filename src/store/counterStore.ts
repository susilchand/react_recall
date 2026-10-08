import { create } from "zustand";
 
type CounterStore = {

  count: number;
  increament: ()=> void;
  decreament: ()=> void;
  reset: ()=> void;

};
 const useCounterStore = create<CounterStore>((set)=>({
   count: 0,
   increament: ()=> {
    set((state)=>({
      count: state.count+1,
    }))
   },
   decreament: ()=>{
    set((state)=>({
      count: state.count -1,
    }))
   },
   reset:()=>{
    set({
      count:0,
    })
   }
 }))
 export default useCounterStore;