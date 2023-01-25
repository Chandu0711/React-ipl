import './styles.css'
function TableHead(){
    let player=[

{
    name:"dhoni",
    team:"csk",
    runs:"6700"   
},
{
    name:"kohli",
    team:"rcb",
    runs:"6500"   
},
{
    name:"hardik",
    team:"gut",
    runs:"6000"   
},
{
    name:"willsmith",
    team:"srh",
    runs:"5400"   
},
{
    name:"raina",
    team:"pk",
    runs:"5500"   
},
 ];
 player.sort((a,b)=>{return b.runs-a.runs});
    return(
        <div>
    <div className="TableHead">
       <table>
        <tr>
            <th>player name</th>
            <th>player team</th>
            <th>player runs</th>
        </tr>
        <tr className="column1">
            <td>{player[0].name}</td>
            <td>{player[0].team}</td>
            <td>{player[0].runs}</td>
        </tr>
        <tr className="column2">
            <td>{player[1].name}</td>
            <td>{player[1].team}</td>
            <td>{player[1].runs}</td>
        </tr>
        <tr className="column3">
            <td>{player[2].name}</td>
            <td>{player[2].team}</td>
            <td>{player[2].runs}</td>
        </tr>
        <tr>
            <td>{player[3].name}</td>
            <td>{player[3].team}</td>
            <td>{player[3].runs}</td>
        </tr>
        <tr>
            <td>{player[4].name}</td>
            <td>{player[4].team}</td>
            <td>{player[4].runs}</td>
        </tr>
       </table>
    </div>
    </div>
    );
}
export default TableHead