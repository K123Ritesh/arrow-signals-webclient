// PricingPage.tsx

import { Flex, Text } from '@chakra-ui/react';
import Pricing from '../components/pricing';
import { useState } from 'react';


const PricingPage = () => {
  
  const [selected, updateSelected]=useState([false,true,false,false])
  return (
    <div style={{height:'100vh', backgroundColor:'black'}}  >
      <Text fontSize="4xl" fontWeight="bolder" pb={4} pt={10} pl={10}  color={'white'}>
        Select a Subscription
      </Text>
      <Flex
      justifyContent={'center'}
    scrollBehavior={'auto'}
    flexDir={'row'}
    overflow={'auto'}
    overflowX={'auto'}
      backgroundColor={'black.200'}
        gap={6}
        pt={10}>
        <Pricing selected={selected[0]} onclick={
           ()=>{
            console.log("THIS TAPPED")
            updateSelected([true,false,false,false])
           }
        } /> 
        <Pricing selected={selected[1]} onclick={
           ()=>{
            updateSelected([false,true,false,false])
           }
        }/> 
        <Pricing selected={selected[2]} onclick={
           ()=>{
            updateSelected([false,false,true,false])
           }
        }/>
        <Pricing selected={selected[3]} onclick={
           ()=>{
            updateSelected([false,false,false,true])
           }
        }/> 
    
      </Flex>
    </div >
  );
};



export default PricingPage;
