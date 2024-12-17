const Alerta = ({alerta}) => {
    return (
        <div className= {`${alerta.error ? 'text-red-500 font-bold' : 'text-black'}`}>
            {alerta.msg}
        </div>

    )
};

export default Alerta;