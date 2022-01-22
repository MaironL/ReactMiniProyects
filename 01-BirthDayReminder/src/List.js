import React from "react";

const List = (props) => {
  const birthdays = props.birthdays;

  return (
    <>
      {birthdays.map((birthday) => {
        const { id, name, age, image } = birthday;
        return (
          <section key={id} className="person">
            <img src={image} alt="person" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default List;
