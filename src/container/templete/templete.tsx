import React from "react";
interface Props {
  name: string;
  age: any;
}

function Templete({ name, age }: Props) {
  console.log(name, age);
  return <div>123</div>;
}

export default Templete;
