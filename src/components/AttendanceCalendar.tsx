import { ContributionCalendar, createTheme } from 'react-contribution-calendar';
import { getRandomDate, generateDataInRange } from '../assets/date';


export default function AttendanceCalendar(){
  
  return(
    <div>
      <div className="light">
        <ContributionCalendar
          data={generateDataInRange("2023-01-01", "2023-12-31")}
          start="2023-01-01"
          end="2023-12-31"
          daysOfTheWeek={["", "Mon", "", "Wed", "", "Fri", ""]}
          textColor="#000"
          includeBoundary={true}
          startsOnSunday={true}
          cx={5}
          cy={5}
          cr={4}
          theme="purquoise"
          onCellClick={(_, data) => console.log(data)}
          scroll={false}
          style={{}}
        />
      </div>
    </div>
  )
}