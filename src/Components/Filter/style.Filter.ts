import styled from "styled-components";

export const Container = styled.div`
  line-height: 1.6;

  h3 {
    color: #323d45;
    font-size: 20px;
    margin: 0;
    font-weight: 900;
    line-height: 32px;
  }
  p {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
    color: #323D45;

  }
  @media (max-width: 425px){
    width: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h3{
      width: fit-content;
    }
    p{
      width: fit-content;
    }
    }
`;

export const OverFlowContainer = styled.div<{isOpen:boolean}>`
  overflow: hidden;
  visibility: ${(props)=>props.isOpen? "visible" : "hidden"}  ;
  position: absolute;
`;

export const FilterZone = styled.div`
  display: flex;
  height: 34px;
  justify-content: space-between;
  margin-top: 32px;
  @media (max-width: 425px){
    height: auto;
    flex-direction: column;
    width: 320px;
    }
`;

export const SelectContainer = styled.div`
  margin-right: 10px;
`;

export const SelectDefault = styled.span<{ isOpen: boolean }>`
  display: flex;
  width: 120px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #939fa5;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isOpen ? "#1565C0" : "#fff")};
  color: ${(props) => (props.isOpen ? "#fff" : "#000")};
`;

export const ArrowIcon = styled.span`
  color: #939fa5;
`;

export const SelectWarpper = styled.div`
  &:hover{
    z-index: 200;
  }
`

export const SelectZone = styled.div`
  display: flex;
  @media (max-width: 425px){
    flex-direction: column;
    width: fit-content;
    }
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`

export const SelectBox = styled.ul<{ isOpen: boolean }>`
  transform: translateY(${(props) =>
    props.isOpen ? "0px" : "-200px"});
  transition: transform 0.25s ease-in;
  background-color: #FFFFFF;
  padding: 10px 6px;
  list-style: none;
  width: 120px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #939fa5;
  margin-right: 8px;
  visibility: ${(props)=>props.isOpen? "visible" : "hidden"}  ;

  & #select {
    width: 18px;
    height: 18px;
    border: 2px solid #939fa5;
    border-radius: 2px;
  }
  & li {
    line-height: 1.5;
    font-weight: 500;
  }

  & label {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;

export const ResetBtn = styled.div`
  width: 16px;
  height: 16px;
  background-size: cover;
  background-image: url("Images/refresh.png");
  margin-right: 12px;
  
`;

export const ResetContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 14px;
`;

export const ResetMessage = styled.span`
  font-size: 12px;
  color: #2196f3;
  @media (max-width: 425px){
    display: none;
    }
`;

export const Form = styled.form`
cursor: pointer;
`

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  top: 10px;
  @media (max-width: 425px){
    padding-top: 20px;
    padding-bottom: 32px;
    align-items: center;
    box-sizing: border-box;
    }
`;

export const ToggleBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 14px;
  border-radius: 15px;
  background: #c2c2c2;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    position: relative;
    top: -7px;
    left: -7px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 3px;
    background: #f5f5f5;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  @media (max-width: 425px){
    transform: translate(4px,25px);
    }
`;

export const ToggleBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 34px;
  height: 14px;
  &:checked + ${ToggleBoxLabel} {
    background: #bbdefb;
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: -2px;
      background: #2196f3;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const ToggleMessage = styled.span`
  margin-left: 16px;
  color: #323d45;
  font-weight: 800;
  transform: translateY(-5px);
  @media (max-width: 425px){
    transform: none;
    }
`;
