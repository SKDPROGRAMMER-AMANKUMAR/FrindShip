import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button , Stack, Container,Text} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import UserGrid from './components/UserGrid'

export const BASE_URL = "http://127.0.0.1:5000/api"

function App() {
  const [users, setUsers] = useState([])
  // we can use Context API , RTK  or Zustand 
  return (
    <>
    <Stack>
      <Navbar setUsers={setUsers}/>

    <Container maxW={"1200px"} my={4}>
        <Text
        fontSize={{base:"3xl",md:"50"}}
        fontWeight={'bold'}
        letterSpacing={'2px'}
        textTransform={'uppercase'}
        textAlign={'center'}
        mb={8}
        >
            <Text
            as={'span'}
            >
              My Friends
            </Text>
            🚀🥷
        </Text>
    <UserGrid users={users} setUsers={setUsers} />
    </Container>
    </Stack>

     {/* <h1>My Best Friends Are BMT</h1>
     <Button>Hello</Button> */}
    </>
  )
}

export default App
