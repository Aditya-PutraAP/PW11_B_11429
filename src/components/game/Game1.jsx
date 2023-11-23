import React, { useState } from "react";
import { toast } from "react-toastify";

function Game1() {
    const [game, setGame] = useState("");
    const [valueGame, setValueGame] = useState("");
    const [count, setCount] = useState(0);
    const [randomNubmer, setRandomNumber] = useState(0);

    const handleStartGame = () => {
        setGame("gass mulai gamenya")
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setCount(count+1);
    }
   
    const generateRandomNumber = () =>{
        const random = Math.floor(Math.random() * 10) + 11;
        setRandomNumber(random);
    }
    
    const checkValueRandom = () => {
        if(count < 3){
            if(randomNubmer == valueGame){
                toast.success("Congratulation!!Anda Menang", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
                setCount(4);
            }else if(valueGame == ""){
                toast.error("Input Tidak Boleh Kosong!!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            }else if(valueGame > randomNubmer){
                toast.error("Nilai Inputan Terlalu Besar!!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            }else if(valueGame < randomNubmer){
                toast.error("Nilai Inputan Terlalu Kecil!!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            }
        }else {
            console.log("Game Over");
            toast.error("Game Over", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
            });
        }
    }

    return(
        <div className="p-3">
            <h1 className="mb-2">Number Guessing Game</h1>
            <div className="row align-items-center">
                <div className="col-md-6 mt-4">
                    <div className="d-flex flex-column align-items-start">
                        <p className="text-start mb-3 mt-2 ms-2">
                            1. Each player gets 4 chances to guess
                        </p>
                        <p className="text-start mb-3 mt-2 ms-2">
                            2. Number range is between 11-20
                        </p>
                        <p className="text-start mb-3 mt-2 ms-2">
                            3. You can reset the number after 4 wrong answers
                        </p>

                        <div>
                            {!game ? (
                                <>
                                    <p className="text-start mb-3 mt-2 ms-2">
                                        Silahkan Mulai Permainan
                                    </p>
                                    
                                    <div className="text-start">
                                        <button className="btn btn-success" onClick={() => {handleStartGame(); generateRandomNumber();}}>
                                            Mulai Permainan
                                        </button>
                                    </div>
                                    
                                </>
                            ) : (
                                <>
                                    <p className="text-start mb-3 mt-2 ms-2">
                                        Input Angka
                                    </p>
                                    <form className="p-2" onSubmit={submitHandler}>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="validation"
                                            value={valueGame}
                                            onChange={(e) => setValueGame(e.target.value)}
                                            placeholder="Input Angka 11-20"
                                            style={{ width: "150%" }}
                                            required
                                        />

                                        <p className="text-start mb-3 mt-2 ms-2">
                                            Nilai Aslinya Adalah  {randomNubmer}
                                        </p>

                                        <p className="text-start mb-3 mt-2 ms-2">
                                            Jumlah tebakan  {count}
                                        </p>

                                        {count < 4 ? (
                                            <>
                                                <div className="col-12 ms-0 text-start mt-3">
                                                    <button className="btn btn-primary" type="submit" onClick={() => {generateRandomNumber(); checkValueRandom();}}>
                                                        Tebak Angka
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="col-12 ms-0 text-start mt-3">
                                                <button className="btn btn-danger" type="submit" onClick={() => setCount(0)}>
                                                    Reset
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game1;