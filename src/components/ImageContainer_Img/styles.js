import styled from 'styled-components'

export const Container_Img = styled.div`
	position: relative;
	height: 60px;
	width: 60px;
	margin: 0px 5px;
	margin-bottom: 5px;
	border-radius: 10px;
	border: 4px solid #ffffff;
	cursor: pointer;
  &:hover {
      border-color:  #BC1212;
      transition: 1s ease all;

      & label {
        background-color: #BC1212;
        transition: .2s ease all;
      }
    }
`;
export const Img = styled.img`
    display: flex;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		background-size: cover;
`
export const Label = styled.label`
			position: absolute;
			text-align: center;
			right: -4px;
			top: -4px;
			cursor: pointer;
			font-weight: 600;
			border-radius: 4px;
			width: 13px;
			height: 15px;
			font-size: 12px;
			background-color: #ffffff;
      &:hover{
        border: 3px solid #BC1212;
        transition: .1s ease all;
      }
`
