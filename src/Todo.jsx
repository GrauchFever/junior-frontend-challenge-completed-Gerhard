import { useState } from "react";

export const Todo = () => {
  const [a, setA] = useState([]);
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("to-do");
  const [e, setE] = useState(new Date());
  const [f, setF] = useState("");
  const [g, setG] = useState("low");
  const [currentId, setCurrentId] = useState(null); // State to track which item is being updated

  const h = (i) => {
    i.preventDefault();
    const newItem = { b, c, d, e, f, g };
    if (currentId !== null) {
      const updatedList = a.map((item, index) =>
        index === currentId ? newItem : item
      );
      setA(updatedList);
      setCurrentId(null); // Reset currentId after updating
    } else {
      const j = [...a, newItem];
      setA(j);
    }
    setB("");
    setC("");
    setE(new Date());
    setF("");
    setG("low");
  };

  const handleDelete = (index) => {
    const newList = a.filter((_, i) => i !== index);
    setA(newList);
  };

  const handleUpdate = (index) => {
    const itemToUpdate = a[index];
    setB(itemToUpdate.b);
    setC(itemToUpdate.c);
    setD(itemToUpdate.d);
    setE(itemToUpdate.e);
    setF(itemToUpdate.f);
    setG(itemToUpdate.g);
    setCurrentId(index); // Set the currentId to the index of the item being updated
  };

  return (
    <div>
      <form onSubmit={h}>
        <p>Title</p>
        <input value={b} onChange={(i) => setB(i.target.value)} />
        <p>Description</p>
        <input value={c} onChange={(i) => setC(i.target.value)} />
        <p>Status</p>
        <select value={d} onChange={(i) => setD(i.target.value)}>
          <option value="to-do">To-Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <p>Due Date</p>
        <input value={f} onChange={(i) => setF(i.target.value)} type="date" />
        <p>Priority</p>
        <select value={g} onChange={(i) => setG(i.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">{currentId !== null ? "Update" : "Add"}</button>
      </form>
      <div>
        <h2>To-Do {a.filter((k) => k.d === "to-do").length}</h2>
        {a
          .filter((k) => k.d === "to-do")
          .sort((k, l) => (k.g > l.g ? -1 : 1))
          .map((k, l) => (
            <div key={l}>
              <h3>{k.b}</h3>
              <p>{k.c}</p>
              <p>{k.e.toString()}</p>
              <p>{k.f}</p>
              <p>{k.g}</p>
              <button onClick={() => handleUpdate(l)}>Edit</button>
              <button onClick={() => handleDelete(l)}>Delete</button>
            </div>
          ))}
      </div>
      <div>
        <h2>In Progress {a.filter((k) => k.d === "in progress").length}</h2>
        {a
          .filter((k) => k.d === "in progress")
          .map((k, l) => (
            <div key={l}>
              <h3>{k.b}</h3>
              <p>{k.c}</p>
              <p>{k.e.toString()}</p>
              <p>{k.f}</p>
              <p>{k.g}</p>
              <button onClick={() => handleUpdate(l)}>Edit</button>
              <button onClick={() => handleDelete(l)}>Delete</button>
            </div>
          ))}
      </div>
      <div>
        <h2>Done {a.filter((k) => k.d === "done").length}</h2>
        {a
          .filter((k) => k.d === "done")
          .map((k, l) => (
            <div key={l}>
              <h3>{k.b}</h3>
              <p>{k.c}</p>
              <p>{k.e.toString()}</p>
              <p>{k.f}</p>
              <p>{k.g}</p>
              <button onClick={() => handleUpdate(l)}>Edit</button>
              <button onClick={() => handleDelete(l)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};
