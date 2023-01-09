import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteAll, edit, remove } from "../store/toduSlice";

function Todu() {
  const [inptValue, setInptValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [Editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todu);

  const existingIDs = ["AA1111", "XY1234"];
  const getRandomLetters = (length = 1) =>
    Array(length)
      .fill()
      .map((e) => String.fromCharCode(Math.floor(Math.random() * 26) + 65))
      .join("");
  const getRandomDigits = (length = 1) =>
    Array(length)
      .fill()
      .map((e) => Math.floor(Math.random() * 10))
      .join("");
  const generateUniqueID = () => {
    let id = getRandomLetters(2) + getRandomDigits(4);
    while (existingIDs.includes(id))
      id = getRandomLetters(2) + getRandomDigits(4);
    return id;
  };
  const newID = generateUniqueID();

  const handleAdd = (id) => {
    console.log(id, "id");
    dispatch(add({ value: inptValue, id: id }));
    setInptValue("");
  };
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  const handleEdit = (indx) => {
    setIsEdit(true);
    setEditable(indx);
    let val = selector.filter((val, idx) => idx === indx);
    setInptValue(val.length > 0 && val[0].value);
    // dispatch(edit(indx));
  };
  const handleSubmit = (val, id) => {
    dispatch(edit({ value: val, id: id }));
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={inptValue}
          onChange={(e) => setInptValue(e.target.value)}
        />
        {isEdit ? (
          <>
            <button onClick={() => handleSubmit(inptValue, Editable)}>
              Submit
            </button>
            <button
              onClick={() => {
                setIsEdit(false);
                setInptValue("");
                setEditable(false);
              }}
            >
              x
            </button>
          </>
        ) : (
          <>
            <button onClick={() => handleAdd(newID)}>Add</button>
            <button onClick={handleDeleteAll}>Delete All</button>
          </>
        )}
        <div>
          {selector.map((items, indx) => {
            return (
              <>
                <span>{indx}</span> <span>{items.value}</span>{" "}
                <button onClick={() => handleRemove(items)}>Remove</button>{" "}
                <button onClick={() => handleEdit(indx)}>Edit</button> <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todu;
