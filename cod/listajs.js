//Lista ligada
class ListNode{
    constructor(data){ //definição de um nó
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor () {
        this.head = null; 
        this.size = 0;
    }

    inserirNoInicio (valor){
        let novoNo = new ListNode (valor)
        novoNo.next = this.head;
        thishead = novoNo;
        return this.head;
    }

    insereNoFinal(valor){
        let novoNo = new ListNode(valor);
        if(this.head == null){
            this.head = novoNo;
            this.size = 1;
            return this.head
        }
        let tail = this.head
        while(tail.next !== null){
            tail = tail.next;
        }
        tail.next = novoNo;
        this.size = this.size+1
        return this.head;
    }
    pegaNaPosicaoX(indice){
        if(indice < 0 || indice > this.size-1){
            return undefined
        }
        let contador = 0;
        let noh = this.head
        while(noh){
            if(contador === indice){
                return noh;
            }
            contador++;
            noh=noh.next
        }
        return null;
    }
    insereNaPosicao(valor, indice){
        if(!this.head){
            this.head = new ListNode(valor); //se n tiver nada na cabeça insere no inicio 
            return this.head;
        }
        if(indice === 0){
            return this.inserirNoInicio(valor);
        }
        let anterior = this.pegaNaPosicaoX(indice - 1)
        let novoNo = new ListNode(valor)
        novoNo.next = anterior.next
        anterior.next = novoNo;
        return this.head;
    }

    excluirPrimeiroNo(){
        if(!this.head){
            return;
            this.head = this.head.next
            return this.head;
        }
    }

    excluirUltimoNo(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            this.head = null
            return this.head; //se houver apenas 1 elemento
        }
        //mais de um elemento
        let penultimo = this.head;
        let cauda = this.head.next;
        while(cauda.next !== null){
            penultimo = cauda
            cauda = cauda.next
        }
        penultimo.next = null
        return this.head;
    }
    excluirNoIndice(indice){
        if(!this.head){
            return null;
        }
        if(indice === 0){
            this.excluirPrimeiroNo();
        }
        const penultimo = this.pegaNaPosicaoX(indice - 1)
        if(!penultimo || !penultimo.next)
        return this.head
        penultimo.next = penultimo.next.next
        return this.head;
    }

    imprime(){
        let listaBonita = "@ -> "
        let noh=this.head;
        while(noh!==null){
          listaBonita += noh.data + " -> "
          noh=noh.next
        }
        listaBonita += "null"
  
        console.log(listaBonita)
  
      }

    excluirLista(){
        this.head = null;
    }
}


let list = new LinkedList();
list.inserirNoInicio(4)

list.imprime()
console.log(list)