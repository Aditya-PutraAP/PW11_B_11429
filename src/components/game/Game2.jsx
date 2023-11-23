import React, { useState } from "react";

function Game2() {
    const [list, setList] = useState([]);
    const [toDo, setToDo] = useState("");
    const [catatan, setCatatan] = useState("");
    const [priority, setPriority] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        setList((dataSebelumnya) => {
            const newData = {
                toDo: toDo,
                catatan: catatan,
                priority: priority,
            };
            return [...dataSebelumnya, newData];
        });
        setToDo("");
        setCatatan("");
        setPriority("");
    };

    return (
        <div className="p-5">
            <h1 className="mb-2">Simple To-Do List</h1>
            <div className="row align-items-start mt-4">
                <form className="col-md-6" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <p className="text-start mb-3 mt-2">Apa yang ingin dikerjakan?</p>
                        <input
                            type="text"
                            className="form-control"
                            id="to-do"
                            value={toDo}
                            onChange={(e) => setToDo(e.target.value)}
                            required
                            style={{ width: "100%" }}
                            placeholder="Nama To-Do List"
                        />
                    </div>
                    <div className="mb-3">
                        <p className="text-start mb-3 mt-2">Catatan</p>
                        <textarea
                            type="form-control"
                            className="form-control"
                            id="catatan"
                            value={catatan}
                            onChange={(e) => setCatatan(e.target.value)}
                            required
                            placeholder="Isi Catatan To-Do List"
                            style={{ resize: "none", width: "100%" }}
                            rows={4}
                        />
                    </div>
                    <div className="text-start">
                        <button type="submit" className="btn btn-primary">
                            Tambah To-Do List
                        </button>
                    </div>
                </form>
                <form className="col-md-6" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <p className="text-start mb-3 mt-2">Pilih Priority</p>
                        <select
                            className="form-select"
                            id="priority"
                            value={priority}
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="">Pilih Priority</option>
                            <option value="Urgent">Urgent</option>
                            <option value="Normal">Normal</option>
                            <option value="Biasa Saja">Biasa Saja</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="row">
                {list.map((item, index) => (
                    <div key={index} className="col-md-4 mb-3 mt-5">
                        {item.priority === "Urgent" && (
                            <div className="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">{item.priority}</div>
                                <div className="card-body bg-white">
                                    <h5 className="card-title text-dark">{item.toDo}</h5>
                                    <p className="card-text text-dark">{item.catatan}</p>
                                </div>
                            </div>
                        )}
                        {item.priority === "Normal" && (
                            <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">{item.priority}</div>
                                <div className="card-body bg-white">
                                    <h5 className="card-title text-dark">{item.toDo}</h5>
                                    <p className="card-text text-dark">{item.catatan}</p>
                                </div>
                            </div>
                        )}
                        {item.priority === "Biasa Saja" && (
                            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                                <div className="card-header">{item.priority}</div>
                                <div className="card-body bg-white">
                                    <h5 className="card-title text-dark">{item.toDo}</h5>
                                    <p className="card-text text-dark">{item.catatan}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game2;
