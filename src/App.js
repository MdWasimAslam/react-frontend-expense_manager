// import React from 'react';
// import { CssBaseline, Box, Container, Typography, Avatar, Grid, Paper, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
// import { styled } from '@mui/system';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import GroupIcon from '@mui/icons-material/Group';
// import RequestPageIcon from '@mui/icons-material/RequestPage';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import SecurityIcon from '@mui/icons-material/Security';

// const Root = styled('div')({
//   display: 'flex',
//   height: '100vh',
//   backgroundColor: '#121212', // Dark background
// });

// const Sidebar = styled(Box)({
//   width: '240px',
//   backgroundColor: '#1e1e1e', // Darker sidebar background
//   color: '#e0e0e0', // Light text color
//   minHeight: '100vh',
//   padding: '16px',
//   boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
// });

// const Content = styled(Container)({
//   flexGrow: 1,
//   padding: '24px',
//   color: '#e0e0e0', // Light text color
// });

// const AvatarLarge = styled(Avatar)({
//   width: 64,
//   height: 64,
//   border: '2px solid #e0e0e0',
// });

// const PaperStyled = styled(Paper)({
//   padding: '24px',
//   marginTop: '16px',
//   borderRadius: '16px',
//   backgroundColor: '#1e1e1e', // Darker paper background
//   color: '#e0e0e0', // Light text color
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//   height: '100%', // Full height of the grid item
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

// const GridItem = styled(Grid)({
//   marginTop: '16px',
// });

// const ListItemStyled = styled(ListItem)({
//   color: '#e0e0e0',
//   '&:hover': {
//     backgroundColor: '#333333', // Hover effect for dark theme
//   },
// });

// const App = () => {
//   return (
//     <Root>
//       <CssBaseline />
//       <Sidebar>
//         <Box display="flex" alignItems="center" mb={4}>
//           <AvatarLarge alt="Mary" src="/static/images/avatar/1.jpg" />
//           <Box ml={2}>
//             <Typography variant="h6">Hello, Mary</Typography>
//           </Box>
//         </Box>
//         <List>
//           <ListItemStyled button>
//             <DashboardIcon />
//             <ListItemText primary="Dashboard" />
//           </ListItemStyled>
//           <ListItemStyled button>
//             <GroupIcon />
//             <ListItemText primary="Members" />
//           </ListItemStyled>
//           <ListItemStyled button>
//             <RequestPageIcon />
//             <ListItemText primary="Requests" />
//           </ListItemStyled>
//           <ListItemStyled button>
//             <ReceiptIcon />
//             <ListItemText primary="Invoices" />
//           </ListItemStyled>
//           <ListItemStyled button>
//             <CreditCardIcon />
//             <ListItemText primary="Transactions" />
//           </ListItemStyled>
//           <ListItemStyled button>
//             <SecurityIcon />
//             <ListItemText primary="Reports" />
//           </ListItemStyled>
//         </List>
//       </Sidebar>
//       <Content>
//         <Typography variant="h4" gutterBottom>
//           Our Services
//         </Typography>
//         <Grid container spacing={2}>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <DashboardIcon color="primary" style={{ fontSize: 50 }} />
//               <Box mt={2} textAlign="center">
//                 <Typography variant="h6">Digital Banking</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Manage all your banking needs with our digital solutions.
//                 </Typography>
//               </Box>
//             </PaperStyled>
//           </GridItem>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <GroupIcon color="primary" style={{ fontSize: 50 }} />
//               <Box mt={2} textAlign="center">
//                 <Typography variant="h6">Expense Analysis</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Analyze your spending patterns and save more effectively.
//                 </Typography>
//               </Box>
//             </PaperStyled>
//           </GridItem>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <CreditCardIcon color="primary" style={{ fontSize: 50 }} />
//               <Box mt={2} textAlign="center">
//                 <Typography variant="h6">Budget Planning</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Plan your budget with our intuitive tools and resources.
//                 </Typography>
//               </Box>
//             </PaperStyled>
//           </GridItem>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <RequestPageIcon color="primary" style={{ fontSize: 50 }} />
//               <Box mt={2} textAlign="center">
//                 <Typography variant="h6">Scheduled Payments</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Schedule and manage your recurring payments seamlessly.
//                 </Typography>
//               </Box>
//             </PaperStyled>
//           </GridItem>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <SecurityIcon color="primary" style={{ fontSize: 50 }} />
//               <Box mt={2} textAlign="center">
//                 <Typography variant="h6">Automatic Payroll</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Automate payroll processes for your business with ease.
//                 </Typography>
//               </Box>
//             </PaperStyled>
//           </GridItem>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <SecurityIcon color="primary" style={{ fontSize: 50 }} />
//               <Box mt={2} textAlign="center">
//                 <Typography variant="h6">Data Security</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Ensure the highest level of security for your data and transactions.
//                 </Typography>
//               </Box>
//             </PaperStyled>
//           </GridItem>
//         </Grid>
//         <Typography variant="h4" gutterBottom>
//           Today's Insights
//         </Typography>
//         <Grid container spacing={2}>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <Typography variant="h6">Requests</Typography>
//               <List>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar />
//                   </ListItemAvatar>
//                   <ListItemText primary="Jacqueline is requesting payment for AWS (Amazon Web Services)" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar />
//                   </ListItemAvatar>
//                   <ListItemText primary="Noah is requesting more space on iCloud Storage" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar />
//                   </ListItemAvatar>
//                   <ListItemText primary="Samantha is requesting payment for AppStore by Apple" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar />
//                   </ListItemAvatar>
//                   <ListItemText primary="James is requesting payment for AppStore by Apple" />
//                 </ListItem>
//               </List>
//             </PaperStyled>
//           </GridItem>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <Typography variant="h6">Last Transactions</Typography>
//               <List>
//                 <ListItem>
//                   <ListItemText primary="$199.00 - automatic payroll" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="$21.50 - subscription" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="$89.99 - recurrent" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="$21.50 - subscription" />
//                 </ListItem>
//               </List>
//             </PaperStyled>
//           </GridItem>
//           <GridItem item xs={12} sm={6} md={4}>
//             <PaperStyled>
//               <Typography variant="h6">Subscriptions</Typography>
//               <List>
//                 <ListItem>
//                   <ListItemText primary="iCloud - Apple, Inc." />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Amazon AWS - Amazon, Inc." />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Stripe Payment - Stripe, Inc." />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="Atlassian - Atlassian Corp, Plc." />
//                 </ListItem>
//               </List>
//             </PaperStyled>
//           </GridItem>
//         </Grid>
//       </Content>
//     </Root>
//   );
// };  

// export default App;
import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App