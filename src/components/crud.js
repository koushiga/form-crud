import { useState } from "react";
import './crud.css';

function Form() {
  const arrOfObj = [
    {
      id: 1,
      name: "koushi",
      age: 24
    },
    {
      id: 2,
      name: "kannan",
      age: 25
    }
  ];

  const [list, setList] = useState(arrOfObj);
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="form">
      <AddForm arrList={setList} 
        editingId={editingId}
        setEditingId={setEditingId}
        data={list.find((item) => item.id === editingId)}
      />
      
      <div className="table">
        <table>
          <thead>
          {list.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>
                    <>
                      <button className="edit" onClick={() => editBtn(e.id)}>Edit</button>
                      <button className="delete" onClick={() => deleteBtn(e.id)}>Delete</button>
                    </>
                </td>
              </tr>
            );
          })}
           </thead>
        </table>
      </div>
    </div>
  );

  function deleteBtn(id) {
    const newList = list.filter((e) => e.id !== id);
    setList(newList);
  }

  function editBtn(id) {
   setEditingId(id);
  }

}

function AddForm({ arrList, editingId, setEditingId, data }) {
  
  function handleSubmit(v) {
    v.preventDefault();

    function random() {
      return parseInt(Math.random() * 100);
    }

    const name = v.target.elements.name.value;
    const age = v.target.elements.age.value;

    if (editingId !== null) {
       arrList((preList) =>
        preList.map((item) =>
         item.id === editingId ? {...item,name,age}: item
        )
             );
      setEditingId(null);
      console.log(editingId);
      v.target.elements.name.value =arrList.name; 
      v.target.elements.age.value =arrList.age;
    } else {
      const newList={
                id:random(),
                name,
                age
            }
            arrList((preList)=>{
                return(
                    preList.concat(newList)
                ) 
            })
            }
            v.target.elements.name.value = "";
            v.target.elements.age.value = "";
    }

  return (
    <div>
      <form className="addform" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Your Name" defaultValue={data?data.name:""}></input>
        <input type="text" name="age" placeholder="Enter your age" defaultValue={data?data.age:""}></input>
        <button type="submit">{editingId !== null ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default Form;
