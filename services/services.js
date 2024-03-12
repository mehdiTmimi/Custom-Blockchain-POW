const fs = require("fs")
const BlockChain = require("../models/blockchain")
const Bloc = require("../models/bloc")
const Transaction = require("../models/transaction")
const TransactionReward = require("../models/transactionReward")
const load = (path)=>{
    //returns blockchain
    fs.readFile(path,(err,data)=>{
        if(err)
            return console.log(err,"erreur dans la lecture du fichier")
        data = JSON.parse(data).blockchain
       
        const blockchain = new BlockChain(data.name,data.blockReward,data.difficuly,
            data.cyrptoFunction,data.proofStyle)
      
        data.blocs.forEach(element=>{
            const transactionReward = new TransactionReward(element.transactionReward.sender,
                element.transactionReward.amount,element.transactionReward.signture)
            const transactions = element.transactions.map(tx=>{
                return new Transaction(tx.sender,tx.receipient,tx.aamout,tx.fees,tx.signture)
            })
            const bloc = new Bloc(element.peviousHash,element.nonce,element.height,
                element.hash,transactionReward,transactions)
            transactionReward.bloc=cloc
            transactions.forEach(tx=>tx.bloc=bloc)
            
            bloc.previous=blockchain.lastBlock
            blockchain.lastBlock=bloc
        })
    })
}
load("../bd/blockchain_v1.json")




const save=(blockchain,path)=>{

}
const solde = (address)=>{
    //returns amount of coins (float)
}
const verifierTransaction=(transaction)=>{
    //returs true or flase
}
const verifierBloc = (bloc)=>{
    //returs true or flase
}
const ajouterBloc=(blockchain,bloc)=>{
    //returs true or flase
}
const verifierBlockchain = (blockchain)=>{
    //returs true or flase
}
module.exports={
    load,
    save,
    solde,
    verifierBloc,
    verifierBlockchain,
    verifierTransaction,
    ajouterBloc
}