function  electionResult( votes ) {
    if(!Array.isArray(votes)){
        return 'Invalid';
    }
    let mangoVote = 0;
    let bananaVote = 0;
    for(const vote of votes){
        if(vote === "mango"){
              mangoVote++;
        }
        else if(vote === "banana"){
             bananaVote++;
        }
    }
    if(mangoVote>bananaVote){
        return 'Mango';
    }
    else if(bananaVote>mangoVote){
        return 'Banana';
    }
    else{
        return 'Draw'
    }
}