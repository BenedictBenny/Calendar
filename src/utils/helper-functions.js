export const findNextDay = (day) => {

    let dayVar = day.split(" ");
    
    if( dayVar[1] === '31'){
      let flag=0;
      switch (dayVar[0]){
        case 'Jan':
          dayVar[0] = 'Feb';
          dayVar[1] = '01';
          break;
        case 'Mar':
          dayVar[0] = 'Apr';
          dayVar[1] = '01';
          break;
        case 'May':
          dayVar[0] = 'Jun';
          dayVar[1] = '01';
          break;
        case 'Jul':
          dayVar[0] = 'Aug';
          dayVar[1] = '01';
          break; 
        case 'Aug':
          dayVar[0] = 'Sep';
          dayVar[1] = '01';
          break;
        case 'Oct':   
          dayVar[0] = 'Nov';
          dayVar[1] = '01';
            break;
        case 'Dec':   
        dayVar[0] = 'Jan';
        dayVar[1] = '01';
        dayVar[2] = +dayVar[2] + 1;
          break;
        default:
          flag=1;
          break;
      }
      if(flag===0)return dayVar.join(" ");
    }

    if( dayVar[1] === '30'){
      let flag=0;
      switch (dayVar[0]){
        case 'Feb':
          dayVar[0] = 'Mar';
          dayVar[1] = '01';
          break;
        case 'Jun':
          dayVar[0] = 'Jul';
          dayVar[1] = '01';
          break;
        case 'Sep':
          dayVar[0] = 'Oct';
          dayVar[1] = '01';
          break;
        case 'Nov':
          dayVar[0] = 'Dec';
          dayVar[1] = '01';
          break;   
        default:
          flag=1;
          break;
      }
      if(flag===0)return dayVar.join(" ");
    }

    if( dayVar[1] === '28' && dayVar[0] === 'Feb'){
      dayVar[0] = 'Mar';
      dayVar[1] = '01';
      return dayVar.join(" ");
    }

    if(dayVar[1]<10){
      dayVar[1] = `0${+dayVar[1] + 1}`;
      return dayVar.join(" ");
    }

    dayVar[1] = +dayVar[1] + 1;
    return dayVar.join(" ");
}

export const findPrevDay = (day) => {
    let dayVar = day.split(" ");
    if( dayVar[1] === '01'){
      switch (dayVar[0]){
        case 'Jan':
          dayVar[0] = 'Dec';
          dayVar[1] = 31;
          dayVar[2] = +dayVar[2] -1;
          break;
        case 'Feb':
          dayVar[0] = 'Jan';
          dayVar[1] = 31;
          break;
        case 'Mar':
          dayVar[0] = 'Feb';
          dayVar[1] = 31;
          break;
        case 'Apr':
          dayVar[0] = 'Mar';
          dayVar[1] = 31;
        break; 
        case 'May':
          dayVar[0] = 'Apr';
          dayVar[1] = 31;
        break;
        case 'Jun':   
          dayVar[0] = 'May';
          dayVar[1] = 31;
          break;
        case 'Jul':   
          dayVar[0] = 'Jun';
          dayVar[1] = 31;
          break;
        case 'Aug':   
          dayVar[0] = 'Jul';
          dayVar[1] = 31;
          break;
        case 'Sep':   
          dayVar[0] = 'Aug';
          dayVar[1] = 31;
          break;
        case 'Oct':   
          dayVar[0] = 'Sep';
          dayVar[1] = 31;
          break;
        case 'Nov':   
          dayVar[0] = 'Oct';
          dayVar[1] = 31;
          break;
        case 'Dec':   
          dayVar[0] = 'Nov';
          dayVar[1] = 31;
          break;
        default:
          break;
      }
    }
    else if(dayVar[1] <=10){
      dayVar[1] = `0${+dayVar[1] - 1}`;
    }
    else{
      dayVar[1] = +dayVar[1] - 1;
    }
    return dayVar.join(" ");
  }