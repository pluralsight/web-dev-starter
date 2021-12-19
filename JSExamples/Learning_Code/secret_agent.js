function isAnAgent(agentList, agent){
    newArray = agentList.slice();  //copy of agentList, keep original intact
    //newArray = agentList;  <-- does NOT work to make a copy
  
    if(newArray.indexOf(agent) > -1){ 
      //if search term is missing from array||string return -1
    return `${agent} was found in agent list`
    } else {
      //agentList[agentList.length] = agent;
      newArray.pop(); //removes 111
      newArray.push(agent); //adds new ${agent}
      newArray.splice(2,0,agent)  //splices ${agent} into index 2
      console.log('else statment' , newArray);
      return newArray
    }
  }
  
  
  var agentList = ['001', '002', '003', '004', '005', true, false, 111]
  var agent = '007'
  console.log('before function call', agentList);
  console.log('at Function Call', isAnAgent(agentList, agent));
  console.log('after function call', agentList);
  
