import React from 'react'
// import { CBox } from '@chakra-ui/vue';
import {
    // CBox,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    // PopoverAnchor,
    Button,
    styled,
    
  } from '@chakra-ui/react'
//   import styled from 'styled-components'

const navbar = () => {
    
  return (
    <nav className='nav'>
           
            <Button>Logo</Button>
            
       
        <Popover>
        <PopoverTrigger>
            <Button>Inspiration</Button>
            
        </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                {/* <PopoverHeader><h1>Explore Degsine Work</h1></PopoverHeader> */}
                <PopoverBody><h1>Explore Degsine Work</h1></PopoverBody>
                <PopoverBody><p>Trending Design to Inspire You</p></PopoverBody>
                <PopoverHeader></PopoverHeader>
                <PopoverBody><h1>New And Note Worthy</h1></PopoverBody>
                <PopoverBody><p>Up-and-comming-Designer</p></PopoverBody>
            </PopoverContent>
        </Popover>


        <Popover>
        <PopoverTrigger>
            <Button>Find Work</Button>
            
        </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody><h1>Job Board</h1></PopoverBody>
                <PopoverBody><p>FInd Your Dreem Job</p></PopoverBody>
                <PopoverHeader></PopoverHeader>
                <PopoverBody><h1>Freelance Work</h1></PopoverBody>
                <PopoverBody><p>An Exclusive List for Contract work</p></PopoverBody>
            </PopoverContent>
        </Popover>

        <Popover>
            <PopoverTrigger>
                <Button>Learn Design</Button>
                
            </PopoverTrigger>
        
        </Popover>


        <Popover>
            <PopoverTrigger>
                <Button>Hire Designer</Button>
                
            </PopoverTrigger>
       
        </Popover>
        <div className='right'>
        
            {/* <Button>Signin</Button> */}
            <a>Signin</a>
            
        

            
                <button className="signup">Signup</button>
            
            
            
        
        </div>
    </nav>
    
  )
}

export default navbar