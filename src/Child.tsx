import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

function Child({ bgColor }: ContainerProps) {
  return <Container bgColor={bgColor} />;
}
interface playerProps {
  name: string;
  age: string;
}
const person = (player: playerProps) =>
  console.log(`hellow ${player.name}! you are ${player.age}years old`);

person({ name: "jeasung", age: "23" });
export default Child;
