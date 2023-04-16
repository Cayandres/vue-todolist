const {createApp} = Vue;

createApp({
  data(){
   return{
    tasks:[
      {
        text:'Comprare il pollo',
        done: false
      },
      {
        text:'Comprare l\'insalata ',
        done: false
      },
      {
        text:'Comprare il pane',
        done: false
      },
    ],
    errorMsg:'',
    newTaskString:''
   }
  },

  methods:{

    removeTask(index){
      if(this.tasks[index].done){
        this.tasks.splice(index,1)
        this.errorMsg='';
      }else{
        this.writeErrorMsg("Attenzione, selezionare prima oggetto")
      }
    },

    writeErrorMsg(msg){
      this.errorMsg = msg;
      setTimeout(() =>{
        this.errorMsg=''
      },4000)
    },

    addTask(){
      if(this.newTaskString.length >4){
        const newTask={
          text: this.newTaskString,
          done: false
        }
        this.tasks.unshift(newTask);
        this.newTaskString = '';
      }else{
        this.writeErrorMsg('Deve avere almeno 5 caratteri')
      }
    }

  }

}).mount('#app')