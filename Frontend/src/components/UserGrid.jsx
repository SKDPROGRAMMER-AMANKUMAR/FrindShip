import React, { useEffect,useState } from 'react'
import { Grid } from '@chakra-ui/react'
import UsersCard from './UsersCard'
import { Flex,Spinner,Text, } from '@chakra-ui/react'

const UserGrid = ({users,setUsers}) => {

  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = async() => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/friends")
        const data = await res.json()

        if(!res.ok) {
          throw new Error(data.error)
        }
        setUsers(data)
      } catch (error) {
         console.log(error)
      } finally {
        setIsLoading(false);
      }
    }
    getUsers()
  }, [setUsers])
  


  return (
   <>
    <Grid
    templateColumns={{
        base:"1fr",
        md:"repeat(2,1fr)",
        lg:"repeat(3, 1fr)"
    }}
    gap={6}
    >
      {users.map((users) => (
        <UsersCard key={users.id} users={users} setusers={setUsers} />
      ))}
    </Grid>
    
    {isLoading && (
      <Flex justifyContent={"center"} >
        <Spinner size={"xl"}/>
      </Flex>
    )}

     {!isLoading && users.length === 0 && (
      <Flex justifyContent={"center"}>
        <Text fontSize={"xl"}>
          <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
            Poor You! 🥺
          </Text>
          No friends found.
        </Text>
      </Flex>
     )}

   </>
  )
}

export default UserGrid
