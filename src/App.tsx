import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useMainContract } from './hooks/useMainContract'
import { useTonConnect } from './hooks/useTonConnect';
import { fromNano } from '@ton/core';
import WebApp from '@twa-dev/sdk';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Avatar, Button, Card, CardActions, CardContent, Container, Divider, Grid, Grid2, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import guess from './assets/guess.png';
import GuessIcon from './components/GuessIcon';
import { styled, textAlign } from '@mui/system';


function App() {

  // const {
  //   contract_address,
  //   counter_value,
  //   recet_address,
  //   owner_address, 
  //   contract_balance,
  //   sendIncrement,
  //   sendDeposit,
  //   sendWithdrawalRequest,
  // } = useMainContract();

  // const {connected} = useTonConnect();

  // const showAlert = () => {
  //   WebApp.showAlert("Hey there!");
  // }
const PrizePoolBox = styled(Box)({
  backgroundColor: 'rgba(128, 0, 128, 0.1)',
  padding: '16px',
  borderRadius: '8px',
  margin: '24px 0',
  animation: 'fadeIn 2s ease-in-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
});
  const userName = 'Hello, ' + 'Laertes' + '! 🙌';
  const todayGuessWin = '1.3M';
  const totalGuess = '5M';
  const totalTokensLeft = '2.5M';
  const totalBetToday = '1.1M';
  return (
    <div className='App' >
      <Box textAlign='start'>
        <List sx={{width: '100%', maxWidth:360, bgcolor: 'background.paper'}}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar src={guess} ></Avatar>
            </ListItemAvatar>
            <ListItemText primary= {userName} secondary="Welcome back! Ready to guess?">
              
            </ListItemText>
          </ListItem>
        </List>
      </Box>
     <Box textAlign='start'>
          <Typography variant='h6'><b>💰 Your Guess Token 💰</b></Typography>
           <Divider />
           <List>
           <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              💎
              </ListItemIcon>
              <ListItemText> Total Guess: {totalGuess} <GuessIcon></GuessIcon> 
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              🪙
              </ListItemIcon>
              <ListItemText> Today guess win: {todayGuessWin} <GuessIcon></GuessIcon>
              </ListItemText>
            </ListItemButton>
          </ListItem>
           </List>
      </Box>
      <Box textAlign='start' marginTop="2rem">
      <Typography variant='h6'><b>🎮 Guess Game Rules 🎮</b></Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               🎉
              </ListItemIcon>
              <ListItemText primary="Total supply: 500 billion GST" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              📈
              </ListItemIcon>
              <ListItemText primary="Claim 100 GST daily, bet on 📈 Big or 📉 Small, or choose 🛡 Safe Mode to get 1 GST." />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              🕓
              </ListItemIcon>
              <ListItemText primary="Bet deadline: 4 PM, users who don't bet get 1 GST by default." />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              🕗
              </ListItemIcon>
              <ListItemText primary="Draw time: 8 PM, using the TON blockchain block hash." />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              ❌
              </ListItemIcon>
              <ListItemText primary="Lose: Lose 100 GST, ✅ Win: Tokens distributed based on odds." />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              🌐
              </ListItemIcon>
              <ListItemText primary="2% fee is collected by the foundation to support the project’s development." />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box textAlign='start' marginTop="2rem">
          <Typography variant='h6'><b>🚀 Play Now 🚀</b></Typography>
          <Divider />
      </Box>
      {/* <div>
      <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>{WebApp.platform}</b>
          <b>Our Contract address</b>
          <div className='Hint'>{ contract_address}</div>
          <b>Our Contract balance</b>
         { contract_balance && <div className='Hint'>{ fromNano(contract_balance)}</div>} 
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{counter_value ?? "loading..."}</div>
        </div>

        <a href="" onClick={() => {
          showAlert();
        }}>
          Show Alert
        </a>


        {connected && (
          <a href="" onClick={()=>{
            sendIncrement()
          }}>
            Increment by 1
          </a>
        )}


        <br />

        {connected && (
          <a href="" onClick={()=>{
            sendDeposit()
          }}>
            sendDeposit
          </a>
        )}

        <br />

        {connected && (
          <a href="" onClick={()=>{
            sendWithdrawalRequest()
          }}>
            Withdrawal
          </a>
        )}
      </div> */}
    </div>
  )
}

export default App
