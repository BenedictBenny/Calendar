import propTypes from 'prop-types';

function TimeInput ({timing, hour, setHour, min, setMin}) {
    const num60 = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];
    const num24 = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];

    return (
        <div>
            <div className="mx-4 my-2 font-semibold">{timing} : </div>
            <label className="ml-4 "> Hours : </label>
            <select value={hour} onChange={(e)=>{setHour(e.target.value)}} name="hour" id="hour">
                {num24.map((num)=>{
                    return <option key={num} value={num.value}>{num}</option>
                })}
            </select>
            <label className="ml-12 ">Minutes : </label>
            <select value={min} onChange={(e)=>{setMin(e.target.value)}} name="min" id="min">
                {num60.map((num)=>{
                    return <option key={num} value={num.value}>{num}</option>
                })}
            </select>
    </div>)
}

TimeInput.propTypes = {
    timing: propTypes.string,
    min: propTypes.string,
    setMin: propTypes.func,
    hour: propTypes.string,
    setHour: propTypes.func
}
export default TimeInput;