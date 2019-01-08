import React from 'react';

const Dump = (props) => {
  return (
    <>
      <h3>This is dump component</h3>
      <p>{props}</p>
      <p>{props.children}</p>
    </>
  )
}

export default Dump;
