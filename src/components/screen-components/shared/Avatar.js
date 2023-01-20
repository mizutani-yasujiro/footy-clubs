import styled from "styled-components";

const Avatar = styled.img`
  width: ${props => props.small ? '30px' : '60px'};
  height: ${props => props.small ? '30px' : '60px'};
  object-fit: cover;
  margin-right: 20px;
  border-radius: 60%;
  border: ${props => props.border ? props.border : 'none'};
`;

export default Avatar;