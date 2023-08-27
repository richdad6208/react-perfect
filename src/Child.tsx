import styled from "styled-components";

const Container = styled.div<ChildProps>`
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgColor};
`;

interface ChildProps {
  bgColor: string;
}
function Child({ bgColor }: ChildProps) {
  return <Container bgColor={bgColor} />;
}

interface person {
  name: string;
  age: number;
}

console.log(player.name);

export default Child;
