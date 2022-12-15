import propTypes from 'prop-types';

function TopSection ({prevDayHandler, nextDayHandler, addEventHandler, dateDetails }) {
    const left='<';
    const right='>';

    return (
        <div className='h-1/6 flex flex-row px-28 pt-16 pb-24 w-full ' style={{backgroundImage:"linear-gradient(#F1F5F9,#F1F5F9,#F1F5F9, #E5E8F0)"}}>
        <div className='w-1/3 h-10'>
          <button className="w-24 bg-gray-500 m-1 rounded-lg origin-center hover:rotate-12  hover:scale-105" onClick={prevDayHandler}>{left}</button>
          <button className="w-24 bg-gray-500 rounded-lg origin-center hover:rotate-12  hover:scale-105" onClick={nextDayHandler}>{right}</button>
        </div>
        <div className='ml-24 w-64 font-bold h-10 rounded-lg text-center p-1  hover:scale-105 '>{dateDetails.date}</div>
        <button className='ml-64 w-64 bg-gray-500 h-10 rounded-lg origin-center hover:rotate-6 text-center p-1  hover:scale-105' onClick={addEventHandler}>Add</button>
      </div>
    )
}

TopSection.propTypes = {
  prevDayHandler: propTypes.func,
  nextDayHandler: propTypes.func,
  addEventHandler: propTypes.func,
  dateDetails: propTypes.object
}
export default TopSection;