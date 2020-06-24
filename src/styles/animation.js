import { keyframes } from 'styled-components'

export const EntryTittle = keyframes`
  from {
    transform: translateY(-25px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
    transform: scale(1);
  }
`
export const EntryTittle2 = keyframes`
  from {
    transform: translateY(-400px);
    opacity: 0;
    
  }
  to{
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
`
export const EntryTittle3 = keyframes`
    from {
    transform: translateY(-800px);
    opacity: 0;
    
  }
  to{
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
`
export const EntryText = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
`
export const EntryText2 = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
`