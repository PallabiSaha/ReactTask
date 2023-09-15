import { useState } from 'react';
import './App.css';
import { Card, Grid } from '@mui/material';
function App() {


    const generateRandomColor = () => {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      return color;
    };


  const [selectedColor, setSelectedColor] = useState(["white","white", "white", "white","white", "white", "white","white", "white", "white","white", "white"])

  const cardClick = (index) =>{

      setSelectedColor(selectedColor=>({
        ...selectedColor,
        [index]: generateRandomColor()
     }))

  }

  return (
    
    <div style={{backgroundColor:'gray',padding:"64px"}}>
      <Grid lg={12} container spacing={2}
      direction="row" alignItems="center" justifyContent="center"
      style={{backgroundColor:"#dddddd", border:"5px solid white"}}>
        {Array.from(Array(12)).map((_, index) => (
        
          <Grid display="flex" justifyContent="center" lg={3}  marginBottom={"16px"} marginTop={"16px"}>
            <Card style={{height:"200px", width:"200px", backgroundColor: selectedColor[index]}} onClick={()=> cardClick(index) }> </Card>
          </Grid>

        ))}

      </Grid>
    </div>
    
  );
}

export default App;
