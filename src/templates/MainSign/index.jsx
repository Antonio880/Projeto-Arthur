import DivSign from "../../organisms/DivSign"
import DivForm from "../../organisms/DivForm"

export default function MainSign(){
    return(
        <main>
            <DivSign typeUser={"prof"} />
            <DivForm typeUser={"prof"} />
        </main>
    )
}