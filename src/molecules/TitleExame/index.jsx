export default function TitleExame({ typeUser }) {
    return (
        <div className="py-10">
            {
                typeUser ?
                    (
                        <h1 className="flex justify-center text-purple font-medium text-4xl">Professor(a), junte-se ao Exame <span className="text-orange">!</span></h1>
                    ):
                    (
                        <h1 className="flex justify-center text-purple font-medium text-4xl">Estudante, junte-se ao Exame <span className="text-orange">!</span></h1>
                    )
            }
            <p className="text-gray flex justify-center pt-3">Realize seu cadastro na plataforma para acesar.</p>
        </div>
    )
}