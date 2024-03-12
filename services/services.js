const fs = require("fs")
const BlockChain = require("../models/blockchain")
const load = (path)=>{
    //returns blockchain
    fs.readFile(path,(err,data)=>{
        if(err)
            return console.log(err,"erreur dans la lecture du fichier")
        data = JSON.parse(data).blockchain
       
        const blockchain = new BlockChain(data.name,data.blockReward,data.difficuly,
            data.cyrptoFunction,data.proofStyle)
        console.log(blockchain)   
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