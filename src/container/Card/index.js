import Card from '@mui/material/Card';
const MyCard=(props)=>{
    return(
        <div>
      <Card>
          {props.children}
      </Card>
        </div>
    )
}
export default MyCard;