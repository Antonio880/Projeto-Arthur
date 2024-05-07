import DivSign from "../../organisms/DivSign"
import DivForm from "../../organisms/DivForm"
import { useState } from "react";

export default function MainSign(){
    const [ typeUser, setTypeUser ] = useState(true);

    return(
        <main>
            <DivSign typeUser={typeUser} setTypeUser={setTypeUser} />
            <DivForm typeUser={typeUser} setTypeUser={setTypeUser} />
        </main>
    )
}