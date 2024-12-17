const Alerta = ({alerta}) => {
    return (
        <div className= {`${alerta.error ? 'text-red-500 font-bold' : 'text-lime-500 font-bold'}`}>
            {alerta.msg}
        </div>

    )
};

export default Alerta;