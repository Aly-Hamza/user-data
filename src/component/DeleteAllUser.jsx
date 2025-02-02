import React from 'react'
import styled from 'styled-components'
import { clearAllUsers } from '../store/slices/userslice'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch=useDispatch();
const deleteUsers=()=>{
  dispatch(  clearAllUsers());

} 
  return <Wrapper>
    <div>
     <button className='btn clear-btn'onClick={deleteUsers}>Clear users</button>

    </div>
    </Wrapper>
}



const Wrapper=styled.section`
.clear-btn{
margin-top:2rem
}
`
export default DeleteAllUser;