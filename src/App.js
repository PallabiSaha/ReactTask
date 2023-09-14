import { useState } from 'react';
import './App.css';
import { Card, Grid } from '@mui/material';
function App() {

  const colorList = [
    "#40826d","#922724","#9f1d35","#da1d81","#ffa089","#9f00ff","#004242","#00ffff","#645452",
    "#f5deb3","#ff43a4","#fc6c85","#a2add0", "#722f37","#c9a0dc","#738678","#0f4d92","#ffff00",
    "#ffae42","#9acd32","#0014a8","#2c1608"];

  const [selectedColor, setSelectedColor] = useState(["white","white", "white", "white","white", "white", "white","white", "white", "white","white", "white"])

  const cardClick = (index) =>{

      let randomColorIndex = Math.floor(Math.random() * colorList.length );

      setSelectedColor(selectedColor=>({
        ...selectedColor,
        [index]: colorList[randomColorIndex]
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
