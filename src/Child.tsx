import styled from "styled-components";

const Container = styled.div<ContainerDivProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-width: 10px;
  border-style: solid;
  border-color: ${(props) => props.borderColor};
`;
interface ContainerDivProps {
  bgColor: string;
  borderColor: string;
}
interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

function Child({ bgColor, borderColor = "red" }: ContainerProps) {
  return (
    <>
      <Container bgColor={bgColor} borderColor={borderColor ?? "black"} />;
    </>
  );
}

export default Child;
