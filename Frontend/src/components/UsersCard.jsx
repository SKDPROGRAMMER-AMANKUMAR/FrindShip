import React from 'react'
import {Card,CardHeader, Flex, Heading,Text,Box,Avatar,IconButton,CardBody, useToast} from "@chakra-ui/react"
import { BiTrash } from "react-icons/bi";
import EditModal from './EditModal';
import { BASE_URL } from '../App';

const UsersCard = ({ users,setusers }) => {
  const toast = useToast()
  const handleDelteUser = async () => {
    try {
      const res = await fetch(BASE_URL + "/friends/" + users.id , {
        method:"DELETE"
      })
      const data = await res.json();
      if(!res.ok){
        throw new Error(data.error)
      }
      setusers((prevUsers) => prevUsers.filter((u) => u.id !== users.id))
      toast({
        title:`${users.name} deleted Successfully`,
        status:"success",
        duration:2000,
        isClosable:true
      })
    } catch (error) {
      toast({
        title:"An error occured",
        description:error.message,
        status:"error",
        duration:4000,
        isClosable:true
      })
    }
  }

  return (<Card> 
       <CardHeader>
        <Flex>
            <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                <Avatar src={users.imgUrl}/>

                <Box>
                    <Heading size={'sm'}>
                      {users.name}
                    </Heading>
                    <Text>{users.role}</Text>
                </Box>
         </Flex>
            <Flex>
              <EditModal users={users} setusers={setusers}/>
              <IconButton
              variant='ghost'
              colorScheme='red'
              size={"sm"}
              aria-label='See menu'
              icon={<BiTrash size={20}/>}
              onClick={handleDelteUser}
              />
            </Flex>
        </Flex>
       </CardHeader>

       <CardBody>
         <Text>
          {users.description}
         </Text>
       </CardBody>
    </Card>
  )
}

export default UsersCard
