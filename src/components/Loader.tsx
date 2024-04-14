import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
const Loader = ()=> {
  return (  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
  <CircularProgress sx={{height:"100%" ,width:"100%"}} />
</Box>
)
  
}

export default Loader;