import propTypes from 'prop-types';

function EventList ({editHandler, deleteHandler, dayEvents}) {
    const eventWidth = (date) => {
        let startTime = startTimeFinder(date);
        let endTimeVar = date.endTime.split(' ');
        let endTime = endTimeVar[4].split(':');
        let timeDiff = [];
        timeDiff[0] = endTime[0]-startTime[0];
        timeDiff[1] = endTime[1]-startTime[1];
        if(timeDiff[1] < 0) {
          timeDiff[0]--;
          timeDiff[1]= Math.abs(timeDiff[1]);
        }
        return (timeDiff[0] + (timeDiff[1])/60)*4.16;
      }
    const startTimeFinder = (date) => {
    let timeVar = date.startTime.split(' ');
    return timeVar[4].split(':');
    }
    
    const eventPosition = (day) => {
    let startTime = startTimeFinder(day);
    return (0.7 + ((+startTime[0] + +(startTime[1]/60)))*1.13);
    }

    return(
        <div className='w-5/6 h-full bg-slate-200'>
            {dayEvents.map((day, index)=>{
                let eventWid = eventWidth(day);
                const eventStyle= `bg-slate-100 w-5/6 h-[${eventWid}%] absolute rounded-md flex flex-row justify-between hover:translate-x-4 hover:scale-105 hover:border-indigo-400 hover:z-10 hover:cursor-pointer border-2 border-indigo-200`;
                let eventPos = eventPosition(day);
            return <div className={eventStyle} style={{marginTop:`${eventPos}em`}} key={day.id}>{day.title}
                <div>
                <button className='shadow-xl bg-slate-400 rounded-lg w-32 h-10 origin-center hover:rotate-12 mx-px ml-1.5' style={{right:"2em"}} onClick={()=>{editHandler(day);}}> Edit</button>
                <button className='shadow-xl bg-slate-400 rounded-lg w-32 h-10 origin-center hover:rotate-12 mx-px' onClick={()=>{deleteHandler(day.id)}}> Delete</button>
                </div>
                </div>})}
            </div>
    )
}

EventList.propTypes = {
    editHandler: propTypes.func,
    deleteHandler: propTypes.func,
    dayEvents: propTypes.array
};
export default EventList;