import ChartBox from './ChartBox/ChartBox';
import chartpic from '../assets/chartpic.png'
import Chartart from './Chartart/Chartart.jsx';

export const ChartList = () => {
    return(
        <>
            <ChartBox bigimage={chartpic} name='Top 100 Nigeria' time='3hrs' firsttitle='Top 100' country='Nigeria' amount={100} />
            <ChartBox bigimage={chartpic} name='Top 100 Uganda' time='2hrs'  firsttitle='Top 100' country='Uganda' amount={100} />
            <ChartBox bigimage={chartpic} name='Top 100 Ghana' time='3hrs' firsttitle='Top 100' country='Ghana' amount={100} />
            <ChartBox bigimage={chartpic} name='Top 100 Africa' time='4hrs' firsttitle='Top 100' country='Africa' amount={100} />
            <ChartBox bigimage={chartpic} name='Top 100 Usa' time='3hrs' firsttitle='Top 100' country='Usa' amount={100} />
            <ChartBox bigimage={chartpic} name='Top 50 Russia' time='2hrs' firsttitle='Top 50' country='Russia' amount={50} />
            <ChartBox bigimage={chartpic} name='Top 100 Warri' time='5hrs' firsttitle='Top 100' country='Warri' amount={100} />
            <ChartBox bigimage={chartpic} name='Top 100 AfroBeats' time='3hrs' firsttitle='Top 100' country='AfroBeats' amount={100} />
        </>
    );
} 