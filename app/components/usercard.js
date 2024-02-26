// "use client"
import { Card, Image, Text, Badge, Button, Group, Flex, HoverCard, HoverCardTarget, HoverCardDropdown, rem } from '@mantine/core';
import { IconAt, IconPhoneCall, IconWorld, IconUserPlus, IconUserMinus, IconStar, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

export default function UserCard({data, deleteItem}){

        const [isFollow, setIsFollow] = useState(false)


    return  <Card  shadow="sm" padding="md" radius="md" withBorder style={{width:'451px',}} >
    <Flex align='center' justify='center' direction={'column'} >

       
         <HoverCard shadow="md" position='top' withArrow >
        <HoverCardTarget>
        <Image
        style={{height:'120px', width:'120px', borderRadius:'50%' }}
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${data.name}`}
          alt="Norway"
        />
        </HoverCardTarget>
        <HoverCardDropdown  bg={'black'}  >
          <Text size="xs" color="white" >
          {data.name}
          </Text>
        </HoverCardDropdown>
      </HoverCard>
    
      <Text size="xl" fw={500}  mt="md" >
      <Flex align={'center'} gap={'4px'} > {data.name} { isFollow && <IconStar style={{ width: rem(16) }} />} </Flex>
      </Text>
      </Flex>
      <Text size="md" c="dimmed"  >
       <Flex align={'center'} gap={'4px'} > <IconAt style={{ width: rem(16) }} /> {data.email} </Flex>
      </Text>
      <Text size="md" c="dimmed">
      <Flex align={'center'} gap={'4px'} ><IconPhoneCall style={{ width: rem(16) }} /> {data.phone} </Flex>
      </Text>
      <Text size="md" c="dimmed">
      <Flex align={'center'} gap={'4px'} > <IconWorld style={{ width: rem(16) }} />{data.website}</Flex>
      </Text>
 
      <Group align='center' justify='center'  gap="xs" mt="md" mb="xs">
      <Button onClick={()=>setIsFollow(!isFollow)} leftSection={ isFollow ? <IconUserMinus style={{ width: rem(16) }} /> : <IconUserPlus style={{ width: rem(16) }} />} style={{width:'200px'}} variant={ !isFollow ? "filled" :"default" } >
        {!isFollow ? 'Follow': 'Unfollow' }
      </Button>
      <Button onClick={()=>deleteItem(data.id)} leftSection={ <IconTrash style={{ width: rem(16) }} />} style={{width:'200px'}}  variant='outline' >
        Delete
      </Button>
      </Group>
      </Card>
}