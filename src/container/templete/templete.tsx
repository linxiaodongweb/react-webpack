import React from "react";
interface Props {
  name: string;
  age: any;
}
Templete.defaultProps = {
  name: 123222
};
function Templete({ name, age }: Props) {
  console.log(name, age);
  return <div>{name}</div>;
}

export default Templete;
