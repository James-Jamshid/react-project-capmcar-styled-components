import React, { useState } from "react";
import data from "../../Data/DataPagination";
import { Btn, Child, Container, Family, Img, Wrapper } from "./Style";

const Pagination = () => {
  const [noOfElement, setnoOfElement] = useState(4);
  const LoadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  const slice = data.cardData.slice(0, noOfElement);
  return (
    <Container>
      <Wrapper>
        {slice.map((item, index) => {
          return (
            <Family key={index}>
              <Child>
                <Img src={item.img} alt="" />
                <div>
                  <h5>{item.title}</h5>
                  {/* <p className="card-text">item.desc</p> */}
                </div>
              </Child>
            </Family>
          );
        })}
      </Wrapper>
      <Btn>
        <button onClick={() => LoadMore()}>See all</button>
      </Btn>
    </Container>
  );
};

export default Pagination;
